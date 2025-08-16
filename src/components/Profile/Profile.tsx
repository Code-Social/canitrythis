import React from 'react';
import { Award, BookOpen, Star, TrendingUp, Calendar, Target } from 'lucide-react';

export const Profile: React.FC = () => {
  const completedChallenges = [
    {
      id: '1',
      title: 'Build a Weather App',
      domain: 'Development',
      difficulty: 'Medium',
      completedAt: '2024-01-15',
      rating: 4.5,
      feedback: 'Great implementation with clean code!'
    },
    {
      id: '2',
      title: 'Design a Landing Page',
      domain: 'Design',
      difficulty: 'Easy',
      completedAt: '2024-01-10',
      rating: 4.8,
      feedback: 'Beautiful design with excellent UX principles.'
    },
    {
      id: '3',
      title: 'Write API Documentation',
      domain: 'Writing',
      difficulty: 'Medium',
      completedAt: '2024-01-05',
      rating: 4.3,
      feedback: 'Clear and comprehensive documentation.'
    }
  ];

  const stats = [
    { label: 'Completed', value: 23, icon: Target, color: 'text-green-600 bg-green-100' },
    { label: 'In Progress', value: 3, icon: TrendingUp, color: 'text-blue-600 bg-blue-100' },
    { label: 'Bookmarked', value: 12, icon: BookOpen, color: 'text-purple-600 bg-purple-100' },
    { label: 'Avg Rating', value: '4.6', icon: Star, color: 'text-yellow-600 bg-yellow-100' }
  ];

  const achievements = [
    { title: 'First Challenge', description: 'Completed your first challenge', earned: true },
    { title: 'Design Master', description: 'Completed 10 design challenges', earned: true },
    { title: 'Code Warrior', description: 'Completed 10 development challenges', earned: true },
    { title: 'Community Helper', description: 'Provided feedback on 25 submissions', earned: false },
    { title: 'Streak Master', description: 'Completed challenges for 7 days straight', earned: false },
    { title: 'All Rounder', description: 'Completed challenges in all domains', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
              JS
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Jane Smith</h1>
              <p className="text-gray-600 mb-2">Full-Stack Developer & Designer</p>
              <p className="text-sm text-gray-500">Member since January 2024</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className={`inline-flex p-3 rounded-lg ${stat.color} mb-2`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Challenges */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Completed Challenges</h2>
              <div className="space-y-4">
                {completedChallenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{challenge.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            challenge.domain === 'Design' ? 'bg-pink-100 text-pink-800' :
                            challenge.domain === 'Development' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {challenge.domain}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {challenge.difficulty}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {challenge.completedAt}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {challenge.rating}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{challenge.feedback}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Progress Over Time</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Progress chart would go here</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Level Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Level Progress</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Level 3: Intermediate</span>
                  <span className="text-sm text-gray-500">750/1000 XP</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">250 XP needed for Level 4: Advanced</p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
                    }`}>
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-700'}`}>
                        {achievement.title}
                      </p>
                      <p className={`text-xs ${achievement.earned ? 'text-green-700' : 'text-gray-500'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Breakdown */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Domain Breakdown</h3>
              <div className="space-y-3">
                {[
                  { domain: 'Development', completed: 8, color: 'bg-blue-500' },
                  { domain: 'Design', completed: 6, color: 'bg-pink-500' },
                  { domain: 'Writing', completed: 4, color: 'bg-purple-500' },
                  { domain: 'Data', completed: 3, color: 'bg-indigo-500' },
                  { domain: 'Creative', completed: 2, color: 'bg-orange-500' }
                ].map((item) => (
                  <div key={item.domain}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.domain}</span>
                      <span className="text-sm text-gray-500">{item.completed}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full`} 
                        style={{ width: `${(item.completed / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};