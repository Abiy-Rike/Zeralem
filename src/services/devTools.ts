import { URLCacheService } from './urlCache';

/**
 * Development tools for managing URL cache
 * These functions should only be used during development
 */
export class DevTools {
  
  /**
   * Fetch YouTube data and create url.txt cache
   * Run this once during development to populate the cache
   */
  static async generateURLCache(channelHandle: string = '@ZERALEM2127'): Promise<void> {
    console.log('🚀 Starting development URL cache generation...');
    console.log('⚠️ Make sure you have valid YouTube API key in .env file');
    
    try {
      await URLCacheService.fetchAndCacheURLs(channelHandle);
      console.log('✅ URL cache generation completed!');
      console.log('📋 Next steps:');
      console.log('1. Copy the JSON output from console');
      console.log('2. Save it to a file named "url.txt" in your project root');
      console.log('3. The website will now use cached URLs instead of API calls');
    } catch (error) {
      console.error('❌ Failed to generate URL cache:', error);
      console.log('💡 Make sure your YouTube API key is valid and has quota available');
    }
  }
  
  /**
   * Refresh the URL cache with fresh data
   */
  static async refreshURLCache(channelHandle: string = '@ZERALEM2127'): Promise<void> {
    console.log('🔄 Refreshing URL cache...');
    await URLCacheService.refreshCache(channelHandle);
  }
  
  /**
   * Clear the current cache
   */
  static clearURLCache(): void {
    URLCacheService.clearCache();
    console.log('🗑️ URL cache cleared');
  }
  
  /**
   * Check cache status
   */
  static async checkCacheStatus(): Promise<void> {
    const isValid = await URLCacheService.isCacheValid();
    const cached = await URLCacheService.loadCachedURLs();
    
    console.log('📊 Cache Status:');
    console.log(`Valid: ${isValid ? '✅' : '❌'}`);
    console.log(`Playlists: ${cached.length}`);
    console.log(`Total Videos: ${cached.reduce((acc, p) => acc + p.videos.length, 0)}`);
    
    if (!isValid && cached.length === 0) {
      console.log('💡 No cache found. Run DevTools.generateURLCache() to create one.');
    }
  }
}

// Make DevTools available globally in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).DevTools = DevTools;
  console.log('🛠️ DevTools available globally. Try:');
  console.log('- DevTools.generateURLCache() - Generate URL cache');
  console.log('- DevTools.checkCacheStatus() - Check cache status');
  console.log('- DevTools.clearURLCache() - Clear cache');
}