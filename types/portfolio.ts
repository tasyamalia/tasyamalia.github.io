import type { LucideIcon } from "lucide-react";

export type Accent = "green" | "gold" | "blue" | "purple";

export type Metric = {
  value: string;
  label: string;
  accent: Accent;
  icon: LucideIcon;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  responsibilities?: string[];
  responsibilityDescription?: string;
  projects?: string[];
};

export type Project = {
  name: string;
  description: string;
  impact: string;
  image: string;
  imagePosition?: string;
  href: string;
  workedOn: string[];
  tech: string[];
  accent: Accent;
};

export type Recommendation = {
  name: string;
  role: string;
  relationship: string;
  quote: string;
  href?: string;
  accent: Accent;
};

export type CardItem = {
  title: string;
  description?: string;
  accent: Accent;
  icon: LucideIcon;
};
