import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return (
          <div className="min-h-screen bg-purple-50 flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-purple-600 mb-4">Projects Page</h1>
              <p className="text-gray-600 mb-4">Community projects will be displayed here</p>
              <button 
                onClick={() => handleNavigate('home')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">Blog Page</h1>
              <p className="text-gray-600 mb-4">Community blog posts will be displayed here</p>
              <button 
                onClick={() => handleNavigate('home')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center mb-6">
                    <span className="font-bold text-2xl">CT</span>
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">Can I Try This?</h1>
                  <p className="text-xl text-gray-600 mb-8">Real Skills, Real Growth</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 flex flex-col">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-lg font-bold text-purple-900 mb-2">Community Projects</h3>
                    <p className="text-purple-700 text-sm mb-4 flex-grow">
                      Discover inclusive, collaborative projects that welcome contributors of all backgrounds and skill levels
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={() => handleNavigate('projects')}
                        className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                      >
                        Explore Projects
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col">
                    <div className="text-3xl mb-3">📝</div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Community Blog</h3>
                    <p className="text-blue-700 text-sm mb-4 flex-grow">
                      Stories celebrating diversity, inclusion, and positive collaboration in technology
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={() => handleNavigate('blog')}
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Read Blogs
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-800 font-medium mb-2">
                    🌟 Built with Community Values
                  </p>
                  <p className="text-xs text-green-700">
                    Guided by respect, inclusion, and empathy • Accessible & welcoming for everyone
                  </p>
                </div>
              </div>
            </div>
            
            {/* What Can I Do Here Section */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="text-4xl mb-4">🌟</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    What Can I Do Here?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover a world of hands-on learning opportunities designed to help you grow, 
                    connect, and build real skills in a supportive community.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Explore Real Challenges</h3>
                    <p className="text-gray-600 mb-4">Browse challenges by domain, level, or tag. New to design? Try making a social media post. Learning SQL? Analyze a real dataset.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>🎨 Design Challenges</li>
                      <li>🧑‍💻 Development Tasks</li>
                      <li>✍️ Writing Prompts</li>
                      <li>📊 Data Projects</li>
                      <li>🧠 Miscellaneous Skill Tests</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Login to Play</h3>
                    <p className="text-gray-600 mb-4">Sign up to unlock the full experience and start building your skills portfolio.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Submit your solutions</li>
                      <li>• Receive community feedback</li>
                      <li>• Track completed challenges</li>
                      <li>• Build your portfolio</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">📈</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Levels and Tags</h3>
                    <p className="text-gray-600 mb-4">Each challenge is carefully categorized to help you find the perfect fit for your skill level.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Difficulty: Easy, Medium, Hard</li>
                      <li>• Domain tags by category</li>
                      <li>• Optional bonus missions</li>
                      <li>• Skill progression tracking</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">💬</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Get and Give Feedback</h3>
                    <p className="text-gray-600 mb-4">Leave kind, constructive feedback on others' submissions — and get some back on yours. We're all learning here.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Constructive community feedback</li>
                      <li>• Learn from different approaches</li>
                      <li>• Build meaningful connections</li>
                      <li>• Celebrate growth together</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">From Practice to Portfolio</h3>
                    <p className="text-gray-600 mb-4">Start with low-stakes practice. As you grow, take on bigger, portfolio-worthy challenges.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Begin with simple exercises</li>
                      <li>• Progress to complex scenarios</li>
                      <li>• Build a showcase of your work</li>
                      <li>• Prepare for career opportunities</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Your Own Challenge</h3>
                    <p className="text-gray-600 mb-4">Built something cool or faced a real-world task? Submit it as a challenge for others to try.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Share interesting problems</li>
                      <li>• Help others learn</li>
                      <li>• Get recognition for creativity</li>
                      <li>• Inspire innovative thinking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Community Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl mb-2">🤝</div>
                      <h4 className="font-semibold text-purple-900 mb-1">Inclusive</h4>
                      <p className="text-sm text-purple-700">Everyone is welcome, regardless of background</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl mb-2">🌱</div>
                      <h4 className="font-semibold text-blue-900 mb-1">Growth-Focused</h4>
                      <p className="text-sm text-blue-700">We celebrate progress and learning</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">✨</div>
                      <h4 className="font-semibold text-green-900 mb-1">Supportive</h4>
                      <p className="text-sm text-green-700">Kind feedback and mutual encouragement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">CT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Can I Try This?</h1>
                <p className="text-xs text-gray-500 -mt-1">Real Skills, Real Growth</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <button
                onClick={() => handleNavigate('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'projects'
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigate('blog')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'blog'
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;