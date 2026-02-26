import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-surface-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect with me</h3>
                <p className="text-slate-400 mb-6">
                  Prefer to connect on social media? You can find me on these platforms:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://github.com/Alex-Mucheke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 rounded-lg hover:border-amber-500/50 hover:bg-surface-700 transition-all duration-300 group"
                  >
                    <Github size={24} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-slate-400 text-sm">Alex-Mucheke</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/alex-mucheke-muniu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 rounded-lg hover:border-amber-500/50 hover:bg-surface-700 transition-all duration-300 group"
                  >
                    <Linkedin size={24} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-slate-400 text-sm">alex-mucheke-muniu</p>
                    </div>
                  </a>

                  <a
                    href="mailto:alexmucheke49@gmail.com"
                    className="flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 rounded-lg hover:border-amber-500/50 hover:bg-surface-700 transition-all duration-300 group"
                  >
                    <Mail size={24} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-slate-400 text-sm">alexmucheke49@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
