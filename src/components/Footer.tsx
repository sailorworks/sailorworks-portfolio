"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-neutral-900 py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-12"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-white">
                I don&apos;t just write code. <br/>
                <span className="text-neutral-500">I ship systems.</span>
            </h2>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 inline-block"
        >
            <button className="group relative px-8 py-4 bg-black border border-neutral-700 font-mono text-green-500 rounded-lg hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300">
                <span className="flex items-center gap-3">
                    <Terminal className="w-5 h-5" />
                    <span className="group-hover:translate-x-1 transition-transform">
                        Initialize Collaboration
                    </span>
                    <span className="animate-pulse">_</span>
                </span>
            </button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8"
        >
            {[
                { name: "GitHub", icon: Github, href: "https://github.com/sailorworks" },
                { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sahil-prasad-/" },
                { name: "Email", icon: Mail, href: "mailto:sahilpras11@gmail.com" }
            ].map((social, idx) => (
                <a 
                    key={idx} 
                    href={social.href}
                    className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    aria-label={social.name}
                >
                    <social.icon className="w-5 h-5" />
                </a>
            ))}
        </motion.div>

        <div className="mt-20 text-neutral-600 text-sm font-mono">
            © {new Date().getFullYear()} Sahil Prasad. All systems operational.
        </div>
      </div>

       {/* Decorational Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none -z-0"></div>
    </footer>
  );
}
