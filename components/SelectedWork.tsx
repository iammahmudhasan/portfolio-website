"use client";

import React from "react";
import { PROJECTS } from "@/data/portfolio";
import { ExternalLink, ArrowUpRight, Cpu } from "lucide-react";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Selected Work
            </h2>
          </div>
          <p className="text-base text-[var(--foreground-muted)] max-w-md">
            Systems, products, and research projects I&apos;ve been building across agent runtimes, LLMs, and organizational infrastructure.
          </p>
        </div>

        {/* 4 Flagship Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/40 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Top bar: Number & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono-tech text-xs sm:text-sm font-semibold text-[var(--accent)] px-2.5 py-1 rounded border border-[var(--surface-border)] bg-[var(--surface-elevated)]">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono-tech text-[var(--foreground-subtle)]">
                    {project.category}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.link && (
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
                    )}
                  </h3>
                  {project.role && (
                    <p className="text-xs font-mono-tech text-[var(--foreground-muted)]">
                      {project.role} · {project.organization}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Architectural Features / Highlights */}
                {project.features && (
                  <div className="space-y-2 mb-6 pt-4 border-t border-[var(--surface-border)]/60">
                    <p className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--foreground-subtle)]">
                      Architecture Focus:
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-[var(--foreground-muted)] flex items-start gap-2"
                        >
                          <span className="text-[var(--accent)] shrink-0 font-mono-tech">›</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom: Tech tags & External link */}
              <div className="pt-6 border-t border-[var(--surface-border)]/60 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono-tech rounded-md border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[var(--foreground)] hover:text-[var(--accent)] transition-colors font-medium"
                  >
                    <span>Inspect Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Independent Research Project</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
