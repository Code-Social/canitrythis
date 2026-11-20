import { Link, Route, Routes, useNavigate } from 'react-router-dom';

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

function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
  <div>
    <Hero onNavigate={onNavigate} />

    {/* Quick Access Section */}
    <div className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Jump into what interests you most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/projects" className="block bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-3">Community Projects</h3>
            <p className="text-purple-700 dark:text-purple-200 mb-6">
              Discover inclusive, collaborative projects that welcome contributors of all backgrounds and skill levels. Get hands-on experience with real codebases.
            </p>
            <div className="inline-flex items-center text-purple-600 dark:text-purple-300 font-semibold">
              Explore Projects →
            </div>
          </Link>

          <Link to="/blog" className="block bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">Community Blog</h3>
            <p className="text-blue-700 dark:text-blue-200 mb-6">
              Stories celebrating diversity, inclusion, and positive collaboration in technology. Learn from community experiences and insights.
            </p>
            <div className="inline-flex items-center text-blue-600 dark:text-blue-300 font-semibold">
              Read Stories →
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

function App() {
  const navigate = useNavigate();
  const handleNavigate = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <ThemeProvider>
      {/* Added bg-gray-50 and dark mode colors here to ensure the full page background is correct */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <Header />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/challenges" element={<ChallengeBoard onChallengeSelect={(challenge) => console.log('Selected challenge:', challenge)} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/submit" element={<SubmitChallenge />} />
            <Route path="/community" element={<Community onNavigate={handleNavigate} />} />
            <Route path="*" element={<div className="px-4 py-16 text-center dark:text-white"><h1 className="text-3xl font-bold">Page not found</h1><Link className="mt-4 inline-block text-purple-600 dark:text-purple-400" to="/">Back to home</Link></div>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">CT</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Can I Try This?</h3>
                <p className="text-gray-400 text-sm">Real Challenges, Real Skills</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              A safe space to explore real-world challenges in design, development, writing, data, and more.
            </p>
            <div className="flex justify-center space-x-6 mb-8 flex-wrap gap-y-4">
              <Link to="/challenges" className="text-gray-400 hover:text-white transition-colors">Challenges</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link>
            </div>
            <div className="border-t border-gray-800 pt-8 text-gray-400">
              <p>&copy; 2024 Can I Try This? All rights reserved.</p>
            </div>
          </div>
        </footer>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;