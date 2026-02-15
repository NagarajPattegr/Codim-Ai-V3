import React, { useEffect } from 'react';
import type { BlogPost as BlogPostType, BlogSection } from '../../types';
import { ArrowLeft, Clock, Calendar, Sparkles, Share2, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  onBackToList: () => void;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({ post, onBack, onBackToList }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2
            key={index}
            className="font-lander text-3xl md:text-5xl font-bold text-white mt-16 mb-8 tracking-tight leading-tight"
          >
            {section.content}
          </h2>
        );
      case 'subheading':
        return (
          <h3
            key={index}
            className="font-lander text-xl md:text-2xl font-bold text-white mt-12 mb-6 tracking-tight"
          >
            {section.content}
          </h3>
        );
      case 'paragraph':
        return (
          <p
            key={index}
            className="font-sodo text-lg md:text-xl text-slate-400 leading-relaxed mb-6"
          >
            {section.content}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="space-y-4 mb-8 ml-2">
            {section.items?.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-wispr-purple mt-2.5 shrink-0 shadow-[0_0_12px_rgba(109,40,217,0.5)]"></div>
                <span className="font-sodo text-lg text-slate-400 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote
            key={index}
            className="my-10 pl-8 border-l-4 border-wispr-purple bg-white/5 py-6 pr-8 rounded-r-3xl"
          >
            <p className="font-lander text-xl md:text-2xl text-white font-medium italic leading-relaxed">
              {section.content}
            </p>
          </blockquote>
        );
      case 'image':
        return (
          <figure key={index} className="my-12">
            <img
              src={section.content}
              alt="Blog content"
              className="w-full h-auto rounded-[2rem] shadow-2xl border border-wispr-dark/5"
            />
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-wispr-cream">
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-10 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-[-10%] right-1/4 w-[60vw] h-[60vw] bg-wispr-purple/10 blur-[200px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={onBackToList}
            className="mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-wispr-dark/10 font-brand text-[11px] font-black uppercase tracking-[0.2em] text-wispr-dark/60 hover:bg-wispr-dark hover:text-white transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>

          {/* Category Badge */}
          <div className="reveal-advanced active mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-wispr-dark text-wispr-cream rounded-full font-brand text-[10px] font-black tracking-[0.4em] uppercase shadow-lg">
              <Sparkles size={14} className="text-wispr-purple" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <div className="reveal-advanced active mb-8" style={{ transitionDelay: '100ms' }}>
            <h1 className="font-lander text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-wispr-dark">
              {post.title}
            </h1>
          </div>

          {/* Meta Info */}
          <div
            className="reveal-advanced active flex flex-wrap items-center gap-6 md:gap-10"
            style={{ transitionDelay: '200ms' }}
          >
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-wispr-dark flex items-center justify-center font-brand font-black text-lg text-wispr-purple">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-brand text-sm font-black text-wispr-dark">{post.author.name}</p>
                <p className="font-brand text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="w-[1.5px] h-10 bg-wispr-dark/10 hidden md:block"></div>

            {/* Date */}
            <div className="flex items-center gap-3 text-slate-500">
              <Calendar size={18} />
              <span className="font-brand text-sm font-black">{post.publishedAt}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-3 text-slate-500">
              <Clock size={18} />
              <span className="font-brand text-sm font-black">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Breaker */}
      <div className="w-full py-4 flex items-center justify-center overflow-hidden relative bg-wispr-cream">
        <div className="flex items-center gap-12 w-full max-w-4xl px-6 opacity-20">
          <div className="flex-1 h-[1px] bg-wispr-dark"></div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-4 w-1 bg-wispr-dark rounded-full"></div>
            <div className="h-4 w-1 bg-wispr-dark rounded-full opacity-50"></div>
          </div>
          <div className="flex-1 h-[1px] bg-wispr-dark"></div>
        </div>
      </div>

      {/* Article Content - DARK (Even) */}
      <article className="py-8 md:py-16 px-6 bg-wispr-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {post.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/5 rounded-xl font-brand text-[10px] font-black uppercase tracking-widest text-slate-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose-custom">{post.content.map(renderSection)}</div>

          {/* Share Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-brand text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">
                  Share this article
                </p>
                <p className="font-sodo text-lg text-slate-400">
                  Found this helpful? Share it with your network.
                </p>
              </div>
              <button className="inline-flex items-center gap-4 px-8 py-4 bg-white text-wispr-dark rounded-2xl font-brand text-[11px] font-black uppercase tracking-[0.2em] hover:bg-wispr-purple hover:text-white transition-all active:scale-95 shadow-xl group">
                <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
                Share
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-12 md:p-16 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-wispr-purple/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <span className="inline-block px-5 py-2 bg-wispr-purple/20 text-wispr-purple rounded-full font-brand text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Ready to Scale?
              </span>
              <h3 className="font-lander text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Implement GEO for your business.
              </h3>
              <p className="font-sodo text-lg text-slate-400 mb-10 max-w-xl">
                Let CodimAI help you optimize your presence across AI tools and drive qualified inbound leads.
              </p>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-4 px-10 py-5 bg-wispr-purple text-wispr-dark rounded-2xl font-brand text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-purple-700/20 group"
              >
                Explore Our Solutions
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 text-center">
            <button
              onClick={onBackToList}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 font-brand text-[11px] font-black uppercase tracking-[0.2em] text-white/60 hover:bg-white hover:text-wispr-dark transition-all active:scale-95"
            >
              <ArrowLeft size={16} />
              Back to All Articles
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostComponent;
