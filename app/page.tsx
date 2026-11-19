import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Categories from "@/components/Categories";
import Cases from "@/components/Cases";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white" style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Process />
      <Categories />
      <Cases />
      <Plans />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
