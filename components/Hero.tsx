"use client";

import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowDown, ArrowRight, Activity, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FirstbaseGlobe } from "./FirstbaseGlobe";
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
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-tech-grid">
      {/* Dynamic ambient mesh gradients */}
      <div className="ambient-glow-mesh w-[700px] h-[400px] top-12 left-1/2 -translate-x-1/2 bg-[var(--accent-glow)]" />
      <div className="ambient-glow-mesh w-[500px] h-[300px] top-48 left-1/4 -translate-x-1/2 bg-pink-500/10" />
      <div className="ambient-glow-mesh w-[500px] h-[300px] top-48 right-1/4 translate-x-1/2 bg-purple-500/10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Telemetry Status Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)]/80 backdrop-blur-md text-xs font-mono-tech shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[var(--foreground)] font-semibold">
              SYSTEM_STATUS: ACTIVE
            </span>
            <span className="text-[var(--foreground-subtle)]">|</span>
            <span className="text-[var(--foreground-muted)] hidden sm:inline">DHAKA, BD</span>
            {currentTime && (
              <span className="text-cyan-400 font-medium">{currentTime} BST</span>
            )}
            <span className="text-[var(--foreground-subtle)] hidden md:inline">|</span>
            <span className="text-[var(--foreground-subtle)] hidden md:inline flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-pink-400" />
              CONTINUAL LEARNING
            </span>
          </div>
        </div>

        {/* Centered Large Headline matching Firstbase style */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
            Engineering AI systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 dark:from-pink-400 dark:via-purple-300 dark:to-orange-400">
              learn, adapt, and scale
            </span>{" "}
            from anywhere
          </h1>
        </div>

        {/* Centered Subtitle */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
            AI Engineer & ML Researcher advancing continual learning algorithms without catastrophic forgetting. Designing autonomous multi-agent systems and distributed training infrastructure from Dhaka to global scale.
          </p>
        </div>

        {/* Centered Pill Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 sm:mb-16">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-tech font-semibold text-xs tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Systems</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono-tech text-xs tracking-wider uppercase text-[var(--foreground)] border border-[var(--surface-border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] hover:border-[var(--surface-border-hover)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono-tech text-xs tracking-wider uppercase text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors group cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-3.5 h-3.5 text-pink-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Centered Massive Firstbase-Style 3D Halftone Continent Globe */}
        <div className="relative w-full my-4">
          <FirstbaseGlobe />
        </div>

        {/* Signature Architecture Systems Map */}
        <div className="mt-20 pt-16 border-t border-[var(--surface-border)]">
          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono-tech text-cyan-400 tracking-wider uppercase block">
                [CONTINUUM_FOUNDATION]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Signature Architecture Stack
              </h2>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)]">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>LIVE_EXECUTION_GRAPH</span>
            </div>
          </div>
          <SystemsMap />
        </div>
      </div>
    </section>
  );
}
