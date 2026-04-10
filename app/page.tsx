import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Cases />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}