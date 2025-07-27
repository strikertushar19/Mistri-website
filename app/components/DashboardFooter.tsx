import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ServerIcon,
  CubeTransparentIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Active Users', value: '10.5K', icon: ChartBarIcon, color: 'neon-cyan' },
  { label: 'Server Load', value: '68%', icon: ServerIcon, color: 'neon-magenta' },
  { label: 'Response Time', value: '45ms', icon: BoltIcon, color: 'neon-lime' },
  { label: 'Global Nodes', value: '24', icon: GlobeAltIcon, color: 'neon-cyan' },
  { label: 'CPU Usage', value: '42%', icon: CpuChipIcon, color: 'neon-magenta' },
  { label: 'Memory Usage', value: '76%', icon: CubeTransparentIcon, color: 'neon-lime' },
];

const DashboardFooter = () => {
  return (
    <footer className="bg-cyber-darker border-t border-holo-medium relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-xl p-4 relative overflow-hidden"
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  <motion.div
                    className={`text-${stat.color} font-mono text-lg font-bold`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>

                {/* Progress bar for percentage values */}
                {stat.value.includes('%') && (
                  <div className="mt-2 h-1 bg-cyber-primary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${stat.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.value }}
                      transition={{ delay: idx * 0.1 + 0.4, duration: 1 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-magenta transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-magenta transition">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-magenta transition">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-magenta transition">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-holo-medium flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2050 Mistri. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-magenta transition">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-lime transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter; 