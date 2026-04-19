import { FadeIn } from './FadeIn';
import { ChevronRight, Leaf } from 'lucide-react';

export function Introduction() {
  return (
    <section id="intro" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24 relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[var(--color-bg-dark)] px-4 text-[var(--color-accent)]">
          <Leaf className="w-6 h-6" />
        </div>
      </div>
      <FadeIn>
        <span className="section-tag mb-6">01. Context</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-16 font-normal tracking-tight">Introduction</h3>
      </FadeIn>
      
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <FadeIn delay={0.1} className="lg:col-span-7">
          <div className="space-y-8 text-lg text-[var(--color-text-main)] leading-relaxed font-sans font-medium">
            <p>
              Health is deeply multidimensional. It is intrinsically connected to our physical activity, nutritional habits, and crucially, our emotional balance. The purpose of this e-portfolio is to document a structured, evidence-based approach to personal health during high-pressure academic periods.
            </p>
            <p className="pl-6 border-l-2 border-[var(--color-accent)]">
              This portfolio represents a practical learning journey where health and well-being theory is directly connected to real-life application. Rather than seeking unattainable perfection, the focus is on sustainable and realistic modifications that build long-term resilience.
            </p>
            <p>
              Academically, this project demonstrates a comprehensive understanding of wellness components. Personally, it matters because it shifts my perspective from viewing health as a chore to recognizing it as the foundational support system for daily energy, focus, and overall quality of life.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="lg:col-span-5 glass-card p-10 lg:p-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
             <div className="w-6 h-6 bg-[var(--color-accent)] opacity-20 rounded-full" />
             <div className="w-6 h-6 bg-[var(--color-accent)] opacity-20 rounded-full" />
          </div>
          <h4 className="text-2xl font-display text-[var(--color-text-main)] mb-8 border-b border-[var(--color-border-subtle)] pb-6 flex items-center justify-between">
            Portfolio Focus
          </h4>
          <ul className="space-y-4">
            {[
              "SMART Goals",
              "Fitness and Meal Plan",
              "Interviews and Data Collection",
              "Reflective Activities",
              "Conclusion and Synthesis"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-center bg-[var(--color-card-darker)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-border-strong)] flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-[var(--color-border-strong)]" />
                </div>
                <span className="text-base text-[var(--color-text-main)] font-semibold tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
