"use client";

import React from "react";
import { EXPERIENCE } from "@/data/portfolio";
import { Briefcase, ArrowUpRight, MapPin } from "lucide-react";

export function Experience() {
  const orgInitials: Record<string, string> = {
    craftly: "CR",
    "aeitron-ai": "AE",
    "independent-researcher": "IR",
  };

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>04 / LEADERSHIP & SYSTEMS EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Experience & Roles
          </h2>
          <p className="text-base text-[var(--foreground-muted)] leading-relaxed font-normal">
            Active leadership, governance, and autonomous agent engineering roles across technology ventures and independent research.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative pl-6 sm:pl-10 border-l border-[var(--surface-border)] space-y-12">
          {EXPERIENCE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-3 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--accent)] group-hover:scale-125 transition-transform shadow-md shadow-cyan-500/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="p-7 sm:p-9 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] glow-card-hover transition-all duration-300 shadow-sm">
                {/* Header: Organization Initials, Title, URL */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] font-mono-tech font-bold text-xs flex items-center justify-center text-[var(--foreground)] shadow-inner">
                      {orgInitials[item.id] || "AI"}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
                        <span>{item.role}</span>
                        <span className="text-[var(--foreground-subtle)] font-normal text-lg">·</span>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{item.organization}</span>
                            <ArrowUpRight className="w-4 h-4 opacity-60 text-[var(--accent)]" />
                          </a>
                        ) : (
                          <span>{item.organization}</span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded border border-[var(--surface-border)] bg-[var(--surface)]">
                        <MapPin className="w-3 h-3 text-[var(--foreground-subtle)]" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6 bg-[var(--surface-elevated)]/30 p-4 sm:p-5 rounded-xl border border-[var(--surface-border)]/70">
                  <p className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--foreground-subtle)]">
                    Core Mandate & Technical Scope:
                  </p>
                  <ul className="space-y-2.5">
                    {item.bulletPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-[var(--foreground-muted)] flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-[var(--accent)] shrink-0 font-mono-tech mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus Badges */}
                <div className="pt-4 border-t border-[var(--surface-border)]/60 flex flex-wrap gap-2 items-center">
                  <span className="text-[11px] font-mono-tech uppercase text-[var(--foreground-subtle)] mr-2">
                    Domains:
                  </span>
                  {item.focus.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-xs font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-muted)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
