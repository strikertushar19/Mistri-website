'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowLeftIcon, StarIcon, UsersIcon, CodeBracketIcon, CloudIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ZapIcon, CheckCircle, Share2, Twitter, Linkedin, Facebook, MessageCircle, Mail } from "lucide-react";
import Footer from "../components/footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../../lib/supabase';

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

export default function WaitlistPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if email already exists
      const { data: existingUser } = await supabase
        .from('mistri-waitlist')
        .select('Id')
        .eq('Email', formData.email)
        .single();

      if (existingUser) {
        toast.error('This email is already registered in our waitlist');
        setIsLoading(false);
        return;
      }

      // Insert new waitlist entry
      const { data, error } = await supabase
        .from('mistri-waitlist')
        .insert([
          {
            Name: formData.name,
            Email: formData.email,
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error('Failed to join waitlist. Please try again.');
      } else {
        setIsSubmitted(true);
        toast.success('Successfully joined the waitlist!');
        setFormData({ name: '', email: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
              {/* Form Section */}
              <div className="order-2 lg:order-1">
                <div className="relative inline-block mb-12">
                  <div className="relative text-xl text-neutral-100 bg-black border border-neutral-700 p-4 rounded-full backdrop-blur-sm">
                    Join the Waitlist
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  About Mistri
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Mistri uses Agentic AI to analyze, visualize, and optimize your codebases. Transform complex tech stacks into clear, actionable insights in seconds.
                </p>

                <div className="w-full bg-neutral-900 rounded-xl border border-neutral-700 p-8">
                  {!isSubmitted ? (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full px-4 h-14 border border-neutral-700 rounded-xl shadow-sm text-sm focus:ring-white focus:border-white bg-neutral-800 text-white placeholder-neutral-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full px-4 h-14 border border-neutral-700 rounded-xl shadow-sm text-sm focus:ring-white focus:border-white bg-neutral-800 text-white placeholder-neutral-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full h-14 flex items-center justify-center px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition ${
                          isLoading ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 mr-2 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              />
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Join Waitlist
                            <ZapIcon className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Waitlist!</h3>
                      <p className="text-neutral-400 mb-6">
                        Thank you for joining. We'll notify you as soon as Mistri is ready for you.
                      </p>
                      
                      {/* Social Sharing Section */}
                      <div className="mb-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Share2 className="w-5 h-5 text-neutral-400" />
                          <span className="text-sm font-medium text-neutral-300">Share with friends:</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          {/* Twitter/X */}
                          <button
                            onClick={() => {
                              const text = "Just joined the waitlist for Mistri! 🚀 AI-powered code analysis that transforms complex tech stacks into clear insights. Join me:";
                              const url = window.location.href;
                              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                            }}
                            className="p-3 bg-black hover:bg-neutral-800 text-white rounded-full transition-colors duration-200 border border-neutral-600"
                            title="Share on Twitter/X"
                          >
                            <Twitter className="w-5 h-5" />
                          </button>

                          {/* LinkedIn */}
                          <button
                            onClick={() => {
                              const url = window.location.href;
                              window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                            }}
                            className="p-3 bg-[#0077B5] hover:bg-[#005885] text-white rounded-full transition-colors duration-200"
                            title="Share on LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </button>

                          {/* Facebook */}
                          <button
                            onClick={() => {
                              const url = window.location.href;
                              window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                            }}
                            className="p-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full transition-colors duration-200"
                            title="Share on Facebook"
                          >
                            <Facebook className="w-5 h-5" />
                          </button>

                          {/* WhatsApp */}
                          <button
                            onClick={() => {
                              const text = "Just joined the waitlist for Mistri! 🚀 AI-powered code analysis that transforms complex tech stacks into clear insights. Join me:";
                              const url = window.location.href;
                              window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                            }}
                            className="p-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-colors duration-200"
                            title="Share on WhatsApp"
                          >
                            <MessageCircle className="w-5 h-5" />
                          </button>

                          {/* Email */}
                          <button
                            onClick={() => {
                              const subject = "Check out Mistri - AI-powered code analysis";
                              const body = "I just joined the waitlist for Mistri! 🚀\n\nMistri uses Agentic AI to analyze, visualize, and optimize your codebases. Transform complex tech stacks into clear, actionable insights in seconds.\n\nJoin the waitlist here: " + window.location.href;
                              window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
                            }}
                            className="p-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full transition-colors duration-200"
                            title="Share via Email"
                          >
                            <Mail className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-neutral-200 transition"
                      >
                        Join Another Email
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits Section */}
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

        <ToastContainer 
          position="bottom-right" 
          theme="dark"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </main>
    </div>
  );
}