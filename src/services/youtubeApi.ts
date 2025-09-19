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
      throw error;
    }
  }

  async getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
    try {
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
      throw error;
    }
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