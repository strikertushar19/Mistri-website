"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, MapIcon, UsersIcon, CodeBracketIcon, CloudIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ZapIcon } from "lucide-react";
import Footer from "../components/footer";

// Animation container component
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

const values = [
  {
    title: "Developer-First",
    description: "Built by developers who understand the challenges of scaling systems without visibility.",
    icon: CodeBracketIcon,
  },
  {
    title: "Open Source First",
    description: "Launching open source to empower the community and grow with real-world feedback.",
    icon: UsersIcon,
  },
  {
    title: "Intelligent Integration",
    description: "Seamlessly integrates with your codebase, APIs, and infrastructure for comprehensive insights.",
    icon: CloudIcon,
  },
  {
    title: "Enterprise Ready",
    description: "As adoption scales, we'll offer enterprise-grade collaboration, governance, and insight tooling.",
    icon: ShieldCheckIcon,
  },
];

const team = [
  {
    name: "Our Team",
    role: "Developers & Engineers",
    description: "Built by developers who've felt the pain of scaling systems without visibility.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <main className="overflow-y-auto h-screen scroll-smooth">
        {/* Hero Section */}
        <div className="relative w-full min-h-screen">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none -z-10"></div>
          
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background relative min-h-screen py-20 sm:py-32 lg:py-40">
              
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 left-0"
              >
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center w-full text-center"
              >
                <div className="relative inline-block mb-12">
                  <div className="relative text-xl text-neutral-100 bg-black border border-neutral-700 p-4 rounded-full backdrop-blur-sm">
                    About Mistri
                    <BorderBeam duration={10} size={50} colorFrom="#ffffff" colorTo="#f3f4f6" borderWidth={2} />
                  </div>
                </div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-foreground text-center py-6 text-4xl font-semibold tracking-normal text-balance sm:text-5xl md:text-6xl lg:text-8xl !leading-[1.15] w-full font-heading mb-8"
                >
                  <span
                    className=" bg-clip-text animate-gradient-x"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #8b5cf6, #3b82f6, #a21caf, #f472b6, #8b5cf6)",
                      backgroundSize: "200% 200%",
                      animation: "gradient-x 4s ease-in-out infinite",
                    }}
                  >
                    AI Software Architect 
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl lg:text-2xl text-balance max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto"
                >
                  Mistri is an AI architect for software development built for modern developers and engineering teams, tech founders. As developers take on more responsibility across infrastructure, API design, and system modeling, keeping track of architectural decisions and design consistency has become increasingly overwhelming.
                </motion.p>
              </motion.div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-black"
        >
          <MaxWidthWrapper>
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-7xl font-bold text-white mb-16 tracking-tight"
              >
                Our Mission
              </motion.h2>
              <div className="relative px-12">
                <motion.span 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute -left-4 top-0 text-7xl lg:text-9xl text-neutral-600 font-serif"
                >
                  "
                </motion.span>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-200 max-w-5xl mx-auto leading-tight"
                >
                  Make architectural thinking a 
                  <span className="bg-clip-text "> native part </span>
                  of the 
                  <span className=" bg-clip-text "> software development workflow</span>
                </motion.p>
                <motion.span 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute -right-4 bottom-0 text-7xl lg:text-9xl text-neutral-600 font-serif"
                >
                  "
                </motion.span>
              </div>
            </div>
          </MaxWidthWrapper>
        </motion.div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 