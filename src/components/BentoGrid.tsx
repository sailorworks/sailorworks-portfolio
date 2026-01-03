"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Video, Gamepad2, Brain, TrendingUp, Trophy, Youtube } from "lucide-react";

const tiles = [
  {
    title: "Video Content Agent",
    subtitle: "Automating the boring stuff with Composio.",
    caption: "AI Automation Pipeline",
    href: "https://github.com/sailorworks/video-content-agent",
    icon: Video,
  },
  {
    title: "AR Mastermind Game",
    subtitle: "Apple Swift Student Challenge Winner.",
    caption: "Apple Swift Winner",
    href: "https://github.com/sailorworks/swift25",
    icon: Gamepad2,
  },
  {
    title: "Learn everything using AI",
    subtitle: "Turns complex list of words into a simple sentence.",
    caption: "MnemonicsAI",
    href: "https://mnemonicsai.com/",
    icon: Brain,
  },
  {
    title: "10k Eyes",
    subtitle: "Vid Editing, Caraousel posts Everything Marketing.",
    caption: "Founders Office",
    href: "#",
    icon: TrendingUp,
  },
   {
    title: "Aptos Hackathon winner",
    subtitle: "Sold voice on chain",
    caption: "consumer apps",
    href: "https://github.com/rajarshidattapy/voice_vault",
    icon: Trophy, 
  },
  {
    title: "AI Avatar based video tutorial",
    subtitle: "Learn concepts easily",
    caption: "Youtube video",
    href: "https://www.youtube.com/watch?v=Vw0XRuZwl6A",
    icon: Youtube,
  }
];

export default function BentoGrid() {
  return (
    <section id="work" className="bg-black py-32">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 text-center"
            >
                {/* Unified Typography: Sans-serif for heading, Mono for subtext */}
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Strategic Expertise.
                </h2>
                <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed font-mono">
                    A refined approach to digital creation, blending artistic vision with technical precision.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-900">
                {tiles.map((tile, index) => (
                    <motion.a
                        key={index}
                        href={tile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col justify-between border-b border-r border-neutral-900 p-12 hover:bg-neutral-900/30 transition-colors duration-500 min-h-[400px]"
                    >
                        {/* Top: Icon */}
                        <div className="mb-8 relative w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-900/50 text-neutral-400 group-hover:text-white transition-colors duration-500">
                             <tile.icon className="w-6 h-6" />
                        </div>

                        {/* Middle/Bottom: Content */}
                        <div className="mt-auto">
                             {/* Unified Typography: Bold Sans title */}
                             <h3 className="text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors mb-4 tracking-tight">
                                {tile.title}
                            </h3>
                            {/* Mono description for technical feel */}
                            <p className="text-neutral-500 text-sm leading-relaxed mb-6 group-hover:text-neutral-400 transition-colors font-mono">
                                {tile.subtitle}
                            </p>
                            
                             <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-neutral-600 group-hover:text-white/60 transition-colors">
                                <span>{tile.caption}</span>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute top-8 right-8 text-neutral-800 group-hover:text-white/20 transition-colors">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
}
