import { useState } from 'react';
import { skills } from '../data';
import { Sparkles, Code2, Layers, Cpu, Terminal, ShieldAlert, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend/DB' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'tools', name: 'Tools' },
    { id: 'soft', name: 'Soft Skills' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Helper to resolve generic icon category markers
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages': return <Code2 size={16} className="text-amber-500" />;
      case 'frontend': return <Layers size={16} className="text-cyan-400" />;
      case 'backend': return <Cpu size={16} className="text-emerald-500" />;
      case 'mobile': return <Terminal size={16} className="text-pink-500" />;
      case 'tools': return <ShieldAlert size={16} className="text-indigo-400" />;
      default: return <HeartHandshake size={16} className="text-amber-400" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#030712]' : 'bg-slate-50'
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
            <span>Core Competencies</span>
          </motion.div>
          
          <motion.h2
            id="skills-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            My Tech Stack & Skills
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              id={`skill-cat-btn-${category.id}`}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1.5 ${
                activeCategory === category.id
                  ? darkMode
                    ? 'bg-white text-slate-950 font-extrabold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                    : 'bg-slate-900 text-white font-extrabold shadow-md'
                  : darkMode
                  ? 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:bg-[#030712]'
                  : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Reusable Skill Card Grid with Framer Motion Layout Animations */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={`p-5 rounded-3xl border flex flex-col justify-between transition-all group relative overflow-hidden ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 shadow-lg'
                    : 'bg-white border-zinc-200/80 hover:border-indigo-200 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {/* Background decorative spotlight */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  darkMode ? 'bg-cyan-500/20' : 'bg-indigo-500/20'
                }`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <h3 className={`font-sans text-sm font-bold tracking-tight ${
                      darkMode ? 'text-zinc-200' : 'text-zinc-900'
                    }`}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`font-mono text-xs font-semibold ${
                    darkMode ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar meter with matching active animation */}
                <div id={`skill-meter-bg-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} className={`h-1.5 w-full rounded-full overflow-hidden ${
                  darkMode ? 'bg-zinc-800' : 'bg-zinc-100'
                }`}>
                  <motion.div
                    id={`skill-meter-filled-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      darkMode
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                        : 'bg-gradient-to-r from-indigo-600 to-indigo-800'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative highlight info below */}
        <div className="mt-12 text-center">
          <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
            *Skill levels represent self-assessed confidence, practical implementation hours, and university grading metrics.
          </p>
        </div>

      </div>
    </section>
  );
}
