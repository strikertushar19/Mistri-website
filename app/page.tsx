"use client";

import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, CheckIcon, StarIcon, ArrowRightIcon, PlayIcon, } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect, MutableRefObject } from "react";

import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import Navbar from "./components/navbar";
import { BorderBeam } from "@/components/magicui/border-beam";
import { LampContainer } from "./components/ui/lamp";
import { ZapIcon } from "lucide-react";

// Animation container component similar to linkify
const AnimationContainer = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Max width wrapper component
const MaxWidthWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`}>
      {children}
    </div>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Create a reusable animated component
const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const COMPANIES = [
  {
    name: "Asana",
    logo: "/assets/company-01.svg",
  },
  {
    name: "Tidal",
    logo: "/assets/company-02.svg",
  },
  {
    name: "Innovaccer",
    logo: "/assets/company-03.svg",
  },
  {
    name: "Linear",
    logo: "/assets/company-04.svg",
  },
  {
    name: "Raycast",
    logo: "/assets/company-05.svg",
  },
  {
    name: "Labelbox",
    logo: "/assets/company-06.svg",
  }
]
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



const stats = [
  { label: "Lines of Code Analyzed", value: "10M+", suffix: "" },
  { label: "Teams Trust Mistri", value: "500", suffix: "+" },
  { label: "Cost Savings Achieved", value: "$2.5M", suffix: "" },
  { label: "Average Setup Time", value: "5", suffix: " min" },
];

const integrations = [
  { name: "GitHub", logo: "/github.svg" },
  { name: "GitLab", logo: "/gitlab.svg" },
  { name: "AWS", logo: "/aws.svg" },
  { name: "Google Cloud", logo: "/gcp.svg" },
  { name: "Azure", logo: "/azure.svg" },
  { name: "Bitbucket", logo: "/bitbucket.svg" },
];

const useCases = [
  {
    title: "For Engineering Teams",
    description: "Accelerate development with clear architecture insights and automated code reviews.",
    features: ["Code quality metrics", "Dependency analysis", "Technical debt tracking"],
    icon: "👩‍💻",
  },
  {
    title: "For DevOps Teams",
    description: "Optimize infrastructure costs and improve deployment reliability.",
    features: ["Cloud cost optimization", "Performance monitoring", "Security compliance"],
    icon: "🔧",
  },
  {
    title: "For Product Teams",
    description: "Make data-driven decisions with clear visibility into development velocity.",
    features: ["Development analytics", "Feature impact tracking", "Team productivity insights"],
    icon: "📊",
  },
];



export default function Home() {
  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <main className="overflow-y-auto h-screen scroll-smooth">

        {/* Hero Section */}
        <div className="relative w-full min-h-screen">
          {/* Grid Pattern Background - Full Width */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none -z-10"></div>
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <MaxWidthWrapper>
              <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background relative min-h-screen py-20 sm:py-32 lg:py-40">
                <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                  <div className="relative inline-block">
                    <div className="relative text-sm text-neutral-100 bg-black border border-neutral-700 p-3 rounded-full backdrop-blur-sm">
                      ✨ Your AI Software Architect 
                      <BorderBeam duration={10} size={40} colorFrom="#ffffff" colorTo="#f3f4f6" borderWidth={2} />
                    </div>
                  </div>
                  <h1 className="text-foreground text-center py-6 text-5xl font-semibold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">

                    <span
                      className="text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 bg-clip-text inline-block animate-gradient-x"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #8b5cf6, #3b82f6, #a21caf, #f472b6, #8b5cf6)",
                        backgroundSize: "200% 200%",
                        animation: "gradient-x 4s ease-in-out infinite",
                      }}
                    >
                      AI Software Architect
                    </span>
                    <style jsx>{`
                  @keyframes gradient-x {
                    0%,
                    100% {
                      background-position: 0% 50%;
                    }
                    50% {
                      background-position: 100% 50%;
                    }
                  }
                `}</style>


                    for Your Company
                  </h1>
                  <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                    Mistri uses Agentic AI to analyze, visualize, and optimize your code and cloud systems.
                    <br className="hidden md:block" />
                    <span className="hidden md:block">Transform complex tech stacks into clear, actionable insights in seconds.</span>
                  </p>
                  <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                    <a
                      href="#waitlist"
                      className=" group relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Join Waitlist
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </span>
                    </a>
                    <a
                      href="#beta"
                      className="group relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 overflow-hidden"
                    >
                      <span className="relative z-10">Use Beta</span>
                    </a>
                    <a
                      href="#demo"
                      className=" group relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 overflow-hidden"
                    >
                      <span className="relative z-10">Watch Demo</span>
                    </a>
                  </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                  <div className="absolute md:top-[10%] left-1/2 w-3/4   -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow" style={{ background: "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)" }}></div>
                  <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                    <BorderBeam
                      size={250}
                      duration={12}
                      delay={9}
                    />
                    <Image
                      src="/assets/mistri_front.png"
                      alt="Dashboard"
                      width={1200}
                      height={1200}
                      quality={100}
                      className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                    />
                    <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                    <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                  </div>
                </AnimationContainer>
              </div>
            </MaxWidthWrapper>
          </AnimationContainer>


        </div>
        {/* Companies Section */}
        <MaxWidthWrapper>
          <AnimationContainer delay={0.4}>
            <div className="py-14">
              <div className="mx-auto px-4 md:px-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center text-sm font-medium font-heading text-neutral-400 uppercase mb-12"
                >
                  Trusted by the best in the industry
                </motion.h2>

                {/* Infinite Scrolling Marquee */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative overflow-hidden"
                >
                  <motion.div
                    animate={{ x: [0, -300] }}
                    transition={{
                      x: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    className="flex items-center gap-8 whitespace-nowrap"
                  >
                    {/* Duplicate companies 3 times to ensure smooth infinite loop */}
                    {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, idx) => (
                      <motion.div
                        key={`${company.name}-${idx}`}
                        whileHover={{
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 flex-shrink-0"
                      >
                        <motion.div
                          whileHover={{
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={80}
                            height={80}
                            quality={100}
                            className="w-16 h-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                          />
                        </motion.div>
                        <span className="text-white font-medium text-lg group-hover:text-blue-300 transition-colors duration-300">
                          {company.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>
        {/* Demo Video Section */}
        <AnimatedSection
          className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-8 min-h-screen flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="max-w-6xl p-2 sm:p-4 md:p-6 mx-auto text-center w-full">
            <motion.div variants={item} className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                See Mistri in action
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed px-2">
                Watch how Mistri transforms complex tech stacks into clear, actionable insights in seconds
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-2 md:p-3 w-full mx-auto"
            >
              <BorderBeam
                size={300}
                duration={8}
                delay={2}
              />
              <div className="aspect-video w-full bg-gradient-to-br from-teal-900 via-black to-gray-900 border border-white/20 shadow rounded-md sm:rounded-lg flex items-center justify-center cursor-pointer group">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                >
                  <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white ml-0.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        {/* <AnimatedSection
          className="py-16 px-4 h-screen sm:px-6 lg:px-16 bg-white flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Trusted by teams worldwide</h2>
              <p className="text-neutral-600">Join thousands of developers who ship better code with Mistri</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-sm text-neutral-600">{stat.label}</div>
          </div>
              ))}
            </div>
          </div>
        </AnimatedSection>  */}

        {/* Features Section */}
        <AnimatedSection
          className="py-16 flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-black"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
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
              viewport={{ once: false, margin: "-100px" }}
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
                <h3 className="text-lg font-semibold text-white mb-3">Design Pattern Detection</h3>
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
              {/* Additional highlight banner */}

            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="mt-12 bg-gradient-to-br from-purple-900 via-black to-purple-900 rounded-2xl p-8 text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Everything you need, all in one place
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-blue-100 max-w-2xl mx-auto"
              >
                Mistri brings together code analysis, cloud optimization, and AI-powered insights into a single, beautiful platform that scales with your team.
              </motion.p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Use Cases Section */}
        <AnimatedSection
          id="features"
          className="py-16 px-4 sm:px-6 flex items-center justify-center lg:px-16 bg-black"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Software Architect for Modern Companies
              </h2>
              <p className="text-lg lg:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Transform your company's software architecture with AI-powered insights. Mistri's intelligent platform helps enterprises design, analyze, and optimize their entire tech infrastructure from a single, intelligent dashboard.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-3 gap-8 mb-12"
            >
              {/* Enterprise Companies Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For Enterprise Companies</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Scale your architecture decisions with AI-powered enterprise insights. Get comprehensive analysis of multi-cloud deployments, legacy system modernization, and strategic technology planning.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multi-cloud architecture optimization",
                      "Legacy system modernization analysis", 
                      "Enterprise-wide cost optimization",
                      "Compliance & security assessment"
                    ].map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Startup Companies Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For Startup Companies</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Build scalable foundations from day one with AI-guided architecture decisions. Get rapid prototyping insights, technology stack recommendations, and growth-ready infrastructure planning.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Rapid architecture prototyping",
                      "Technology stack optimization",
                      "Scalable infrastructure planning",
                      "MVP to production guidance"
                    ].map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Tech Consulting Companies Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For Tech Consulting Firms</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Deliver superior client solutions with AI-enhanced architecture consulting. Provide data-driven recommendations, comparative analysis, and strategic technology roadmaps for your clients.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Client architecture assessments",
                      "Comparative technology analysis",
                      "Strategic roadmap planning",
                      "ROI & performance optimization"
                    ].map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* AI Architecture Banner */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                  AI-Powered Architecture Intelligence
                </h3>
                <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Stop making architecture decisions in the dark. With Mistri's AI software architect, design, analyze, and optimize your company's entire tech infrastructure from one intelligent platform. Make data-driven decisions, reduce technical debt, and scale with confidence while AI handles the complex analysis.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "🏗️ Intelligent Architecture Design",
                    "📊 Data-Driven Decisions",
                    "⚡ Rapid Analysis & Insights",
                    "🔗 Enterprise Integration"
                  ].map((badge, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      className="bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection
          id="integrations"
          className="py-20 px-4 sm:px-6 lg:px-16  relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          ></motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <StarIcon className="w-4 h-4 fill-current" />
                </motion.div>
                Customer Stories
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Trusted by top engineering teams worldwide
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <StarIcon className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-lg text-blue-100 font-medium"
              >
                4.9/5 from 200+ reviews • Trusted by engineering teams worldwide
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
              variants={container}
              className="grid lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="bg-[#111111]/50 p-8 rounded-3xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
                    {/* Gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-3xl"
                    ></motion.div>

                    {/* Quote icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 0.5, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                      className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </motion.div>

                    <div className="relative z-10">
                      {/* Star rating */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.2 }}
                        className="flex gap-1 mb-6"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + idx * 0.2 + i * 0.05,
                              type: "spring"
                            }}
                          >
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
                        className="text-neutral-300 leading-relaxed text-lg mb-8 font-medium"
                      >
                        "{testimonial.quote}"
                      </motion.p>

                      {/* Profile */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <div className="relative">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                              duration: 0.4,
                              delay: 0.9 + idx * 0.2,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                          >
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-xl bg-white object-contain"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                              duration: 0.3,
                              delay: 1.1 + idx * 0.2,
                              type: "spring"
                            }}
                            className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"
                          ></motion.div>
                        </div>
                        <div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: 1.0 + idx * 0.2 }}
                            className="font-bold text-white text-lg"
                          >
                            {testimonial.name}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: 1.1 + idx * 0.2 }}
                            className="text-neutral-400 font-medium"
                          >
                            {testimonial.role}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/30 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="flex -space-x-2"
                >
                  {testimonials.map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, x: 20 }}
                      whileInView={{ scale: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.4,
                        delay: 1.8 + idx * 0.1,
                        type: "spring"
                      }}
                      className="w-8 h-8 bg-gradient-to-br from-white to-blue-200 rounded-full border-2 border-white shadow-sm"
                    ></motion.div>
                  ))}
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                  className="text-white font-medium"
                >
                  Join 500+ teams already using Mistri
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection
          id="pricing"
          className="py-16 px-4 sm:px-6 lg:px-16 bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Start free, scale as you grow. No hidden fees, no surprises.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`bg-[#111111] p-8 rounded-2xl border-2 relative ${plan.highlight
                      ? 'border-blue-500 shadow-xl scale-105'
                      : 'border-neutral-800 shadow-sm'
                    }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-neutral-400 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.4 + featureIdx * 0.1 }}
                        className="flex items-center text-sm"
                      >
                        <CheckIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-neutral-800 text-white hover:bg-neutral-700'
                      }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
        {/* FAQ Section */}
        <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-16 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Everything you need to know about Mistri and how it works.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              variants={container}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#111111] rounded-xl shadow-sm border border-neutral-800 hover:shadow-md transition-all duration-300"
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none rounded-xl"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-semibold text-lg text-white pr-4">{faq.q}</span>
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
                      <motion.span
                        initial={false}
                        animate={{ rotate: openFaq === idx ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-xl text-white font-bold"
                      >
                        +
                      </motion.span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-base text-neutral-400 leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black relative   inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.3)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <StarIcon className="w-4 h-4 fill-current" />
                </motion.div>
                Ready to Get Started?
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to ship your product faster?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of our customers who are already using Mistri to understand their codebase better and ship with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <motion.a
                href="#sign-up"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-black hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg shadow-lg shadow-white/20 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3"
              >
                Start Free Trial
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.div>
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:bg-white hover:text-blue-600 font-semibold px-4 py-2 rounded-lg transition-all duration-300 ring-1 ring-white/30 hover:ring-white hover:shadow-lg"
              >
                Book a Demo
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-blue-200 text-sm"
            >
              14-day free trial • No credit card required • Setup in 5 minutes
            </motion.p>
          </div>
        </motion.section>

        {/* Waitlist Section */}
        <AnimatedSection
          id="waitlist"
          className="py-20 px-4 sm:px-6 lg:px-16 bg-black relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Join the Waitlist
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                Be among the first to experience the future of AI-powered software architecture. Get early access to Mistri's intelligent platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md"
              />
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-200 flex items-center gap-2">
                Join Waitlist
                <ZapIcon className="w-4 h-4 text-orange-500 fill-orange-500" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-neutral-500 mt-4"
            >
              No spam, ever. Unsubscribe at any time.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.3)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Mistri
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white/80 mb-6 leading-relaxed"
                >
                  Your AI co-pilot for tech stack analysis and optimization. Transform complex systems into clear insights.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex gap-4"
                >
                  <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Features</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Integrations</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">API</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Security</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Pricing</a></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">About</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Blog</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Careers</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Contact</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Press</a></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Resources</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Documentation</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Help Center</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Status</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Privacy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer">Support</a></li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-white/60 text-sm">
                © 2024 Mistri. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/60 mt-4 md:mt-0">
                <a href="#" className="hover:text-white hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer">Terms</a>
                <a href="#" className="hover:text-white hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer">Privacy</a>
                <a href="#" className="hover:text-white hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer">Cookies</a>
              </div>
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
