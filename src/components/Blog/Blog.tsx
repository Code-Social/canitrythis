import React, { useState } from 'react';
import { Search, Calendar, User, Clock, Tag, Star, ExternalLink } from 'lucide-react';

export interface BlogPostData {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

// Sample data embedded in component for now
const samplePosts: BlogPostData[] = [
  {
    id: 1,
    title: "Creating Inclusive Development Environments",
    date: "2024-01-15",
    author: "Sarah Chen",
    summary: "Learn how to foster welcoming, accessible development environments where everyone can contribute meaningfully, regardless of their background or experience level.",
    content: "Creating truly inclusive development environments goes beyond just writing accessible code. It's about building communities where every voice is heard, every contribution is valued, and everyone has the opportunity to grow...",
    tags: ["inclusion", "community", "accessibility"],
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: "Collaborative Coding: Building Together",
    date: "2024-01-22",
    author: "Alex Rivera",
    summary: "Discover the power of collaborative development and how diverse teams create better, more innovative solutions through respectful teamwork.",
    content: "The best software is built by diverse teams working together with mutual respect and shared goals. Collaborative coding isn't just about version control—it's about creating an environment where different perspectives strengthen the final product...",
    tags: ["collaboration", "teamwork", "diversity"],
    readTime: 7,
    featured: false
  },
  {
    id: 3,
    title: "Mentorship in Tech: Giving and Receiving",
    date: "2024-01-29",
    author: "Jordan Kim",
    summary: "Explore how mentorship creates positive cycles of learning and growth, building stronger, more supportive tech communities for everyone.",
    content: "Mentorship is one of the most powerful tools we have for creating positive change in tech. Whether you're seeking guidance or ready to share your knowledge, mentorship relationships benefit everyone involved...",
    tags: ["mentorship", "learning", "community"],
    readTime: 6,
    featured: true
  },
  {
    id: 4,
    title: "Accessibility-First Development",
    date: "2024-02-05",
    author: "Maya Patel",
    summary: "Learn why building with accessibility in mind from day one creates better experiences for everyone, not just users with disabilities.",
    content: "Accessibility isn't an afterthought—it's a fundamental part of good design and development. When we build with accessibility in mind from the start, we create products that work better for everyone...",
    tags: ["accessibility", "inclusive-design", "best-practices"],
    readTime: 8,
    featured: false
  },
  {
    id: 5,
    title: "Community Spotlight: Diverse Voices in Tech",
    date: "2024-02-12",
    author: "Community Team",
    summary: "Celebrating the diverse voices and unique perspectives that make our tech community stronger, more innovative, and more welcoming for everyone.",
    content: "This month, we're highlighting the incredible diversity of voices in our community. From different cultural backgrounds to varied career paths, our members bring unique perspectives that enrich our collective learning...",
    tags: ["community", "diversity", "spotlight"],
    readTime: 4,
    featured: true
  }
];

export const Blog: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPostData[]>(samplePosts);
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const getAllTags = () => {
    const allTags = samplePosts.flatMap(post => post.tags);
    return [...new Set(allTags)].sort();
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterPosts(term, selectedTag);
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    filterPosts(searchTerm, tag);
  };

  const filterPosts = (search: string, tag: string) => {
    let filtered = samplePosts;

    if (search) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (tag !== 'all') {
      filtered = filtered.filter(post => post.tags.includes(tag));
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors mb-8"
          >
            <span>← Back to Blog</span>
          </button>

          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-purple-600 to-blue-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>
                  <p className="text-purple-100 text-lg max-w-2xl">
                    {selectedPost.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 border-b border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedPost.content}
                </p>
                <p className="text-gray-700 leading-relaxed mt-6">
                  This approach has helped countless developers transition from tutorial hell to building 
                  production-ready applications. The journey isn't always smooth, but every challenge 
                  you overcome makes you a stronger developer.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories, insights, and tutorials celebrating diversity, inclusion, and positive collaboration 
            in technology. Every voice matters, every story has value.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <div className="flex items-center space-x-2 mr-4">
              <Tag className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by tag:</span>
            </div>
            <button
              onClick={() => handleTagFilter('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All
            </button>
            {getAllTags().map(tag => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-24 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-2xl font-bold text-purple-600 opacity-50">
                    {post.title.charAt(0)}
                  </div>
                </div>
                {post.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors group-hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Code of Conduct Reminder */}
        <div className="mt-16 bg-green-50 border border-green-200 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Our Community Values</h2>
            <p className="text-green-800 max-w-3xl mx-auto">
              All blog content and community interactions are guided by our commitment to respect, 
              inclusion, and empathy. We celebrate diverse perspectives and create space for everyone to learn and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold text-green-900 mb-1">Respect</h3>
              <p className="text-sm text-green-700">Every person deserves dignity and consideration</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold text-green-900 mb-1">Inclusion</h3>
              <p className="text-sm text-green-700">All backgrounds and perspectives are welcome</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">💚</div>
              <h3 className="font-semibold text-green-900 mb-1">Empathy</h3>
              <p className="text-sm text-green-700">We seek to understand and support each other</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="#code-of-conduct" 
              className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Read our full Code of Conduct
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Join Our Inclusive Community</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get updates on community posts, inclusive tech content, and opportunities to connect 
            with like-minded developers who value diversity and collaboration.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};