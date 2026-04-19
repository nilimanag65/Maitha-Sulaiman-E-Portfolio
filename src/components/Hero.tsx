import { FadeIn } from './FadeIn';
import { ArrowRight, Leaf } from 'lucide-react';

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto relative">
      <FadeIn>
        <div className="flex flex-col mb-8 gap-4">
          <span className="section-tag w-max">Academic E-Portfolio</span>
          <span className="text-[var(--color-accent)] font-sans font-bold text-sm tracking-wider uppercase flex items-center gap-2">
            <Leaf className="w-4 h-4" /> Health and Well-being
          </span>
          <span className="text-[var(--color-text-dim)] font-mono text-sm tracking-wider uppercase">Maitha Sulaiman</span>
        </div>
        
        <h1 className="font-display text-[14vw] leading-[1.1] lg:text-[100px] xl:text-[120px] text-[var(--color-text-main)] font-normal tracking-tight mb-10">
          Health <span className="text-[var(--color-accent)] italic">&</span><br/>
          <span className="text-[var(--color-border-strong)]">Well-being</span>
        </h1>
      </FadeIn>
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <FadeIn delay={0.2} className="lg:col-span-8">
          <p className="text-[var(--color-text-dim)] text-lg md:text-2xl font-light mb-6 leading-relaxed max-w-3xl">
            A comprehensive portfolio exploring stress management, actionable habits, and sustainable well-being routines to maintain balance during demanding academic periods.
          </p>
          <p className="text-[var(--color-border-strong)] text-base md:text-lg font-sans font-medium mb-10 leading-relaxed max-w-3xl border-l-4 border-[var(--color-accent)] pl-5 bg-[rgba(212,138,86,0.05)] py-3">
            A digital portfolio documenting SMART goals, fitness and meal planning, interview insights, reflective learning, and personal growth.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="lg:col-span-4 flex lg:justify-end">
          <button onClick={() => scrollTo('intro')} className="cta-btn w-full lg:w-auto">
            Explore Work <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
