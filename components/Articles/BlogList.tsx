import React from 'react';
import type { BlogPost } from '../../types';
import BlogCard from './BlogCard';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  onReadMore: (slug: string) => void;
  onBack: () => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onReadMore, onBack }) => {
  return (
    <div className="min-h-screen bg-wispr-cream">
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-12 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-[-10%] left-1/4 w-[70vw] h-[70vw] bg-wispr-purple/10 blur-[200px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-wispr-dark/10 font-brand text-[11px] font-black uppercase tracking-[0.2em] text-wispr-dark/60 hover:bg-wispr-dark hover:text-white transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          {/* Badge */}
          <div className="reveal-advanced active mb-6">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-wispr-dark text-wispr-cream rounded-full font-brand text-[10px] font-black tracking-[0.4em] uppercase shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/5">
              <Sparkles size={16} className="text-wispr-purple" />
              <span>Insights & Resources</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="reveal-advanced active mb-6">
            <h1 className="font-lander text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-wispr-dark">
              The Blog.
            </h1>
          </div>

          {/* Subtitle */}
          <div className="reveal-advanced active max-w-2xl" style={{ transitionDelay: '200ms' }}>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed font-sodo">
              Deep dives into sales automation, AI strategy, and growth engineering.
              <span className="text-wispr-purple font-black"> Learn from the CodimAI Labs.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid - DARK (Even) */}
      <section className="py-12 md:py-20 px-6 bg-wispr-dark relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-wispr-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 grid-bg-dark opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-16 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="font-brand text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                {posts.length} Article{posts.length !== 1 ? 's' : ''} Published
              </span>
            </div>
            <span className="font-pike text-[10px] font-black uppercase tracking-widest text-slate-500">
              Latest Insights
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} onReadMore={onReadMore} />
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-32">
              <p className="font-lander text-3xl text-white/20 font-bold">No articles yet.</p>
              <p className="font-sodo text-lg text-slate-500 mt-4">Check back soon for new content.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
