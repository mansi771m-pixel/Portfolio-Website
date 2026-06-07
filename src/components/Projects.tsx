import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, Sparkles, FolderDot, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((proj) => proj.category === activeTab);

  return (
    <section
      id="projects"
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
            <span>Project Showcase</span>
          </motion.div>
          
          <motion.h2
            id="projects-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            My Recent Projects
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              id={`project-tab-btn-${tab.toLowerCase()}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1.5 ${
                activeTab === tab
                  ? darkMode
                    ? 'bg-cyan-500 text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    : 'bg-indigo-600 text-white font-extrabold shadow-md shadow-indigo-600/35'
                  : darkMode
                  ? 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-slate-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Project Grid Layout */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => (
              <motion.div
                id={`project-card-${project.id}`}
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`flex flex-col h-full rounded-3xl border overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 relative ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 shadow-lg'
                    : 'bg-white border-zinc-200/80 hover:border-indigo-200'
                }`}
              >
                {/* Product/Card Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden select-none bg-zinc-900 leading-none">
                  <img
                    id={`project-thumbnail-${project.id}`}
                    src={project.image}
                    alt={`${project.title} Thumbnail`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Category floating badge */}
                  <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md border ${
                    darkMode
                      ? 'bg-zinc-950/80 border-zinc-700/60 text-cyan-400'
                      : 'bg-white/80 border-zinc-200 text-indigo-700'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Content details Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <div className="flex gap-2 items-center">
                      <FolderDot size={18} className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h3 className={`text-xl font-extrabold tracking-tight group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {project.title}
                      </h3>
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-5">
                    {/* Key tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-bold px-2 py-1 rounded ${
                            darkMode
                              ? 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                              : 'bg-slate-100 text-zinc-700 border border-zinc-150'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dual Link Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/25 dark:border-zinc-800/40">
                      
                      <a
                        id={`project-${project.id}-github-link`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                          darkMode
                            ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-250 hover:text-white'
                            : 'bg-white border-zinc-300 hover:bg-slate-50 text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          id={`project-${project.id}-live-link`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            darkMode
                              ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_4px_10px_rgba(34,211,238,0.2)] hover:shadow-[0_4px_15px_rgba(34,211,238,0.35)]'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_4px_10px_rgba(79,70,229,0.25)] hover:shadow-[0_4px_15px_rgba(79,70,229,0.4)]'
                          }`}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}

                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
