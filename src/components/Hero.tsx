import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight, Code, Database, Cloud } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzI3MzEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5LTRIMzZjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDR2LTRjLTIuMiAwLTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface-800/50 border border-surface-700 rounded-full text-sm text-slate-300 mb-6"
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              Available for new opportunities
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Alex Mucheke
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junior Software Developer
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I craft dynamic full-stack solutions that bridge the gap between innovative ideas and 
              production reality. With mastery in Angular, NestJS, and PostgreSQL, I architect robust 
              applications that scale seamlessly from database to deployment.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">3+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-surface-900 font-semibold rounded-lg shadow-lg hover:shadow-amber-500/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} />
                View My Work
              </motion.button>
              
              <motion.a
                href="https://docs.google.com/document/d/1Pq5-4zGUh4vtK3UZVxKNk_PDh4e0WZFZnWgghxals84/edit?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-surface-700 text-slate-300 font-semibold rounded-lg hover:border-amber-500/50 hover:bg-surface-800/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 bg-amber-500/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="text-amber-400" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute top-16 right-12 w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Database className="text-orange-400" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 left-12 w-16 h-16 bg-amber-600/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <Cloud className="text-amber-500" size={32} />
              </motion.div>

              <motion.div
                className="w-64 h-80 bg-surface-800/50 backdrop-blur-sm border border-surface-700 rounded-2xl p-6 shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-32 bg-surface-900 rounded-lg mb-4 p-4 flex items-center justify-center">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mb-1">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="text-slate-400 text-[8px]">Frontend</span>
                    </div>
                    
                    <div className="text-slate-400 text-lg">→</div>
                    
                    <div className="text-center">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mb-1">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <span className="text-slate-400 text-[8px]">API</span>
                    </div>
                    
                    <div className="text-slate-400 text-lg">→</div>
                    
                    <div className="text-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-1">
                        <span className="text-white text-xs font-bold">D</span>
                      </div>
                      <span className="text-slate-400 text-[8px]">Database</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Full Stack Solutions</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Enterprise applications with modern architecture and scalable design patterns.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">Angular</span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">NestJS</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">PostgreSQL</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-slate-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
