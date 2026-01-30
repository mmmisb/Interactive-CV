import { LucideIcon } from 'lucide-react';

export interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  link?: string;
  logo?: string;
}

export interface Skill {
  name: string;
  category: 'Professional' | 'IT';
  level?: number; // 0-100
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  text: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}