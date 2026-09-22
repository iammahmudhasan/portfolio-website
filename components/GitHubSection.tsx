"use client";

import React from "react";
import { GITHUB_REPOSITORIES, SOCIAL_LINKS } from "@/data/portfolio";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function GitHubSection() {
  return (
    <section id="opensource" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
              <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>08 / OPEN SOURCE & EXPERIMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Open Source & Experiments
            </h2>
          </div>
          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono-tech text-[var(--foreground)] hover:text-[var(--accent)] transition-colors self-start md:self-end"
          >
            <span>github.com/{SOCIAL_LINKS.github.handle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_REPOSITORIES.map((repo) => (
            <div
              key={repo.name}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    <FolderGit2 className="w-4 h-4 text-[var(--accent)]" />
                    <h3 className="text-base sm:text-lg font-bold font-mono-tech tracking-tight">
                      {repo.name}
                    </h3>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} on GitHub`}
                    className="p-1.5 rounded-lg text-[var(--foreground-subtle)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--surface-border)]/60 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    {repo.language}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-subtle)]"
                    >
                      {topic}
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
