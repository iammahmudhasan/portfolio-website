"use client";

import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowUp, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--surface-border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--surface-border)]/60">
          <div>
            <span className="text-base font-bold text-[var(--foreground)] tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs font-mono-tech text-[var(--foreground-subtle)] mt-0.5">
              {PERSONAL_INFO.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-tech">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.craftly.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Craftly Robot</span>
            </a>
            <a
              href={SOCIAL_LINKS.aeitron.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Aeitron AI</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg border border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5 text-xs font-mono-tech"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[var(--foreground-subtle)]">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--surface-border)] bg-[var(--surface-elevated)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[var(--foreground-muted)]">Building in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
