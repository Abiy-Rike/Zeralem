import { YouTubeService, YouTubePlaylist, YouTubeVideo } from './youtubeApi';
import { GeminiService } from './geminiApi';

export interface CachedPlaylist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoCount: number;
  publishedAt: string;
  videos: CachedVideo[];
}

export interface CachedVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
  playlistId: string;
}

export class URLCacheService {
  private static readonly CACHE_FILE = '/url.txt';
  private static readonly CACHE_VERSION = '1.0';

  /**
   * Fetches all YouTube data once and saves to url.txt
   * This should only be run during development
   */
  static async fetchAndCacheURLs(channelHandle: string = '@ZERALEM2127'): Promise<void> {
    try {
      console.log('🔄 Starting one-time YouTube data fetch...');
      
      const youtubeService = new YouTubeService();
      const geminiService = new GeminiService();
      
      // Fetch playlists from YouTube
      const playlists = await youtubeService.getChannelPlaylists(channelHandle);
      console.log(`📋 Found ${playlists.length} playlists`);
      
      const cachedPlaylists: CachedPlaylist[] = [];
      
      for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        console.log(`📹 Processing playlist ${i + 1}/${playlists.length}: ${playlist.title}`);
        
        try {
          // Get videos for this playlist
          const videos = await youtubeService.getPlaylistVideos(playlist.id);
          
          if (videos.length === 0) {
            console.log(`⚠️ Skipping empty playlist: ${playlist.title}`);
            continue;
          }
          
          // Convert to cached format
          const cachedVideos: CachedVideo[] = videos.map(video => ({
            id: video.id,
            title: video.title,
            description: video.description,
            thumbnailUrl: video.thumbnailUrl,
            duration: video.duration,
            publishedAt: video.publishedAt,
            viewCount: video.viewCount,
            playlistId: playlist.id
          }));
          
          const cachedPlaylist: CachedPlaylist = {
            id: playlist.id,
            title: playlist.title,
            description: playlist.description,
            thumbnailUrl: playlist.thumbnailUrl,
            videoCount: playlist.videoCount,
            publishedAt: playlist.publishedAt,
            videos: cachedVideos
          };
          
          cachedPlaylists.push(cachedPlaylist);
          
          // Add delay to avoid rate limiting
          if (i < playlists.length - 1) {
            console.log('⏳ Waiting 2 seconds to avoid rate limiting...');
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
          
        } catch (error) {
          console.error(`❌ Error processing playlist ${playlist.title}:`, error);
          // Continue with other playlists
        }
      }
      
      // Create cache data structure
      const cacheData = {
        version: this.CACHE_VERSION,
        timestamp: new Date().toISOString(),
        channelHandle: channelHandle,
        playlists: cachedPlaylists,
        totalPlaylists: cachedPlaylists.length,
        totalVideos: cachedPlaylists.reduce((acc, p) => acc + p.videos.length, 0)
      };
      
      // Save to url.txt file
      const cacheContent = JSON.stringify(cacheData, null, 2);
      
      // In a real backend, you would write to file system
      // For now, we'll store in localStorage as a fallback
      if (typeof window !== 'undefined') {
        localStorage.setItem('youtube_url_cache', cacheContent);
        console.log('💾 Cache saved to localStorage (url.txt equivalent)');
      }
      
      // Also log the content so it can be manually saved to url.txt
      console.log('📄 URL Cache Content (save this to url.txt):');
      console.log(cacheContent);
      
      console.log(`✅ Successfully cached ${cacheData.totalVideos} videos from ${cacheData.totalPlaylists} playlists`);
      
    } catch (error) {
      console.error('❌ Error during URL caching:', error);
      throw error;
    }
  }
  
  /**
   * Loads cached URLs from url.txt file
   */
  static async loadCachedURLs(): Promise<CachedPlaylist[]> {
    try {
      // In a real backend, you would read from file system
      // For now, we'll try localStorage first, then fall back to permanent data
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem('youtube_url_cache');
        if (cached) {
          const cacheData = JSON.parse(cached);
          console.log(`📖 Loaded ${cacheData.totalVideos} videos from cache`);
          return cacheData.playlists;
        }
      }
      
      // If no cache exists, return empty array (will trigger fallback to permanent data)
      console.log('📄 No url.txt cache found, using fallback data');
      return [];
      
    } catch (error) {
      console.error('❌ Error loading cached URLs:', error);
      return [];
    }
  }
  
  /**
   * Checks if cache exists and is valid
   */
  static async isCacheValid(): Promise<boolean> {
    try {
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem('youtube_url_cache');
        if (cached) {
          const cacheData = JSON.parse(cached);
          // Check if cache is less than 24 hours old
          const cacheAge = Date.now() - new Date(cacheData.timestamp).getTime();
          const maxAge = 24 * 60 * 60 * 1000; // 24 hours
          return cacheAge < maxAge;
        }
      }
      return false;
    } catch (error) {
      console.error('❌ Error checking cache validity:', error);
      return false;
    }
  }
  
  /**
   * Development helper: Trigger cache refresh
   */
  static async refreshCache(channelHandle: string = '@ZERALEM2127'): Promise<void> {
    console.log('🔄 Refreshing URL cache...');
    await this.fetchAndCacheURLs(channelHandle);
  }
  
  /**
   * Development helper: Clear cache
   */
  static clearCache(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('youtube_url_cache');
      console.log('🗑️ Cache cleared');
    }
  }
}