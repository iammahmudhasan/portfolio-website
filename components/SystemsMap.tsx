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
  Layers,
  Terminal
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

  // Stage-specific technical visual representations
  const technicalPreviews: Record<string, { code: string; label: string; formula: string }> = {
    research: {
      label: "Synaptic Regularization Objective (EWC)",
      formula: "L(θ) = L_B(θ) + ∑ (λ/2) F_i (θ_i - θ_A,i*)^2",
      code: `def continual_loss(model, task_loss, fisher_diag, old_params, lam=1000):
    ewc_penalty = 0.0
    for name, param in model.named_parameters():
        if name in fisher_diag:
            ewc_penalty += (fisher_diag[name] * (param - old_params[name]) ** 2).sum()
    return task_loss + (lam / 2.0) * ewc_penalty`,
    },
    models: {
      label: "FSDP Distributed Model Sharding & Mixed Precision",
      formula: "W_sharded = Split_dim0(W_layer, num_ranks)",
      code: `fsdp_config = FullyShardedDataParallel(
    module=aeitron_transformer,
    sharding_strategy=ShardingStrategy.FULL_SHARD,
    mixed_precision=MixedPrecision(param_dtype=torch.bfloat16),
    auto_wrap_policy=transformer_auto_wrap_policy,
)`,
    },
    memory: {
      label: "Episodic Rehearsal & Context Memory Index",
      formula: "M_retrieval = CosineSim(q, K_memory) ⊗ PriorityWeight(τ)",
      code: `async def query_episodic_memory(agent_id: str, query_vector: list[float]):
    # Multi-tier index: Redis Hot Cache -> PostgreSQL Vector Table
    cached = await redis_client.get(f"agent:{agent_id}:hot")
    if cached: return deserialize(cached)
    return await pg_pool.fetch("SELECT * FROM memory_graph WHERE ... LIMIT 5")`,
    },
    reasoning: {
      label: "Agentic Tool Dispatch & Trajectory Self-Correction",
      formula: "Plan_{t+1} = LLM(H_t, Env_feedback, Verification_guard)",
      code: `class AgentRuntime:
    async def step(self, state: State, action: Action) -> StepResult:
        verified_action = await self.security_guard.audit(action)
        observation = await self.tool_dispatcher.execute(verified_action)
        return self.self_correction_loop(state, observation)`,
    },
    action: {
      label: "Real-World Task Evidence & Multi-Agent Negotiation",
      formula: "Proof_audit = SHA256(Event_log ∥ Sign_agent ∥ Human_consent)",
      code: `// Craftly Workspace Task Evidence Engine
const evidenceRecord = await craftlyEvidenceEngine.seal({
  taskId: task.id,
  agentSignature: agent.cryptoKey,
  humanConsentGranted: true,
  actionPayload: action.sanitize()
});`,
    },
  };

  const activeNode =
    AI_SYSTEMS_MAP_NODES.find((node) => node.id === activeNodeId) ||
    AI_SYSTEMS_MAP_NODES[0];

  const currentPreview = technicalPreviews[activeNode.id] || technicalPreviews.research;

  return (
    <div className="w-full rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-xl shadow-black/10">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-60" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--surface-border)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--foreground-muted)] mb-1">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>[SIGNATURE_SYSTEM_ARCHITECTURE]</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
            AI Systems & Research Continuum
          </h3>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center font-mono-tech text-xs px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--foreground-muted)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Interactive Telemetry</span>
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
                className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-[110px] cursor-pointer ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--surface-elevated)] shadow-md ring-1 ring-[var(--accent)]/40"
                    : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface-elevated)]/50"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono-tech text-xs font-bold ${
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
                    className={`text-xs sm:text-sm font-semibold tracking-tight line-clamp-1 ${
                      isSelected
                        ? "text-[var(--foreground)] font-bold"
                        : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  >
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-[var(--foreground-subtle)] line-clamp-1 mt-0.5 font-mono-tech">
                    {node.subtext}
                  </p>
                </div>

                {/* Arrow connector */}
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

      {/* Active Stage Technical Detail + Code / Math Console */}
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left 7 cols: Architectural mechanisms & targets */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)]/60 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono-tech font-bold rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--accent)]">
                STAGE {activeNode.stage}
              </span>
              <h4 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                {activeNode.label}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
              {activeNode.subtext}. Bridging foundational theoretical hypotheses directly into scalable software mechanisms and verifiable real-world execution.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--foreground-subtle)]">
                Mechanisms & Systems Topology:
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

          <div className="mt-6 pt-4 border-t border-[var(--surface-border)]/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)]">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Target:</span>
              <span className="text-[var(--foreground)] font-semibold">{activeNode.metric}</span>
            </div>
            <span className="text-[11px] font-mono-tech text-emerald-500 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              OPTIMIZED
            </span>
          </div>
        </div>

        {/* Right 6 cols: Live Technical Formulation / Code Schematic */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex flex-col justify-between overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[var(--surface-border)] pb-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--foreground-subtle)]">
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="font-semibold text-[var(--foreground)]">{currentPreview.label}</span>
              </div>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--accent)] border border-[var(--surface-border)]">
                MATH_RIGOR
              </span>
            </div>

            {/* Formula display */}
            <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] font-mono-tech text-xs text-cyan-400 overflow-x-auto">
              {currentPreview.formula}
            </div>

            {/* Code snippet display */}
            <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--surface-border)] font-mono-tech text-[11px] text-[var(--foreground-muted)] overflow-x-auto leading-relaxed">
              <pre>
                <code>{currentPreview.code}</code>
              </pre>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[10px] font-mono-tech text-[var(--foreground-subtle)] flex items-center justify-between">
            <span>Runtime: PyTorch 2.x / CUDA / distributed</span>
            <span className="text-cyan-400">Verifiable Specification</span>
          </div>
        </div>
      </div>
    </div>
  );
}
