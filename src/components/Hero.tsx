import { personalInfo } from '../data';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  darkMode: boolean;
  onPrintResume: () => void;
}

export default function Hero({ darkMode, onPrintResume }: HeroProps) {
  // Smooth scroll handler
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#030712] text-slate-200' : 'bg-slate-50 text-zinc-900'
      }`}
    >
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full filter blur-[100px] opacity-40 transition-all ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-200'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full filter blur-[120px] opacity-40 transition-all ${
          darkMode ? 'bg-cyan-500' : 'bg-cyan-200'
        }`} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Profile Photo as Requested: Above "Hi, I am Mansi Ranjan", with ONLY ONE frame */}
          <motion.div
            id="hero-avatar-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Single Plain Custom Frame Profile Container */}
            <div className={`relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl p-1.5 border transition-all duration-300 select-none overflow-hidden rotate-2 ${
              darkMode
                ? 'bg-gradient-to-br from-white/10 to-transparent border-white/10 shadow-2xl'
                : 'bg-white border-zinc-200/80 shadow-xl'
            }`}>
              <img
                id="hero-profile-photo"
                src={personalInfo.avatar}
                alt={`${personalInfo.name} Portrait`}
                className="h-full w-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Status Ribbon with subtle hover bounce */}
          <motion.div
            id="hero-status"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all shadow-sm ${
              darkMode
                ? 'bg-zinc-900/80 border-indigo-500/20 text-cyan-400'
                : 'bg-indigo-50 border-indigo-100 text-indigo-700'
            }`}
          >
            <Sparkles size={13} className="animate-pulse" />
            <span>Open for Software Development Internships & Roles</span>
          </motion.div>

          {/* Title / Name Area */}
          <div className="space-y-3">
            <motion.h2
              id="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`font-mono text-sm tracking-widest uppercase ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}
            >
              Hi, I am
            </motion.h2>
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            >
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode 
                  ? 'from-white via-slate-100 to-zinc-400' 
                  : 'from-zinc-900 via-slate-800 to-zinc-700'
              }`}>
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              id="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`font-sans text-lg sm:text-xl font-medium tracking-wide ${
                darkMode ? 'text-cyan-400' : 'text-indigo-600'
              }`}
            >
              {personalInfo.tagline}
            </motion.p>
          </div>

          {/* Micro details: location contact */}
          <motion.div
            id="hero-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium opacity-85"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className={darkMode ? 'text-cyan-400' : 'text-indigo-600'} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className={darkMode ? 'text-cyan-400' : 'text-indigo-600'} />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className={darkMode ? 'text-cyan-400' : 'text-indigo-600'} />
              <span>{personalInfo.phone}</span>
            </div>
          </motion.div>

          {/* Brief introductory bio summary */}
          <motion.p
            id="hero-summary"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`max-w-xl text-base leading-relaxed ${
              darkMode ? 'text-zinc-400' : 'text-zinc-650'
            }`}
          >
            B.Tech student in Computer Science and Engineering with a deep curiosity for building scalable full-stack server ecosystems and fast touch interfaces. Let's make complex processes simple together!
          </motion.p>

          {/* Key Action Buttons */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <button
              id="hero-view-work-btn"
              onClick={() => handleScrollTo('#projects')}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all shadow-md group border cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-[0_4px_14px_rgba(79,70,229,0.3)]'
              }`}
            >
              <span>View My Work</span>
              <ArrowRight size={18} className="transition-transform duration-250 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-download-resume-btn"
              onClick={onPrintResume}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all border cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-zinc-100 hover:border-zinc-500'
                  : 'bg-white border-zinc-300 hover:bg-zinc-50 text-zinc-800 hover:border-zinc-400'
              }`}
            >
              <Download size={18} />
              <span>Interactive Resume</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
