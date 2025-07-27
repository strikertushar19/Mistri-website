import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FloatingAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isAI: boolean }[]>([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isAI: true },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isAI: false }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm processing your request. Please wait a moment...",
        isAI: true
      }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        className={`fixed bottom-6 right-6 p-4 rounded-full ${
          isOpen ? 'bg-neon-magenta' : 'bg-neon-cyan'
        } text-white shadow-lg hover:scale-110 transition-transform z-50`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftIcon className="w-6 h-6" />
        )}
      </motion.button>

      {/* AI Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-96 bg-cyber-darker border border-holo-medium rounded-2xl shadow-2xl overflow-hidden z-40"
          >
            {/* Header */}
            <div className="bg-cyber-dark p-4 border-b border-holo-medium">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <SparklesIcon className="w-6 h-6 text-neon-cyan animate-pulse" />
                  <div className="absolute inset-0 bg-neon-cyan blur-sm opacity-20 animate-pulse" />
                </div>
                <h3 className="text-white font-bold">AI Assistant</h3>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.isAI
                        ? 'bg-cyber-primary text-white'
                        : 'bg-neon-cyan/20 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-holo-medium">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-cyber-primary/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-neon-cyan"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SparklesIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </form>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-lime" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-magenta" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAI; 