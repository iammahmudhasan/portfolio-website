"use client";

import React from "react";
import { InteractiveGlobe } from "./InteractiveGlobe";
import { ArrowRight, Globe2 } from "lucide-react";

export function GlobalScale() {
  const metrics = [
    {
      value: "4 Systems",
      label: "Flagship AI architectures & platforms",
    },
    {
      value: "Multi-Node",
      label: "FSDP & Megatron distributed training",
    },
    {
      value: "100% Verified",
      label: "Anthropic & Google AI credentials",
    },
    {
      value: "UTC+6 Base",
      label: "Dhaka base, global technical impact",
    },
  ];

  return (
    <section className="py-24 md:py-36 border-t border-[var(--surface-border)] relative overflow-hidden bg-[var(--background)]">
      {/* Background radial atmosphere */}
      <div className="ambient-glow-mesh w-[600px] h-[400px] top-1/2 right-0 -translate-y-1/2 bg-cyan-500/10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & Metrics Grid */}
          <div className="lg:col-span-6 space-y-10">
            {/* Tag */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)] shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>[DISTRIBUTED_SCALE_COORDINATION]</span>
              </div>

              {/* Large Headline matching reference design */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                Distributed intelligence, coordinated globally.
              </h2>
            </div>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed font-normal">
              Powering autonomous agent runtimes, privacy-preserving communication protocols, and distributed training pipelines across multi-accelerator clusters. Building systems that bridge foundational neural research with real-world human-consented action.
            </p>

            {/* Action Link */}
            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono-tech font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group cursor-pointer"
              >
                <span>Inspect System Architectures</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* 4 Metrics Grid (Matching Reference Screenshot) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-8 border-t border-[var(--surface-border)]">
              {metrics.map((m) => (
                <div key={m.value} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] font-mono-tech">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--foreground-muted)] font-normal leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Dotted Interactive Globe */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
