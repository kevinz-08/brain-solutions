import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Cases from "@/components/Cases";
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
      <Industries />
      <Cases />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
