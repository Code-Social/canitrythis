import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from 'lucide-react';
import { BlogPostData } from './Blog';

interface BlogPostProps {
  post: BlogPostData;
  onBack: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Blog</span>
        </button>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-64 bg-gradient-to-br from-purple-600 to-blue-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-purple-100 text-lg max-w-2xl">
                  {post.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="px-6 py-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {/* Split content into paragraphs for better formatting */}
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base leading-7">
                    {paragraph}
                  </p>
                ))}
                
                {/* Sample additional content to make it look more like a real blog post */}
                <div className="bg-gray-50 border-l-4 border-purple-500 p-6 my-8">
                  <p className="text-gray-700 italic">
                    "The key to mastering any skill is consistent practice with real-world applications. 
                    Theory alone won't get you there – you need to build, break, and rebuild."
                  </p>
                </div>

                <p className="text-base leading-7">
                  This approach has helped countless developers transition from tutorial hell to building 
                  production-ready applications. The journey isn't always smooth, but every challenge 
                  you overcome makes you a stronger developer.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Start with small, manageable projects</li>
                  <li>Focus on solving real problems</li>
                  <li>Don't be afraid to make mistakes</li>
                  <li>Learn from the community and share your knowledge</li>
                  <li>Iterate and improve continuously</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Was this article helpful? Let us know!
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  👍 Helpful
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                  👎 Not helpful
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">Building Your First API</h3>
              <p className="text-gray-600 text-sm mb-3">Learn how to create a RESTful API from scratch using Node.js and Express.</p>
              <div className="text-xs text-gray-500">5 min read • John Doe</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">Frontend Testing Strategies</h3>
              <p className="text-gray-600 text-sm mb-3">Comprehensive guide to testing React applications with modern tools.</p>
              <div className="text-xs text-gray-500">7 min read • Jane Smith</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};