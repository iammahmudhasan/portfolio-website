export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  role?: string;
  organization?: string;
  technologies: string[];
  features?: string[];
  link?: string;
  linkLabel?: string;
  status: "Active Research" | "Production" | "Under Development" | "Core Research";
  highlight?: string;
}

export interface ResearchTopic {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  tags: string[];
  keyQuestions?: string[];
}

export interface PipelineStage {
  step: string;
  title: string;
  description: string;
  detail: string;
  technicalArtifact: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  url?: string;
  focus: string[];
  summary: string;
  bulletPoints: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: "Core" | "Advanced" | "Production";
    highlight?: boolean;
  }[];
}

export interface Credential {
  id: string;
  issuer: "Anthropic" | "Google";
  title: string;
  date?: string;
  credentialUrl?: string;
  badgeType: string;
  description: string;
}

export interface NoteArticle {
  id: string;
  title: string;
  category: string;
  estimatedReadTime: string;
  summary: string;
  status: "Coming soon";
  slug: string;
  topics: string[];
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
  topics: string[];
  isFeatured: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  handle?: string;
}
