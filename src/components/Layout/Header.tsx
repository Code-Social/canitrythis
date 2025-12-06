import React from 'react';
import { User, Menu, Bell, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../themeContent';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    // Changed 'sticky' to 'fixed' for better stability across full width
    <header className="fixed top-0 left-0 w-full z-50 h-16 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      
      {/* LAYOUT FIX: 
         1. Removed 'max-w-7xl' and 'mx-auto' (which concentrated items in the center).
         2. Added 'w-full' to span the whole screen.
         3. Increased horizontal padding (px-6 lg:px-12) to 'loosely' fit the edges.
      */}
      <div className="w-full px-6 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-3">
              <span className="font-bold text-xl">CT</span>
            </div>
            <div className="hidden sm:flex flex-col justify-center ml-2">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-none">
                Can I Try This?
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-none">
                Real Skills, Real Growth
              </p>
            </div>
          </div>

          {/* Navigation - Increased spacing (space-x-12) for a looser fit */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { key: 'home', label: 'Home' },
              { key: 'challenges', label: 'Challenges' },
              { key: 'projects', label: 'Projects' },
              { key: 'blog', label: 'Blog' },
              { key: 'community', label: 'Community' },
              { key: 'profile', label: 'Profile' },
              { key: 'submit', label: 'Submit Challenge' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === key
                    ? 'text-purple-600 bg-purple-50 dark:bg-purple-900 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right side actions - Added extra gap (space-x-6) */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-48 lg:w-64 transition-all"
              />
            </div>
            
            <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <User className="h-5 w-5" />
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            
            <button className="md:hidden p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};