import { useState, useEffect } from 'react';
import { YouTubeService, YouTubePlaylist, YouTubeVideo } from '../services/youtubeApi';
import { GeminiService, CourseMetadata } from '../services/geminiApi';

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

        const youtubeService = new YouTubeService();
        const geminiService = new GeminiService();

        // Fetch playlists from the Zeralem channel
        const playlists = await youtubeService.getChannelPlaylists('@ZERALEM2127');
        
        const coursesData: Course[] = [];

        for (const playlist of playlists) {
          try {
            // Get videos for each playlist
            const videos = await youtubeService.getPlaylistVideos(playlist.id);
            
            if (videos.length === 0) continue;

            // Generate course metadata using AI
            const videoTitles = videos.slice(0, 10).map(v => v.title); // Use first 10 video titles
            
            // Add delay between API calls to avoid rate limiting
            if (coursesData.length > 0) {
              await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
            }
            
            const metadata = await geminiService.generateCourseMetadata(playlist.title, videoTitles);

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
              videos: videos,
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