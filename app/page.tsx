"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CyberBackground from './components/CyberBackground';
import Timeline from './components/Timeline';
import HoverCard3D from './components/HoverCard3D';
import FloatingAI from './components/FloatingAI';
import HolographicForm from './components/HolographicForm';
import DashboardFooter from './components/DashboardFooter';
import useSoundEffects from './components/useSoundEffects';

export default function Home() {
  const { playHover, playClick } = useSoundEffects();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background Effects */}
      <CyberBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          className="text-center z-10"
          style={{ y, opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to the Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience next-generation tech stack analysis powered by agentic AI
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-cyan/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-neon-magenta text-white font-bold rounded-lg hover:bg-neon-magenta/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-magenta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Revolutionary Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Analysis",
                description: "Advanced algorithms analyze your tech stack in real-time",
                icon: "🤖",
                color: "cyan",
              },
              {
                title: "Smart Optimization",
                description: "Automated suggestions for performance improvements",
                icon: "⚡",
                color: "magenta",
              },
              {
                title: "Visual Insights",
                description: "Beautiful, interactive visualizations of your architecture",
                icon: "📊",
                color: "lime",
              },
            ].map((feature, idx) => (
              <HoverCard3D
                key={feature.title}
                className="p-6"
                glowColor={feature.color as 'cyan' | 'magenta' | 'lime'}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </HoverCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-lime"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-cyan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <HolographicForm />
        </div>
      </section>

      {/* Footer */}
      <DashboardFooter />

      {/* Floating AI Assistant */}
      <FloatingAI />
    </div>
  );
}
