import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Theme state check (persisted inside local caching)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // High contrast light mode on default is excellent, let's start with dark mode for high-tech premium aesthetics
    return true; 
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync class theme markers
  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Track scroll position to update active navbar indicators automatically
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    // Initial call to set active section on mount
    handleScrollObserver();
    
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePrintResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
      darkMode ? 'bg-[#030712] text-slate-200' : 'bg-slate-50 text-zinc-900'
    }`}>
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-400 z-50 origin-left"
        style={{ scaleX: '1' }} // Placeholder if we want custom scroll logic, or simple cosmetic bar
      />

      {/* Global Glassmorphic Primary Navigation Head */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onPrintResume={handlePrintResume}
      />

      {/* Modular Section Frameworks */}
      <main className="relative">
        <Hero darkMode={darkMode} onPrintResume={handlePrintResume} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Structured Footer */}
      <Footer darkMode={darkMode} />

      {/* Resume modal overlay with mount state checks */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
