import React from 'react';
import { Play, Star, Users, Trophy } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Can I Try This?
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-4 max-w-3xl mx-auto">
            Real Challenges, Real Skills
          </p>
          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
            A safe space to explore real-world challenges in design, development, writing, data, and more. 
            Level up by actually doing. No grades. No judgment. Just feedback & growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => onNavigate('challenges')}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Exploring
            </button>
            <button 
              onClick={() => onNavigate('submit')}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Submit Challenge
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-purple-200">Challenges</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">12K+</div>
                <div className="text-purple-200">Learners</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};