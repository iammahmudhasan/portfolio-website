"use client";

import React, { useState } from "react";
import { RESEARCH_TOPICS, RESEARCH_PIPELINE } from "@/data/portfolio";
import { 
  FlaskConical, 
  ArrowRight, 
  GitBranch, 
  Layers, 
  Binary
} from "lucide-react";

export function Research() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="research" className="py-20 md:py-28 border-t border-[var(--surface-border)] bg-radial-gradient">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <FlaskConical className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>03 / RESEARCH INVESTIGATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Researching how machines learn continuously.
          </h2>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Modern neural networks are highly capable, but continuously learning new information causes them to overwrite previously acquired knowledge. I investigate architectures, regularization methods, memory mechanisms, and evaluation paradigms to make continual learning in neural networks mathematically robust.
          </p>
        </div>

        {/* Primary Research Deep Dive Box */}
        <div className="mb-16 p-7 sm:p-9 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-[var(--accent)] pointer-events-none">
            <Binary className="w-48 h-48" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech font-semibold bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/30">
              Primary Research Vector
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Continual Learning & Catastrophic Forgetting
            </h3>
            <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
              When deep networks adapt to new task distributions, stochastic gradient descent updates parameters along the manifold of the incoming loss, destructively projecting over previously learned representations. This stability-plasticity dilemma remains one of the fundamental obstacles standing between static model weights and genuine artificial general intelligence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--surface-border)]">
              <div>
                <p className="text-xs font-mono-tech uppercase text-[var(--foreground-subtle)] mb-1">
                  Core Friction
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Destructive Manifold Drift
                </p>
              </div>
              <div>
                <p className="text-xs font-mono-tech uppercase text-[var(--foreground-subtle)] mb-1">
                  Mechanisms
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Synaptic Elasticity & Buffering
                </p>
              </div>
              <div>
                <p className="text-xs font-mono-tech uppercase text-[var(--foreground-subtle)] mb-1">
                  Validation
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Retention & Transfer Matrix
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Pipeline Track */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)] mb-1">
                <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Methodology</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
                The Research & Verification Pipeline
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono-tech text-[var(--foreground-subtle)]">
              Step-by-step empirical protocol
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
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[140px] ${
                    isCurrent
                      ? "border-[var(--accent)] bg-[var(--surface-elevated)] ring-1 ring-[var(--accent)]/30"
                      : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)]"
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
                        isCurrent ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
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
          <div className="mt-4 p-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--accent)] font-semibold">
                  STAGE {RESEARCH_PIPELINE[activeStep].step}: {RESEARCH_PIPELINE[activeStep].title}
                </span>
                <span className="text-xs font-mono-tech text-[var(--foreground-subtle)]">
                  Artifact: {RESEARCH_PIPELINE[activeStep].technicalArtifact}
                </span>
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                {RESEARCH_PIPELINE[activeStep].detail}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Research Topic Cards */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Core Exploration Verticals
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-1">
              Six interconnected research fronts addressing intelligence, adaptation, and runtime robustness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="p-6 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-tech text-[var(--accent)] font-bold">
                      TOPIC {topic.number}
                    </span>
                    <Layers className="w-4 h-4 text-[var(--foreground-subtle)] opacity-50" />
                  </div>
                  <h4 className="text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
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
                        className="px-2 py-0.5 text-[10px] font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-subtle)]"
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
