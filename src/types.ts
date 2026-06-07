export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  duration: string;
  grade?: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: 'languages' | 'frontend' | 'backend' | 'mobile' | 'tools' | 'soft';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}
