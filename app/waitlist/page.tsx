"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, CheckIcon, StarIcon, UsersIcon, CodeBracketIcon, CloudIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ZapIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useEffect } from "react";
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
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <main className="overflow-y-auto h-screen scroll-smooth">
        {/* Hero Section */}
        <AnimationContainer delay={0.2} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-black">
          <MaxWidthWrapper>
            {/* Back Button */}
            <AnimationContainer className="mb-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Home
              </Link>
            </AnimationContainer>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Form */}
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

                {/* Typeform Embed */}
                <div className="w-full ">
                  <div 
                    data-tf-live={process.env.NEXT_PUBLIC_TYPEFORM_ID}
                    className="w-full "
                  ></div>
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

        <div className="relative w-full min-h-screen">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none -z-10"></div>
          
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background relative min-h-screen py-20 sm:py-32 lg:py-40">
              <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
              

                <h1 className="text-foreground text-center py-6 text-4xl font-semibold tracking-normal text-balance sm:text-5xl md:text-6xl lg:text-8xl !leading-[1.15] w-full font-heading mb-8">
                  <span
                    className="text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 bg-clip-text inline-block animate-gradient-x"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #8b5cf6, #3b82f6, #a21caf, #f472b6, #8b5cf6)",
                      backgroundSize: "200% 200%",
                      animation: "gradient-x 4s ease-in-out infinite",
                    }}
                  >
                    Get Early Access
                  </span>
                </h1>

                <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl lg:text-2xl text-balance max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                  Be among the first to experience the future of AI-powered software architecture. Join our exclusive waitlist for early access to Mistri's intelligent platform.
                </p>
              </AnimationContainer>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* Footer */}
        <Footer />

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
      </main>
    </div>
  );
}