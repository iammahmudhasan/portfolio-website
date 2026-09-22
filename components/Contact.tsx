"use client";

import React, { useState } from "react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { 
  Send, 
  ArrowUpRight, 
  Globe, 
  Copy, 
  Check 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Contact() {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(label);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const contactLinks = [
    {
      title: "LinkedIn",
      handle: "mahmudhasan-ai-engineer",
      description: "Direct professional inquiries, high-impact engineering collaborations, and research dialogues.",
      url: SOCIAL_LINKS.linkedin.url,
      icon: <LinkedinIcon className="w-5 h-5 text-blue-400" />,
      cta: "Connect on LinkedIn",
    },
    {
      title: "GitHub",
      handle: "iammahmudhasan",
      description: "Open source contributions, scratch model architectures, and public experiments.",
      url: SOCIAL_LINKS.github.url,
      icon: <GithubIcon className="w-5 h-5 text-[var(--foreground)]" />,
      cta: "Explore Repositories",
    },
    {
      title: "Craftly Robot",
      handle: "hello.craftlyrobot.com",
      description: "Autonomous real-world assistant research, agent runtimes, and organization coordination systems.",
      url: SOCIAL_LINKS.craftly.url,
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      cta: "Visit Craftly Robot",
    },
    {
      title: "Aeitron AI",
      handle: "aeitron.com",
      description: "Enterprise workflow automation, intelligent software systems, and AI engineering.",
      url: SOCIAL_LINKS.aeitron.url,
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      cta: "Visit Aeitron AI",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[var(--surface-border)] relative overflow-hidden bg-tech-grid">
      {/* Ambient background glow */}
      <div className="ambient-glow-mesh w-[500px] h-[300px] bottom-10 right-0 bg-[var(--accent-glow)]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Contact Hero Container */}
        <div className="max-w-3xl mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-tech border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)] shadow-sm">
            <Send className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>09 / COLLABORATION & RESEARCH INQUIRIES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed font-normal">
            For foundational AI research dialogues, technical advisory, high-impact systems engineering, or ambitious ideas across continual learning and autonomous runtimes.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((item) => (
            <div
              key={item.title}
              className="p-7 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] glow-card-hover transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]">
                    {item.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.url, item.title)}
                      className="p-2 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                      title="Copy link to clipboard"
                    >
                      {copiedHandle === item.title ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 text-[10px]">COPIED</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono-tech text-[var(--accent)] mb-3">
                  {item.handle}
                </p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--surface-border)]/60 mt-6 flex items-center justify-between">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                >
                  <span>{item.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </a>

                <span className="text-[10px] font-mono-tech text-[var(--foreground-subtle)] uppercase">
                  VERIFIED CHANNEL
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Availability Note */}
        <div className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-[var(--foreground)]">
              Currently accepting select technical research collaborations, architectural advisory, and institutional dialogues.
            </span>
          </div>
          <span className="text-xs font-mono-tech text-cyan-400 shrink-0 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-semibold">
            {PERSONAL_INFO.location} · UTC+6 BST
          </span>
        </div>
      </div>
    </section>
  );
}
