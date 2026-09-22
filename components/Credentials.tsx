"use client";

import React from "react";
import { CREDENTIALS } from "@/data/portfolio";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>06 / CREDENTIALS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Verified Credentials
          </h2>
          <p className="text-base text-[var(--foreground-muted)]">
            Certified technical competencies across frontier foundation models, agent runtimes, and developer tooling.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="p-5 sm:p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`text-xs font-mono-tech font-semibold px-2 py-0.5 rounded border ${
                      cred.issuer === "Anthropic"
                        ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                        : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {cred.issuer}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500/80" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-[var(--foreground)] mb-2">
                  {cred.title}
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {cred.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--surface-border)]/60 flex items-center justify-between text-[11px] font-mono-tech text-[var(--foreground-subtle)]">
                <span>{cred.badgeType}</span>
                <span className="text-emerald-500 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
