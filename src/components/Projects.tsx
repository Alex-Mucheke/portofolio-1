import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Image } from 'lucide-react';

const projects = [
  {
    title: 'EduSoma - Learning Management System',
    description:
      'An innovative Learning Management System that revolutionizes online education. Features multi-role user management, course creation, progress tracking, interactive quizzes, automated certificates, and discussion forums. Built with modern fullstack architecture.',
    image: '/E-learning.png',
    tech: ['Angular', 'NestJS 11.0', 'PostgreSQL', 'Prisma ORM', 'TailwindCSS', 'JWT Auth'],
    github: 'https://github.com/Alex-Mucheke/cbc-platform',
    demo: 'https://github.com/Alex-Mucheke/cbc-platform',
  },
  {
    title: 'Car Rental Management System',
    description:
      'A dynamic full-stack car rental management system with role-based access control for admins, agents, and customers. Features car browsing, booking system, profile management, reviews, and real-time notifications.',
    image: 'Cars.png',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'JWT Auth', 'Cloudinary'],
    github: 'https://github.com/Alex-Mucheke/Need-a-ride-',
    demo: 'https://github.com/Alex-Mucheke/Need-a-ride-',
  },
  {
    title: 'SendIt - Parcel Delivery Management System',
    description:
      'An intelligent parcel delivery management system with real-time tracking, role-based access control, and advanced route optimization. Features interactive maps, live location updates, and multi-role system for admins, drivers, and users.',
    image: 'Sendit.png',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Prisma', 'WebSockets', 'Leaflet Maps'],
    github: 'https://github.com/Alex-Mucheke/parcel delivery',
    demo: 'https://github.com/Alex-Mucheke/parcel delivery',
  },
  {
    title: ' E-commerce Platform',
    description:
      'A modern full-stack e-commerce platform built with NestJS and Angular. Features product management, shopping cart functionality, checkout flow, payment integration, and responsive design for seamless online shopping experiences.',
    image: 'Shoppie.png',
    tech: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Responsive Design'],
    github: 'https://github.com/Alex-Mucheke/e-commerce-website-2',
    demo:'https://e-commerce-website-2-nu.vercel.app/'
  },
  {
    title: ' Eco-Tourism Website',
    description:
      'A stunning, responsive website for an eco-tourism and nature adventure company. Features sustainable tourism experiences, nature activities, interactive galleries, and environmental conservation awareness. Built with pure frontend technologies.',
    image: '/greenscape.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Font Awesome', 'Vercel'],
    github: 'https://github.com/Alex-Mucheke/tourisim-prj',
    demo: 'https://tourisim-prj.vercel.app/',
  },
  {
    title: 'My Portfolio - Modern Developer Portfolio',
    description:
      'A modern, responsive portfolio website showcasing full-stack development skills and projects. Features smooth animations, professional design, interactive sections, and comprehensive project showcase. Built with React, TypeScript, and Tailwind CSS.',
    image: '/portfolio.png',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Vite'],
    github: 'github.com/Alex-Mucheke/portofolio-1',
    demo: 'https://Alex-Mucheke-portfolio-ten-nu.vercel.app/',
  },


 
  
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 bg-surface-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-surface-800 border border-surface-700 rounded-xl overflow-hidden h-full flex flex-col hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                  <div className="h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center relative overflow-hidden">
                    {project.image && project.image !== 'placeholder' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image size={64} className="text-slate-600" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-800/80 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 mb-4 flex-1">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-surface-700 text-slate-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface-700 hover:bg-surface-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-lg transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
