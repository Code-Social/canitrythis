import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Star } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
  featured: boolean;
}

// Sample data embedded in component for now
const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Inclusive Learning Platform",
    description: "A collaborative learning platform designed for accessibility and diverse learning styles. Join our welcoming community to build features that help everyone learn together, regardless of background or ability.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/example/inclusive-learning",
    featured: true
  },
  {
    id: 2,
    title: "Community Task Manager",
    description: "An open-source task management tool built by and for diverse teams. We welcome contributors of all skill levels and backgrounds to help create better collaboration tools for everyone.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/example/community-tasks",
    featured: false
  },
  {
    id: 3,
    title: "Accessible Weather App",
    description: "A weather application prioritizing accessibility and inclusive design. Perfect for new contributors to learn about WCAG compliance while building something useful for everyone.",
    technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
    githubUrl: "https://github.com/example/accessible-weather",
    featured: true
  },
  {
    id: 4,
    title: "Mentorship Matching Platform",
    description: "Connect learners with mentors in a safe, supportive environment. This project emphasizes creating inclusive spaces where everyone can grow and share knowledge respectfully.",
    technologies: ["React", "Next.js", "Prisma", "Vercel"],
    githubUrl: "https://github.com/example/mentorship-platform",
    featured: false
  },
  {
    id: 5,
    title: "Diversity in Tech Blog",
    description: "A collaborative blog platform celebrating diverse voices in technology. Contributors from all backgrounds are encouraged to share their stories, experiences, and technical insights.",
    technologies: ["Gatsby", "MDX", "GraphQL", "Netlify"],
    githubUrl: "https://github.com/example/diversity-blog",
    featured: true
  }
];

export const Projects: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(sampleProjects);
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const getAllTechnologies = () => {
    const allTechs = sampleProjects.flatMap(project => project.technologies);
    return [...new Set(allTechs)].sort();
  };

  const handleTechFilter = (tech: string) => {
    setSelectedTech(tech);
    if (tech === 'all') {
      setFilteredProjects(sampleProjects);
    } else {
      setFilteredProjects(
        sampleProjects.filter(project => 
          project.technologies.some(t => 
            t.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover inclusive, collaborative projects built by our diverse community. 
            Every project welcomes contributors of all backgrounds and skill levels.
          </p>
          
          {/* Code of Conduct Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">Community Standards</h3>
                <p className="text-sm text-blue-800">
                  Participation in these projects is guided by our community standards of respect, 
                  inclusion, and empathy. We're committed to creating a welcoming environment for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTechFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All
              </button>
              {getAllTechnologies().map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechFilter(tech)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTech === tech
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-purple-300 opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  
                  <button className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Share Your Inclusive Project</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Built something that brings people together? We'd love to showcase projects that 
            prioritize accessibility, collaboration, and learning opportunities for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
              <ExternalLink className="h-5 w-5" />
              <span>Submit Your Project</span>
            </button>
            <a 
              href="#code-of-conduct" 
              className="text-purple-100 hover:text-white text-sm underline transition-colors"
            >
              Review Community Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};