export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  codeLink?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  codeLink?: string;
  imageUrl?: string;
}
