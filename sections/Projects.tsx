"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "India Plot Project",
    description: "A high-conversion real estate marketplace for investing in premium land plots across India.",
    image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://india-land-eight.vercel.app/",
    github: "#",
  },
  {
    title: "AI Image Generator",
    description: "A high-performance web app that generates images based on text prompts using DALL-E 3 API.",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Node.js", "OpenAI"],
    live: "#",
    github: "#",
  },
  {
    title: "Spott",
    description: "A location-based social networking app for discovering local events and connecting with people nearby.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Firebase", "Tailwind", "Google Maps"],
    live: "https://spott-five.vercel.app/",
    github: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Featured Projects<span className="text-primary">.</span>
          </motion.h2>
          <p className="max-w-3xl text-lg text-text-secondary">
            A selection of my recent work involving advanced technologies and creative design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <GlassCard key={project.title} className="group p-0" delay={index * 0.1}>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
              </div>
              
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-text-secondary ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                
                <div className="mt-2 flex items-center gap-4">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
