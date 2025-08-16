import React from 'react';
import { Palette, Code, PenTool, BarChart, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Design Challenges',
    description: 'Create logos, social media posts, and UI designs with real-world constraints.',
    color: 'text-pink-600 bg-pink-100'
  },
  {
    icon: Code,
    title: 'Development Tasks',
    description: 'Build apps, solve algorithms, and work with real APIs and databases.',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: PenTool,
    title: 'Writing Prompts',
    description: 'Craft blog posts, documentation, and creative content for real audiences.',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: BarChart,
    title: 'Data Projects',
    description: 'Analyze real datasets, create visualizations, and derive insights.',
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Tackle unique problems that require innovative solutions and fresh perspectives.',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Users,
    title: 'Community Feedback',
    description: 'Get constructive feedback and learn from a supportive community.',
    color: 'text-indigo-600 bg-indigo-100'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌟 What Can You Do Here?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore diverse challenges across multiple domains and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group hover:transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};