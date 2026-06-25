import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  layout: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  server: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono text-accent-purple border border-accent-purple/20 bg-accent-purple/5 mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My Tech{' '}
            <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated collection of technologies and tools I use daily to build
            exceptional digital products.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl glass-card gap-1">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 text-white border border-accent-cyan/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className={activeTab === index ? 'text-accent-cyan' : ''}>
                  {iconMap[category.icon]}
                </span>
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center text-accent-cyan">
                  {iconMap[skillCategories[activeTab].icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {skillCategories[activeTab].skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.3 + index * 0.1,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="skill-bar-fill"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { name: 'Git', icon: '🔧' },
            { name: 'Docker', icon: '🐳' },
            { name: 'Figma', icon: '🎨' },
            { name: 'REST API', icon: '🔌' },
            { name: 'GraphQL', icon: '◈' },
            { name: 'Testing', icon: '🧪' },
          ].map((item) => (
            <div
              key={item.name}
              className="glass-card-hover rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs font-medium text-gray-300">{item.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
