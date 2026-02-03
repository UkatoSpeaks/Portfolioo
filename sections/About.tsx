"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import { Code2, Cpu, Globe, Layout, Palette, Zap } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive, high-performance web applications with React and Next.js.",
    icon: <Layout className="h-6 w-6 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces with a focus on UX.",
    icon: <Palette className="h-6 w-6 text-secondary" />,
  },
  {
    title: "3D Web Experiences",
    description: "Creating immersive 3D environments using Three.js and React Three Fiber.",
    icon: <Cpu className="h-6 w-6 text-accent" />,
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented TypeScript code.",
    icon: <Code2 className="h-6 w-6 text-white" />,
  },
  {
    title: "Performance Optimization",
    description: "Ensuring lighting fast load times and smooth 60fps animations.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Modern Tech Stack",
    description: "Leveraging the latest tools like Tailwind CSS, Framer Motion, and shadcn/ui.",
    icon: <Globe className="h-6 w-6 text-secondary" />,
  },
];

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            About Me<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-lg text-text-secondary"
          >
            I am a passionate software engineer with a deep love for building digital products 
            that combine beautiful design with high-performance code. My goal is to create 
            web experiences that are not only functional but also visually captivating.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <GlassCard key={skill.title} delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {skill.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
