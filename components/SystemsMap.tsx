"use client";

import React, { useState } from "react";
import { AI_SYSTEMS_MAP_NODES } from "@/data/portfolio";
import { 
  FlaskConical, 
  Cpu, 
  Database, 
  Network, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Activity,
  Layers
} from "lucide-react";

export function SystemsMap() {
  const [activeNodeId, setActiveNodeId] = useState<string>("research");

  const iconMap: Record<string, React.ReactNode> = {
    FlaskConical: <FlaskConical className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />,
    Workflow: <Workflow className="w-5 h-5" />,
  };

  const activeNode =
    AI_SYSTEMS_MAP_NODES.find((node) => node.id === activeNodeId) ||
    AI_SYSTEMS_MAP_NODES[0];

  return (
    <div className="w-full rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-50" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--surface-border)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)] mb-1">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Signature Architecture Map</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            AI Systems & Research Continuum
          </h3>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center font-mono-tech text-xs px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-muted)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Interactive Architecture</span>
        </div>
      </div>

      {/* Interactive Node Selector / Pipeline Track */}
      <div className="py-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {AI_SYSTEMS_MAP_NODES.map((node, index) => {
            const isSelected = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNodeId(node.id)}
                className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--surface-elevated)] shadow-sm ring-1 ring-[var(--accent)]/30"
                    : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/50"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono-tech text-xs font-semibold ${
                      isSelected
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground-subtle)]"
                    }`}
                  >
                    {node.stage}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? "text-[var(--accent)] bg-[var(--accent-glow)]"
                        : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  >
                    {iconMap[node.icon]}
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-xs sm:text-sm font-medium tracking-tight line-clamp-1 ${
                      isSelected
                        ? "text-[var(--foreground)] font-semibold"
                        : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  >
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-[var(--foreground-subtle)] line-clamp-1 mt-0.5 font-mono-tech">
                    {node.subtext}
                  </p>
                </div>

                {/* Micro progression arrow for desktop */}
                {index < AI_SYSTEMS_MAP_NODES.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[var(--surface-border-hover)] pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Technical Detail Card */}
      <div className="mt-2 p-5 sm:p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]/60">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono-tech font-semibold rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--accent)]">
                STAGE {activeNode.stage}
              </span>
              <h4 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                {activeNode.label}
              </h4>
            </div>

            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              {activeNode.subtext}. Bridging foundational theoretical hypotheses directly into scalable software mechanisms and verifiable real-world execution.
            </p>

            {/* Specifications checklist */}
            <div className="space-y-2 pt-2">
              <p className="text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-subtle)]">
                Architectural Mechanisms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeNode.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[var(--foreground)]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metric / Optimization Target Badge */}
          <div className="shrink-0 p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between gap-2 min-w-[200px]">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)]">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Target Metric</span>
            </div>
            <p className="text-sm font-semibold text-[var(--foreground)] font-mono-tech">
              {activeNode.metric}
            </p>
            <div className="text-[11px] text-[var(--foreground-muted)] border-t border-[var(--surface-border)]/60 pt-2 flex items-center justify-between">
              <span>Status</span>
              <span className="text-emerald-500 font-mono-tech font-medium">Verified Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
