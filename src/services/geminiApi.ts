import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export interface CourseMetadata {
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedDuration: string;
}

export class GeminiService {
  private apiKey: string;

  constructor() {
    this.apiKey = GEMINI_API_KEY;
  }

  async generateCourseMetadata(playlistTitle: string, videoTitles: string[]): Promise<CourseMetadata> {
    try {
      // Check if API key is available
      if (!this.apiKey) {
        console.warn('Gemini API key not available, using fallback metadata');
        return this.getFallbackMetadata(playlistTitle);
      }

      const prompt = `
        Based on the following YouTube playlist information, generate course metadata for an online tutoring platform:

        Playlist Title: "${playlistTitle}"
        Video Titles: ${videoTitles.map(title => `"${title}"`).join(', ')}

        Please analyze the content and provide:
        1. A clear, educational course title (different from playlist title if needed)
        2. A comprehensive course description (2-3 sentences)
        3. The main subject category (Mathematics, Physics, Chemistry, Biology, Programming, Literature, History, etc.)
        4. Difficulty level (Beginner, Intermediate, or Advanced)
        5. Estimated total duration in hours (estimate based on typical video lengths)

        Respond in JSON format:
        {
          "title": "Course Title",
          "description": "Course description",
          "category": "Subject Category",
          "level": "Difficulty Level",
          "estimatedDuration": "X hours"
        }
      `;

      const response = await axios.post(
        `${GEMINI_BASE_URL}?key=${this.apiKey}`,
        {
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const generatedText = response.data.candidates[0].content.parts[0].text;
      
      // Extract JSON from the response
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      throw new Error('Failed to parse AI response');
    } catch (error) {
      console.warn('Using fallback metadata due to API error:', error instanceof Error ? error.message : 'Unknown error');
      
      return this.getFallbackMetadata(playlistTitle);
    }
  }

  private getFallbackMetadata(playlistTitle: string): CourseMetadata {
    return {
      title: playlistTitle,
      description: 'Comprehensive course covering essential topics and practical applications.',
      category: this.inferCategory(playlistTitle),
      level: 'Intermediate',
      estimatedDuration: '10 hours'
    };
  }

  private inferCategory(title: string): string {
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
}