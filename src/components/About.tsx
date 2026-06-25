import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  folder: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me to build exceptional software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-pink/20 rounded-3xl blur-xl" />

            <div className="relative glass-card rounded-3xl p-8 lg:p-10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs font-mono text-gray-500">
                  about.tsx
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-accent-purple">const</span>{' '}
                  <span className="text-accent-cyan">developer</span> = {'{'}
                </p>
                <p className="pl-4 text-gray-400">
                  <span className="text-accent-green">name</span>:{' '}
                  <span className="text-accent-orange">"Alex Chen"</span>,
                </p>
                <p className="pl-4 text-gray-400">
                  <span className="text-accent-green">role</span>:{' '}
                  <span className="text-accent-orange">"Full-Stack Developer"</span>,
                </p>
                <p className="pl-4 text-gray-400">
                  <span className="text-accent-green">location</span>:{' '}
                  <span className="text-accent-orange">"San Francisco, CA"</span>,
                </p>
                <p className="pl-4 text-gray-400">
                  <span className="text-accent-green">education</span>:{' '}
                  <span className="text-accent-orange">"B.S. Computer Science"</span>,
                </p>
                <p className="pl-4 text-gray-400">
                  <span className="text-accent-green">passion</span>:{' '}
                  <span className="text-accent-orange">"Building scalable apps"</span>,
                </p>
                <p className="text-gray-400">{'}'}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I'm a passionate full-stack developer with 5+ years of experience building
                  web applications that are fast, accessible, and beautifully designed. I love
                  working with modern technologies and am always exploring new tools to deliver
                  the best possible solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card-hover rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center text-accent-cyan">
                    {iconMap[stat.icon]}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-6 glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">
                What I Bring to the Table
              </h3>
              <ul className="space-y-3">
                {[
                  'Clean, maintainable, and well-documented code',
                  'Responsive designs that work on every device',
                  'Performance-optimized applications',
                  'Strong communication and collaboration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg
                      className="w-5 h-5 text-accent-green shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
