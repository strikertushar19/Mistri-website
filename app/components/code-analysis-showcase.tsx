"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeAnalysisCard } from "./code-analysis-card";

export function CodeAnalysisShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Interactive Code Analysis Demo
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Experience our animated code analysis interface. Watch as AI-powered tools analyze your codebase in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse"></div>
            
            {/* Card container */}
            <div className="relative z-10">
              <CodeAnalysisCard />
            </div>
            
            {/* Floating elements around the card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
            />
            
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
            />
            
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/20 rounded-full blur-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">8</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Analysis Tools</h4>
              <p className="text-neutral-400 text-sm">
                Comprehensive suite of AI-powered code analysis features
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Real-time Processing</h4>
              <p className="text-neutral-400 text-sm">
                Instant analysis and visualization of your codebase
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">100%</span>
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">AI-Powered</h4>
              <p className="text-neutral-400 text-sm">
                Advanced machine learning models for accurate insights
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 