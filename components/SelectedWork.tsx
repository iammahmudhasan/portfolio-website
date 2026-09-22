"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import { ExternalLink, ArrowUpRight, Cpu } from "lucide-react";

export function SelectedWork() {
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "features" | "stack">>({
    "craftly-robot": "overview",
    "aeitron": "overview",
    "craftly-workspace": "overview",
    "catastrophic-forgetting": "overview",
  });

  const setTab = (projectId: string, tab: "overview" | "features" | "stack") => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="work" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
              <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>02 / SELECTED WORK & ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-md font-normal leading-relaxed">
            Systems, products, and research projects I&apos;ve been building across agent runtimes, LLMs, and organizational infrastructure.
          </p>
        </div>

        {/* 4 Flagship Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => {
            const currentTab = activeTabs[project.id] || "overview";

            return (
              <div
                key={project.id}
                className="group glow-card-hover relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] transition-all duration-300 shadow-md"
              >
                <div>
                  {/* Top bar: Number & Status Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded border border-[var(--surface-border)] bg-[var(--surface-elevated)]">
                        {project.number}
                      </span>
                      <span className="text-[11px] font-mono-tech text-[var(--foreground-subtle)]">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="p-1.5 rounded-lg text-[var(--foreground-subtle)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                        </a>
                      )}
                    </div>
                    {project.role && (
                      <p className="text-xs font-mono-tech text-cyan-400">
                        {project.role} · {project.organization}
                      </p>
                    )}
                  </div>

                  {/* Mini Tab Switcher */}
                  <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--surface-elevated)] border border-[var(--surface-border)] text-xs font-mono-tech mb-5">
                    <button
                      type="button"
                      onClick={() => setTab(project.id, "overview")}
                      className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                        currentTab === "overview"
                          ? "bg-[var(--surface)] text-[var(--foreground)] font-semibold shadow-sm"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab(project.id, "features")}
                      className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                        currentTab === "features"
                          ? "bg-[var(--surface)] text-[var(--foreground)] font-semibold shadow-sm"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Architecture
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab(project.id, "stack")}
                      className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                        currentTab === "stack"
                          ? "bg-[var(--surface)] text-[var(--foreground)] font-semibold shadow-sm"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Stack
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[140px]">
                    {currentTab === "overview" && (
                      <div className="space-y-3">
                        <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed font-normal">
                          {project.description}
                        </p>
                        <div className="p-3 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-elevated)]/40 text-xs font-mono-tech text-[var(--foreground-subtle)] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>Core Highlight: {project.highlight}</span>
                        </div>
                      </div>
                    )}

                    {currentTab === "features" && (
                      <ul className="space-y-2">
                        {project.features?.map((feat, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[var(--foreground-muted)] flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-[var(--accent)] font-mono-tech font-bold">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {currentTab === "stack" && (
                      <div className="space-y-3">
                        <p className="text-[11px] font-mono-tech text-[var(--foreground-subtle)] uppercase">
                          Applied Frameworks & Infrastructure:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom link bar */}
                <div className="pt-6 border-t border-[var(--surface-border)]/60 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono-tech text-[var(--foreground-subtle)]">
                      {project.status === "Active Research" ? "Live Research Phase" : "Production Ready"}
                    </span>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[var(--foreground)] hover:text-[var(--accent)] transition-colors font-medium"
                    >
                      <span>{project.linkLabel || "Inspect Project"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono-tech text-[var(--foreground-subtle)]">
                      Internal AI Lab Initiative
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
