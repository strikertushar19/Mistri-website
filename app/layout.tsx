import type { Metadata } from "next";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mistri | Next-Gen Tech Stack Analysis with Agentic AI",
  description: "Experience the future of tech stack analysis with Mistri's agentic AI platform. Visualize, optimize, and understand your entire tech ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-orbitron antialiased min-h-screen bg-cyber-black text-white overflow-x-hidden"
        style={{ 
          fontFamily: 'Orbitron, Space Mono, system-ui, sans-serif',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 245, 0.1) 0%, transparent 50%)',
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
