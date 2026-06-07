import { educationList } from '../data';
import { Sparkles, Calendar, MapPin, GraduationCap, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <section
      id="education"
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
            <span>Academic Qualifications</span>
          </motion.div>
          
          <motion.h2
            id="education-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            My Education
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-0">
          
          {/* Vertical layout line */}
          <div className={`absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 transform -translate-x-1/2 hidden sm:block ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />
          <div className={`absolute left-8 top-2 bottom-2 w-0.5 sm:hidden ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />

          <div className="space-y-8">
            {educationList.map((edu, idx) => {
              const rotateDir = idx % 2 === 0;
              return (
                <div
                  id={`edu-timeline-node-${edu.id}`}
                  key={edu.id}
                  className="relative flex flex-col sm:flex-row items-stretch sm:justify-between group"
                >
                  {/* Bullet node tracker */}
                  <div className={`absolute left-[25px] sm:left-1/2 top-5 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-130 bg-indigo-500 pointer-events-none ${
                    darkMode ? 'border-zinc-900' : 'border-white'
                  }`} />

                  {/* Left Column Box */}
                  <div className={`w-full sm:w-[45%] order-2 sm:order-1 ${
                    rotateDir ? 'sm:text-right sm:pr-8' : 'sm:pl-8 sm:order-2'
                  } pl-12 sm:pl-0`}>
                    
                    <motion.div
                      id={`edu-card-${edu.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5 }}
                      className={`p-6 rounded-3xl border text-left shadow-lg transition-all duration-300 relative group-hover:shadow-md ${
                        darkMode
                          ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                          : 'bg-white border-zinc-200 hover:border-indigo-200 shadow-sm'
                      }`}
                    >
                      {/* Triangle accent anchor pointing to center timeline */}
                      <div className={`hidden sm:block absolute top-4.5 w-3 h-3 rotate-45 border-y border-x transition-colors duration-300 ${
                        rotateDir
                          ? 'right-[-7px] border-r border-t ' + (darkMode ? 'bg-[#151926] border-white/10' : 'bg-white border-zinc-200')
                          : 'left-[-7px] border-l border-b ' + (darkMode ? 'bg-[#151926] border-white/10' : 'bg-white border-zinc-200')
                      }`} />

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          darkMode
                            ? 'bg-zinc-950 text-cyan-400 border-zinc-800'
                            : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                        }`}>
                          {edu.duration}
                        </span>
                        
                        {edu.grade && (
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 border ${
                            darkMode
                              ? 'bg-zinc-900 text-teal-400 border-teal-500/10'
                              : 'bg-teal-50 text-teal-850 border-teal-100'
                          }`}>
                            <FileCheck size={13} />
                            <span>Grade: {edu.grade}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2 items-start mb-2">
                        <GraduationCap size={20} className={`mt-1 flex-shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <div>
                          <h3 className={`text-lg font-extrabold tracking-tight ${
                            darkMode ? 'text-white' : 'text-zinc-900'
                          }`}>
                            {edu.degree} &mdash; {edu.field}
                          </h3>
                        </div>
                      </div>

                      <p className={`text-sm font-semibold opacity-90 mb-3 ${
                        darkMode ? 'text-zinc-200' : 'text-zinc-700'
                      }`}>
                        {edu.school}
                      </p>

                      <div className="flex items-center gap-1 text-xs opacity-70 mb-4">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </div>

                      {edu.details && (
                        <p className={`text-sm leading-relaxed border-t pt-4 ${
                          darkMode ? 'text-zinc-400 border-zinc-800' : 'text-zinc-500 border-zinc-150'
                        }`}>
                          {edu.details}
                        </p>
                      )}

                    </motion.div>
                  </div>

                  {/* Spacer helper box */}
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
