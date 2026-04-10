"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import analysisImg from "@/public/process/analysis.svg";
import strategyImg from "@/public/process/strategy.svg";
import developmentImg from "@/public/process/development.svg";
import scalingImg from "@/public/process/scaling.svg";

const steps = [
  {
    num: "01",
    title: "Análisis",
    desc: "Analizamos tu negocio y detectamos oportunidades de mejora.",
    image: analysisImg,
  },
  {
    num: "02",
    title: "Estrategia",
    desc: "Diseñamos una solución adaptada a tus objetivos.",
    image: strategyImg,
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Construimos tu solución con tecnología moderna y escalable.",
    image: developmentImg,
  },
  {
    num: "04",
    title: "Escalamiento",
    desc: "Optimizamos y mejoramos continuamente para maximizar resultados.",
    image: scalingImg,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const stepIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length))
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative"
      style={{ height: "220vh" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background ambience */}
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.06] blur-[140px] rounded-full pointer-events-none" />

        <div className="relative w-full mx-auto max-w-6xl px-6 py-10">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary/50">
              <div className="w-1 h-1 rounded-full bg-accent-glow" />
              <span className="text-[11px] font-medium text-text-body uppercase tracking-wider">
                Cómo trabajamos
              </span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-text-title max-w-2xl">
              Un proceso claro,{" "}
              <span className="text-text-body italic font-light">
                de la idea al impacto
              </span>
            </h2>
          </div>

          {/* TWO-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT — Steps + progress indicator */}
            <div className="relative order-2 md:order-1">
              <div className="flex gap-5 md:gap-6">
                {/* Vertical progress line */}
                <div className="relative flex-shrink-0 w-3 flex justify-center pt-2">
                  <div className="relative w-px bg-border" style={{ height: "100%" }}>
                    <motion.div
                      style={{ height: progressHeight }}
                      className="absolute top-0 left-0 w-px bg-gradient-to-b from-accent via-accent-glow to-accent-purple"
                    />
                    {/* Dots */}
                    {steps.map((_, i) => {
                      const position = (i / (steps.length - 1)) * 100;
                      const isReached = activeStep >= i;
                      const isActive = activeStep === i;
                      return (
                        <div
                          key={i}
                          style={{ top: `${position}%` }}
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                          <motion.div
                            animate={{ scale: isActive ? 1.3 : 1 }}
                            transition={{ duration: 0.4 }}
                            className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
                              isReached
                                ? "bg-accent border-accent-glow shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                                : "bg-bg border-border"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Steps text */}
                <div className="flex-1 min-w-0 space-y-7 md:space-y-8">
                  {steps.map((step, i) => {
                    const isActive = activeStep === i;
                    return (
                      <motion.div
                        key={step.num}
                        animate={{
                          opacity: isActive ? 1 : 0.35,
                          x: isActive ? 0 : -4,
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="origin-left"
                      >
                        <div
                          className={`text-[10px] font-mono mb-1 transition-colors duration-500 ${
                            isActive ? "text-accent-glow" : "text-text-muted"
                          }`}
                        >
                          {step.num}
                        </div>
                        <h3
                          className={`text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight transition-colors duration-500 ${
                            isActive ? "text-text-title" : "text-text-body"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <motion.p
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0,
                            marginTop: isActive ? 8 : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-sm md:text-base text-text-body leading-relaxed max-w-md overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="relative order-1 md:order-2">
              <div className="relative aspect-square w-full max-w-[420px] md:max-w-none mx-auto">
                {/* Glow */}
                <div className="absolute -inset-8 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-3xl border border-border bg-bg-secondary/40 overflow-hidden backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        fill
                        className="object-cover"
                        priority={activeStep === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

                  {/* Step badge */}
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full border border-border bg-bg/80 backdrop-blur-md flex items-center gap-2 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
                    <span className="text-[10px] font-mono text-text-body uppercase tracking-wider">
                      Step {steps[activeStep].num}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}