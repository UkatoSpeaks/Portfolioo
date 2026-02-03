"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";

const experiences = [
  {
    company: "Creative Studio",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Leading the development of award-winning marketing websites and interactive 3D experiences.",
  },
  {
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Developed and maintained multiple B2B SaaS applications using Next.js and Node.js.",
  },
  {
    company: "Freelance",
    role: "UI/UX Designer & Web Developer",
    period: "2019 - 2021",
    description: "Worked with various startups to design and build their initial MVPs and brand identities.",
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Experience<span className="text-secondary">.</span>
          </motion.h2>
          <p className="max-w-2xl text-lg text-text-secondary">
            A journey through my professional career and the impact I&apos;ve made at various companies.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <GlassCard key={exp.company} delay={index * 0.1}>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="font-medium text-primary">{exp.company}</p>
                </div>
                <div className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-text-secondary ring-1 ring-white/10">
                  {exp.period}
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {exp.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
