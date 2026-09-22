"use client";

import React from "react";
import { CREDENTIALS } from "@/data/portfolio";
import { Award, CheckCircle2 } from "lucide-react";

export function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>06 / VERIFIED CREDENTIALS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Verified Credentials
          </h2>
          <p className="text-base text-[var(--foreground-muted)] leading-relaxed font-normal">
            Certified technical competencies across frontier foundation models, agentic tooling, system prompts, and AI developer workflows.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] glow-card-hover transition-all duration-200 flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  cred.issuer === "Anthropic"
                    ? "bg-gradient-to-r from-amber-500/80 to-amber-300/40"
                    : "bg-gradient-to-r from-blue-500/80 to-cyan-400/40"
                }`}
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`text-xs font-mono-tech font-bold px-2.5 py-1 rounded border ${
                      cred.issuer === "Anthropic"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {cred.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--foreground)] mb-2">
                  {cred.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--surface-border)]/60 flex items-center justify-between text-[11px] font-mono-tech text-[var(--foreground-subtle)]">
                <span>{cred.badgeType}</span>
                <span className="text-[var(--foreground-muted)]">Frontier AI Track</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
