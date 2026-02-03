import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { TechStack } from "@/sections/TechStack";
import { Projects } from "@/sections/Projects";
import { Misc } from "@/sections/Misc";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Misc />
      <Contact />
      <Footer />
      
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>
    </main>
  );
}
