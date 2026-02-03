"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiThreedotjs, 
  SiFirebase, 
  SiSupabase, 
  SiNodedotjs, 
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiGithub,
  SiPrisma
} from "react-icons/si";
import { Terminal } from "lucide-react";

const techGroups = [
  {
    category: "Core Languages",
    items: [
      { name: "C++", icon: <SiCplusplus className="h-6 w-6 text-[#00599C]" />, color: "hover:border-[#00599C]/50" },
      { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-yellow-400" />, color: "hover:border-yellow-400/50" },
      { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-400" />, color: "hover:border-blue-400/50" },
      { name: "Python", icon: <SiPython className="h-6 w-6 text-[#3776AB]" />, color: "hover:border-[#3776AB]/50" },
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "React", icon: <SiReact className="h-6 w-6 text-cyan-400" />, color: "hover:border-cyan-400/50" },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" />, color: "hover:border-white/50" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-sky-400" />, color: "hover:border-sky-400/50" },
      { name: "Framer Motion", icon: <SiFramer className="h-6 w-6 text-pink-500" />, color: "hover:border-pink-500/50" },
      { name: "Three.js", icon: <SiThreedotjs className="h-6 w-6 text-white" />, color: "hover:border-white/50" },
      { name: "HTML5/CSS3", icon: <SiHtml5 className="h-6 w-6 text-orange-500" />, color: "hover:border-orange-500/50" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-green-500" />, color: "hover:border-green-500/50" },
      { name: "Firebase", icon: <SiFirebase className="h-6 w-6 text-amber-500" />, color: "hover:border-amber-500/50" },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-blue-300" />, color: "hover:border-blue-300/50" },
      { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-400" />, color: "hover:border-green-400/50" },
      { name: "Supabase", icon: <SiSupabase className="h-6 w-6 text-emerald-500" />, color: "hover:border-emerald-500/50" },
      { name: "Prisma", icon: <SiPrisma className="h-6 w-6 text-white" />, color: "hover:border-white/50" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", icon: <SiGithub className="h-6 w-6 text-white" />, color: "hover:border-white/50" },
      { name: "Docker", icon: <SiDocker className="h-6 w-6 text-blue-400" />, color: "hover:border-blue-400/50" },
      { name: "Vercel", icon: <SiVercel className="h-6 w-6 text-white" />, color: "hover:border-white/50" },
      { name: "VS Code", icon: <Terminal className="h-6 w-6 text-blue-500" />, color: "hover:border-blue-500/50" },
    ],
  },
];

export function TechStack() {
  return (
    <Section id="tech" className="relative">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Technical Arsenal<span className="text-primary">.</span>
          </motion.h2>
          <p className="max-w-2xl text-lg text-text-secondary">
            A comprehensive list of languages, frameworks, and tools I use to solve complex problems.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {techGroups.map((group, groupIdx) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold">{group.category}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {group.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIdx * 4 + index) * 0.03 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 ${item.color} hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/5 group`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-text-secondary group-hover:text-white transition-colors">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
