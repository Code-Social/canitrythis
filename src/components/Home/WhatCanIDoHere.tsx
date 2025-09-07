import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Heart, Star, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  items, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl icon-hover transform hover:scale-110 transition-transform duration-200">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          </div>
          <div className="text-gray-400">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
          <ul className="mt-4 space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1">•</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const WhatCanIDoHere: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const handleCardToggle = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const features = [
    {
      icon: "✨",
      title: "Explore Real Challenges",
      description: "Browse challenges by domain, level, or tag. New to design? Try making a social media post. Learning SQL? Analyze a real dataset.",
      items: [
        "🎨 Design Challenges - Create logos, layouts, and visual content",
        "🧑‍💻 Development Tasks - Build apps, solve coding problems, debug issues",
        "✍️ Writing Prompts - Craft blog posts, documentation, and creative content",
        "📊 Data Projects - Analyze datasets, create visualizations, find insights",
        "🧠 Miscellaneous Skill Tests - Problem-solving, strategy, and creative thinking"
      ]
    },
    {
      icon: "🔒",
      title: "Login to Play",
      description: "Sign up to unlock the full experience and start building your skills portfolio.",
      items: [
        "Submit your solutions (GitHub link, screenshot, Google Doc, etc.)",
        "Receive feedback from the community",
        "Track your completed challenges and progress",
        "Build a portfolio of your work",
        "Connect with other learners and mentors"
      ]
    },
    {
      icon: "📈",
      title: "Levels and Tags",
      description: "Each challenge is carefully categorized to help you find the perfect fit for your skill level.",
      items: [
        "Difficulty levels: Easy, Medium, Hard",
        "Domain tags: Design, Dev, Writing, Data, and more",
        "Optional bonus missions to try something new",
        "Skill progression tracking",
        "Personalized recommendations based on your interests"
      ]
    },
    {
      icon: "💬",
      title: "Get and Give Feedback",
      description: "You can leave kind, constructive feedback on others' submissions — and get some back on yours. We're all learning here.",
      items: [
        "Receive constructive feedback from experienced community members",
        "Give helpful feedback to support other learners",
        "Learn from different approaches and perspectives",
        "Build meaningful connections through collaboration",
        "Celebrate each other's growth and achievements"
      ]
    },
    {
      icon: "🎯",
      title: "From Practice to Portfolio",
      description: "Start with low-stakes practice. As you grow, take on bigger, portfolio-worthy challenges.",
      items: [
        "Begin with simple, confidence-building exercises",
        "Progress to complex, real-world scenarios",
        "Build a showcase of your best work",
        "Demonstrate growth over time",
        "Prepare for job interviews and career opportunities"
      ]
    },
    {
      icon: "🧠",
      title: "Submit Your Own Challenge",
      description: "Built something cool or faced a real-world task? Submit it as a challenge for others to try.",
      items: [
        "Share interesting problems you've encountered",
        "Help others learn from your experiences",
        "Contribute to the community knowledge base",
        "Get recognition for your creative challenges",
        "Inspire others to think outside the box"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <span className="text-2xl">🌟</span>
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            What Can I Do Here?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a world of hands-on learning opportunities designed to help you grow, 
            connect, and build real skills in a supportive community.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              items={feature.items}
              isExpanded={expandedCard === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* Community Values Banner */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold text-gray-900">Built with Community Values</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold text-purple-900 mb-1">Inclusive</h3>
              <p className="text-sm text-purple-700 text-center">
                Everyone is welcome, regardless of background or experience level
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="font-semibold text-blue-900 mb-1">Growth-Focused</h3>
              <p className="text-sm text-blue-700 text-center">
                We celebrate progress, learning, and helping each other improve
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-semibold text-green-900 mb-1">Supportive</h3>
              <p className="text-sm text-green-700 text-center">
                Kind feedback, constructive criticism, and mutual encouragement
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              <Users className="h-5 w-5 mr-2" />
              Join Our Community
            </button>
            
            <a 
              href="#code-of-conduct" 
              className="inline-flex items-center text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              <Star className="h-4 w-4 mr-2" />
              Read Community Guidelines
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Active Challenges</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Solutions Shared</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-indigo-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Positive Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};