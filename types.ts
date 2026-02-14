
export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  sections: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
  faqs: FAQItem[];
}

export interface BlogSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  content: BlogSection[];
}
