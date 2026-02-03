"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-1/2 top-6 z-50 flex h-16 -translate-x-1/2 items-center justify-between px-6 transition-all duration-500",
          scrolled
            ? "w-[90%] md:w-[700px] border border-white/10 bg-black/40 backdrop-blur-2xl rounded-2xl shadow-2xl"
            : "w-full bg-transparent"
        )}
      >
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <span className="flex h-full w-full items-center justify-center font-black text-white italic">A</span>
          </div>
          <span className="text-lg font-black tracking-tighter text-white uppercase italic">Anurag</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-xs font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-white group"
            >
              {item.name}
              <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>

        <Link
          href="#contact"
          className={cn(
            "hidden rounded-xl bg-white font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 md:block",
            scrolled 
              ? "px-4 py-1.5 text-[9px]" 
              : "px-6 py-2.5 text-[10px]"
          )}
        >
          Let&apos;s talk
        </Link>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-6 top-24 z-50 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-8 backdrop-blur-3xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter text-white hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
