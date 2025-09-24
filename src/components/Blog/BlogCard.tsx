import React from 'react';
import { Calendar, User, Clock, Star } from 'lucide-react';
import { BlogPostData } from './Blog';

interface BlogCardProps {
  post: BlogPostData;
  onSelect: (post: BlogPostData) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article 
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group ${
        featured ? 'lg:col-span-1' : ''
      }`}
      onClick={() => onSelect(post)}
    >
      {/* Header with gradient background */}
      <div className={`relative ${featured ? 'h-32' : 'h-24'} bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className={`${featured ? 'text-4xl' : 'text-2xl'} font-bold text-purple-600 opacity-50`}>
            {post.title.charAt(0)}
          </div>
        </div>
        {post.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Star className="h-3 w-3 fill-current" />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'pb-8' : ''}`}>
        <h2 className={`${featured ? 'text-xl' : 'text-lg'} font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2`}>
          {post.title}
        </h2>
        
        <p className={`text-gray-600 mb-4 ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {post.summary}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Read More Button */}
        <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors group-hover:underline">
          Read More →
        </button>
      </div>
    </article>
  );
};