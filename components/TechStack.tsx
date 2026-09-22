"use client";

import React, { useState } from "react";
import { TECH_STACK } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export function TechStack() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", ...TECH_STACK.map((c) => c.category)];

  const filteredGroups =
    selectedFilter === "All"
      ? TECH_STACK
      : TECH_STACK.filter((c) => c.category === selectedFilter);

  return (
    <section id="stack" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
              <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>05 / TECHNICAL STACK TAXONOMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              Architecture & Technologies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-md font-normal leading-relaxed">
            A structured taxonomy of technologies, distributed frameworks, neural training libraries, and infrastructure actively utilized in research and production.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[var(--surface-border)] font-mono-tech text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedFilter === cat
                  ? "bg-[var(--foreground)] text-[var(--background)] font-bold border-transparent shadow-sm"
                  : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] glow-card-hover transition-all duration-300 flex flex-col justify-between shadow-sm"
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
                    className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg border transition-colors flex items-center gap-1.5 ${
                      skill.highlight
                        ? "border-[var(--accent)]/40 bg-[var(--accent-glow)] text-[var(--foreground)] font-semibold shadow-xs"
                        : "border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                    <span>{skill.name}</span>
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
