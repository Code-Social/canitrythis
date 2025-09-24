import React, { useState } from 'react';

import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { ChallengeBoard } from './components/Challenges/ChallengeBoard';
import { Profile } from './components/Profile/Profile';
import { SubmitChallenge } from './components/Submit/SubmitChallenge';
import { Community } from './components/Community/Community';
import { Projects } from './components/Projects/Projects';
import { Blog } from './components/Blog/Blog';
import { ThemeProvider } from './themeContent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
   
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'challenges':
        return <ChallengeBoard onChallengeSelect={(challenge) => console.log('Selected challenge:', challenge)} />;
      case 'profile':
        return <Profile />;
      case 'submit':
        return <SubmitChallenge />;
      case 'community':
        return <Community onNavigate={handleNavigate} />; {/* ✅ updated */}
      default:
        return (
          <div>
            <Hero onNavigate={handleNavigate} />
            
            {/* Quick Access Section */}
            <div className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Quick Access
                  </h2>
                  <p className="text-xl text-gray-600">
                    Jump into what interests you most
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('projects')}>
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">Community Projects</h3>
                    <p className="text-purple-700 mb-6">
                      Discover inclusive, collaborative projects that welcome contributors of all backgrounds and skill levels. Get hands-on experience with real codebases.
                    </p>
                    <div className="inline-flex items-center text-purple-600 font-semibold">
                      Explore Projects →
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('blog')}>
                    <div className="text-4xl mb-4">📝</div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Community Blog</h3>
                    <p className="text-blue-700 mb-6">
                      Stories celebrating diversity, inclusion, and positive collaboration in technology. Learn from community experiences and insights.
                    </p>
                    <div className="inline-flex items-center text-blue-600 font-semibold">
                      Read Stories →
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
    <ThemeProvider>
      <div className="min-h-screen">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {renderPage()}
        </main>

        {/* Footer */}
        {currentPage === 'home' && (
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-3">
                  <span className="font-bold text-xl">CT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Can I Try This?</h3>
                  <p className="text-gray-400 text-sm">Real Challenges, Real Skills</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                A safe space to explore real-world challenges in design, development, writing, data, and more.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <button onClick={() => handleNavigate('challenges')} className="text-gray-400 hover:text-white transition-colors">Challenges</button>
                <button onClick={() => handleNavigate('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button>
                <button onClick={() => handleNavigate('blog')} className="text-gray-400 hover:text-white transition-colors">Blog</button>
                <button onClick={() => handleNavigate('community')} className="text-gray-400 hover:text-white transition-colors">Community</button>
              </div>
              <div className="border-t border-gray-800 pt-8 text-gray-400">
                <p>&copy; 2024 Can I Try This? All rights reserved.</p>
              </div>
            </div>
          </footer>
        )}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
