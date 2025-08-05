"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, CheckIcon, StarIcon, ArrowRightIcon, PlayIcon, } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect, MutableRefObject } from "react";

import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { LampContainer } from "./components/ui/lamp";
import { ZapIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { CodeAnalysisFeatures } from "./components/code-analysis-features";
import { CodeAnalysisShowcase } from "./components/code-analysis-showcase";

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
                    Mistri uses Agentic AI to analyze, visualize, and optimize your codebases.
                    <br className="hidden md:block" />
                    <span className="hidden md:block">Transform complex tech stacks into clear, actionable insights in seconds.</span>
                  </p>
                  <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                    <Link
                      href="/waitlist"
                      className=" group relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Join Waitlist
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </span>
                    </Link>
                    {/* <a
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
                    </a> */}
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
                      src="/assets/front-mistri.png"
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
        {/* <MaxWidthWrapper>
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
        </MaxWidthWrapper> */}
        {/* Demo Video Section */}
        {/* <AnimatedSection
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
        </AnimatedSection> */}

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
  
        {/* Code Analysis Features Section */}
        {/* <CodeAnalysisFeatures /> */}

        {/* Code Analysis Showcase Section */}


        {/* FAQ Section */}
        {/* <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-16 bg-black">
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
        </AnimatedSection> */}
        {/* CTA Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black relative   inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.3)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none overflow-hidden"
        >
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
        </motion.section> */}

        {/* Waitlist Section */}
        {/* <AnimatedSection
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
              <Link href="/waitlist" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-200 flex items-center gap-2">
                Join Waitlist
                <ZapIcon className="w-4 h-4 text-orange-500 fill-orange-500" />
              </Link>
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
        </AnimatedSection> */}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
