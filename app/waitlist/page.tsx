"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, CheckIcon, StarIcon, UsersIcon, CodeBracketIcon, CloudIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ZapIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useEffect, useRef, useState } from "react";
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

const benefits = [
  {
    title: "Early Access",
    description: "Be among the first to experience Mistri's AI-powered architecture insights",
    icon: StarIcon,
  },
  {
    title: "Priority Support", 
    description: "Get dedicated support and feedback channels during the beta phase",
    icon: UsersIcon,
  },
  {
    title: "Exclusive Features",
    description: "Access to advanced features and integrations before public release",
    icon: CodeBracketIcon,
  },
  {
    title: "Community Access",
    description: "Join our developer community and shape the future of Mistri",
    icon: CloudIcon,
  },
];

const features = [
  "AI-powered code architecture analysis",
  "Real-time cloud cost optimization", 
  "Intelligent dependency mapping",
  "Security vulnerability detection",
  "Team productivity insights",
  "Custom integration support",
  "Advanced visualization tools",
  "Enterprise-grade security",
];

export default function WaitlistPage() {
  const [formLoaded, setFormLoaded] = useState(false);
  const typeformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Check if iframe loaded every 500ms for 10s
    const maxTries = 20;
    let tries = 0;
    const interval = setInterval(() => {
      if (typeformRef.current?.querySelector("iframe")) {
        setFormLoaded(true);
        clearInterval(interval);
      } else if (++tries >= maxTries) {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <main className="overflow-y-auto h-screen scroll-smooth">
        <AnimationContainer delay={0.2} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-black">
          <MaxWidthWrapper>
            <AnimationContainer className="mb-8 mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200">
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Home
              </Link>
            </AnimationContainer>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Typeform + Description */}
              <div className="order-2 lg:order-1">
                <div className="relative inline-block mb-12">
                  <div className="relative text-xl text-neutral-100 bg-black border border-neutral-700 p-4 rounded-full backdrop-blur-sm">
                    Join the Waitlist
                    <BorderBeam duration={10} size={50} colorFrom="#ffffff" colorTo="#f3f4f6" borderWidth={2} />
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  About Mistri
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Mistri uses Agentic AI to analyze, visualize, and optimize your codebases. Transform complex tech stacks into clear, actionable insights in seconds.
                </p>

                <div className="w-full min-h-[300px] bg-neutral-900 rounded-xl border border-neutral-700 p-4">
                  {!formLoaded && (
                    <div className="text-neutral-400 text-center py-12">
                      ⏳ Waitlist form is loading...
                    </div>
                  )}
                  <div
                    ref={typeformRef}
                    data-tf-live={process.env.NEXT_PUBLIC_TYPEFORM_ID}
                    className={`transition-opacity duration-500 ${formLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-8">
                  What You'll Get
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-neutral-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </AnimationContainer>

        {/* ...rest of your code (CTA section, Footer, etc.) */}
        <Footer />
      </main>
    </div>
  );
}