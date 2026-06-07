import { experiences } from '../data';
import { Sparkles, Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#030712] border-t border-white/5' : 'bg-white border-t border-zinc-150'
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
            <span>Professional Journey</span>
          </motion.div>
          
          <motion.h2
            id="experience-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            My Experience
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-0">
          
          {/* Vertical core structural line */}
          <div className={`absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 transform -translate-x-1/2 hidden sm:block ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />
          <div className={`absolute left-8 top-2 bottom-2 w-0.5 sm:hidden ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />

          {/* Timeline Nodes Grid */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const rotateDir = idx % 2 === 0;
              return (
                <div
                  id={`exp-timeline-node-${exp.id}`}
                  key={exp.id}
                  className="relative flex flex-col sm:flex-row items-stretch sm:justify-between group"
                >
                  {/* Timeline bullet highlight */}
                  <div className="absolute left-[25px] sm:left-1/2 top-5 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-130 bg-current pointer-events-none"
                    style={{
                      color: idx === 0 
                        ? (darkMode ? '#22d3ee' : '#4f46e5') 
                        : (darkMode ? '#818cf8' : '#4f46e5')
                    }}
                  />

                  {/* Left Column Box (empty or populated depending on idx) */}
                  <div className={`w-full sm:w-[45%] order-2 sm:order-1 ${
                    rotateDir ? 'sm:text-right sm:pr-8' : 'sm:pl-8 sm:order-2'
                  } pl-12 sm:pl-0`}>
                    
                    <motion.div
                      id={`exp-card-${exp.id}`}
                      initial={{ opacity: 0, x: rotateDir ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`p-6 rounded-3xl border text-left shadow-lg transition-all duration-300 relative group-hover:shadow-md ${
                        darkMode
                          ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                          : 'bg-white border-zinc-200 hover:border-indigo-200 hover:bg-slate-50/50'
                      }`}
                    >
                      {/* Triangle accent anchor pointing to center line */}
                      <div className={`hidden sm:block absolute top-4.5 w-3 h-3 rotate-45 border-y border-x transition-colors duration-300 ${
                        rotateDir
                          ? 'right-[-7px] border-r border-t ' + (darkMode ? 'bg-[#151926] border-white/10' : 'bg-white border-zinc-200')
                          : 'left-[-7px] border-l border-b ' + (darkMode ? 'bg-[#151926] border-white/10' : 'bg-white border-zinc-200')
                      }`} />

                      {/* Header containing metadata */}
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 inline-block ${
                        darkMode
                          ? 'bg-zinc-900 text-cyan-400 border-zinc-800'
                          : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                      }`}>
                        {exp.duration}
                      </span>

                      <h3 className={`text-lg font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm mt-1 mb-4 opacity-80">
                        <span className="flex items-center gap-1">
                          <Building size={14} className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
                          <strong>{exp.company}</strong>
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            <span>{exp.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Key highlights bullet points */}
                      <ul className="space-y-2 mb-5">
                        {exp.description.map((bullet, bIdx) => (
                          <li
                            id={`exp-${exp.id}-bullet-${bIdx}`}
                            key={bIdx}
                            className={`text-sm leading-relaxed relative pl-4.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-600'
                            }`}
                          >
                            <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Stack Capsules */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-zinc-800/20 dark:border-zinc-800/50">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              darkMode
                                ? 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                                : 'bg-slate-100 text-zinc-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Spacer helper box for centering details correctly */}
                  <div className="hidden sm:block w-[45%] order-1 sm:order-2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
