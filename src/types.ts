export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "front-end" | "back-end" | "full-stack" | "wordpress";
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "front-end" | "back-end" | "wordpress" | "others";
  iconName: string;
}

export interface Language {
  name: string;
  level: number; // 0 to 100
  percentageText: string;
}

export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}
