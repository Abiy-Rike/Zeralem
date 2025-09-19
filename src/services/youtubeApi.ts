import axios from 'axios';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubePlaylist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoCount: number;
  publishedAt: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
}

export class YouTubeService {
  private apiKey: string;

  constructor() {
    this.apiKey = YOUTUBE_API_KEY;
  }

  async getChannelPlaylists(channelHandle: string): Promise<YouTubePlaylist[]> {
    try {
      // Check if API key is available
      if (!this.apiKey || this.apiKey === 'your_youtube_api_key_here') {
        console.warn('YouTube API key not available, using mock data');
        return this.getMockPlaylists();
      }

      // First, get channel ID from handle
      const channelResponse = await axios.get(`${YOUTUBE_BASE_URL}/channels`, {
        params: {
          key: this.apiKey,
          forHandle: channelHandle,
          part: 'id'
        }
      });

      if (!channelResponse.data.items?.length) {
        throw new Error('Channel not found');
      }

      const channelId = channelResponse.data.items[0].id;

      // Get playlists for the channel
      const playlistsResponse = await axios.get(`${YOUTUBE_BASE_URL}/playlists`, {
        params: {
          key: this.apiKey,
          channelId: channelId,
          part: 'snippet,contentDetails',
          maxResults: 50
        }
      });

      return playlistsResponse.data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
        videoCount: item.contentDetails.itemCount,
        publishedAt: item.snippet.publishedAt
      }));
    } catch (error) {
      console.error('Error fetching playlists:', error);
      console.warn('Falling back to mock data due to API error');
      return this.getMockPlaylists();
    }
  }

  async getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
    try {
      // Check if API key is available
      if (!this.apiKey || this.apiKey === 'your_youtube_api_key_here') {
        console.warn('YouTube API key not available, using mock data');
        return this.getMockVideos(playlistId);
      }

      const response = await axios.get(`${YOUTUBE_BASE_URL}/playlistItems`, {
        params: {
          key: this.apiKey,
          playlistId: playlistId,
          part: 'snippet',
          maxResults: 50
        }
      });

      const videoIds = response.data.items.map((item: any) => item.snippet.resourceId.videoId);
      
      // Get video details including duration and view count
      const videosResponse = await axios.get(`${YOUTUBE_BASE_URL}/videos`, {
        params: {
          key: this.apiKey,
          id: videoIds.join(','),
          part: 'snippet,contentDetails,statistics'
        }
      });

      return videosResponse.data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
        duration: this.formatDuration(item.contentDetails.duration),
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount
      }));
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      console.warn('Falling back to mock data due to API error');
      return this.getMockVideos(playlistId);
    }
  }

  private getMockPlaylists(): YouTubePlaylist[] {
    return [
      {
        id: 'mock-math-1',
        title: 'Advanced Mathematics Course',
        description: 'Comprehensive mathematics course covering algebra, calculus, and more',
        thumbnailUrl: 'https://images.pexels.com/photos/6256/mathematics-blackboard-education-classroom.jpg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 25,
        publishedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'mock-physics-1',
        title: 'Physics Fundamentals',
        description: 'Essential physics concepts and problem-solving techniques',
        thumbnailUrl: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 18,
        publishedAt: '2024-01-15T00:00:00Z'
      },
      {
        id: 'mock-chemistry-1',
        title: 'Chemistry Essentials',
        description: 'Core chemistry principles and laboratory techniques',
        thumbnailUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 22,
        publishedAt: '2024-02-01T00:00:00Z'
      },
      {
        id: 'mock-biology-1',
        title: 'Biology Comprehensive',
        description: 'Complete biology course from cells to ecosystems',
        thumbnailUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 30,
        publishedAt: '2024-02-15T00:00:00Z'
      },
      {
        id: 'mock-programming-1',
        title: 'Programming Fundamentals',
        description: 'Learn programming concepts and practical coding skills',
        thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 35,
        publishedAt: '2024-03-01T00:00:00Z'
      },
      {
        id: 'mock-literature-1',
        title: 'English Literature Analysis',
        description: 'Deep dive into classic and modern literature',
        thumbnailUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoCount: 20,
        publishedAt: '2024-03-15T00:00:00Z'
      }
    ];
  }

  private getMockVideos(playlistId: string): YouTubeVideo[] {
    const videoCount = Math.floor(Math.random() * 20) + 10; // 10-30 videos
    const videos: YouTubeVideo[] = [];
    
    for (let i = 1; i <= videoCount; i++) {
      videos.push({
        id: `${playlistId}-video-${i}`,
        title: `Lesson ${i}: Topic Overview`,
        description: `Comprehensive lesson covering important concepts and practical applications.`,
        thumbnailUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
        duration: `${Math.floor(Math.random() * 30) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        publishedAt: '2024-01-01T00:00:00Z',
        viewCount: (Math.floor(Math.random() * 10000) + 1000).toString()
      });
    }
    
    return videos;
  }

  private formatDuration(duration: string): string {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '0:00';

    const hours = parseInt(match[1]?.replace('H', '') || '0');
    const minutes = parseInt(match[2]?.replace('M', '') || '0');
    const seconds = parseInt(match[3]?.replace('S', '') || '0');

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}