"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section id="hero" className="flex min-h-screen flex-col justify-center pt-20">
      <Scene3D />
      
      <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Building Digital <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Experiences
          </span> that matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-text-secondary md:text-xl"
        >
          I&apos;m Anurag Chaudhary, a creative developer focused on building premium, 
          high-performance web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-text-secondary">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </Section>
  );
}
