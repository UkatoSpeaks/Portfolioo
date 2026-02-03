"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Mail, Github, Twitter, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              Get in Touch<span className="text-primary">.</span>
            </motion.h2>
            <p className="max-w-md text-lg text-text-secondary">
              Have a project in mind? Or just want to say hi? I&apos;m always open to new 
              collaborations and opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary">Email</p>
                <p className="text-lg font-medium text-white">anurag.chaudhary.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 ring-1 ring-secondary/20">
                <Linkedin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary">LinkedIn</p>
                <p className="text-lg font-medium text-white">anurag-chaudhary</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/UkatoSpeaks" },
              { icon: <Twitter className="h-5 w-5" />, href: "#" },
              { icon: <Linkedin className="h-5 w-5" />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-text-secondary ring-1 ring-white/10 transition-all hover:bg-primary hover:text-white hover:ring-primary"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <GlassCard>
          {isSuccess ? (
            <div className="flex h-[400px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="mt-2 text-text-secondary">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm font-bold text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me more about your project..."
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                disabled={isSubmitting}
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </Section>
  );
}
