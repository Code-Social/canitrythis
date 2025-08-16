import React from 'react';
import { Clock, Star, Users, ExternalLink } from 'lucide-react';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  domain: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  participants: number;
  rating: number;
  tags: string[];
  isBookmarked?: boolean;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onSelect: (challenge: Challenge) => void;
  onBookmark?: (id: string) => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ 
  challenge, 
  onSelect, 
  onBookmark 
}) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  const domainColors: Record<string, string> = {
    Design: 'bg-pink-100 text-pink-800',
    Development: 'bg-blue-100 text-blue-800',
    Writing: 'bg-purple-100 text-purple-800',
    Data: 'bg-indigo-100 text-indigo-800',
    Creative: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group hover:transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${domainColors[challenge.domain] || 'bg-gray-100 text-gray-800'}`}>
              {challenge.domain}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[challenge.difficulty]}`}>
              {challenge.difficulty}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.(challenge.id);
            }}
            className={`p-1 rounded transition-colors ${
              challenge.isBookmarked 
                ? 'text-yellow-500 hover:text-yellow-600' 
                : 'text-gray-400 hover:text-yellow-500'
            }`}
          >
            <Star className={`h-4 w-4 ${challenge.isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {challenge.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {challenge.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {challenge.estimatedTime}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {challenge.participants}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              {challenge.rating.toFixed(1)}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {challenge.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
          {challenge.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{challenge.tags.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(challenge)}
          className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors group-hover:bg-purple-700"
        >
          Try This Challenge
          <ExternalLink className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};