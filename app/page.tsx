import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import { LaptopShowcase } from "@/components/laptop-showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LaptopShowcase />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
