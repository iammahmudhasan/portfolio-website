"use client";

import React, { useState } from "react";
import { RESEARCH_TOPICS, RESEARCH_PIPELINE } from "@/data/portfolio";
import { 
  FlaskConical, 
  ArrowRight, 
  GitBranch, 
  Layers
} from "lucide-react";

export function Research() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [learningMode, setLearningMode] = useState<"standard" | "continual">("continual");

  return (
    <section id="research" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative overflow-hidden bg-dot-matrix">
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-mesh w-[500px] h-[300px] top-1/3 left-[-100px] bg-cyan-500/10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <FlaskConical className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>03 / EMPIRICAL INVESTIGATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
            Researching how machines learn continuously.
          </h2>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed font-normal">
            Modern neural networks excel on stationary data distributions, but continuously learning new tasks causes stochastic gradient updates to destructively overwrite previously learned representations. I investigate architectures, regularization methods, and memory systems that make continuous learning mathematically stable.
          </p>
        </div>

        {/* Interactive Retention Simulation & Catastrophic Forgetting Deep Dive */}
        <div className="mb-20 p-7 sm:p-9 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[var(--surface-border)]">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech font-semibold bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/30">
                Primary Theoretical Investigation
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                The Stability-Plasticity Dilemma
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Compare sequential task performance between standard stochastic gradient descent fine-tuning (which exhibits catastrophic forgetting) versus our continual learning regularized model.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] self-start lg:self-center font-mono-tech text-xs">
              <button
                type="button"
                onClick={() => setLearningMode("standard")}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  learningMode === "standard"
                    ? "bg-rose-500/15 text-rose-400 border border-rose-500/30 font-semibold"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                Standard Fine-Tuning (Forgets)
              </button>
              <button
                type="button"
                onClick={() => setLearningMode("continual")}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  learningMode === "continual"
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                Continual Learning (Retains)
              </button>
            </div>
          </div>

          {/* Interactive Chart Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            {/* SVG Visualizer Chart */}
            <div className="lg:col-span-7 p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--background)] relative">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[var(--foreground-subtle)] mb-4">
                <span>TASK RETENTION CURVE (Task A Accuracy over Sequential Tasks B, C, D)</span>
                <span className={learningMode === "continual" ? "text-cyan-400" : "text-rose-400"}>
                  {learningMode === "continual" ? "EWC + Rehearsal" : "Unconstrained SGD"}
                </span>
              </div>

              {/* Chart Canvas */}
              <div className="h-44 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="var(--surface-border)" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="var(--surface-border)" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="var(--surface-border)" strokeDasharray="3 3" />

                  {/* Axis labels */}
                  <text x="5" y="15" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">100%</text>
                  <text x="5" y="55" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">50%</text>
                  <text x="5" y="95" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">0%</text>

                  {/* Task markers */}
                  <text x="30" y="115" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">Task A</text>
                  <text x="140" y="115" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">Task B</text>
                  <text x="250" y="115" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">Task C</text>
                  <text x="360" y="115" fill="var(--foreground-subtle)" fontSize="9" fontFamily="monospace">Task D</text>

                  {learningMode === "continual" ? (
                    <>
                      {/* Continual learning high retention line */}
                      <path
                        d="M 40 25 Q 150 28, 250 32 T 380 36"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="3"
                        className="transition-all duration-500"
                      />
                      <circle cx="40" cy="25" r="4" fill="#22d3ee" />
                      <circle cx="150" cy="28" r="4" fill="#22d3ee" />
                      <circle cx="250" cy="32" r="4" fill="#22d3ee" />
                      <circle cx="380" cy="36" r="4" fill="#22d3ee" />
                    </>
                  ) : (
                    <>
                      {/* Standard fine-tuning catastrophic drop line */}
                      <path
                        d="M 40 25 Q 120 70, 200 95 T 380 102"
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="3"
                        className="transition-all duration-500"
                      />
                      <circle cx="40" cy="25" r="4" fill="#f43f5e" />
                      <circle cx="150" cy="80" r="4" fill="#f43f5e" />
                      <circle cx="250" cy="98" r="4" fill="#f43f5e" />
                      <circle cx="380" cy="102" r="4" fill="#f43f5e" />
                    </>
                  )}
                </svg>
              </div>
            </div>

            {/* Retention Metrics Comparison Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]/60">
                <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                  <span className="text-[var(--foreground-subtle)]">BACKWARD TRANSFER RETENTION</span>
                  <span className={`font-bold ${learningMode === "continual" ? "text-cyan-400" : "text-rose-400"}`}>
                    {learningMode === "continual" ? "92.4% Retained" : "14.2% Retained"}
                  </span>
                </div>
                <div className="w-full bg-[var(--surface)] h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      learningMode === "continual" ? "w-[92.4%] bg-cyan-400" : "w-[14.2%] bg-rose-500"
                    }`}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]/60">
                <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                  <span className="text-[var(--foreground-subtle)]">WEIGHT INTERFERENCE PENALTY</span>
                  <span className={`font-bold ${learningMode === "continual" ? "text-emerald-400" : "text-rose-400"}`}>
                    {learningMode === "continual" ? "Low (Projected Orthogonal)" : "Critical Collapse"}
                  </span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  {learningMode === "continual"
                    ? "Quadratic Fisher information penalty constrains parameter updates along sensitive manifolds, preserving prior task representations."
                    : "Unrestricted gradient steps on new data overwrite weight configurations essential for prior tasks within a single epoch."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Pipeline Track */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
                <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Methodology</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
                Empirical Research Pipeline
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono-tech text-[var(--foreground-subtle)]">
              Formal verification lifecycle
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {RESEARCH_PIPELINE.map((stage, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[140px] cursor-pointer ${
                    isCurrent
                      ? "border-[var(--accent)] bg-[var(--surface-elevated)] shadow-md ring-1 ring-[var(--accent)]/30"
                      : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`text-xs font-mono-tech font-bold ${
                        isCurrent ? "text-[var(--accent)]" : "text-[var(--foreground-subtle)]"
                      }`}
                    >
                      {stage.step}
                    </span>
                    {idx < RESEARCH_PIPELINE.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-[var(--foreground-subtle)] hidden lg:block opacity-40" />
                    )}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-semibold mb-1 ${
                        isCurrent ? "text-[var(--foreground)] font-bold" : "text-[var(--foreground-muted)]"
                      }`}
                    >
                      {stage.title}
                    </h4>
                    <p className="text-[11px] text-[var(--foreground-subtle)] line-clamp-2">
                      {stage.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pipeline Stage Detail Box */}
          <div className="mt-4 p-5 sm:p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--accent)] font-bold border border-[var(--surface-border)]">
                  STAGE {RESEARCH_PIPELINE[activeStep].step}: {RESEARCH_PIPELINE[activeStep].title}
                </span>
                <span className="text-xs font-mono-tech text-[var(--foreground-subtle)]">
                  Primary Artifact: {RESEARCH_PIPELINE[activeStep].technicalArtifact}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {RESEARCH_PIPELINE[activeStep].detail}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Research Exploration Topic Cards */}
        <div>
          <div className="mb-8 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Core Exploration Verticals
            </h3>
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">
              Six interconnected research fronts addressing neural representations, continual adaptation, and runtime robustness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] transition-all duration-300 flex flex-col justify-between glow-card-hover shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-tech text-[var(--accent)] font-bold">
                      TOPIC {topic.number}
                    </span>
                    <Layers className="w-4 h-4 text-[var(--foreground-subtle)] opacity-50" />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-[var(--foreground)] mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {topic.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--surface-border)]/60">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
