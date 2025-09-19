import axios from 'axios';
import { PERMANENT_PLAYLISTS } from '../data/permanentVideos';

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

  // Helper function to extract YouTube video ID from various URL formats
  private extractVideoId(url: string): string {
    // If it's already just an ID, return it
    if (!/^https?:\/\//.test(url)) {
      return url;
    }

    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    // If no pattern matches, return the original string
    return url;
  }

  async getChannelPlaylists(channelHandle: string): Promise<YouTubePlaylist[]> {
    try {
      // Check if API key is available
      if (!this.apiKey || this.apiKey === 'your_youtube_api_key_here') {
        console.warn('YouTube API key not available, using permanent video database');
        return this.getPermanentPlaylists();
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
      console.warn('Falling back to permanent video database due to API error');
      return this.getPermanentPlaylists();
    }
  }

  async getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
    try {
      // Check if API key is available
      if (!this.apiKey || this.apiKey === 'your_youtube_api_key_here') {
        console.warn('YouTube API key not available, using permanent video database');
        return this.getPermanentVideos(playlistId);
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
        id: this.extractVideoId(item.id), // Ensure we have clean video ID
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
        duration: this.formatDuration(item.contentDetails.duration),
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount
      }));
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      console.warn('Falling back to permanent video database due to API error');
      return this.getPermanentVideos(playlistId);
    }
  }

  private getPermanentPlaylists(): YouTubePlaylist[] {
    return PERMANENT_PLAYLISTS.map(playlist => ({
      id: playlist.id,
      title: playlist.title,
      description: playlist.description,
      thumbnailUrl: playlist.thumbnailUrl,
      videoCount: playlist.videoCount,
      publishedAt: playlist.publishedAt
    }));
  }

  private getPermanentVideos(playlistId: string): YouTubeVideo[] {
    const playlist = PERMANENT_PLAYLISTS.find(p => p.id === playlistId);
    if (!playlist) {
      return [];
    }

    return playlist.videos.map(video => ({
      id: this.extractVideoId(video.id), // Ensure clean video ID
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      duration: video.duration,
      publishedAt: video.publishedAt,
      viewCount: video.viewCount
    }));
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