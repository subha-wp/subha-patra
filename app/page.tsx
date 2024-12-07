import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />

      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
