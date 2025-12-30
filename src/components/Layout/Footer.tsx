import { Globe, Instagram, Github, MessageCircle, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

type ModalType = 'privacy' | 'terms' | 'conduct' | null;

export default function Footer({ onNavigate }: FooterProps) {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalOpen(null);
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: 'This is a placeholder for the Privacy Policy. Here you would outline how user data is collected, used, and protected on this platform.',
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: 'This is a placeholder for the Terms of Service. Here you would outline the rules, regulations, and guidelines users must agree to when using this platform.',
        };
      case 'conduct':
        return {
          title: 'Code of Conduct',
          content: 'This is a placeholder for the Code of Conduct. Here you would outline the expected behavior and community standards for all users on this platform.',
        };
      default:
        return { title: '', content: '' };
    }
  };
  const navigationLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Challenges', page: 'challenges' },
    { label: 'Projects', page: 'projects' },
    { label: 'Blog', page: 'blog' },
    { label: 'Community', page: 'community' },
    { label: 'Contact', page: 'contact' },
  ];

  const socialLinks = [
    {
      label: 'Website',
      url: 'https://codesocial.tech',
      icon: Globe,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/codesocial.tech',
      icon: Instagram,
    },
    {
      label: 'Discord',
      url: 'https://discord.com/channels/1049667734025289729/@home',
      icon: MessageCircle,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Code-Social',
      icon: Github,
    },
  ];

  const legalLinks: Array<{ label: string; type: ModalType }> = [
    { label: 'Privacy', type: 'privacy' },
    { label: 'Terms', type: 'terms' },
    { label: 'Code of Conduct', type: 'conduct' },
  ];

  const modal = modalOpen ? getModalContent(modalOpen) : null;

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={() => setModalOpen(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 rounded-lg p-1 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <h2
              id="modal-title"
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pr-8"
            >
              {modal?.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {modal?.content}
            </p>
          </div>
        </div>
      )}

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Can I Try This?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real Skills, Real Growth
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav aria-label="Footer navigation" className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
                  >
                    <Icon size={18} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Community
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Join thousands of developers learning and growing together through
              real-world challenges and projects.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Code-Social. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link, index: number) => (
                <div key={link.type} className="flex items-center space-x-4">
                  {index > 0 && (
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                  )}
                  <button
                    onClick={() => setModalOpen(link.type)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
