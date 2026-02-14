import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, GitBranch, Globe, Layers, Terminal, Server, Cloud, Box } from 'lucide-react';

const skills = [
  {
    name: 'Angular',
    icon: Code2,
    description: 'Enterprise web applications',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'React',
    icon: Layers,
    description: 'Building interactive UIs',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'TypeScript',
    icon: Terminal,
    description: 'Type-safe development',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Backend development',
    color: 'from-green-400 to-emerald-600',
  },
  {
    name: 'NestJS',
    icon: Server,
    description: 'Scalable server-side apps',
    color: 'from-red-400 to-pink-600',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Relational database',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Prisma ORM',
    icon: Database,
    description: 'Type-safe database client',
    color: 'from-indigo-400 to-purple-600',
  },
  {
    name: 'PHP',
    icon: Code2,
    description: 'Server-side scripting',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'REST APIs',
    icon: Globe,
    description: 'API design & integration',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Git/GitHub',
    icon: GitBranch,
    description: 'Version control',
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Docker',
    icon: Box,
    description: 'Containerization',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Deployment',
    icon: Cloud,
    description: 'CI/CD & DevOps',
    color: 'from-teal-400 to-green-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-surface-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="bg-surface-900 border border-surface-700 rounded-xl p-6 h-full hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                    <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
