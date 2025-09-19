import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { YouTubeVideo } from '../services/youtubeApi';

interface VideoPlayerProps {
  video: YouTubeVideo;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onClose }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900 pr-8">{video.title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              title="Open in YouTube"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>Duration: {video.duration}</span>
            <span>Views: {parseInt(video.viewCount || '0').toLocaleString()}</span>
          </div>
          
          {video.description && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                {video.description.length > 500 
                  ? `${video.description.substring(0, 500)}...` 
                  : video.description
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;