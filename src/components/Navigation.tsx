import { useState } from 'react';

export function Navigation({ activeSection, scrollTo, SECTIONS }: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display text-[20px] xl:text-[24px] font-bold text-[var(--color-text-main)] cursor-pointer tracking-wide" onClick={() => handleScrollTo('home')}>
          M. <span className="text-[var(--color-border-strong)] italic">Sulaiman</span>
        </div>
        
        <div className="hidden xl:flex items-center gap-2">
          {SECTIONS.map((section: any) => (
            <button
              key={section.id}
              onClick={() => handleScrollTo(section.id)}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        <button 
          className="xl:hidden text-[var(--color-text-main)] w-10 h-10 flex flex-col justify-center items-end gap-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-8 h-[2px] bg-current transition-transform"></span>
          <span className="block w-full h-[2px] bg-[var(--color-accent)] transition-transform"></span>
          <span className="block w-6 h-[2px] bg-current transition-transform"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 glass-nav border-t border-[var(--color-border-subtle)] flex flex-col p-6 xl:hidden shadow-lg">
          {SECTIONS.map((section: any) => (
            <button
              key={section.id}
              onClick={() => handleScrollTo(section.id)}
              className={`text-left py-5 px-6 text-sm uppercase tracking-widest font-bold border-b border-[var(--color-border-subtle)] last:border-none ${activeSection === section.id ? 'text-[var(--color-text-main)] bg-[var(--color-card-darker)]' : 'text-[var(--color-text-dim)]'}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
