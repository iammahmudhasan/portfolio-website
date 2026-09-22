"use client";

import React from "react";
import { EXPERIENCE } from "@/data/portfolio";
import { Briefcase, ArrowUpRight, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>04 / EXPERIENCE & ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Engineering & Leadership
          </h2>
          <p className="text-base text-[var(--foreground-muted)]">
            Active roles spanning corporate governance, autonomous agent research, and AI systems engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[var(--surface-border)] space-y-12">
          {EXPERIENCE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--background)] bg-[var(--accent)] group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/40 transition-all duration-300">
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
                      <span>{item.role}</span>
                      <span className="text-[var(--foreground-subtle)] font-normal">at</span>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{item.organization}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-60" />
                        </a>
                      ) : (
                        <span>{item.organization}</span>
                      )}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--surface-elevated)] text-[var(--accent)] border border-[var(--surface-border)] font-semibold">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="hidden sm:inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
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
                <ul className="space-y-2.5 mb-6">
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

                {/* Focus Badges */}
                <div className="pt-4 border-t border-[var(--surface-border)]/60 flex flex-wrap gap-2 items-center">
                  <span className="text-[11px] font-mono-tech uppercase text-[var(--foreground-subtle)] mr-2">
                    Focus:
                  </span>
                  {item.focus.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-xs font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)]"
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
