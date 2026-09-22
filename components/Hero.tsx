"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowDown, ArrowRight, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SystemsMap } from "./SystemsMap";

export function Hero() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Dhaka (UTC+6)
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Dynamic ambient mesh gradients */}
      <div className="ambient-glow-mesh w-[600px] h-[360px] top-16 left-1/2 -translate-x-1/2 bg-[var(--accent-glow)]" />
      <div className="ambient-glow-mesh w-[400px] h-[250px] top-40 right-[-10%] bg-cyan-500/10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Live Telemetry Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[var(--foreground)] font-semibold">
              SYSTEM_STATUS: ACTIVE
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech text-[var(--foreground-muted)] shadow-sm">
            <span className="text-[var(--foreground-subtle)]">LOCATION:</span>
            <span className="text-[var(--foreground)] font-medium">DHAKA, BD</span>
            {currentTime && (
              <>
                <span className="text-[var(--foreground-subtle)]">/</span>
                <span className="text-cyan-400 font-medium">{currentTime} BST</span>
              </>
            )}
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech text-[var(--foreground-muted)] shadow-sm">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>RESEARCH: CONTINUAL LEARNING</span>
          </div>
        </div>

        {/* Large Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
            AI Engineer building systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] via-cyan-200 to-[var(--accent)] dark:from-white dark:via-cyan-200 dark:to-cyan-400">
              learn, reason, and act.
            </span>
          </h1>
        </div>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl font-normal leading-relaxed mb-10">
          {PERSONAL_INFO.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#work"
            className="animate-shimmer inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono-tech font-semibold text-xs tracking-wider uppercase text-black bg-white hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-white/5 focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono-tech text-xs tracking-wider uppercase text-[var(--foreground)] border border-[var(--surface-border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] hover:border-[var(--surface-border-hover)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono-tech tracking-wider uppercase text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors ml-1 group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mini Technical Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 py-4 border-y border-[var(--surface-border)] text-xs font-mono-tech">
          <div className="space-y-0.5">
            <span className="text-[var(--foreground-subtle)] text-[11px] block">FLAGSHIP SYSTEMS</span>
            <span className="text-[var(--foreground)] font-bold text-sm">4 ARCHITECTURES</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[var(--foreground-subtle)] text-[11px] block">ACTIVE ROLES</span>
            <span className="text-[var(--foreground)] font-bold text-sm">CRAFTLY & AEITRON</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[var(--foreground-subtle)] text-[11px] block">PRIMARY RESEARCH</span>
            <span className="text-cyan-400 font-bold text-sm">CONTINUAL LEARNING</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[var(--foreground-subtle)] text-[11px] block">CREDENTIALS</span>
            <span className="text-emerald-400 font-bold text-sm">ANTHROPIC & GOOGLE</span>
          </div>
        </div>

        {/* Signature Architecture Systems Map */}
        <div className="mt-6">
          <SystemsMap />
        </div>
      </div>
    </section>
  );
}
