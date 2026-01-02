"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const tiles = [
  {
    title: "The Publisher Agent",
    subtitle: "Automating the boring stuff with Composio.",
    caption: "AI Automation Pipeline",
    image: "/bento_publisher_agent.png",
  },
  {
    title: "Spatial Logic",
    subtitle: "Apple Swift Student Challenge Winner.",
    caption: "Apple Swift Winner",
    image: "/bento_spatial_logic.png",
  },
  {
    title: "External Memory",
    subtitle: "Full-stack GenAI architecture.",
    caption: "MnemonicsAI",
    image: "/bento_mnemonics_ai.png",
  },
  {
    title: "10k Eyes",
    subtitle: "Viral growth engineering.",
    caption: "Founders Office",
    image: "/bento_founders_office.png",
  },
   {
    title: "Neural Search",
    subtitle: "Semantic retrieval systems.",
    caption: "RAG Infrastructure",
    image: null, 
  },
  {
    title: "Agent Orchestration",
    subtitle: "Multi-agent systems coordination.",
    caption: "Swarm Intelligence",
    image: null,
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
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col justify-between border-b border-r border-neutral-900 p-12 hover:bg-neutral-900/30 transition-colors duration-500 min-h-[400px]"
                    >
                        {/* Top: Icon/Image */}
                        <div className="mb-8 relative w-12 h-12 overflow-hidden rounded-lg bg-neutral-900/50">
                             {tile.image ? (
                                <Image
                                    src={tile.image}
                                    alt={tile.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-700">
                                   <ArrowUpRight className="w-5 h-5" />
                                </div>
                             )}
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
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
