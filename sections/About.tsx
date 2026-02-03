"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  label: string;
  items: string[];
  index: number;
}

function TechList({ label, items, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-text-secondary transition-colors hover:text-white hover:bg-white/[0.08]">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-accent"
            >
              The Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              Creative Logic<span className="text-primary">.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-text-secondary"
          >
            <p>
              I don&apos;t just write code; I architect <span className="text-white font-medium">immersive digital products</span>. 
              With a foundation in C++ and a passion for modern web technologies, I specialize 
              in creating high-end experiences that feel both futuristic and familiar.
            </p>
            <p>
              My approach blends <span className="text-primary font-medium">mathematical precision</span> with 
              <span className="text-secondary font-medium"> artistic intuition</span>. Every pixel and line 
              of code is optimized for maximum impact and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <TechList 
              label="Philosophy" 
              items={["Visual First", "Clean Code", "Optimized", "Scalable"]} 
              index={0} 
            />
            <TechList 
              label="Interest" 
              items={["3D Web", "AI/ML", "FinTech", "SaaS"]} 
              index={1} 
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl opacity-50 transition-opacity group-hover:opacity-80" />
          <GlassCard className="relative overflow-hidden border-white/20 bg-black/40 p-0">
            <div className="aspect-square w-full bg-[#0F0F0F] p-8 md:p-12">
              <div className="flex h-full flex-col justify-between border-l-2 border-primary/30 pl-8">
                <div className="space-y-4">
                  <div className="text-6xl font-black text-white/10 italic leading-none">01</div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Solving problems using <span className="text-primary">algorithms</span> and creative design.</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl font-black text-white/10 italic leading-none">02</div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Building fast, responsive, and <span className="text-accent underline underline-offset-8">accessible</span> web apps.</h3>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
