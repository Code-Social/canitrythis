import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Star, Filter, Search, User } from 'lucide-react';

interface Submission {
  id: string;
  challengeTitle: string;
  author: string;
  submittedAt: string;
  description: string;
  likes: number;
  comments: number;
  rating: number;
  domain: string;
  isLiked?: boolean;
}

const mockSubmissions: Submission[] = [
  {
    id: '1',
    challengeTitle: 'Design a Mobile App Onboarding Flow',
    author: 'Alex Chen',
    submittedAt: '2024-01-20',
    description: 'Created a 3-screen onboarding flow focusing on progressive disclosure and user engagement. Used Figma for prototyping.',
    likes: 24,
    comments: 8,
    rating: 4.8,
    domain: 'Design'
  },
  {
    id: '2',
    challengeTitle: 'Build a Real-Time Chat Application',
    author: 'Sarah Wilson',
    submittedAt: '2024-01-19',
    description: 'Built using React and Socket.io with user authentication and message encryption. Deployed on Heroku.',
    likes: 31,
    comments: 12,
    rating: 4.6,
    domain: 'Development'
  },
  {
    id: '3',
    challengeTitle: 'Analyze E-commerce Sales Data',
    author: 'Mike Rodriguez',
    submittedAt: '2024-01-18',
    description: 'Used Python and pandas to analyze customer behavior patterns. Created interactive visualizations with Plotly.',
    likes: 18,
    comments: 6,
    rating: 4.7,
    domain: 'Data'
  },
  {
    id: '4',
    challengeTitle: 'Write a Technical Blog Post',
    author: 'Emma Taylor',
    submittedAt: '2024-01-17',
    description: 'Explained React hooks in simple terms with practical examples and common pitfalls. Great for beginners!',
    likes: 42,
    comments: 15,
    rating: 4.9,
    domain: 'Writing'
  }
];

export const Community: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedSubmissions, setLikedSubmissions] = useState<Set<string>>(new Set());

  const domains = ['All', 'Design', 'Development', 'Writing', 'Data', 'Creative'];

  const filteredSubmissions = mockSubmissions.filter(submission => {
    const matchesSearch = submission.challengeTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || submission.domain === selectedDomain;
    
    return matchesSearch && matchesDomain;
  });

  const handleLike = (submissionId: string) => {
    const newLiked = new Set(likedSubmissions);
    if (newLiked.has(submissionId)) {
      newLiked.delete(submissionId);
    } else {
      newLiked.add(submissionId);
    }
    setLikedSubmissions(newLiked);
  };

  const submissionsWithLikes = filteredSubmissions.map(submission => ({
    ...submission,
    isLiked: likedSubmissions.has(submission.id)
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore amazing work from the community and share constructive feedback
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Domain Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {domains.map(domain => (
                  <option key={domain} value={domain}>{domain} Domain</option>
                ))}
              </select>

              <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Submissions Grid */}
        <div className="space-y-6">
          {submissionsWithLikes.map((submission) => (
            <div key={submission.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium">
                    {submission.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.author}</h3>
                    <p className="text-sm text-gray-600">
                      submitted for "{submission.challengeTitle}" • {submission.submittedAt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    submission.domain === 'Design' ? 'bg-pink-100 text-pink-800' :
                    submission.domain === 'Development' ? 'bg-blue-100 text-blue-800' :
                    submission.domain === 'Writing' ? 'bg-purple-100 text-purple-800' :
                    submission.domain === 'Data' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {submission.domain}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{submission.rating}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{submission.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(submission.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      submission.isLiked 
                        ? 'text-red-600 hover:text-red-700' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${submission.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">
                      {submission.likes + (submission.isLiked ? 1 : 0)}
                    </span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">{submission.comments}</span>
                  </button>
                </div>

                <div className="flex space-x-3">
                  <button className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors">
                    View Submission
                  </button>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                    Leave Feedback
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {submissionsWithLikes.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-8 text-center">
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Share Your Work</h3>
          <p className="text-purple-700 mb-6">
            Complete challenges and get valuable feedback from our supportive community
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all hover:transform hover:scale-105">
            Browse Challenges
          </button>
        </div>
      </div>
    </div>
  );
};