import { personalInfo } from '../data';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className={`py-12 border-t transition-colors duration-300 relative ${
        darkMode ? 'bg-[#030712] border-white/5' : 'bg-slate-50 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Social Icons row */}
        <div className="flex justify-center items-center gap-6">
          <a
            id="footer-github-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800'
                : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-950 hover:border-zinc-350 shadow-sm'
            }`}
            aria-label="GitHub Profile Link"
          >
            <Github size={18} />
          </a>

          <a
            id="footer-linkedin-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800'
                : 'bg-white border-zinc-200 text-zinc-650 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            aria-label="LinkedIn Profile Link"
          >
            <Linkedin size={18} />
          </a>

          <a
            id="footer-email-link"
            href={`mailto:${personalInfo.email}`}
            className={`p-3 rounded-full border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800'
                : 'bg-white border-zinc-200 text-zinc-650 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            aria-label="Direct Email"
          >
            <Mail size={18} />
          </a>

          <a
            id="footer-phone-link"
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className={`p-3 rounded-full border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800'
                : 'bg-white border-zinc-200 text-zinc-650 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            aria-label="Direct Phone Cell Call"
          >
            <Phone size={18} />
          </a>
        </div>

        {/* Brand short message label */}
        <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Focusing on visual quality, security hardening, and pristine execution.
        </p>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-4 text-xs font-medium tracking-wide opacity-75">
          <span className={darkMode ? 'text-zinc-500' : 'text-zinc-450'}>
            &copy; {currentYear} Mansi Ranjan. All Rights Reserved.
          </span>
          <span className="hidden sm:inline opacity-30">&bull;</span>
          <span className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>in Lucknow, India</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
