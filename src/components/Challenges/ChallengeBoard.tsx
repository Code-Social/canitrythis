import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { ChallengeCard, Challenge } from './ChallengeCard';

interface ChallengeBoardProps {
  onChallengeSelect: (challenge: Challenge) => void;
}

const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Design a Mobile App Onboarding Flow',
    description:
      'Create a 3-screen onboarding experience for a fitness tracking app. Focus on user engagement and clear value proposition.',
    domain: 'Design',
    difficulty: 'Medium',
    estimatedTime: '2-4 hours',
    participants: 234,
    rating: 4.7,
    tags: ['UI/UX', 'Mobile', 'Figma', 'Onboarding'],
  },
  {
    id: '2',
    title: 'Build a Real-Time Chat Application',
    description:
      'Develop a chat app using WebSockets. Include user authentication, message history, and typing indicators.',
    domain: 'Development',
    difficulty: 'Hard',
    estimatedTime: '6-8 hours',
    participants: 156,
    rating: 4.8,
    tags: ['React', 'Node.js', 'WebSocket', 'Real-time'],
  },
  {
    id: '3',
    title: 'Write a Technical Blog Post',
    description:
      'Explain a complex programming concept to beginners. Make it engaging with examples and practical applications.',
    domain: 'Writing',
    difficulty: 'Easy',
    estimatedTime: '1-2 hours',
    participants: 89,
    rating: 4.5,
    tags: ['Technical Writing', 'Blog', 'Tutorial'],
  },
  {
    id: '4',
    title: 'Analyze E-commerce Sales Data',
    description:
      'Use Python to analyze a real e-commerce dataset. Create visualizations and provide actionable insights.',
    domain: 'Data',
    difficulty: 'Medium',
    estimatedTime: '3-5 hours',
    participants: 67,
    rating: 4.6,
    tags: ['Python', 'Pandas', 'Visualization', 'Analysis'],
  },
  {
    id: '5',
    title: 'Create a Brand Identity System',
    description:
      'Design a complete brand identity for a sustainable fashion startup, including logo, colors, and guidelines.',
    domain: 'Design',
    difficulty: 'Hard',
    estimatedTime: '8-12 hours',
    participants: 123,
    rating: 4.9,
    tags: ['Branding', 'Logo Design', 'Brand Guidelines'],
  },
  {
    id: '6',
    title: 'Build a REST API with Authentication',
    description:
      'Create a secure REST API for a task management system. Include JWT authentication and proper error handling.',
    domain: 'Development',
    difficulty: 'Medium',
    estimatedTime: '4-6 hours',
    participants: 198,
    rating: 4.4,
    tags: ['API', 'Node.js', 'JWT', 'Authentication'],
  },
];

export const ChallengeBoard: React.FC<ChallengeBoardProps> = ({ onChallengeSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [bookmarkedChallenges, setBookmarkedChallenges] = useState<Set<string>>(new Set());

  // Load bookmarks safely
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bookmarkedChallenges');
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setBookmarkedChallenges(new Set(parsed as string[]));
        }
      }
    } catch (err) {
      // corrupted localStorage; ignore and reset
      console.warn('Failed to parse bookmarkedChallenges from localStorage:', err);
      localStorage.removeItem('bookmarkedChallenges');
      setBookmarkedChallenges(new Set());
    }
  }, []);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('bookmarkedChallenges', JSON.stringify(Array.from(bookmarkedChallenges)));
    } catch (err) {
      console.warn('Failed to save bookmarkedChallenges to localStorage:', err);
    }
  }, [bookmarkedChallenges]);

  const domains = ['All', 'Design', 'Development', 'Writing', 'Data', 'Creative'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter (memoized)
  const filteredChallenges = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return mockChallenges.filter((challenge) => {
      const matchesSearch =
        !q ||
        challenge.title.toLowerCase().includes(q) ||
        challenge.description.toLowerCase().includes(q) ||
        challenge.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesDomain = selectedDomain === 'All' || challenge.domain === selectedDomain;
      const matchesDifficulty = selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty;

      return matchesSearch && matchesDomain && matchesDifficulty;
    });
  }, [searchTerm, selectedDomain, selectedDifficulty]);

  // Bookmark handler (stable identity)
  const handleBookmark = useCallback((challengeId: string) => {
    setBookmarkedChallenges((prev) => {
      const next = new Set(prev);
      if (next.has(challengeId)) next.delete(challengeId);
      else next.add(challengeId);
      return next;
    });
  }, []);

  const challengesWithBookmarks = useMemo(
    () =>
      filteredChallenges.map((challenge) => ({
        ...challenge,
        isBookmarked: bookmarkedChallenges.has(challenge.id),
      })),
    [filteredChallenges, bookmarkedChallenges]
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Challenge Board</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Explore real-world challenges and level up your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                aria-label="Search challenges"
                placeholder="Search challenges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-shadow duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                aria-label="Filter by domain"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain} Domain
                  </option>
                ))}
              </select>

              <select
                aria-label="Filter by difficulty"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'All' ? 'All Levels' : difficulty}
                  </option>
                ))}
              </select>

              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden" role="tablist" aria-label="View mode">
                <button
                  type="button"
                  aria-pressed={viewMode === 'grid'}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors duration-200 ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  title="Grid view"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-pressed={viewMode === 'list'}
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors duration-200 ${viewMode === 'list' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  title="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {challengesWithBookmarks.length} of {mockChallenges.length} challenges
            </p>
          </div>
        </div>

        {/* Challenge Grid */}
        <div className={`grid gap-6 transition-all duration-300 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {challengesWithBookmarks.length > 0 ? (
            challengesWithBookmarks.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} onSelect={onChallengeSelect} onBookmark={handleBookmark} />
            ))
          ) : (
            <div className="text-center py-16 col-span-full">
              <Filter className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No challenges found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
