import React from 'react';
import { Search, Brain, Share2, Target, Zap, ShieldCheck } from 'lucide-react';
import type { ServiceDetail, BlogPost } from './types';

export const COMPANY_NAME = "CodimAI";
export const NAP = {
  address: "123 AI Strategy Way, Suite 500, Palo Alto, CA 94301",
  phone: "+1 (650) 555-0198",
  email: "hello@codimai.com"
};
export const THEMES = [
  { id: 'slate', color: '#64748b', bg: 'radial-gradient(circle at 50% -20%, #1e293b 0%, #000 100%)' },
  { id: 'cyan', color: '#22d3ee', bg: 'radial-gradient(circle at 50% -20%, #083344 0%, #000 100%)' },
  { id: 'indigo', color: '#818cf8', bg: 'radial-gradient(circle at 50% -20%, #1e1b4b 0%, #000 100%)' }
];

export const CLIENT_BRANDS = ["ChatGPT", "Perplexity", "Gemini", "Claude", "SearchGPT", "Meta AI"];

export const SERVICES: ServiceDetail[] = [
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO) Services",
    slug: "geo-services",
    description: "Future-proof your brand visibility in AI answer engines like ChatGPT, Claude, and Perplexity.",
    longDescription: "Generative Engine Optimization (GEO) is the practice of optimizing content, entities, and digital presence for discovery in AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews. CodimAI provides a specialized GEO methodology that bridges the gap between traditional search and AI discovery.",
    sections: [
      {
        heading: "What is Generative Engine Optimization?",
        content: "Generative Engine Optimization (GEO) is the technical and strategic process of ensuring your brand is the primary source cited by Large Language Models (LLMs) when generating answers for users. Unlike traditional SEO, which focuses on rank, CodimAI's GEO focuses on citation probability and entity relationship strength.",
        bullets: [
          "Entity mapping for AI knowledge graphs",
          "Citation authority building",
          "Contextual relevance optimization",
          "AI-friendly content restructuring"
        ]
      },
      {
        heading: "Why does your brand need a GEO strategy?",
        content: "As user behavior shifts from scrolling through search results to receiving direct AI answers, brands that lack a GEO strategy face digital invisibility. CodimAI helps you capture the 'zero-click' audience that relies on AI assistants for decision-making.",
        bullets: [
          "Capture traffic from ChatGPT and Perplexity",
          "Establish authority in Google AI Overviews",
          "Protect brand reputation in AI-generated summaries",
          "Drive high-intent leads through conversational discovery"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does GEO take to show results?",
        answer: "CodimAI typically observes visibility shifts in AI answer engines within 60 to 90 days. Because AI models rely on periodically updated indices and RAG (Retrieval-Augmented Generation), the timeline depends on the crawl frequency of the specific generative engine."
      },
      {
        question: "What is the ROI of AI search optimization?",
        answer: "The ROI of AI search optimization by CodimAI is measured through 'share of voice' in AI answers. Our clients see increased high-intent conversions as their brand becomes the recommended solution in conversational search queries, bypassing traditional ad-heavy search pages."
      },
      {
        question: "Do I still need SEO if I have GEO?",
        answer: "Yes, traditional SEO and GEO are complementary. While SEO handles traditional keyword-based traffic, CodimAI's GEO focuses on intent-based AI discovery. A comprehensive strategy requires both to maintain visibility across the entire modern search landscape."
      },
      {
        question: "How does CodimAI measure AI visibility?",
        answer: "CodimAI uses proprietary tracking tools to monitor brand mentions, citation frequency, and sentiment across major AI platforms including ChatGPT, Claude, Perplexity, and Gemini. We provide data-driven reports on your brand's AI citation equity."
      },
      {
        question: "Is GEO different for B2B vs B2C?",
        answer: "Yes, CodimAI tailors GEO for B2B by focusing on complex entity building and whitepaper citations, whereas B2C GEO often emphasizes product attributes and consumer review sentiment analysis in AI training data sets."
      }
    ]
  }
];

export const EDUCATIONAL_PAGES = [
  {
    title: "What is GEO? (Complete Guide)",
    slug: "what-is-geo",
    content: "Generative Engine Optimization (GEO) is the practice of optimizing content, entities, and digital presence for discovery in AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews. CodimAI defines GEO as the intersection of technical SEO, knowledge graph engineering, and AI citation strategy."
  },
  {
    title: "SEO vs GEO: Understanding the Difference",
    slug: "seo-vs-geo",
    content: "The primary difference lies in the destination. Traditional SEO optimizes for a list of blue links on a Search Engine Results Page (SERP). CodimAI's GEO methodology optimizes for the synthesized paragraph of text generated by an AI assistant."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "What is Generative Engine Optimization? A Complete Guide",
    slug: "what-is-generative-engine-optimization",
    date: "May 12, 2024",
    category: "GEO Fundamentals",
    excerpt: "Learn how CodimAI defines the future of search visibility in an AI-first world.",
    content: "Generative Engine Optimization (GEO) is the new frontier of digital marketing. As search engines evolve into answer engines, the mechanics of visibility have shifted from keyword matching to entity relationships.",
    sections: [
      {
        heading: "What defines a successful GEO strategy?",
        content: "A successful GEO strategy by CodimAI involves three core pillars: Entity Authority, Citation Probability, and Contextual Relevance. We ensure your brand isn't just mentioned, but cited as an authoritative source."
      },
      {
        heading: "How can brands audit their AI footprint?",
        content: "CodimAI recommends a multi-platform audit approach. Test how ChatGPT, Perplexity, and Gemini respond to branded and unbranded queries related to your industry to identify 'citation gaps'."
      }
    ]
  }
];