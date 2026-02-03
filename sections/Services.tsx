"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Terminal, 
  Database, 
  Layers,
  Sparkles,
  Zap,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern frameworks like Next.js, featuring scalable architecture and robust APIs.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Mobile-First Design",
    description: "Creating responsive, fluid interfaces that look and work perfectly on every device, from mobile to ultra-wide displays.",
    icon: <Smartphone className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Performance Optimization",
    description: "Achieving perfect Lighthouse scores and ultra-fast load times through advanced caching and asset optimization.",
    icon: <Zap className="h-6 w-6 text-accent" />,
  },
  {
    title: "UI/UX Architecture",
    description: "Designing intuitive user flows and delightful micro-interactions that keep users engaged and conversion rates high.",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  },
  {
    title: "Backend & Database",
    description: "Architecting secure and efficient data layers using PostgreSQL, Firebase, or Supabase with real-time capabilities.",
    icon: <Database className="h-6 w-6 text-secondary" />,
  },
  {
    title: "SEO & Accessibility",
    description: "Implementing semantic HTML and ARIA standards to ensure search engine visibility and inclusive user experiences.",
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
  },
];

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            My Expertise<span className="text-secondary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg text-text-secondary"
          >
            I specialize in building high-performance digital products that solve 
            complex problems through elegant code and thoughtful design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <GlassCard 
              key={service.title} 
              delay={index * 0.1}
              className="group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
