import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, Users, Award, CheckCircle, Upload, Link, FileText } from 'lucide-react';
import { Challenge } from './ChallengeCard';

interface ChallengeDetailProps {
  challenge: Challenge;
  onBack: () => void;
}

export const ChallengeDetail: React.FC<ChallengeDetailProps> = ({ challenge, onBack }) => {
  const [submissionType, setSubmissionType] = useState<'link' | 'file' | 'text'>('link');
  const [submissionContent, setSubmissionContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Hard: 'bg-red-100 text-red-800 border-red-200'
  };

  const domainColors: Record<string, string> = {
    Design: 'bg-pink-100 text-pink-800 border-pink-200',
    Development: 'bg-blue-100 text-blue-800 border-blue-200',
    Writing: 'bg-purple-100 text-purple-800 border-purple-200',
    Data: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    Creative: 'bg-orange-100 text-orange-800 border-orange-200'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Challenges
          </button>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${domainColors[challenge.domain] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                {challenge.domain}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[challenge.difficulty]}`}>
                {challenge.difficulty}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{challenge.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {challenge.estimatedTime}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {challenge.participants} participants
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                {challenge.rating.toFixed(1)} rating
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{challenge.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Challenge Details</h2>
              
              <div className="prose max-w-none">
                <h3>What You'll Build</h3>
                <p>This challenge requires you to create a comprehensive solution that demonstrates your skills in {challenge.domain.toLowerCase()}. You'll work with real-world constraints and requirements.</p>
                
                <h3>Requirements</h3>
                <ul>
                  <li>Follow industry best practices and standards</li>
                  <li>Create a solution that is user-friendly and accessible</li>
                  <li>Include proper documentation or explanations</li>
                  <li>Test your solution thoroughly before submission</li>
                </ul>

                <h3>Bonus Challenges</h3>
                <ul>
                  <li>Add responsive design considerations</li>
                  <li>Implement additional features beyond the basic requirements</li>
                  <li>Create a presentation or demo of your work</li>
                </ul>

                <h3>Resources</h3>
                <p>Here are some helpful resources to get you started:</p>
                <ul>
                  <li>Official documentation and guides</li>
                  <li>Community discussions and examples</li>
                  <li>Best practice articles and tutorials</li>
                </ul>
              </div>
            </div>

            {/* Submission Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Submit Your Solution</h2>
              
              {/* Submission Type Selector */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
                {[
                  { type: 'link', icon: Link, label: 'Link' },
                  { type: 'file', icon: Upload, label: 'File' },
                  { type: 'text', icon: FileText, label: 'Text' }
                ].map(({ type, icon: Icon, label }) => (
                  <button
                    key={type}
                    onClick={() => setSubmissionType(type as any)}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      submissionType === type
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Submission Input */}
              <div className="mb-6">
                {submissionType === 'link' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Link (GitHub, CodePen, Figma, etc.)
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/username/project"
                      value={submissionContent}
                      onChange={(e) => setSubmissionContent(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                )}

                {submissionType === 'file' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Files
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Drag & drop files here, or click to browse</p>
                      <input type="file" multiple className="hidden" />
                    </div>
                  </div>
                )}

                {submissionType === 'text' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Solution
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Explain your approach, challenges faced, and what you learned..."
                      value={submissionContent}
                      onChange={(e) => setSubmissionContent(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white hover:transform hover:scale-[1.02]'
                }`}
              >
                {isSubmitted ? (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Submitted Successfully!
                  </div>
                ) : (
                  'Submit Solution'
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Challenge Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenge Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Participants</span>
                  <span className="font-medium">{challenge.participants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-medium">{challenge.rating}/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-medium">73%</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {challenge.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-900">Complete This Challenge</h3>
              </div>
              <p className="text-purple-700 text-sm">
                Completing this challenge will earn you points and help build your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};