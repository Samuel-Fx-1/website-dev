import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] -translate-y-1/2" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono text-accent-green border border-accent-green/20 bg-accent-green/5 mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my career progression and the impactful work I've done
            along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/50 to-accent-pink/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0
                  ? 'lg:pr-[calc(50%+2rem)] lg:text-right'
                  : 'lg:pl-[calc(50%+2rem)]'
              } pl-12 lg:pl-0`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 w-4 h-4 rounded-full border-2 border-accent-cyan bg-dark-900 ${
                  index % 2 === 0
                    ? 'left-2 lg:left-[calc(50%-0.5rem)]'
                    : 'left-2 lg:left-[calc(50%-0.5rem)]'
                }`}
              >
                <div className="absolute inset-1 rounded-full bg-accent-cyan" />
              </div>

              {/* Experience Card */}
              <div className="glass-card-hover rounded-2xl p-6">
                {/* Period Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-4 ${
                  index % 2 === 0 ? 'lg:ml-auto' : ''
                }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.period}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-accent-cyan font-medium text-sm mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? 'lg:justify-end' : ''
                }`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
