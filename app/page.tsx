"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence , useInView, useAnimation} from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, CheckIcon, StarIcon, ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import CyberBackground from './components/CyberBackground';
import Timeline from './components/Timeline';
import HoverCard3D from './components/HoverCard3D';
import FloatingAI from './components/FloatingAI';
import HolographicForm from './components/HolographicForm';
import DashboardFooter from './components/DashboardFooter';
import useSoundEffects from './components/useSoundEffects';
import React from 'react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
// Create a reusable animated component
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
};


const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Data
const integrations = [
  { name: "GitHub", logo: "/github.svg" },
  { name: "GitLab", logo: "/gitlab.svg" },
  { name: "AWS", logo: "/aws.svg" },
  { name: "Google Cloud", logo: "/gcp.svg" },
  { name: "Azure", logo: "/azure.svg" },
  { name: "Bitbucket", logo: "/bitbucket.svg" },
];

const features = [
  {
    title: "Code Architecture Visualization",
    description: "Visualize your codebase structure and dependencies with interactive diagrams.",
    icon: "/file.svg",
    color: "cyan",
  },
  {
    title: "Cloud Cost Analysis",
    description: "Analyze and optimize your cloud spend with actionable insights.",
    icon: "/globe.svg",
    color: "magenta",
  },
  {
    title: "Code Quality & Security Insights",
    description: "Detect code smells, vulnerabilities, and improve maintainability.",
    icon: "/window.svg",
    color: "lime",
  },
  {
    title: "GitHub & Cloud Integration",
    description: "Seamlessly connect your repositories and cloud providers.",
    icon: "/vercel.svg",
    color: "cyan",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Lead Engineer, FinTech Co.",
    quote: "Mistri gave us clarity on our codebase and cloud costs. The visualizations are beautiful and actionable!",
    avatar: "/vercel.svg",
  },
  {
    name: "Alex M.",
    role: "CTO, SaaS Startup",
    quote: "The insights from Mistri helped us ship faster and with more confidence. The onboarding was seamless.",
    avatar: "/globe.svg",
  },
  {
    name: "Sara L.",
    role: "Product Manager, HealthTech",
    quote: "I love how human and clear the platform feels. It's not just another dashboard—it's a real partner for our team.",
    avatar: "/file.svg",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals and small teams getting started.",
    features: [
      "Up to 2 codebases",
      "Basic code visualization",
      "Cloud spend overview",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49/mo",
    description: "For growing teams who need deeper insights.",
    features: [
      "Up to 10 codebases",
      "Advanced architecture maps",
      "Cloud cost breakdowns",
      "Integrations (GitHub, AWS, GCP)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "For large orgs with custom needs.",
    features: [
      "Unlimited codebases",
      "Custom integrations",
      "Dedicated onboarding",
      "Security & compliance reports",
      "24/7 support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is my code and data secure?",
    a: "Absolutely. Mistri uses enterprise-grade encryption and never stores your code without permission.",
  },
  {
    q: "How does the free trial work?",
    a: "You get full access to all Growth features for 14 days. No credit card required.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel or change your plan at any time from your dashboard.",
  },
  {
    q: "Do you offer discounts for education or non-profits?",
    a: "Yes! Contact us for special pricing for educational and non-profit organizations.",
  },
];

const navLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
];

const navDropdowns: Record<string, string[]> = {
  Platform: ["Overview", "Architecture", "Integrations"],
  Solutions: ["For Developers", "For Product Managers", "For DevOps"],
  Pricing: ["Compare Plans", "Enterprise", "FAQ"],
  Resources: ["Blog", "Docs", "Webinars"],
};

function Navbar({ playHover, playClick }: { playHover: () => void; playClick: () => void }) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [loginHover, setLoginHover] = useState(false);
  const [startFreeHover, setStartFreeHover] = useState(false);

  return (
    <nav
      className="w-full z-30 bg-black/50 backdrop-blur-md border-b border-neutral-800 fixed top-0 left-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20 relative">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Mistri
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center relative">
          {navLinks.map((link, idx) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => { setDropdown(link.name); setHoverIdx(idx); }}
              onMouseLeave={() => { setDropdown(null); setHoverIdx(null); }}
            >
              <button
                className="flex items-center text-base xl:text-lg gap-1 font-medium hover:text-white transition focus:outline-none text-neutral-300"
                type="button"
                onMouseEnter={() => playHover()}
              >
                {link.name}
                {navDropdowns[link.name] && <ChevronDownIcon className="h-4 w-4" />}
              </button>
              {hoverIdx === idx && (
                <div
                  key="underline"
                  className="absolute left-0 right-0 h-[3px] bg-blue-600 rounded-full -bottom-1"
                />
              )}
              {dropdown === link.name && navDropdowns[link.name] && (
                <div
                  className="absolute left-0 top-full mt-2 min-w-[180px] bg-[#111111] rounded-xl shadow-lg border border-neutral-800 py-2 px-2 z-50"
                >
                  {navDropdowns[link.name].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 rounded-lg hover:bg-neutral-800 hover:text-white transition text-neutral-300"
                      onMouseEnter={() => playHover()}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex gap-3 xl:gap-4 items-center">
          <div className="relative">
            <a
              href="#sign-up"
              className="bg-white  text-black font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg shadow transition text-sm xl:text-base flex items-center justify-center"
              onMouseEnter={() => { setStartFreeHover(true); playHover(); }}
              onMouseLeave={() => setStartFreeHover(false)}
              onFocus={() => setStartFreeHover(true)}
              onBlur={() => setStartFreeHover(false)}
              onClick={() => playClick()}
            >
              Start Free
            </a>
            {startFreeHover && (
              <div
                key="startfree-underline"
                className="absolute left-0 right-0 h-[3px] bg-blue-600 -bottom-1"
              />
            )}
          </div>
          <div className="relative">
            <a
              href="#login"
              className="bg-white  text-black  font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg shadow transition text-sm xl:text-base flex items-center justify-center"
              onMouseEnter={() => { setLoginHover(true); playHover(); }}
              onMouseLeave={() => setLoginHover(false)}
              onFocus={() => setLoginHover(true)}
              onBlur={() => setLoginHover(false)}
              onClick={() => playClick()}
            >
              Login
            </a>
            {loginHover && (
              <div
                key="login-underline"
                className="absolute left-0 right-0 h-[3px] bg-blue-600 -bottom-1"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => { setOpen((prev) => !prev); playClick(); }}
            className="p-2 text-white focus:outline-none z-50 relative"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {open && (
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black z-40 shadow-2xl border-l border-neutral-800 lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex flex-col space-y-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
                    onClick={() => { setOpen(false); playClick(); }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-y-4 pt-6 border-t border-gray-200">
                <a
                  href="#sign-up"
                  className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors"
                  onClick={() => { setOpen(false); playClick(); }}
                >
                  Start Free
                </a>
                <a
                  href="#login"
                  className="w-full bg-neutral-800 text-white text-center py-3 rounded-lg font-semibold text-base hover:bg-neutral-700 transition-colors"
                  onClick={() => { setOpen(false); playClick(); }}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => { setOpen(false); playClick(); }}
          />
        )}
      </div>
    </nav>
  );
}

export default function Home() {
  const { playHover, playClick } = useSoundEffects();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-cyber-black text-white">
      {/* Background Effects */}
      <CyberBackground />
      <Navbar playHover={playHover} playClick={playClick} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          className="text-center z-10 max-w-7xl mx-auto"
          style={{ y, opacity }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="flex-1 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Mistri — Your{' '}
                <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-lime bg-clip-text text-white">
                  Co-pilot
                </span>{' '}
                for Tech Stack Analysis
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience next-generation tech stack analysis powered by agentic AI
              </motion.p>
            {/* Badges/Highlights */}
            <div className="flex flex-wrap p-10 justify-center lg:justify-start gap-2 sm:gap-3 w-full">
              <span className="inline-block bg-white/20 text-white font-semibold px-3 py-1.5 text-xs sm:text-sm rounded-full whitespace-nowrap backdrop-blur glass">
                #1 Tech Stack Analysis Tool
              </span>
              <span className="inline-block bg-white/20 text-white font-semibold px-3 py-1.5 text-xs sm:text-sm rounded-full whitespace-nowrap backdrop-blur glass">
                Trusted by Top Teams
              </span>
            </div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="px-8 py-3 bg-neon-cyan text-white font-bold rounded-lg  border-2  border-neon-cyan hover:bg-neon-cyan/80 transition-colors glass"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                >
                  Join Waitlist
                </motion.button>
                <motion.button
                  className="px-8 py-3 bg-neon-magenta border-2 border-neon-magenta text-white font-bold rounded-lg hover:bg-neon-magenta/80 transition-colors glass"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                >
                  Use Beta
                </motion.button>
                <motion.button
                  className="px-8 py-3 border-2 border-neon-lime text-white font-bold rounded-lg hover:bg-neon-lime/20 transition-colors glass"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

           
          </div>
        </motion.div>
      </section>

      {/* Demo Video Section */}
 
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-6xl mx-auto w-full glass"
          >
            <div className="aspect-video bg-gradient-to-br from-teal-900 via-black to-gray-900 border-2 shadow rounded-xl flex items-center justify-center cursor-pointer group min-h-[400px] lg:min-h-[500px]">
              <div className="w-32 h-32 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <PlayIcon className="w-16 h-16 text-white ml-1" />
              </div>
            </div>
          </motion.div>
 
      {/* Features Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={item} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-6xl font-bold text-white mb-4">
              What does Mistri do?
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Mistri is your all-in-one agentic AI platform that revolutionizes how you analyze, visualize, and optimize your entire tech stack.
            </p>
          </motion.div>            
          
          <motion.div 
            variants={container} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {/* Integration Hub */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Unified Integration Hub</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Connect all your platforms - GitHub, GitLab, Bitbucket, AWS, Azure, GCP - in one unified dashboard.
              </p>
            </motion.div>

            {/* AI Pattern Detection */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Agentic AI Pattern Detection</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Advanced AI detects design patterns and provides intelligent suggestions directly in your PRs.
              </p>
            </motion.div>

            {/* Architecture Comparison */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Architecture Evolution</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Compare old vs current architecture with AI-powered cognitive analysis for better decisions.
              </p>
            </motion.div>

            {/* User Experience */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Intuitive Experience</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Simple, smooth platform focused on effortless user interaction and seamless workflows.
              </p>
            </motion.div>

            {/* Cost Optimization */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Automated Cost Analysis</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Track, analyze, and optimize cloud deployment costs with automated flow integration.
              </p>
            </motion.div>

            {/* Design Solutions */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Complete Design Solutions</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Get both High-level and Low-level design analysis for your engineering solutions.
              </p>
            </motion.div>

            {/* Time Saving */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Time-Saving</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Save countless hours by accessing all your favorite tech platforms from one central hub.
              </p>
            </motion.div>

            {/* Custom LLM APIs */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-neutral-800 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-3">Flexible AI Integration</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Use your own LLM APIs or leverage our premium advanced AI models for deeper analysis.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-gradient-to-br from-purple-900 via-black to-gray-900 rounded-2xl p-8 text-center"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-3"
            >
              Everything you need, all in one place
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-blue-100 max-w-2xl mx-auto"
            >
              Mistri brings together code analysis, cloud optimization, and AI-powered insights into a single, beautiful platform that scales with your team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <HoverCard3D
                key={feature.title}
                className="p-6"
                glowColor={feature.color as 'cyan' | 'magenta' | 'lime'}
              >
                <div className="w-12 h-12 mb-4 relative">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                  <div className={`absolute inset-0 bg-${feature.color}/20 rounded-lg filter blur-sm`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </HoverCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-cyan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Seamless Integrations
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.name}
                variants={item}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <div className="glass holographic p-6 rounded-xl flex items-center justify-center aspect-square transition-all duration-300 group-hover:border-neon-cyan">
                  <div className="relative w-full h-full">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain filter brightness-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-magenta/10 to-neon-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                </div>
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {integration.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-lime"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Users Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                className="glass holographic p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                      {testimonial.name[0]}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-cyan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose Your Plan
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`glass holographic p-6 rounded-xl ${
                  plan.highlight ? 'border-2 border-neon-cyan' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="text-2xl font-bold mb-2">{plan.name}</div>
                <div className="text-4xl font-bold mb-4 text-neon-cyan">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-neon-lime mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold ${
                    plan.highlight
                      ? 'bg-neon-cyan text-black hover:bg-neon-cyan/80'
                      : 'border-2 border-neon-magenta hover:bg-neon-magenta/20'
                  } transition-colors`}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text-magenta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                className="glass holographic rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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