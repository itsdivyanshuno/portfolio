import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <AnimatedSection id="about">
        <About />
      </AnimatedSection>

      <AnimatedSection id="skills">
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>

      <Footer />

    </main>
  );
}