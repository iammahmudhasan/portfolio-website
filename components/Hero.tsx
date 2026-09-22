"use client";

import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SystemsMap } from "./SystemsMap";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent-glow)] rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Status indicator badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech text-[var(--foreground-muted)] mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[var(--foreground)] font-medium">
            AI Engineer · AI/ML Researcher · Builder
          </span>
          <span className="text-[var(--foreground-subtle)]">|</span>
          <span className="text-[var(--foreground-subtle)] hidden sm:inline">
            Based in {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Major Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] max-w-4xl leading-[1.1] mb-6">
          AI Engineer building systems that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--accent)]">
            learn, reason, and act.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl font-normal leading-relaxed mb-10">
          {PERSONAL_INFO.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#060709] bg-[var(--foreground)] hover:opacity-90 transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[var(--foreground)] border border-[var(--surface-border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] hover:border-[var(--surface-border-hover)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors ml-1"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
          </a>
        </div>

        {/* Signature Architecture Systems Map */}
        <div className="mt-8">
          <SystemsMap />
        </div>
      </div>
    </section>
  );
}
