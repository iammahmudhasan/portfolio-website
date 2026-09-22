"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { MapPin, Target, Sparkles, Building2, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
          <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>01 / ABOUT & POSITIONING</span>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15]">
              {PERSONAL_INFO.bioLead}
            </h2>
            <div className="h-1 w-16 bg-[var(--accent)] rounded-full" />
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed font-normal">
              I investigate how deep neural representations evolve and degrade under sequential training, then translate those insights into resilient agent runtimes, pretraining workflows, and multi-agent coordination architectures.
            </p>
          </div>

          {/* Right Column: Grounded biography & Metadata */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
              <p>
                My work spans the entire stack of modern machine intelligence: from custom tokenizer design and distributed multi-GPU training with PyTorch and CUDA, to long-term memory architectures and deterministic verification layers for agentic systems.
              </p>
              <p>
                As COO & Board Member at <span className="text-[var(--foreground)] font-semibold">Craftly</span>, I co-architect <span className="text-[var(--foreground)] font-semibold">Craftly Robot</span> (an AI research direction focused on broad real-world assistants, privacy-preserving negotiation, and human-consented coordination) and <span className="text-[var(--foreground)] font-semibold">Craftly Workspace</span>.
              </p>
              <p>
                As Founder & CEO of <span className="text-[var(--foreground)] font-semibold">Aeitron AI</span> and lead on the <span className="text-[var(--foreground)] font-semibold">Aeitron</span> scratch-built LLM project, I focus on building automation engines, defensive cybersecurity model architectures, and rigorous evaluation pipelines.
              </p>
            </div>

            {/* Structured Metadata Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)] mb-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  Based in {PERSONAL_INFO.location}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)] mb-1">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Focus</span>
                </div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  AI / ML · LLMs · Systems
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)] mb-1">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Organizations</span>
                </div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  Craftly + Aeitron
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Research Specialization</span>
                </div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  Continual Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
