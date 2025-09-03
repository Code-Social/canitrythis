import React, { useState } from 'react';
import { Upload, Plus, X, Check } from 'lucide-react';

export const SubmitChallenge: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    domain: '',
    difficulty: '',
    estimatedTime: '',
    requirements: [''],
    tags: [''],
    resources: ['']
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const domains = ['Design', 'Development', 'Writing', 'Data', 'Creative', 'Business', 'Marketing'];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const addArrayField = (field: 'requirements' | 'tags' | 'resources') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field: 'requirements' | 'tags' | 'resources', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }));
  };

  const updateArrayField = (field: 'requirements' | 'tags' | 'resources', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => i === index ? value : item)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Submit a Challenge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Share a real-world challenge that others can learn from. Help grow the community's learning resources.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Basic Information
              </h2>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Challenge Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Design a Mobile Banking App Interface"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the challenge, its context, and what participants should create..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Domain *
                  </label>
                  <select
                    id="domain"
                    value={formData.domain}
                    onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Domain</option>
                    {domains.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Difficulty *
                  </label>
                  <select
                    id="difficulty"
                    value={formData.difficulty}
                    onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Difficulty</option>
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="estimatedTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Estimated Time *
                  </label>
                  <input
                    type="text"
                    id="estimatedTime"
                    value={formData.estimatedTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, estimatedTime: e.target.value }))}
                    placeholder="e.g., 2-4 hours"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Requirements
              </h2>

              {formData.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={requirement}
                    onChange={(e) => updateArrayField('requirements', index, e.target.value)}
                    placeholder="Add a specific requirement..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {formData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField('requirements', index)}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={() => addArrayField('requirements')}
                className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Requirement
              </button>
            </div>

            {/* Tags */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Tags & Skills
              </h2>

              {formData.tags.map((tag, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => updateArrayField('tags', index, e.target.value)}
                    placeholder="Add a relevant tag or skill..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {formData.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField('tags', index)}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={() => addArrayField('tags')}
                className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Tag
              </button>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Helpful Resources (Optional)
              </h2>

              {formData.resources.map((resource, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="url"
                    value={resource}
                    onChange={(e) => updateArrayField('resources', index, e.target.value)}
                    placeholder="Add a helpful link or resource..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {formData.resources.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField('resources', index)}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={() => addArrayField('resources')}
                className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Resource
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  isSubmitted
                    ? 'bg-green-600 dark:bg-green-500 text-white'
                    : 'bg-purple-600 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-600 text-white hover:transform hover:scale-[1.02]'
                }`}
              >
                {isSubmitted ? (
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Challenge Submitted!
                  </div>
                ) : (
                  'Submit Challenge for Review'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">Review Process</h3>
          <p className="text-blue-800 dark:text-blue-300">
            Your challenge will be reviewed by our mentor panel to ensure it meets quality standards and provides valuable learning opportunities. 
            We'll notify you once it's approved and live on the platform!
          </p>
        </div>
      </div>
    </div>
  );
};
