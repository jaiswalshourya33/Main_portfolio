export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  colorClass: string;
}
