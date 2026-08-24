"use client";

import Reveal from "./Reveal";

export default function SectionHeader({
  title,
  description,
  align = "center",
}: {
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink-title sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base leading-relaxed text-ink-body md:text-lg ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
