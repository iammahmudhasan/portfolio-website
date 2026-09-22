import {
  Project,
  ResearchTopic,
  PipelineStage,
  ExperienceItem,
  TechCategory,
  Credential,
  NoteArticle,
  Repository,
  SocialLink,
} from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Mahmud Hasan",
  role: "AI Engineer · AI/ML Researcher · Builder · Entrepreneur",
  headline: "AI Engineer building systems that learn, reason, and act.",
  subheadline:
    "I build AI systems, research continual learning, and explore what it takes to make intelligent software more capable, reliable, and useful.",
  bioLead:
    "Building at the intersection of AI research and real-world systems.",
  bioSummary:
    "I am an AI engineer and researcher focused on understanding neural representation dynamics and building scalable AI architectures. My work spans deep pretraining infrastructure, agentic runtimes, memory coordination, and the fundamental challenge of continual learning in neural networks. Beyond research prototypes, I actively build organizations and production systems that coordinate autonomous agents, data pipelines, and human workflows.",
  location: "Bangladesh",
  status: "Active on Research & Engineering",
  currentBuilding: "Craftly + Aeitron",
  focusAreas: ["Artificial Intelligence", "Machine Learning", "LLMs", "Agentic Systems", "Continual Learning", "Distributed Infrastructure"],
  researchSpecialty: "Continual Learning & Catastrophic Forgetting",
};

export const SOCIAL_LINKS: Record<string, SocialLink> = {
  github: {
    label: "GitHub",
    url: "https://github.com/iammahmudhasan",
    icon: "github",
    handle: "iammahmudhasan",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmudhasan-ai-engineer/",
    icon: "linkedin",
    handle: "mahmudhasan-ai-engineer",
  },
  craftly: {
    label: "Craftly Robot",
    url: "https://hello.craftlyrobot.com",
    icon: "globe",
    handle: "hello.craftlyrobot.com",
  },
  aeitron: {
    label: "Aeitron AI",
    url: "https://aeitron.com",
    icon: "globe",
    handle: "aeitron.com",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "craftly-robot",
    number: "01",
    title: "Craftly Robot",
    category: "AI Research · Agentic Systems",
    subtitle: "Real-world agent runtimes, multi-agent negotiation & coordination",
    description:
      "An active AI research and development direction exploring broad real-world assistants, agent runtimes, memory, discovery, privacy-preserving communication, and human-consented coordination.",
    organization: "Craftly",
    role: "COO & Board Member",
    technologies: [
      "Agent Runtime",
      "Memory Systems",
      "Developer SDK",
      "API Gateway",
      "Security Layer",
      "Agent-to-Agent Negotiation",
      "Decentralized AI Training",
    ],
    features: [
      "Discovery of relevant actors & services within zero-leakage privacy boundaries",
      "Agent-to-agent communication and multi-turn negotiation protocols",
      "Execution engine executing real-world action paths with explicit human authorization",
      "Long-term hierarchical memory integration across session states",
    ],
    link: "https://hello.craftlyrobot.com",
    linkLabel: "hello.craftlyrobot.com",
    status: "Active Research",
    highlight: "Real-world Agent Runtime",
  },
  {
    id: "aeitron",
    number: "02",
    title: "Aeitron",
    category: "LLM Research · AI Systems",
    subtitle: "Scratch-built Cybersecurity & Agentic Coding LLM",
    description:
      "A scratch-built AI architecture focused on defensive cybersecurity and agentic coding, with an emphasis on custom tokenizer design, distributed pretraining infrastructure, evaluation rigs, and continual improvement.",
    organization: "Aeitron AI / Independent Research",
    role: "Architect & Lead",
    technologies: [
      "PyTorch",
      "CUDA",
      "Distributed Training",
      "FSDP / DeepSpeed",
      "PostgreSQL",
      "Redis",
      "S3 / MinIO",
      "Kubernetes",
      "FastAPI",
    ],
    features: [
      "End-to-end tokenizer design optimized for technical code syntax & AST boundaries",
      "Distributed data preprocessing, curation & token-level deduplication pipelines",
      "Multi-GPU distributed training setup leveraging FSDP and Megatron-style sharding",
      "Continuous evaluation harnesses for defensive security & automated coding benchmarks",
    ],
    link: "https://aeitron.com",
    linkLabel: "aeitron.com",
    status: "Under Development",
    highlight: "Scratch Pretrained Architecture",
  },
  {
    id: "craftly-workspace",
    number: "03",
    title: "Craftly Workspace",
    category: "Product · Systems",
    subtitle: "High-integrity human-machine coordination & operational workflow infrastructure",
    description:
      "A platform for coordinating people, work, organizational processes, task evidence, communication, and operational workflows across distributed environments.",
    organization: "Craftly",
    role: "COO & Board Member",
    technologies: [
      "Distributed Systems",
      "Process Engine",
      "Task Evidence Graph",
      "Real-time Sync",
      "Security & Auditing",
      "TypeScript",
    ],
    features: [
      "Audit-grade task evidence logging for mission-critical operations",
      "Coordinated human-in-the-loop task routing between AI agents and operators",
      "Resilient state synchronization across fragmented organization branches",
    ],
    link: "https://hello.craftlyrobot.com",
    linkLabel: "hello.craftlyrobot.com",
    status: "Production",
    highlight: "Enterprise Process Architecture",
  },
  {
    id: "catastrophic-forgetting",
    number: "04",
    title: "Catastrophic Forgetting Research",
    category: "Research · Continual Learning",
    subtitle: "Investigating knowledge retention & sequential representation stability in neural networks",
    description:
      "Researching how AI systems can continuously learn new information without losing previously acquired capabilities. Investigating the stability-plasticity dilemma in deep representations.",
    organization: "Independent AI Research",
    role: "Primary Researcher",
    technologies: [
      "Continual Learning",
      "Catastrophic Forgetting",
      "Knowledge Retention",
      "Model Adaptation",
      "Parameter Regularization",
      "Experience Rehearsal",
      "Evaluation Harnesses",
    ],
    features: [
      "Systematic probing of weight drift during sequential fine-tuning cycles",
      "Analysis of parameter importance estimation (Fisher Information, synaptic consolidation)",
      "Hybrid architectures balancing frozen foundational bases with plastic adaptation modules",
      "Benchmark test suite measuring both backward transfer and forward transfer retention",
    ],
    status: "Core Research",
    highlight: "Stability-Plasticity Investigations",
  },
];

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "continual-learning",
    number: "01",
    title: "Continual Learning",
    summary:
      "Architectures that incorporate incoming distributions of data sequentially without re-training from initialization.",
    details:
      "Modern machine learning relies on identically and independently distributed (i.i.d.) training regimes. When deployed in non-stationary real-world environments, distribution shifts degrade performance. Continual learning investigates how neural representations can expand dynamically, acquiring domain-specific skills over time while maintaining global coherence.",
    tags: ["Sequential Training", "Distribution Shifts", "Non-Stationary Data"],
    keyQuestions: [
      "How can models allocate representational capacity for novel data without unbounded parameter expansion?",
      "What are the fundamental theoretical limits of zero-shot knowledge consolidation?",
    ],
  },
  {
    id: "catastrophic-forgetting",
    number: "02",
    title: "Catastrophic Forgetting",
    summary:
      "Investigating why gradient descent erases orthogonal feature representations when trained on sequential tasks.",
    details:
      "When a neural network is optimized on a new objective, gradient updates overwrite synaptic weights critical for earlier tasks. Mahmud investigates the mathematical dynamics of this forgetting curve across transformer attention mechanisms, analyzing how rehearsal buffers, parameter isolation, and regularization constrain destructive weight drift.",
    tags: ["Stability-Plasticity Dilemma", "Gradient Interference", "Synaptic Consolidation"],
    keyQuestions: [
      "Why do transformer layers exhibit differential rates of forgetting across attention heads vs MLPs?",
      "Can selective gradient projection protect prior manifold geometries during domain adaptation?",
    ],
  },
  {
    id: "large-language-models",
    number: "03",
    title: "Large Language Models",
    summary:
      "From tokenizer design and pretraining dynamics to compute-optimal scaling and inference efficiency.",
    details:
      "Investigating LLM architectures from scratch. Focus areas include specialized vocabularies that optimize byte compression for programming languages, rotational position embeddings, attention variants, and the emergence of downstream capabilities as a function of pretraining data composition.",
    tags: ["Pretraining", "Tokenization", "Compute Scaling", "Attention Variants"],
    keyQuestions: [
      "How does code-to-natural-language token mixing ratio influence deductive reasoning circuits?",
      "What architectural modifications reduce KV cache footprint during long-horizon generation?",
    ],
  },
  {
    id: "agentic-ai",
    number: "04",
    title: "Agentic AI",
    summary:
      "Autonomous systems capable of perception, planning, tool usage, memory retrieval, and self-correction.",
    details:
      "Moving beyond single-turn prompt response toward goal-directed agents that decompose complex requirements into executable action graphs, maintain persistent state, interrogate environment feedback, and safely collaborate with other software agents.",
    tags: ["Agent Runtimes", "Multi-Agent Coordination", "Self-Correction", "Tool Use"],
    keyQuestions: [
      "How do we prevent error compounding in long-horizon autonomous execution trajectories?",
      "What privacy protocols allow agents to negotiate resource allocations without exposing proprietary contexts?",
    ],
  },
  {
    id: "model-training",
    number: "05",
    title: "Model Training & Systems",
    summary:
      "Distributed training infrastructure, CUDA memory optimization, and loss stability on multi-GPU nodes.",
    details:
      "Practical execution of deep learning at scale: setting up distributed compute topologies using Fully Sharded Data Parallelism (FSDP), DeepSpeed, and Megatron tensor-parallel paradigms. Designing robust checkpointing, mixed-precision numerical stabilization, and fault-tolerant dataset streaming.",
    tags: ["PyTorch", "CUDA", "FSDP", "Distributed Infrastructure", "Mixed Precision"],
    keyQuestions: [
      "What communications bottlenecks dominate distributed gradient synchronization under bandwidth limits?",
      "How can activation recomputation strategies be tuned to maximize FLOP utilization per GPU cluster?",
    ],
  },
  {
    id: "ai-systems",
    number: "06",
    title: "AI Systems Engineering",
    summary:
      "Bridging the chasm between raw neural weights and reliable, low-latency, verifiable production software.",
    details:
      "AI models are only as valuable as the systems that surround them. This research vector addresses model serving topologies, streaming API gateways, deterministic verification layers, rate-limiting guards, and audit-grade telemetry for agentic operations.",
    tags: ["Inference Engines", "Deterministic Guards", "Latency Optimization", "Fault Tolerance"],
    keyQuestions: [
      "How can verification guards enforce strict security bounds on generative agent outputs in real time?",
      "What caching topologies best serve dynamic KV states across distributed agent runtimes?",
    ],
  },
];

export const RESEARCH_PIPELINE: PipelineStage[] = [
  {
    step: "01",
    title: "Question",
    description: "Isolating the fundamental friction in neural networks or agentic runtimes.",
    detail: "Formulating crisp mathematical or architectural inquiries (e.g. why do attention heads overwrite orthogonal task directions during continual fine-tuning?).",
    technicalArtifact: "Problem Definition & Boundary Constraints",
  },
  {
    step: "02",
    title: "Literature",
    description: "Deep synthesis of academic papers, empirical benchmarks, and historical precedents.",
    detail: "Cross-referencing continual learning literature, catastrophic forgetting proofs, scaling laws, and modern distributed systems engineering.",
    technicalArtifact: "State-of-the-Art Survey & Gap Analysis",
  },
  {
    step: "03",
    title: "Hypothesis",
    description: "Proposing architectural or algorithmic mechanisms to resolve the friction.",
    detail: "Formalizing concrete hypotheses regarding parameter regularizers, memory rehearsal topologies, or runtime isolation strategies.",
    technicalArtifact: "Formal Mathematical & Structural Hypothesis",
  },
  {
    step: "04",
    title: "Experiment",
    description: "Implementing scratch models, training runs, and rigorous test matrices.",
    detail: "Writing custom PyTorch training loops, distributed FSDP pipelines, and controlled synthetic distribution shifts under identical compute budgets.",
    technicalArtifact: "Controlled Multi-GPU Empirical Harness",
  },
  {
    step: "05",
    title: "Evaluation",
    description: "Unbiased statistical scoring against regression test suites and standard benchmarks.",
    detail: "Evaluating retention of prior capabilities, forward learning speed, backward transfer, loss curvature, and latency overhead.",
    technicalArtifact: "Retention Curves & Regression Matrix",
  },
  {
    step: "06",
    title: "Iteration",
    description: "Refining architectures, open-sourcing insights, and porting into production systems.",
    detail: "Channeling confirmed empirical improvements into production runtimes (Craftly Workspace & Robot) or iterative model versions (Aeitron).",
    technicalArtifact: "Production Deployment & Research Notes",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "craftly",
    role: "COO & Board Member",
    organization: "Craftly",
    period: "Present",
    location: "Global / Remote",
    url: "https://hello.craftlyrobot.com",
    focus: [
      "Organization Building",
      "AI Systems",
      "Product Development",
      "Operations",
      "Research",
    ],
    summary:
      "Craftly is a technology organization building systems that coordinate people and technology. Leading operational strategy, cross-functional engineering execution, and advancing core research into autonomous agent runtimes.",
    bulletPoints: [
      "Directing organizational operations and strategic governance across engineering, product development, and research initiatives.",
      "Co-architecting Craftly Robot: an active AI research direction building real-world assistants capable of discovering relevant people/services, communicating within strict privacy boundaries, and coordinating requests with human consent.",
      "Overseeing the development of Craftly Workspace, a platform for coordinating teams, task evidence, communication, and organizational processes.",
      "Steering exploratory research into agent-to-agent communication, multi-party automated negotiation, and decentralized AI training setups.",
    ],
  },
  {
    id: "aeitron-ai",
    role: "Founder & CEO",
    organization: "Aeitron AI",
    period: "Present",
    location: "Bangladesh / International",
    url: "https://aeitron.com",
    focus: [
      "AI Automation",
      "AI Systems",
      "Workflow Engineering",
      "Product Development",
    ],
    summary:
      "Aeitron AI is an AI automation company focused on AI-powered automation, workflow engineering, and intelligent software systems that deliver measurable operational leverage.",
    bulletPoints: [
      "Founded Aeitron AI to build production-grade AI automation pipelines and intelligent software systems for complex business operations.",
      "Architecting end-to-end workflow automation engines integrating LLMs, deterministic business logic, and API orchestrations.",
      "Managing product architecture from initial scoping through cloud deployment, ensuring high reliability, latency optimization, and robust error handling.",
      "Leading technical client engagements and translating domain workflows into automated AI-driven processes.",
    ],
  },
  {
    id: "independent-researcher",
    role: "Independent AI Researcher / Builder",
    organization: "Independent",
    period: "Present",
    location: "Bangladesh",
    focus: [
      "LLMs",
      "Continual Learning",
      "Agentic AI",
      "Scratch Training",
      "AI Infrastructure",
    ],
    summary:
      "Pursuing fundamental and applied machine learning research, with a focus on neural forgetting dynamics, scratch LLM training, and distributed agent runtimes.",
    bulletPoints: [
      "Architecting 'Aeitron', a scratch-built LLM specifically tailored for defensive cybersecurity and agentic code synthesis.",
      "Designing complete pretraining pipelines: custom BPE tokenizers, data deduplication, distributed multi-GPU training with FSDP, and custom regression benchmarks.",
      "Investigating continual learning mechanisms to mitigate catastrophic forgetting in neural language models exposed to non-stationary data streams.",
      "Building high-performance backend and evaluation infrastructure using PyTorch, CUDA, PostgreSQL, Redis, Kubernetes, and FastAPI.",
    ],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "AI / Machine Learning",
    description: "Deep mathematical foundations, neural architectures, and model training libraries.",
    skills: [
      { name: "Python", level: "Core", highlight: true },
      { name: "PyTorch", level: "Core", highlight: true },
      { name: "Transformers", level: "Core", highlight: true },
      { name: "Machine Learning", level: "Core" },
      { name: "Deep Learning", level: "Core", highlight: true },
      { name: "NLP", level: "Core" },
      { name: "LLMs", level: "Core", highlight: true },
      { name: "CUDA", level: "Advanced", highlight: true },
    ],
  },
  {
    category: "AI Systems & Runtimes",
    description: "Engineering frameworks for autonomous agents, memory, and model orchestration.",
    skills: [
      { name: "Agentic AI", level: "Core", highlight: true },
      { name: "AI Agents", level: "Core", highlight: true },
      { name: "Model Training", level: "Core" },
      { name: "Evaluation Rigs", level: "Advanced" },
      { name: "Inference Engines", level: "Advanced" },
      { name: "Memory Systems", level: "Core", highlight: true },
      { name: "Distributed Training", level: "Advanced", highlight: true },
    ],
  },
  {
    category: "Backend Systems",
    description: "High-throughput asynchronous servers, transactional databases, and fast caches.",
    skills: [
      { name: "FastAPI", level: "Core", highlight: true },
      { name: "Node.js", level: "Advanced" },
      { name: "PostgreSQL", level: "Core", highlight: true },
      { name: "Redis", level: "Core", highlight: true },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    description: "Containerization, cluster management, storage systems, and developer tooling.",
    skills: [
      { name: "Docker", level: "Core", highlight: true },
      { name: "Kubernetes", level: "Advanced", highlight: true },
      { name: "Linux", level: "Core", highlight: true },
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "S3 / MinIO", level: "Advanced" },
    ],
  },
  {
    category: "Distributed Training",
    description: "Multi-node and multi-accelerator paradigms for large-scale model pretraining.",
    skills: [
      { name: "FSDP", level: "Advanced", highlight: true },
      { name: "DeepSpeed", level: "Advanced", highlight: true },
      { name: "Megatron-style Sharding", level: "Advanced", highlight: true },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Type-safe, responsive, accessible interfaces for user-facing AI applications.",
    skills: [
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "React", level: "Core", highlight: true },
      { name: "Next.js", level: "Core", highlight: true },
      { name: "Tailwind CSS", level: "Core", highlight: true },
    ],
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: "anthropic-building-claude-api",
    issuer: "Anthropic",
    title: "Building with Claude API",
    badgeType: "API Engineering & Integration",
    description:
      "Advanced integration of Anthropic Claude models, system prompting, structured outputs, and production API design.",
  },
  {
    id: "anthropic-claude-code-action",
    issuer: "Anthropic",
    title: "Claude Code in Action",
    badgeType: "Agentic Tooling & Developer Workflows",
    description:
      "Deep-dive into agentic software development, repository indexing, contextual code synthesis, and autonomous terminal execution.",
  },
  {
    id: "anthropic-claude-code-101",
    issuer: "Anthropic",
    title: "Claude Code 101",
    badgeType: "Agent Architecture",
    description:
      "Core principles of autonomous coding agents, tool-calling protocols, and execution sandboxes.",
  },
  {
    id: "anthropic-fluency-framework",
    issuer: "Anthropic",
    title: "AI Fluency Framework & Foundations",
    badgeType: "Foundational AI",
    description:
      "Systematic evaluation frameworks for model safety, alignment principles, and reliable human-AI collaborative workflows.",
  },
  {
    id: "anthropic-claude-101",
    issuer: "Anthropic",
    title: "Claude 101",
    badgeType: "LLM Fundamentals",
    description:
      "Architectural mechanics, context window dynamics, and prompt engineering paradigms across the Claude model lineage.",
  },
  {
    id: "google-gemini-educator",
    issuer: "Google",
    title: "Gemini Certified Educator",
    badgeType: "Google AI Certification",
    description:
      "Official credential certifying instructional mastery and applied understanding of Google Gemini generative AI technologies.",
  },
];

export const NOTES: NoteArticle[] = [
  {
    id: "understanding-transformers",
    title: "Understanding Transformers from Mathematical First Principles",
    category: "Architecture",
    estimatedReadTime: "12 min read",
    summary:
      "A rigorous derivation of multi-head self-attention, rotary position embeddings (RoPE), and the exact matrix transformations powering modern language models.",
    status: "Coming soon",
    slug: "understanding-transformers",
    topics: ["Attention", "Linear Algebra", "Transformers", "RoPE"],
  },
  {
    id: "what-is-catastrophic-forgetting",
    title: "What is Catastrophic Forgetting? When Neural Networks Forget the Past",
    category: "Continual Learning",
    estimatedReadTime: "10 min read",
    summary:
      "Why gradient descent overwrites earlier task representations when learning new distributions, and the geometric mechanics of representation collapse.",
    status: "Coming soon",
    slug: "what-is-catastrophic-forgetting",
    topics: ["Catastrophic Forgetting", "Weight Drift", "Gradient Dynamics"],
  },
  {
    id: "how-continual-learning-works",
    title: "How Continual Learning Works: Regularization, Rehearsal, and Plasticity",
    category: "Research",
    estimatedReadTime: "14 min read",
    summary:
      "A deep technical breakdown comparing elastic weight consolidation (EWC), episodic memory buffers, and architectural expansion for sequential fine-tuning.",
    status: "Coming soon",
    slug: "how-continual-learning-works",
    topics: ["Continual Learning", "EWC", "Replay Buffers", "Plasticity"],
  },
  {
    id: "building-llms-from-scratch",
    title: "Building LLMs From Scratch: Tokenizers, CUDA Buffers, and FSDP",
    category: "Systems Engineering",
    estimatedReadTime: "16 min read",
    summary:
      "Practical engineering notes from training language models from zero: custom BPE tokenization, GPU memory optimization, and distributed gradient sharding.",
    status: "Coming soon",
    slug: "building-llms-from-scratch",
    topics: ["Scratch Training", "PyTorch", "CUDA", "FSDP", "Tokenizers"],
  },
  {
    id: "what-makes-an-ai-agent-reliable",
    title: "What Makes an AI Agent Reliable? Beyond Prompt-and-Pray Architecture",
    category: "Agentic Systems",
    estimatedReadTime: "11 min read",
    summary:
      "Architectural guardrails, verification loops, deterministic rollback states, and memory indexing strategies that turn brittle agents into robust software.",
    status: "Coming soon",
    slug: "what-makes-an-ai-agent-reliable",
    topics: ["Agent Runtimes", "Verification", "State Machines", "Error Handling"],
  },
  {
    id: "lessons-building-ai-systems",
    title: "Lessons from Building AI Systems in Production Organizations",
    category: "Engineering & Leadership",
    estimatedReadTime: "9 min read",
    summary:
      "Hard-won observations on latency budgets, failure modes, task evidence logging, and building real AI companies like Craftly and Aeitron AI.",
    status: "Coming soon",
    slug: "lessons-building-ai-systems",
    topics: ["Production AI", "Systems Architecture", "Craftly", "Operations"],
  },
];

export const GITHUB_REPOSITORIES: Repository[] = [
  {
    name: "claude-cookbooks",
    description:
      "Hands-on implementations, agentic patterns, and technical reference workflows utilizing Anthropic Claude and tool-calling runtimes.",
    language: "Python / TypeScript",
    url: "https://github.com/iammahmudhasan",
    topics: ["Claude API", "Agents", "Cookbook", "Tool Use"],
    isFeatured: true,
  },
  {
    name: "aeitron-agentic-ai",
    description:
      "Modular agent execution runtime featuring structured memory, deterministic task routing, and autonomous developer workflows.",
    language: "Python / PyTorch",
    url: "https://github.com/iammahmudhasan",
    topics: ["Agentic AI", "Autonomous Runtimes", "Memory", "Evaluation"],
    isFeatured: true,
  },
  {
    name: "continual-learning-eval",
    description:
      "Empirical test harness measuring catastrophic forgetting curves, forward transfer, and representation drift across sequential fine-tuning tasks.",
    language: "Python / PyTorch",
    url: "https://github.com/iammahmudhasan",
    topics: ["Continual Learning", "Forgetting", "Benchmarks", "PyTorch"],
    isFeatured: true,
  },
  {
    name: "scratch-llm-cybersec",
    description:
      "Core training scripts, custom tokenization harnesses, and evaluation suites for cybersecurity-specialized transformer architectures.",
    language: "Python / CUDA",
    url: "https://github.com/iammahmudhasan",
    topics: ["LLM", "Cybersecurity", "Distributed Training", "CUDA"],
    isFeatured: true,
  },
];

export const AI_SYSTEMS_MAP_NODES = [
  {
    id: "research",
    stage: "01",
    label: "Continual Research",
    subtext: "Forgetting dynamics & representation stability",
    icon: "FlaskConical",
    details: [
      "Mathematical modeling of weight drift",
      "Elastic Weight Consolidation (EWC) probes",
      "Sequential fine-tuning stability benchmarks",
    ],
    metric: "Loss curvature & retention index",
  },
  {
    id: "models",
    stage: "02",
    label: "Scratch Model Training",
    subtext: "Tokenizer design, CUDA & distributed FSDP",
    icon: "Cpu",
    details: [
      "Custom byte-level BPE vocabulary for syntax",
      "Rotary embeddings & flash attention kernels",
      "Distributed sharding (FSDP / Megatron-style)",
    ],
    metric: "FLOPs efficiency & perplexity",
  },
  {
    id: "memory",
    stage: "03",
    label: "Memory & State Systems",
    subtext: "Episodic buffers, embeddings & context graph",
    icon: "Database",
    details: [
      "Hierarchical state persistence across sessions",
      "Episodic rehearsal buffer for retention",
      "PostgreSQL + Redis low-latency indexing",
    ],
    metric: "< 8ms context lookup latency",
  },
  {
    id: "reasoning",
    stage: "04",
    label: "Agentic Runtimes",
    subtext: "Multi-turn planning, tool dispatch & negotiation",
    icon: "Network",
    details: [
      "Action decomposition & AST verification",
      "Agent-to-agent privacy-preserving protocol",
      "Self-correction loops & failure isolation",
    ],
    metric: "Trajectory completion reliability",
  },
  {
    id: "action",
    stage: "05",
    label: "Real-World Systems",
    subtext: "Production platforms & organization workflows",
    icon: "Workflow",
    details: [
      "Craftly Robot autonomous coordination",
      "Craftly Workspace task evidence graph",
      "Aeitron AI enterprise automation engines",
    ],
    metric: "Production-grade uptime & audits",
  },
];
