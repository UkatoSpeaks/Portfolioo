"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Lines of Code", value: "50k+" },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity, but a standard landing page or portfolio usually takes 1-2 weeks, while more complex SaaS applications can take 4-8 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide ongoing maintenance, performance monitoring, and updates to ensure your digital product continues to run smoothly and securely."
  },
  {
    question: "What is your tech stack of choice?",
    answer: "I primarily work with Next.js, TypeScript, Tailwind CSS, and Framer Motion for the frontend. For backend, I use Firebase, Supabase, or custom Node.js solutions."
  }
];

export function Misc() {
  return (
    <>
      {/* Stats Section */}
      <Section id="stats" className="!py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center"
            >
              <span className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</span>
              <span className="mt-2 text-xs uppercase tracking-widest text-text-secondary">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              Common Questions<span className="text-accent">.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <h4 className="text-lg font-bold text-white">{faq.question}</h4>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </GlassCard>
            ))}
            
            {/* Call to Action Grid Item */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 ring-1 ring-white/10"
            >
              <h4 className="text-xl font-bold text-white">Have a unique question?</h4>
              <p className="mt-2 text-sm text-text-secondary">
                Feel free to reach out via the contact form or my social media.
              </p>
              <a 
                href="#contact" 
                className="mt-6 inline-block w-fit rounded-xl bg-white px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
              >
                Ask Anything
              </a>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
