import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  onPrintResume: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode, activeSection, onPrintResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
        scrolled
          ? 'py-3 backdrop-blur-md shadow-lg border-b ' +
            (darkMode ? 'bg-[#030712]/80 border-white/10' : 'bg-white/80 border-zinc-200/80')
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo with Bento styling */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-base transition-all duration-300 ${
              darkMode 
                ? 'bg-gradient-to-tr from-blue-600 to-purple-500 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-gradient-to-tr from-blue-600 to-indigo-700 text-white shadow-md'
            }`}>
              M
            </div>
            <span className={`font-sans font-extrabold text-lg tracking-tight transition-colors duration-300 ${
              darkMode ? 'text-white group-hover:text-blue-400' : 'text-zinc-900 group-hover:text-blue-600'
            }`}>
              MANSI<span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  id={`nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 focus:outline-none ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-white/10'
                        : 'text-slate-900 bg-slate-100'
                      : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-zinc-650 hover:text-zinc-950 hover:bg-zinc-150/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop Right actions: Theme toggle and Resume Quick View */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-white/5 border border-white/10 text-amber-400 hover:text-amber-300 hover:bg-white/10 focus:ring-blue-500/50'
                  : 'bg-zinc-100 border border-zinc-200 text-zinc-655 hover:text-zinc-950 hover:bg-zinc-200 focus:ring-blue-500/50'
              }`}
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              id="nav-resume-btn"
              onClick={onPrintResume}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-md cursor-pointer border focus:outline-none ${
                darkMode
                  ? 'bg-white text-slate-950 border-transparent hover:bg-slate-100 shadow-white/5'
                  : 'bg-slate-950 text-white border-transparent hover:bg-slate-800'
              }`}
            >
              <Briefcase size={13} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              id="mobile-theme-toggle"
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg focus:outline-none ${
                darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t mt-3 overflow-hidden ${
              darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? darkMode
                          ? 'text-cyan-400 bg-zinc-900'
                          : 'text-indigo-600 bg-indigo-50'
                        : darkMode
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-3 border-t mt-2 flex flex-col gap-2">
                <button
                  id="mobile-nav-resume-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onPrintResume();
                  }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all border ${
                    darkMode
                      ? 'bg-zinc-900 text-white border-zinc-700'
                      : 'bg-zinc-100 text-zinc-900 border-zinc-300'
                  }`}
                >
                  <Briefcase size={16} />
                  <span>Interactive Resume / Print</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
