export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  content?: string;
  isPinned?: boolean;
}