"use client";

import { motion } from "framer-motion";

const stackCategories = [
  {
    name: "Frontend",
    tools: ["React.js", "Next.js", "HTML5", "CSS", "Framer Motion", "Lucide"],
  },
  {
    name: "DevOps & Cloud",
    tools: ["Docker", "Kubernetes", "Git", "AWS (EKS)"],
  },
  {
    name: "Languages",
    tools: ["JavaScript", "TypeScript", "Swift"],
  },
  {
    name: "Databases",
    tools: ["MySQL"],
  },
  {
    name: "Frameworks",
    tools: ["Composio", "LangChain", "n8n"],
  },
];

export default function TechStack() {
  const allTools = stackCategories.flatMap((cat) => cat.tools);
  // Duplicate list multiple times to ensure seamless infinite scroll
  const scrollingTools = [...allTools, ...allTools, ...allTools, ...allTools];

  return (
    <section id="stack" className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden bg-black py-20">
      <div className="container relative z-10 mx-auto mb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">The Stack</h2>
          <p className="font-mono text-neutral-500">My digital toolbox.</p>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col gap-8 overflow-hidden">
        {/* Row 1: Left -> Right */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
           {/* Add a fade mask at edges if supported, via CSS class or inline mask-image */}
           {/* Using inline styles for mask since tailwind mask utilities might not be configured */}
          <motion.div
            className="flex gap-8 pr-8" // Increased gap for airy feel
            animate={{
              x: [0, -2000], // Adjust distance based on content width. 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60, // Much slower
                ease: "linear",
              },
            }}
          >
            {scrollingTools.map((tool, idx) => (
              <span
                key={`r1-${idx}`}
                className="whitespace-nowrap text-2xl font-medium text-neutral-600 transition-colors duration-300 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right -> Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 70, // Slightly different speed for variation
                ease: "linear",
              },
            }}
          >
            {scrollingTools.reverse().map((tool, idx) => ( // Reverse order for variety
               <div
                key={`r2-${idx}`}
                className="flex items-center justify-center whitespace-nowrap rounded-full border border-neutral-900 bg-neutral-950/50 px-6 py-2 text-sm text-neutral-500 backdrop-blur-sm transition-colors hover:border-neutral-700 hover:text-neutral-300"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
          
      {/* Background Gradients for fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />
    </section>
  );
}
