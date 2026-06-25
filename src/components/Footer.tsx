import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-bold text-dark-900 text-sm font-mono">
                A
              </div>
              <div>
                <span className="text-sm font-medium text-white">
                  Alex Chen
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  © {new Date().getFullYear()}
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-cyan transition-colors group"
            >
              <span>Back to top</span>
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-gray-500">
              Designed & Built with{' '}
              <span className="text-accent-pink">♥</span> using{' '}
              <span className="text-gray-300">React</span> +{' '}
              <span className="text-gray-300">Tailwind CSS</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
