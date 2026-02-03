"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { Section } from "@/components/Section";
import { ArrowRight, MousePointer2 } from "lucide-react";

export function Hero() {
  return (
    <Section id="hero" className="flex min-h-screen flex-col justify-center pt-20">
      <Scene3D />
      
      <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-6xl font-black leading-[1.05] tracking-tight text-white md:text-8xl lg:text-9xl"
        >
          Engineering <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Digital Future.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-text-secondary md:text-xl md:leading-relaxed"
        >
          I&apos;m <span className="text-white">Anurag Chaudhary</span>, a creative engineer 
          bridging the gap between <span className="text-accent italic">complex logic</span> 
          and <span className="text-secondary italic">stunning design</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-8 py-5 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            <span>Launch Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20"
          >
            <MousePointer2 className="h-4 w-4 text-accent" />
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-16"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">Explore</span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-primary via-secondary/50 to-transparent" />
        </div>
      </motion.div>
    </Section>
  );
}
