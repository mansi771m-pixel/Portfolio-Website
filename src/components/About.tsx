import { personalInfo } from '../data';
import { Calendar, Award, GraduationCap, MapPin, Sparkles, Server, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    {
      id: 'stat1',
      icon: <Server size={22} className="text-indigo-500" />,
      value: '2',
      label: 'Internship Programs',
      detail: 'Full-Stack & Mobile development experience',
    },
    {
      id: 'stat2',
      icon: <Award size={22} className="text-cyan-500" />,
      value: 'Top 100',
      label: 'GDG Achiever',
      detail: 'Google Cloud GenAI national challenge',
    },
    {
      id: 'stat3',
      icon: <Cpu size={22} className="text-pink-500" />,
      value: '3+',
      label: 'Production Apps',
      detail: 'Fully solved software projects',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#030712] border-t border-white/5' : 'bg-white border-t border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border mb-4 bg-indigo-500/10 border-indigo-500/20 text-indigo-500"
          >
            <Sparkles size={12} />
            <span>My Story</span>
          </motion.div>
          
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            About Me
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Core Layout Grid - adjusted to center the bio after removing the secondary photo frame */}
        <div className="max-w-4xl mx-auto">
          
          {/* Professional Bio and Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 id="about-role-title" className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                Aspiring Full Stack Engineer pursuing B.Tech in CSE
              </h3>
              
              <p id="about-bio-text" className={`text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {personalInfo.summary}
              </p>

              <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I approach system design defensively, focusing on rigorous testing, clean typography, adaptive responsiveness, and server performance. Outside of writing code, you can find me reading documentation, practicing structured algorithms, or participating in cloud hackathons.
              </p>
            </motion.div>

            {/* Structured Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-3xl border flex items-center gap-3.5 ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-zinc-200/60'
              }`}>
                <div className={`p-2.5 rounded-lg ${darkMode ? 'bg-[#030712] text-cyan-400 border border-white/5' : 'bg-white text-indigo-600 shadow-sm'}`}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Current Studies</h4>
                  <p className={`text-sm font-bold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>B.Tech (CSE) pursuing, 2023 - 2027</p>
                </div>
              </div>

              <div className={`p-4 rounded-3xl border flex items-center gap-3.5 ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-zinc-200/60'
              }`}>
                <div className={`p-2.5 rounded-lg ${darkMode ? 'bg-[#030712] text-cyan-400 border border-white/5' : 'bg-white text-indigo-600 shadow-sm'}`}>
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Available for</h4>
                  <p className={`text-sm font-bold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Summer / Winter 2026 Internships</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/40">
              {stats.map((stat, idx) => (
                <motion.div
                  id={`stat-card-${idx}`}
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-4 rounded-3xl border shadow-lg flex flex-col justify-between ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-150'
                  }`}
                >
                  <div className="flex gap-2 items-center mb-2">
                    {stat.icon}
                    <span className="font-sans text-2xl font-black text-indigo-600 dark:text-cyan-400">{stat.value}</span>
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold leading-tight ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>{stat.label}</h4>
                    <span className={`text-[11px] leading-tight ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>{stat.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
