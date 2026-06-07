import { useState, FormEvent } from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulating API submit response delay. Keep it robust!
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean Form inputs
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Auto-dismiss success notification after some duration
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#030712]' : 'bg-white border-t border-zinc-150'
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
            <span>Connect Wit Me</span>
          </motion.div>
          
          <motion.h2
            id="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-sans text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Get In Touch
          </motion.h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Contact Layout Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Column Left: Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 id="contact-info-heading" className={`text-xl font-bold font-sans ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Contact Information
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Have an opening, a freelance project, or just want to discuss software engineering? Drop me a line! I am responsive to electronic mail and direct cellular dialing.
            </p>

            {/* Email Contact Box */}
            <div className={`p-4 rounded-3xl border flex items-center justify-between group transition-all duration-300 relative ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-zinc-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-zinc-900 text-cyan-400' : 'bg-white shadow-xs text-indigo-600'}`}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wide ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Email Address</h4>
                  <a href={`mailto:${personalInfo.email}`} className={`text-sm font-semibold hover:underline ${darkMode ? 'text-zinc-100' : 'text-zinc-800'}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <button
                id="copy-email-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className={`p-2 rounded-lg transition-all border ${
                  darkMode
                    ? 'hover:bg-zinc-900 border-transparent text-zinc-400 hover:text-white'
                    : 'hover:bg-white border-transparent text-zinc-500 hover:text-zinc-900'
                }`}
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check size={15} className="text-emerald-500 animate-scale" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Phone Contact Box */}
            <div className={`p-4 rounded-3xl border flex items-center justify-between group transition-all duration-300 relative ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-zinc-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-zinc-900 text-cyan-400' : 'bg-white shadow-xs text-indigo-600'}`}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wide ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Direct Phone</h4>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className={`text-sm font-semibold hover:underline ${darkMode ? 'text-zinc-100' : 'text-zinc-800'}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <button
                id="copy-phone-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className={`p-2 rounded-lg transition-all border ${
                  darkMode
                    ? 'hover:bg-zinc-900 border-transparent text-zinc-400 hover:text-white'
                    : 'hover:bg-white border-transparent text-zinc-500 hover:text-zinc-900'
                }`}
                title="Copy to clipboard"
              >
                {copiedPhone ? <Check size={15} className="text-emerald-500 animate-scale" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Location Contact Box */}
            <div className={`p-4 rounded-3xl border flex items-center gap-3.5 transition-all duration-300 ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-zinc-200 shadow-sm'
            }`}>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-zinc-900 text-cyan-400' : 'bg-white shadow-xs text-indigo-600'}`}>
                <MapPin size={18} />
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wide ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Current Location</h4>
                <p className={`text-sm font-semibold ${darkMode ? 'text-zinc-100' : 'text-zinc-850'}`}>
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Grid cards */}
            <div className="pt-4 border-t border-zinc-800/20 dark:border-zinc-800/40 space-y-4">
              <h4 id="social-grid-heading" className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-zinc-500' : 'text-zinc-450'}`}>
                Social Coordinates
              </h4>
              <div className="flex gap-4">
                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all shadow-xs ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                      : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950'
                  }`}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all shadow-xs ${
                    darkMode
                      ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                      : 'bg-white border-zinc-200 text-zinc-700 hover:text-indigo-600 hover:border-indigo-200'
                  }`}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column Right: Interactive Form Box */}
          <div className="lg:col-span-7">
            
            <motion.div
              id="contact-form-panel"
              className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 select-none ${
                darkMode
                  ? 'bg-white/5 border-white/10 shadow-2xl'
                  : 'bg-white border-zinc-200 shadow-xl'
              }`}
            >
              <h3 id="form-heading" className={`text-lg font-extrabold tracking-tight mb-6 font-sans ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                Send a Message
              </h3>

              <form id="contact-inner-form" onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-input-name" className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Your Name
                    </label>
                    <input
                      id="form-input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mansi Ranjan"
                      className={`w-full px-4 py-3 text-sm rounded-xl font-sans font-medium focus:outline-none focus:ring-2 border transition-all ${
                        darkMode
                          ? 'bg-zinc-900 text-white border-zinc-800 focus:ring-indigo-500/50 focus:border-indigo-500'
                          : 'bg-slate-50 text-zinc-900 border-zinc-200 focus:ring-indigo-500/30 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-input-email" className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Email Address
                    </label>
                    <input
                      id="form-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl font-sans font-medium focus:outline-none focus:ring-2 border transition-all ${
                        darkMode
                          ? 'bg-zinc-900 text-white border-zinc-800 focus:ring-indigo-500/50 focus:border-indigo-500'
                          : 'bg-slate-50 text-zinc-900 border-zinc-200 focus:ring-indigo-500/30 focus:border-indigo-600'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-input-subject" className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Subject
                  </label>
                  <input
                    id="form-input-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Internship Opportunities / Project Discussion"
                    className={`w-full px-4 py-3 text-sm rounded-xl font-sans font-medium focus:outline-none focus:ring-2 border transition-all ${
                      darkMode
                        ? 'bg-zinc-900 text-white border-zinc-800 focus:ring-indigo-500/50 focus:border-indigo-500'
                        : 'bg-slate-50 text-zinc-900 border-zinc-200 focus:ring-indigo-500/30 focus:border-indigo-600'
                    }`}
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-input-message" className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Message
                  </label>
                  <textarea
                    id="form-input-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or role details..."
                    className={`w-full px-4 py-3 text-sm rounded-xl font-sans font-medium focus:outline-none focus:ring-2 border transition-all ${
                      darkMode
                        ? 'bg-zinc-900 text-white border-zinc-800 focus:ring-indigo-500/50 focus:border-indigo-500'
                        : 'bg-slate-50 text-zinc-900 border-zinc-200 focus:ring-indigo-500/30 focus:border-indigo-600'
                    }`}
                  />
                </div>

                {/* Submit action butoon */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                    darkMode
                      ? 'bg-white text-black border-white hover:bg-neutral-105 hover:scale-[1.01]'
                      : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Shoot Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Dynamic Success Card Modal Overlay */}
              <motion.div
                id="contact-form-success-overlay"
                initial={false}
                animate={{ opacity: isSuccess ? 1 : 0, pointerEvents: isSuccess ? 'auto' : 'none' }}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 backdrop-blur-md transition-opacity duration-300 ${
                  darkMode ? 'bg-zinc-950/95' : 'bg-white/95'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  darkMode ? 'bg-indigo-950 text-cyan-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <CheckCircle2 size={36} className="animate-scale" />
                </div>
                <h3 className={`text-xl font-extrabold pb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                  Message Sent Successfully!
                </h3>
                <p className={`text-sm max-w-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  Thank you for reaching out! Your draft message has been recorded. Mansi will get back to you as soon as possible.
                </p>
                <button
                  id="dismiss-success-overlay"
                  onClick={() => setIsSuccess(false)}
                  className={`mt-6 px-4.5 py-2 rounded-lg text-xs font-bold transition-all border ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-cyan-400 hover:bg-zinc-800'
                      : 'bg-slate-100 border-zinc-200 text-zinc-700 hover:bg-slate-200'
                  }`}
                >
                  Close Window
                </button>
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
