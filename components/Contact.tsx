"use client";

import React from "react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { 
  Send, 
  ArrowUpRight, 
  Globe 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Contact() {
  const contactLinks = [
    {
      title: "LinkedIn",
      handle: "mahmudhasan-ai-engineer",
      description: "Direct professional inquiries, engineering collaborations, and research dialogues.",
      url: SOCIAL_LINKS.linkedin.url,
      icon: <LinkedinIcon className="w-5 h-5 text-blue-400" />,
      cta: "Connect on LinkedIn",
    },
    {
      title: "GitHub",
      handle: "iammahmudhasan",
      description: "Open source contributions, scratch model code, and public experiment repositories.",
      url: SOCIAL_LINKS.github.url,
      icon: <GithubIcon className="w-5 h-5 text-[var(--foreground)]" />,
      cta: "Follow on GitHub",
    },
    {
      title: "Craftly Robot",
      handle: "hello.craftlyrobot.com",
      description: "Autonomous real-world assistant research, agent runtimes, and organization systems.",
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
    <section id="contact" className="py-24 md:py-32 border-t border-[var(--surface-border)] relative overflow-hidden bg-tech-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Contact Hero Container */}
        <div className="max-w-3xl mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
            <Send className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>09 / GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            For research collaboration, technical advisory, high-impact AI systems engineering, or ambitious ideas across continual learning and autonomous runtimes.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono-tech text-[var(--accent)] mb-3">
                  {item.handle}
                </p>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--surface-border)]/60 mt-6 flex items-center gap-1.5 text-xs font-mono-tech font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                <span>{item.cta}</span>
                <span className="text-[var(--accent)]">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Technical Availability Note */}
        <div className="p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-[var(--foreground)]">
              Currently open to select technical collaborations, research dialogues, and institutional admissions.
            </span>
          </div>
          <span className="text-xs font-mono-tech text-[var(--foreground-subtle)] shrink-0">
            {PERSONAL_INFO.location} · UTC+6
          </span>
        </div>
      </div>
    </section>
  );
}
