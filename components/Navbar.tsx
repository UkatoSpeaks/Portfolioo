"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-1/2 top-4 z-50 flex h-14 -translate-x-1/2 items-center justify-between rounded-full px-4 transition-all duration-300",
        scrolled
          ? "w-[90%] border border-white/10 bg-black/50 backdrop-blur-xl md:w-[600px]"
          : "w-full bg-transparent"
      )}
    >
      <Link href="/" className="ml-2 text-lg font-bold tracking-tighter text-white">
        AC<span className="text-primary">.</span>
      </Link>

      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden h-5 w-[1px] bg-white/10 md:block" />

      <Link
        href="#contact"
        className="mr-2 hidden rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90 md:block"
      >
        Hire Me
      </Link>
    </motion.header>
  );
}
