import { useState, useEffect } from 'react';
import { YouTubeService, YouTubePlaylist, YouTubeVideo } from '../services/youtubeApi';
import { GeminiService, CourseMetadata } from '../services/geminiApi';
import { URLCacheService, CachedPlaylist } from '../services/urlCache';
import { PERMANENT_PLAYLISTS } from '../data/permanentVideos';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnail: string;
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  level: string;
  category: string;
  price: string;
  videos: YouTubeVideo[];
  playlistId: string;
}

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, try to load from url.txt cache
        let playlists: CachedPlaylist[] = await URLCacheService.loadCachedURLs();
        
        // If no cache exists, fall back to permanent data
        if (playlists.length === 0) {
          console.log('📄 Using permanent video database');
          playlists = PERMANENT_PLAYLISTS.map(p => ({
            id: p.id,
            title: p.title,
            description: p.description,
            thumbnailUrl: p.thumbnailUrl,
            videoCount: p.videoCount,
            publishedAt: p.publishedAt,
            videos: p.videos.map(v => ({
              id: v.id,
              title: v.title,
              description: v.description,
              thumbnailUrl: v.thumbnailUrl,
              duration: v.duration,
              publishedAt: v.publishedAt,
              viewCount: v.viewCount,
              playlistId: v.playlistId
            }))
          }));
        }

        const coursesData: Course[] = [];

        for (const playlist of playlists) {
          try {
            const videos = playlist.videos;
            
            if (videos.length === 0) continue;

            // Use cached data or generate metadata
            const videoTitles = videos.slice(0, 10).map(v => v.title); // Use first 10 video titles
            
            // For cached data, we can skip AI generation and use simple inference
            const metadata = {
              title: playlist.title,
              description: playlist.description || 'Comprehensive course covering essential topics and practical applications.',
              category: inferCategory(playlist.title),
              level: 'Intermediate' as const,
              estimatedDuration: '10 hours'
            };

            // Calculate total duration
            const totalMinutes = videos.reduce((acc, video) => {
              const [minutes, seconds] = video.duration.split(':').map(Number);
              return acc + minutes + (seconds / 60);
            }, 0);

            const totalHours = Math.round(totalMinutes / 60);

            // Generate mock rating and student count based on video views
            const avgViews = videos.reduce((acc, video) => acc + parseInt(video.viewCount || '0'), 0) / videos.length;
            const mockStudents = Math.floor(avgViews / 10) + Math.floor(Math.random() * 500) + 100;
            const mockRating = 4.5 + Math.random() * 0.4; // Between 4.5 and 4.9

            const course: Course = {
              id: playlist.id,
              title: metadata.title,
              instructor: "Zeralem",
              description: metadata.description,
              thumbnail: playlist.thumbnailUrl,
              duration: `${totalHours} hours`,
              lessons: videos.length,
              rating: Math.round(mockRating * 10) / 10,
              students: mockStudents,
              level: metadata.level,
              category: metadata.category,
              price: "Free",
              videos: videos.map(v => ({
                id: v.id,
                title: v.title,
                description: v.description,
                thumbnailUrl: v.thumbnailUrl,
                duration: v.duration,
                publishedAt: v.publishedAt,
                viewCount: v.viewCount
              })),
              playlistId: playlist.id
            };

            coursesData.push(course);
          } catch (courseError) {
            console.error(`Error processing playlist ${playlist.title}:`, courseError);
            // Continue with other playlists even if one fails
          }
        }

        setCourses(coursesData);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please check your internet connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error, refetch: () => window.location.reload() };
};

// Helper function to infer category from title
function inferCategory(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('math') || titleLower.includes('algebra') || titleLower.includes('calculus')) {
    return 'Mathematics';
  } else if (titleLower.includes('physics')) {
    return 'Physics';
  } else if (titleLower.includes('chemistry')) {
    return 'Chemistry';
  } else if (titleLower.includes('biology') || titleLower.includes('bio')) {
    return 'Biology';
  } else if (titleLower.includes('programming') || titleLower.includes('code') || titleLower.includes('software')) {
    return 'Programming';
  } else if (titleLower.includes('english') || titleLower.includes('literature')) {
    return 'Literature';
  } else if (titleLower.includes('history')) {
    return 'History';
  }
  
  return 'General Studies';
}