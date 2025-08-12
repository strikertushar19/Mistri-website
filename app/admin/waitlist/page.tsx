'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowLeftIcon, UsersIcon, CalendarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "../../components/footer";
import { supabase } from '../../../lib/supabase';

interface WaitlistEntry {
  Id: number;
  Name: string;
  Email: string;
  Created_at: string;
}

export default function AdminWaitlistPage() {
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const { data, error } = await supabase
        .from('mistri-waitlist')
        .select('*')
        .order('Created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        setError('Failed to fetch waitlist data');
      } else {
        setWaitlistData(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <main className="overflow-y-auto h-screen scroll-smooth">
        <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-16">
          <div className="mx-auto w-full max-w-screen-xl py-8">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200">
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Home
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Waitlist Admin
                </h1>
                <div className="flex items-center gap-4 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5" />
                    <span>{waitlistData.length} total signups</span>
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : error ? (
                <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 text-red-300">
                  {error}
                </div>
              ) : (
                <div className="bg-neutral-900 rounded-xl border border-neutral-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-neutral-800">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">
                            ID
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">
                            Email
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">
                            Joined
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700">
                        {waitlistData.map((entry) => (
                          <tr key={entry.Id} className="hover:bg-neutral-800/50 transition-colors">
                            <td className="px-6 py-4 text-sm text-neutral-400">
                              #{entry.Id}
                            </td>
                            <td className="px-6 py-4 text-sm text-white font-medium">
                              {entry.Name}
                            </td>
                            <td className="px-6 py-4 text-sm text-neutral-400">
                              <div className="flex items-center gap-2">
                                <EnvelopeIcon className="w-4 h-4" />
                                {entry.Email}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-neutral-400">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                {formatDate(entry.Created_at)}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {waitlistData.length === 0 && (
                    <div className="text-center py-12">
                      <UsersIcon className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                      <p className="text-neutral-400">No waitlist entries yet.</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
