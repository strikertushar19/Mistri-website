"use client";

import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    title: "Code Architecture Visualization",
    description: "Visualize your codebase structure and dependencies with interactive diagrams.",
    icon: "/file.svg",
  },
  {
    title: "Cloud Cost Analysis",
    description: "Analyze and optimize your cloud spend with actionable insights.",
    icon: "/globe.svg",
  },
  {
    title: "Code Quality & Security Insights",
    description: "Detect code smells, vulnerabilities, and improve maintainability.",
    icon: "/window.svg",
  },
  {
    title: "GitHub & Cloud Integration",
    description: "Seamlessly connect your repositories and cloud providers.",
    icon: "/vercel.svg",
  },
];

const moreFeatures = [
  {
    title: "Automated Code Reviews",
    description: "AI-driven reviews to catch issues before they reach production.",
  },
  {
    title: "Team Productivity Analytics",
    description: "Track bottlenecks and optimize team workflows with actionable metrics.",
  },
  {
    title: "Knowledge Maps",
    description: "Visualize code ownership and knowledge distribution across your team.",
  },
  {
    title: "Security & Compliance",
    description: "Continuous monitoring for vulnerabilities and compliance risks.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Lead Engineer, FinTech Co.",
    quote:
      "Mistri gave us clarity on our codebase and cloud costs. The visualizations are beautiful and actionable!",
    avatar: "/vercel.svg",
  },
  {
    name: "Alex M.",
    role: "CTO, SaaS Startup",
    quote:
      "The insights from Mistri helped us ship faster and with more confidence. The onboarding was seamless.",
    avatar: "/globe.svg",
  },
  {
    name: "Sara L.",
    role: "Product Manager, HealthTech",
    quote:
      "I love how human and clear the platform feels. It's not just another dashboard—it's a real partner for our team.",
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

const blogPosts = [
  {
    title: "How Agentic AI is Changing Software Engineering",
    excerpt: "Discover how agentic AI platforms like Mistri are transforming the way teams build, maintain, and scale software.",
    date: "May 2024",
    link: "#",
  },
  {
    title: "5 Ways to Cut Cloud Costs Without Sacrificing Performance",
    excerpt: "Practical strategies for engineering and DevOps teams to optimize cloud spend using Mistri's analytics.",
    date: "April 2024",
    link: "#",
  },
];

const navLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "Company", href: "#company" },
];

const navDropdowns: Record<string, string[]> = {
  Platform: ["Overview", "Architecture", "Integrations"],
  Solutions: ["For Developers", "For Product Managers", "For DevOps"],
  Pricing: ["Compare Plans", "Enterprise", "FAQ"],
  Resources: ["Blog", "Docs", "Webinars"],
  Company: ["About", "Careers", "Contact"],
};

function MCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationId = useRef<number | null>(null);
  const dots = useRef<Dot[]>([]);

  // Letter M pattern coordinates (scaled and centered)
  const letterMPattern: [number, number][] = [
    // Left vertical line
    [150, 150], [150, 170], [150, 190], [150, 210], [150, 230], [150, 250], [150, 270], [150, 290], [150, 310], [150, 330], [150, 350], [150, 370], [150, 390], [150, 410], [150, 430], [150, 450],
    // Right vertical line
    [650, 150], [650, 170], [650, 190], [650, 210], [650, 230], [650, 250], [650, 270], [650, 290], [650, 310], [650, 330], [650, 350], [650, 370], [650, 390], [650, 410], [650, 430], [650, 450],
    // Left diagonal line
    [170, 170], [190, 190], [210, 210], [230, 230], [250, 250], [270, 270], [290, 290], [310, 310], [330, 330], [350, 350], [370, 370], [380, 380],
    // Right diagonal line
    [630, 170], [610, 190], [590, 210], [570, 230], [550, 250], [530, 270], [510, 290], [490, 310], [470, 330], [450, 350], [430, 370], [420, 380],
    // Center connection
    [400, 380], [410, 380], [390, 380]
  ];

  class Dot {
    x!: number;
    y!: number;
    targetX: number;
    targetY: number;
    delay: number;
    delayCounter: number;
    speed: number;
    size: number;
    color: string;
    arrived: boolean;
    trail: { x: number; y: number }[];
    maxTrailLength: number;
    constructor(targetX: number, targetY: number, delay = 0, canvas: HTMLCanvasElement) {
      // Random starting position from edges
      const side = Math.floor(Math.random() * 4);
      switch (side) {
        case 0: // top
          this.x = Math.random() * canvas.width;
          this.y = -20;
          break;
        case 1: // right
          this.x = canvas.width + 20;
          this.y = Math.random() * canvas.height;
          break;
        case 2: // bottom
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + 20;
          break;
        case 3: // left
          this.x = -20;
          this.y = Math.random() * canvas.height;
          break;
      }
      this.targetX = targetX;
      this.targetY = targetY;
      this.delay = delay;
      this.delayCounter = 0;
      this.speed = 0.02 + Math.random() * 0.03;
      this.size = 3 + Math.random() * 4;
      this.color = `hsl(${200 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`;
      this.arrived = false;
      this.trail = [];
      this.maxTrailLength = 8;
    }
    update(canvas: HTMLCanvasElement) {
      if (this.delayCounter < this.delay) {
        this.delayCounter++;
        return;
      }
      if (!this.arrived) {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 2) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.arrived = true;
          this.trail = [];
        } else {
          this.x += dx * this.speed;
          this.y += dy * this.speed;
        }
      }
    }
    draw(ctx: CanvasRenderingContext2D) {
      if (this.delayCounter < this.delay) return;
      // Draw trail
      for (let i = 0; i < this.trail.length; i++) {
        const alpha = (i / this.trail.length) * 0.3;
        const trailSize = this.size * (i / this.trail.length) * 0.5;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.trail[i].x, this.trail[i].y, trailSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      // Draw main dot with glow effect
      ctx.save();
      ctx.shadowColor = this.color;
      ctx.shadowBlur = this.arrived ? 15 : 8;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      // Extra bright center
      if (this.arrived) {
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function clearCanvas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;
    clearCanvas(ctx, canvas as HTMLCanvasElement);
    dots.current.forEach(dot => {
      dot.update(canvas as HTMLCanvasElement);
      dot.draw(ctx);
    });
    // Sparkle effect
    dots.current.forEach(dot => {
      if (dot.arrived && Math.random() < 0.02) {
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(
          dot.x + (Math.random() - 0.5) * 20,
          dot.y + (Math.random() - 0.5) * 20,
          Math.random() * 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }
    });
    animationId.current = window.requestAnimationFrame(animate);
  }

  function animateLetterM() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    dots.current = [];
    if (animationId.current) {
      window.cancelAnimationFrame(animationId.current);
    }
    letterMPattern.forEach((point) => {
      const delay = Math.random() * 60;
      dots.current.push(new Dot(point[0], point[1], delay, canvas as HTMLCanvasElement));
    });
    animate();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Set canvas size to fill viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Initial clear
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    setTimeout(() => {
      animateLetterM();
    }, 500);
    return () => {
      if (animationId.current) window.cancelAnimationFrame(animationId.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        opacity: 0.18,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  return (
    <nav className="w-full z-30 bg-white/30 backdrop-blur-lg border-b border-neutral-100 fixed top-0 left-0 shadow-[0_2px_12px_0_rgba(37,99,235,0.07)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 relative">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-blue-700">Mistri</span>
        </div>
        <div className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <button
                className="flex items-center gap-1 text-base font-medium text-neutral-700 hover:text-blue-600 transition focus:outline-none"
                onMouseEnter={() => setDropdown(link.name)}
                onMouseLeave={() => setDropdown(null)}
                onFocus={() => setDropdown(link.name)}
                onBlur={() => setDropdown(null)}
                type="button"
              >
                {link.name}
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {dropdown === link.name && navDropdowns[link.name] && (
                  <motion.div
                    className="absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded-xl shadow-lg border border-blue-100 py-2 px-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setDropdown(link.name)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {navDropdowns[link.name].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 rounded-lg text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="#get-started" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-4 py-2 shadow transition text-base">Get Started</a>
        </div>
        <div className="md:hidden flex items-center gap-2">
         
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t border-neutral-100 px-4 py-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button
                  className="flex items-center gap-1 text-base font-medium text-neutral-700 hover:text-blue-600 transition focus:outline-none"
                  onClick={() => setDropdown(dropdown === link.name ? null : link.name)}
                  type="button"
                >
                  {link.name}
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {dropdown === link.name && navDropdowns[link.name] && (
                    <motion.div
                      className="mt-2 min-w-[180px] bg-white rounded-xl shadow-lg border border-blue-100 py-2 px-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {navDropdowns[link.name].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 rounded-lg text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a href="#get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2 shadow transition text-base">Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Home() {
  return (
    <div className="font-sans bg-[#f8fafc] text-neutral-900 min-h-screen flex flex-col relative">
      <Navbar />
      <main className="snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Hero Section */}
        <motion.section
          className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-16 py-12 md:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex-1 flex flex-col gap-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-blue-800">
              Understand and Improve Your Tech Stack with AI
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              Mistri uses Agentic AI to analyze, visualize, and optimize your code and cloud systems. Built for real teams, not robots.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#get-started"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-4 py-2 text-base shadow transition"
              >
                Get Started
              </a>
              <a
                href="#book-demo"
                className="inline-block border border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold rounded-full px-4 py-2 text-base shadow-sm transition"
              >
                Book Demo
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Animated Diagram Placeholder */}
            <motion.div
              className="w-[320px] h-[240px] bg-gradient-to-br from-blue-200/40 to-orange-200/40 rounded-2xl flex items-center justify-center shadow-lg border border-blue-100"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-xl text-blue-700 font-semibold">[AI System Diagram]</span>
            </motion.div>
          </div>
        </motion.section>
        {/* Features Section */}
        <motion.section
          id="platform"
          className="py-16 px-4 md:px-16 bg-white min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center bg-[#f8fafc] rounded-xl p-6 shadow hover:shadow-lg transition border border-blue-50">
                <Image src={f.icon} alt={f.title} width={40} height={40} className="mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-center text-blue-700">{f.title}</h3>
                <p className="text-neutral-700 text-center">{f.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
        {/* More Features Section */}
        <motion.section
          className="py-16 px-4 md:px-16 min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Built for Enterprise Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {moreFeatures.map((f) => (
              <div key={f.title} className="flex flex-col items-start bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-blue-700">{f.title}</h4>
                <p className="text-neutral-700">{f.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Why Mistri Section */}
        {/* <motion.section
          className="py-16 px-4 md:px-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Why Mistri?</h2>
              <ul className="space-y-4 text-lg">
                <li>• <span className="font-semibold">Agentic AI</span> that adapts to your codebase and cloud, not just static rules.</li>
                <li>• <span className="font-semibold">Enterprise-grade security</span> and compliance, trusted by leading teams.</li>
                <li>• <span className="font-semibold">Actionable insights</span> that drive real business value, not just dashboards.</li>
                <li>• <span className="font-semibold">Seamless integrations</span> with GitHub, AWS, GCP, Azure, and more.</li>
                <li>• <span className="font-semibold">Human-centric design</span> for clarity, not just for show.</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <motion.div
                className="w-[320px] h-[240px] bg-gradient-to-br from-blue-100/40 to-orange-100/40 rounded-2xl flex items-center justify-center shadow-lg border border-blue-100"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              >
                <span className="text-xl text-blue-700 font-semibold">[Enterprise AI Visualization]</span>
              </motion.div>
            </div>
          </div>
        </motion.section> */}
        {/* How It Works Section */}
        <motion.section
          className="py-16 px-4 md:px-16 min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-center justify-center">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Connect</h4>
              <p className="text-neutral-700 text-center">Link your GitHub and cloud accounts securely.</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Analyze</h4>
              <p className="text-neutral-700 text-center">Let Mistri's AI deeply analyze your codebase and infrastructure.</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Act</h4>
              <p className="text-neutral-700 text-center">Get actionable insights and visualizations to improve your stack.</p>
            </div>
          </div>
        </motion.section>
        {/* Testimonials Section */}
        <motion.section
          className="py-16 px-4 md:px-16 bg-white min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col items-center bg-[#f8fafc] rounded-xl p-8 shadow border border-blue-50">
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="mb-4 rounded-full" />
                <p className="text-neutral-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="font-semibold text-blue-700">{t.name}</div>
                <div className="text-sm text-neutral-500">{t.role}</div>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Pricing Section */}
        <motion.section
          id="pricing"
          className="py-16 px-4 md:px-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">Pricing</h2>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-center justify-center">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex-1 flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.highlight ? "border-blue-600 scale-105" : "border-blue-100"} transition`}
              >
                <div className="text-2xl font-bold mb-2 text-blue-700">{plan.name}</div>
                <div className="text-3xl font-extrabold mb-2 text-blue-800">{plan.price}</div>
                <div className="mb-4 text-neutral-700 text-center">{plan.description}</div>
                <ul className="mb-6 space-y-2 text-neutral-700">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <a href="#get-started" className={`inline-block rounded-full px-6 py-2 font-semibold shadow transition ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </motion.section>
        {/* FAQ Section */}
        
        <motion.section
          className="py-16 flex justify-center  min-h-screen w-screen flex-col items-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-800">Frequently Asked Questions</h2>
          <div className="w-screen ">
            <FAQAccordion faqs={faqs} />
          </div>
        </motion.section>
        {/* Blog/News Preview Section */}
        <motion.section
          id="resources"
          className="py-16 px-4 md:px-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-800">From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <a key={post.title} href={post.link} className="block bg-white rounded-xl p-6 shadow hover:shadow-lg border border-blue-100 transition group">
                <div className="text-blue-700 font-semibold mb-2 group-hover:underline">{post.title}</div>
                <div className="text-neutral-700 mb-2">{post.excerpt}</div>
                <div className="text-sm text-neutral-500">{post.date}</div>
              </a>
            ))}
          </div>
        </motion.section>
        {/* CTA Banner */}
        <motion.section
          className="py-12 px-4 md:px-16 bg-blue-600 text-white text-center rounded-t-3xl shadow-lg min-h-[40vh] flex flex-col justify-center snap-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to transform your engineering workflow?</h2>
          <p className="text-lg mb-6">Start your free trial today and see how Mistri can help your team deliver better software, faster.</p>
          <a href="#get-started" className="inline-block bg-white text-blue-700 font-semibold rounded-full px-8 py-3 text-lg shadow hover:bg-blue-100 transition">Get Started for Free</a>
        </motion.section>
        {/* Footer */}
        <footer className="mt-auto py-8 px-4 md:px-16 bg-[#f8fafc] text-neutral-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <div className="flex gap-6 mb-2 md:mb-0">
              <a href="#about" className="hover:underline">About</a>
              <a href="#docs" className="hover:underline">Docs</a>
              <a href="#pricing" className="hover:underline">Pricing</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} Mistri. All rights reserved.</div>
          </div>
      </footer>
      </main>
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          question={faq.q}
          answer={faq.a}
          open={openIdx === i}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
    </>
  );
}

function FAQItem({ question, answer, open, onClick }: { question: string; answer: string; open: boolean; onClick: () => void }) {
  return (
    <div className="mb-6 rounded-xl shadow-lg border border-blue-50 transition-all">
      <button
        className="w-full text-left px-8 py-6 font-bold text-blue-800 text-xl flex justify-between items-center focus:outline-none select-none"
        onClick={onClick}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`flex items-center justify-center w-10 h-10 rounded-full border border-blue-200 bg-white shadow transition-transform duration-400 ${open ? 'rotate-180' : ''}`}
          style={{ transition: 'transform 0.5s cubic-bezier(0.77,0,0.18,1)' }}
        >
          <ChevronDownIcon className="h-6 w-6 text-blue-700" />
        </span>
      </button>
      <div
        className={`overflow-hidden px-8 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]`}
        style={{
          maxHeight: open ? 200 : 0,
          opacity: open ? 1 : 0,
          paddingTop: open ? 16 : 0,
          paddingBottom: open ? 16 : 0,
        }}
      >
        <div className="text-lg text-neutral-700 font-medium" style={{ transition: 'opacity 0.5s cubic-bezier(0.77,0,0.18,1)' }}>{answer}</div>
      </div>
    </div>
  );
}
