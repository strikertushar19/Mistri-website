import type { Metadata } from "next";
import "@fontsource/inter/latin.css";
import "@fontsource/poppins/latin.css";
import "@fontsource/ibm-plex-sans/latin.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Mistri | Understand and Improve Your Tech Stack with AI",
  description: "Mistri uses Agentic AI to analyze, visualize, and optimize your code and cloud systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="font-sans antialiased min-h-screen bg-background text-foreground"
        style={{ fontFamily: 'Inter, Poppins, IBM Plex Sans, Arial, sans-serif' }}
      >
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
