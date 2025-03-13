interface DevtoPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  tags: string[];
}

interface HeroSectionProps {
  heading: string;
  className: string;
}

interface TechSkill {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  order: number;
  image: string;
  link: string;
  technologies: string[];
  description: string;
}

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export type {
  DevtoPost,
  HeroSectionProps,
  TechSkill,
  Project,
  ImageItem,
  ImageGalleryProps,
};
