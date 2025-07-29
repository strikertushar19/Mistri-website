"use client";

import { motion } from "framer-motion";

interface AnimationContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  reverse?: boolean;
}

const AnimationContainer = ({ children, delay = 0, className = "", reverse = false }: AnimationContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: reverse ? 1 : 0, y: reverse ? 0 : 20 }}
      animate={{ opacity: reverse ? 0 : 1, y: reverse ? -20 : 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer; 