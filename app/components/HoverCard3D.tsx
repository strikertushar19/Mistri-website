import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HoverCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'magenta' | 'lime';
}

const HoverCard3D = ({ children, className = '', glowColor = 'cyan' }: HoverCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  // Handle mouse move
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = (e.clientX - rect.left - width / 2) / width;
    const mouseYFromCenter = (e.clientY - rect.top - height / 2) / height;

    mouseX.set(mouseXFromCenter);
    mouseY.set(mouseYFromCenter);
  }

  // Reset position when mouse leaves
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  const glowStyles = {
    cyan: 'shadow-neon-cyan',
    magenta: 'shadow-neon-magenta',
    lime: 'shadow-neon-lime',
  };

  return (
    <motion.div
      ref={ref}
      className={`card-3d relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className={`w-full h-full bg-cyber-darker backdrop-blur-sm border border-holo-medium rounded-xl p-6 ${
          hovered ? glowStyles[glowColor] : ''
        }`}
        style={{
          rotateX,
          rotateY,
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-holo-light to-transparent opacity-20 rounded-xl pointer-events-none" />
        
        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Hover glow effect */}
        {hovered && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at ${mouseX.get() * 100 + 50}% ${
                mouseY.get() * 100 + 50
              }%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default HoverCard3D; 