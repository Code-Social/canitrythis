import React from 'react';
import { Search, Send, MessageCircle, Award } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Explore Challenges',
    description: 'Browse real-world challenges by domain, difficulty, or interest.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Send,
    title: 'Submit Your Solution',
    description: 'Upload your work via GitHub, screenshots, or documents.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: MessageCircle,
    title: 'Get Feedback',
    description: 'Receive constructive feedback from the community and mentors.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Award,
    title: 'Level Up',
    description: 'Track progress, build your portfolio, and tackle harder challenges.',
    color: 'bg-orange-100 text-orange-600'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to start your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-full ${step.color} group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gray-300 transform -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                  <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};