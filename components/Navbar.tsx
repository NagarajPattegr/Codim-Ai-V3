import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onBookDemo?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'GEO', href: '/geo-services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Article', href: '/article' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 nav:px-8 py-2 nav:py-3 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-7xl bg-white/70 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] nav:rounded-full border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden pointer-events-auto
          ${isMobileMenuOpen ? 'max-h-[35rem]' : 'max-h-16 nav:max-h-20'}
          ${scrolled ? 'shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] py-1.5' : ''}
        `}
      >
        <div className="flex flex-col nav:flex-row nav:items-center nav:justify-between h-full px-6 nav:px-12">

          {/* Logo Section - Left */}
          <div className="flex items-center justify-between h-16 nav:h-20 nav:flex-1">
            <Logo />

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav:hidden p-2.5 text-wispr-dark hover:bg-black/5 rounded-full transition-all active:scale-90"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Navigation Links - Center */}
          <div className={`
            flex flex-col nav:flex-row items-center justify-center nav:flex-[2]
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            nav:opacity-100 nav:translate-y-0
            ${isMobileMenuOpen ? 'opacity-100 translate-y-4 pb-8' : 'opacity-0 -translate-y-8 nav:opacity-100 nav:translate-y-0 h-0 nav:h-auto overflow-hidden nav:overflow-visible'}
          `}>
            <div className="flex flex-col nav:flex-row items-center gap-6 nav:gap-14 font-brand text-[12px] nav:text-[13px] font-black text-wispr-dark/40 uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }: { isActive: boolean }) => `
                    transition-all duration-300 relative group/link whitespace-nowrap
                    ${isActive ? 'text-wispr-dark' : 'hover:text-wispr-dark'}
                  `}
                >
                  {({ isActive }: { isActive: boolean }) => (
                    <>
                      {link.name}
                      <span className={`
                        absolute -bottom-1.5 left-0 h-[2px] bg-wispr-purple transition-all duration-300
                        ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}
                      `}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Action Button - Right */}
          <div className={`
            flex items-center justify-center nav:justify-end nav:flex-1
            transition-all duration-700
            ${isMobileMenuOpen ? 'opacity-100 translate-y-4 pb-12' : 'opacity-0 -translate-y-8 nav:opacity-100 nav:translate-y-0 h-0 nav:h-auto overflow-hidden nav:overflow-visible'}
          `}>
            <button
              onClick={onBookDemo}
              className="bg-wispr-dark text-white px-8 py-3.5 nav:py-4 rounded-xl font-sodo font-bold text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-wispr-dark/10"
            >
              Book a Demo
            </button>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
