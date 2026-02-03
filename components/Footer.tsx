import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Anurag Chaudhary. Built with Next.js & Three.js.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-zinc-500 transition-colors hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
