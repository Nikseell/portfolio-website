export interface Work {
  title: string
  description: string
  tags: string[]
  link?: string
  codeLink?: string
}

export interface WorkCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  codeLink?: string
  imageUrl?: string
}
