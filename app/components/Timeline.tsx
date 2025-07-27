import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2050',
    title: 'Quantum AI Integration',
    description: 'Pioneering the fusion of quantum computing with artificial intelligence.',
    icon: '🧠',
  },
  {
    year: '2048',
    title: 'Neural Interface Launch',
    description: 'Revolutionary brain-computer interface for enhanced human-AI collaboration.',
    icon: '🔌',
  },
  {
    year: '2046',
    title: 'Global Tech Summit',
    description: 'Leading the discussion on ethical AI development and implementation.',
    icon: '🌐',
  },
  {
    year: '2044',
    title: 'AI Ethics Framework',
    description: 'Establishing industry standards for responsible AI development.',
    icon: '⚖️',
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-lime transform -translate-x-1/2" />

      {/* Timeline events */}
      {timelineEvents.map((event, idx) => {
        const isEven = idx % 2 === 0;
        const progressStart = idx / timelineEvents.length;
        const progressEnd = (idx + 1) / timelineEvents.length;

        const opacity = useTransform(
          scrollYProgress,
          [progressStart - 0.1, progressStart, progressEnd, progressEnd + 0.1],
          [0, 1, 1, 0]
        );

        const x = useTransform(
          scrollYProgress,
          [progressStart - 0.1, progressStart, progressEnd, progressEnd + 0.1],
          [isEven ? -50 : 50, 0, 0, isEven ? -50 : 50]
        );

        return (
          <motion.div
            key={event.year}
            className={`flex items-center justify-center gap-8 mb-16 ${
              isEven ? 'flex-row' : 'flex-row-reverse'
            }`}
            style={{ opacity, x }}
          >
            {/* Content */}
            <div className={`w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
              <motion.div
                className="glass p-6 rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic" />
                
                {/* Content */}
                <div className="relative z-10">
                  <span className="text-neon-cyan font-mono text-sm">{event.year}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 neon-text">
                    {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
              </motion.div>
            </div>

            {/* Icon */}
            <motion.div
              className="w-16 h-16 bg-cyber-darker border-2 border-neon-magenta rounded-full flex items-center justify-center text-2xl relative z-10"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-neon-magenta rounded-full blur-lg opacity-20 animate-pulse" />
              
              {/* Icon */}
              <span className="relative z-10">{event.icon}</span>
            </motion.div>

            {/* Empty div for spacing on the other side */}
            <div className="w-1/2" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline; 