import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { Features } from './components/Home/Features';
import { HowItWorks } from './components/Home/HowItWorks';
import { ChallengeBoard } from './components/Challenges/ChallengeBoard';
import { ChallengeDetail } from './components/Challenges/ChallengeDetail';
import { Profile } from './components/Profile/Profile';
import { SubmitChallenge } from './components/Submit/SubmitChallenge';
import { Community } from './components/Community/Community';
import { Challenge } from './components/Challenges/ChallengeCard';
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedChallenge(null);
  };

  const handleChallengeSelect = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setCurrentPage('challenge-detail');
  };

  const handleBackFromChallenge = () => {
    setSelectedChallenge(null);
    setCurrentPage('challenges');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'challenges':
        return <ChallengeBoard onChallengeSelect={handleChallengeSelect} />;
      case 'challenge-detail':
        return selectedChallenge ? (
          <ChallengeDetail 
            challenge={selectedChallenge} 
            onBack={handleBackFromChallenge} 
          />
        ) : <ChallengeBoard onChallengeSelect={handleChallengeSelect} />;
      case 'profile':
        return <Profile />;
      case 'submit':
        return <SubmitChallenge />;
      case 'community':
        return <Community />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            <HowItWorks />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      {currentPage === 'home' && (
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-3">
                    <span className="font-bold text-xl">CT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Can I Try This?</h3>
                    <p className="text-gray-400 text-sm">Real Skills, Real Growth</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  A platform where learners explore real-world challenges across design, development, 
                  writing, data, and more. Build skills through practice, not just theory.
                </p>
                {/* Replaced text buttons with icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/_Rizwan_10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://github.com/Code-Social/canitrythis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://discord.com/invite/your-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaDiscord size={24} />
                  </a>
                  <a
                  href="https://www.linkedin.com/in/skmdrizwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => handleNavigate('challenges')} className="hover:text-white transition-colors">Challenges</button></li>
                  <li><button onClick={() => handleNavigate('community')} className="hover:text-white transition-colors">Community</button></li>
                  <li><button onClick={() => handleNavigate('submit')} className="hover:text-white transition-colors">Submit Challenge</button></li>
                  <li><button className="hover:text-white transition-colors">Mentor Program</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white transition-colors">Help Center</button></li>
                  <li><button className="hover:text-white transition-colors">Guidelines</button></li>
                  <li><button className="hover:text-white transition-colors">Contact Us</button></li>
                  <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Can I Try This? All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;