"use client";

import React from "react";
import { TECH_STACK } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
            <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>05 / TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Architecture & Technologies
          </h2>
          <p className="text-base text-[var(--foreground-muted)]">
            A structured taxonomy of technologies, libraries, frameworks, and infrastructure utilized in research and production.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--foreground-subtle)] border border-[var(--surface-border)]">
                    {group.skills.length} techs
                  </span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {group.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--surface-border)]/60">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg border transition-colors ${
                      skill.highlight
                        ? "border-[var(--accent)]/40 bg-[var(--accent-glow)] text-[var(--foreground)] font-medium"
                        : "border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
