# Zeralem Teaching Center

A modern online tutoring platform built with React, TypeScript, and Tailwind CSS.

## Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Generate URL Cache (One-time setup)

The website uses a URL caching system to avoid repeated API calls during development.

#### Option A: Generate from YouTube API (Recommended for development)
1. Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
2. Add it to your `.env` file
3. Open browser console and run:
```javascript
DevTools.generateURLCache()
```
4. Copy the JSON output and save it as `url.txt` in your project root

#### Option B: Use Permanent Data (Default)
The website will automatically fall back to permanent video data if no cache is found.

### 4. Start Development Server
```bash
npm run dev
```

## URL Cache System

### How it works:
1. **Development**: Run `DevTools.generateURLCache()` once to fetch all YouTube URLs
2. **Production**: Website uses the cached `url.txt` file instead of making API calls
3. **Fallback**: If no cache exists, uses permanent video database

### Development Tools (Available in browser console):

```javascript
// Generate URL cache from YouTube API
DevTools.generateURLCache()

// Check current cache status
DevTools.checkCacheStatus()

// Refresh cache with new data
DevTools.refreshURLCache()

// Clear current cache
DevTools.clearURLCache()
```

### Cache File Structure:
```json
{
  "version": "1.0",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "channelHandle": "@ZERALEM2127",
  "playlists": [...],
  "totalPlaylists": 6,
  "totalVideos": 50
}
```

## Features

- 📚 Course catalog with filtering and search
- 🎥 Embedded YouTube video player
- 📱 Responsive design
- 🔍 Advanced course filtering
- ⚡ Fast loading with cached URLs
- 🎨 Modern UI with Tailwind CSS

## API Keys (Optional)

- **YouTube Data API v3**: For fetching real channel data
- **Google Gemini API**: For AI-generated course descriptions

Without API keys, the website uses permanent sample data.

## Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── services/           # API services and utilities
├── data/              # Static data and permanent videos
└── styles/            # CSS and styling
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.