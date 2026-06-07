import { certifications } from '../data';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {
  return (
    <section
      id="achievements"
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
            <span>Success Indicators</span>
          </motion.div>
          
          <motion.h2
            id="achievements-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Certifications & Achievements
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Structured Grid of Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              id={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all group hover:shadow-lg relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-tr from-blue-950/20 to-purple-950/20 border-white/10 hover:border-white/20 hover:from-blue-950/30 hover:to-purple-950/30 shadow-lg'
                  : 'bg-white border-zinc-200 hover:border-indigo-200 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                {/* Custom Icon circle depending on the item index or title */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                  darkMode
                    ? 'bg-white/5 border border-white/10 text-white'
                    : 'bg-indigo-50 border border-indigo-100 text-indigo-700'
                }`}>
                  <Award size={24} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-400'
                    }`}>
                      {cert.issuer}
                    </span>
                    <span className={`text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full ${
                      darkMode ? 'bg-[#030712] text-cyan-400 border border-white/5' : 'bg-slate-100 text-zinc-650'
                    }`}>
                      {cert.date}
                    </span>
                  </div>

                  <h3 className={`text-base font-extrabold tracking-tight ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {cert.title}
                  </h3>

                  {cert.description && (
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-450' : 'text-zinc-600'
                    }`}>
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Verified badge indicators in bottom corner */}
              <div className="mt-6 pt-4 border-t border-zinc-800/10 dark:border-white/10 flex items-center gap-1.5 opacity-80 text-xs">
                <CheckCircle2 size={13} className="text-emerald-555" />
                <span className={darkMode ? 'text-zinc-450' : 'text-zinc-500'}>Credential Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
