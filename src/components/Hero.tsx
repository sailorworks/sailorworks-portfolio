"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 -z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <div className="relative inline-block">
             <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 origin-left"
            />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              I Engineer the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
                Digital Workforce.
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-lg font-mono">
            Sahil Prasad. AI Systems, Content & Design. <br />
            Building agents that think, designing apps that feel.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 pt-4"
          >
             <button className="group relative px-6 py-3 bg-neutral-100 text-black font-semibold rounded-full overflow-hidden hover:bg-neutral-200 transition-all flex items-center gap-2">
                <span>See My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
             <span className="font-handwriting text-neutral-500 -rotate-6 text-sm flex items-center gap-2">
                <span className="text-2xl">↳</span> Powered by Caffeine & Composio
             </span>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
          {/* Circular Glow */}
          <div className="absolute w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px]" />
          
          {/* Main Image Container */}
          <div className="relative z-10 w-full h-full max-w-md mx-auto">
             {/* Use generated image here */}
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/sahil_prasad_v2.png" 
                alt="Sahil Prasad looking upward with AR wireframes" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating AR Elements (Decorative) */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 -right-10 w-24 h-24 border border-red-500/50 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur-md"
            >
              <code className="text-xs text-red-500 font-mono">AGENTS<br/>ONLINE</code>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-10 w-32 h-16 border border-neutral-700 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur-md"
            >
              <div className="w-full px-2 space-y-1">
                <div className="h-1 bg-neutral-800 rounded w-full">
                  <motion.div 
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="h-full bg-green-500 rounded"
                  />
                </div>
                <div className="text-[10px] text-neutral-400 font-mono">Compiling...</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
