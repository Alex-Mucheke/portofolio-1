import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-900 border-t border-surface-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>&copy; 2025 .</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Alex-Mucheke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-mucheke-muniu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-500 text-sm">
          <p>Designed and developed with modern web technologies</p>
        </div>
      </div>
    </footer>
  );
}
