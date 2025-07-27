import { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const HolographicForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [playHover] = useSound('/hover.mp3', { volume: 0.5 });
  const [playClick] = useSound('/click.mp3', { volume: 0.5 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(0, 255, 245, 0.5)',
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="glass relative overflow-hidden rounded-2xl p-8 max-w-md w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 holographic" />

      {/* Form content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center neon-text">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onMouseEnter={() => playHover()}
              className="w-full bg-cyber-darker/50 border border-holo-medium rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div>
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              onMouseEnter={() => playHover()}
              className="w-full bg-cyber-darker/50 border border-holo-medium rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div>
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              onMouseEnter={() => playHover()}
              className="w-full h-32 bg-cyber-darker/50 border border-holo-medium rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none resize-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-neon-magenta text-white font-bold py-3 rounded-lg hover:bg-neon-magenta/80 transition-colors"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onMouseEnter={() => playHover()}
          >
            Send Message
          </motion.button>
        </form>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-magenta/10 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
};

export default HolographicForm; 