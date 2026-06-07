import { personalInfo, experiences, educationList, certifications, skills } from '../data';
import { X, Printer, Download, Phone, Mail, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function ResumeModal({ isOpen, onClose, darkMode }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm print:p-0 print:bg-white print:relative print:z-0 py-6"
    >
      {/* Modal Container */}
      <motion.div
        id="resume-modal-container"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col relative print:shadow-none print:rounded-none print:w-full print:max-w-none print:h-auto ${
          darkMode ? 'bg-zinc-950 text-white border border-zinc-800' : 'bg-white text-zinc-900 border border-zinc-200'
        }`}
      >
        {/* Modal Controls Bar (hidden during active print) */}
        <div className={`p-4 border-b flex items-center justify-between print:hidden ${
          darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-zinc-200'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-indigo-500 animate-pulse" />
            <span className="text-sm font-bold font-sans">Interactive Digital Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-action"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="resume-close-action"
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-all ${
                darkMode ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Content Body */}
        <div
          id="printable-resume-body"
          className={`flex-1 overflow-y-auto p-8 sm:p-12 font-sans max-h-[80vh] print:max-h-none print:overflow-visible print:p-0 ${
            darkMode ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'
          }`}
        >
          {/* Resume Header Panel matching her resume image layout exactly */}
          <div className="text-center pb-6 border-b border-zinc-300 dark:border-zinc-800 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg font-bold tracking-wide text-indigo-600 dark:text-cyan-400">
              {personalInfo.tagline}
            </p>
            
            {/* Contact row details */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm font-medium opacity-85 pt-1 font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Phone size={13} />
                <span>{personalInfo.phone}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail size={13} />
                <span>{personalInfo.email}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          <div className="space-y-6 pt-6 text-left">
            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Profile Summary
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {personalInfo.summary}
              </p>
            </div>

            {/* Education Track */}
            <div className="space-y-3">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Education
              </h2>
              {educationList.map((edu) => (
                <div key={edu.id} className="space-y-1 text-sm">
                  <div className="flex justify-between font-bold">
                    <span>{edu.degree} in {edu.field}</span>
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
                    <span>{edu.school}, {edu.location}</span>
                    {edu.grade && <span>CGPA: {edu.grade}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Work History/Internships */}
            <div className="space-y-4">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Work Experience
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5 text-sm">
                  <div className="flex justify-between font-bold">
                    <span>{exp.role}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-cyan-400 font-bold mb-1">
                    {exp.company}
                  </div>
                  <ul className="list-disc pl-5 text-xs text-zinc-600 dark:text-zinc-350 space-y-1 leading-relaxed">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Structured Project summaries */}
            <div className="space-y-4">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Academic & Web Projects
              </h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest grid grid-cols-12 font-bold mb-1 border-b pb-1 border-zinc-250 dark:border-zinc-800">
                  <span className="col-span-4">Title</span>
                  <span className="col-span-8">Description</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-12 leading-relaxed">
                    <span className="col-span-4 font-bold">College Campus Connect</span>
                    <span className="col-span-8 text-xs text-zinc-600 dark:text-zinc-350">
                      Features include attendance tracking, timetable management, notices, and assignment reminders. Built with React.js, Express, and MongoDB.
                    </span>
                  </div>
                  <div className="grid grid-cols-12 leading-relaxed">
                    <span className="col-span-4 font-bold">DevPortfolio</span>
                    <span className="col-span-8 text-xs text-zinc-600 dark:text-zinc-350">
                      Designed a responsive and intuitive user interface with smooth navigation and modern UI components. Styled with Tailwind CSS and Animate elements.
                    </span>
                  </div>
                  <div className="grid grid-cols-12 leading-relaxed">
                    <span className="col-span-4 font-bold">ShopSphere</span>
                    <span className="col-span-8 text-xs text-zinc-600 dark:text-zinc-350">
                      Built a complete online shopping platform with user authentication, product catalog, cart, payment integration, and order management.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Skills layout */}
            <div className="space-y-3">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Skills
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-indigo-700 dark:text-cyan-400">Technical Skills:</strong>{' '}
                  <span className="text-zinc-650 dark:text-zinc-300">
                    Java &bull; C &bull; C++ &bull; Python &bull; Node.js &bull; React.js &bull; HTML &bull; CSS &bull; JavaScript &bull; Bootstrap &bull; Flutter &bull; Dart &bull; React Native &bull; MongoDB &bull; MySQL &bull; Firebase &bull; Git &bull; GitHub &bull; VS Code &bull; Postman &bull; REST APIs
                  </span>
                </div>
                <div>
                  <strong className="text-indigo-700 dark:text-cyan-400">Soft Skills:</strong>{' '}
                  <span className="text-zinc-650 dark:text-zinc-300">
                    Problem Solving &bull; Communication Skills &bull; Team Collaboration &bull; Time Management &bull; Critical Thinking &bull; Analytical Skills &bull; Quick Learning Ability &bull; Attention to Detail &bull; Project Management
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications and Milestones */}
            <div className="space-y-2">
              <h2 className="text-base font-black uppercase tracking-wider border-b pb-1 border-zinc-300 dark:border-zinc-800 text-indigo-700 dark:text-cyan-400">
                Certifications & Achievements
              </h2>
              <ul className="list-disc pl-5 text-xs text-zinc-600 dark:text-zinc-350 space-y-1.5 leading-relaxed">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <strong>{cert.title}</strong> &mdash; <span>{cert.issuer} ({cert.date})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

        {/* Informative Help footer */}
        <div className={`p-3 text-center text-[10px] flex items-center justify-center gap-1 opacity-70 print:hidden ${
          darkMode ? 'bg-zinc-950/85 border-t border-zinc-800/50' : 'bg-slate-50 border-t border-zinc-200'
        }`}>
          <AlertCircle size={12} className="text-indigo-500" />
          <span>Tip: Save in page format 'A4' and enable 'Background graphics' for accurate modern layout rendering.</span>
        </div>

      </motion.div>
    </div>
  );
}
