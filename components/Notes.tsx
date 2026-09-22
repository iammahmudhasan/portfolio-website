"use client";

import React from "react";
import { NOTES } from "@/data/portfolio";
import { BookOpen, Clock } from "lucide-react";

export function Notes() {
  return (
    <section id="notes" className="py-20 md:py-28 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)]">
              <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>07 / WRITING & ESSAYS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Notes on AI
            </h2>
          </div>
          <p className="text-base text-[var(--foreground-muted)] max-w-md">
            Technical writing, mathematical breakdowns, and empirical engineering notes on neural architectures and agent systems.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTES.map((note) => (
            <div
              key={note.id}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono-tech text-[var(--accent)]">
                    {note.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech px-2 py-0.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-subtle)]">
                    <Clock className="w-3 h-3" />
                    {note.estimatedReadTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-3 leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-6 font-normal">
                  {note.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--surface-border)]/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {note.topics.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono-tech text-[var(--foreground-subtle)]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{note.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
