import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { typingTexts } from '../data/portfolio';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
      if (charIndex + 1 === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        return;
      }
    }
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px]" />

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-20 right-10 lg:right-20 hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass-card rounded-2xl p-4 text-xs font-mono text-gray-500">
          <div>
            <span className="text-accent-purple">const</span>{' '}
            <span className="text-accent-cyan">developer</span> = {'{'}
          </div>
          <div className="pl-4">
            <span className="text-accent-green">name</span>:{' '}
            <span className="text-accent-orange">"Alex Chen"</span>,
          </div>
          <div className="pl-4">
            <span className="text-accent-green">passion</span>:{' '}
            <span className="text-accent-orange">"Building"</span>,
          </div>
          <div>{'}'}</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 lg:left-20 hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: -3 }}
      >
        <div className="glass-card rounded-2xl p-4 text-xs font-mono text-gray-500">
          <div>
            <span className="text-accent-pink">function</span>{' '}
            <span className="text-accent-cyan">create</span>() {'{'}
          </div>
          <div className="pl-4">
            <span className="text-accent-purple">return</span>{' '}
            <span className="text-accent-orange">"amazing"</span>;
          </div>
          <div>{'}'}</div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
          </span>
          <span className="text-gray-300">Available for new projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Alex Chen</span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-2 h-10 flex items-center justify-center">
            <span className="font-mono text-accent-cyan">&gt; </span>
            <span className="ml-2">{displayText}</span>
            <span className="typing-cursor" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft production-ready web applications with clean architecture and
          exceptional user experiences. Passionate about turning complex problems
          into elegant, scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-cyan/30 transition-all duration-300 flex items-center gap-2"
          >
            <span>View My Work</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-full blur-md opacity-60 animate-pulse-slow" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-dark-900">
              <img
                src="/images/profile.jpg"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent-green flex items-center justify-center border-2 border-dark-900">
              <svg className="w-4 h-4 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-mono glass-card text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-mono">scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
