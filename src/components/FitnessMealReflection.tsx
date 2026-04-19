import { FadeIn } from './FadeIn';
import { Target, Leaf } from 'lucide-react';

export function FitnessMealReflection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)] relative">
       <div className="absolute top-10 left-10 opacity-30">
        <Leaf className="w-16 h-16 text-[var(--color-accent)]" />
      </div>
      <FadeIn>
        <div className="glass-card p-10 lg:p-14 bg-[var(--color-card-bg)] shadow-md border-[var(--color-border-subtle)] relative overflow-hidden">
          <h3 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-[var(--color-text-main)] mb-10 font-normal border-b border-[var(--color-border-subtle)] pb-8 flex items-center gap-4">
            <Target className="w-10 h-10 text-[var(--color-border-strong)] hidden md:block" />
            Reflection on My Fitness and Meal Plan
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="bg-[var(--color-bg-dark)] p-6 border border-[var(--color-border-subtle)] rounded-lg shadow-sm">
                <strong className="block text-[var(--color-border-strong)] font-sans font-bold text-sm uppercase tracking-wider mb-2 border-b border-dashed border-[var(--color-border-subtle)] pb-2">Why This Plan is Realistic</strong>
                <p className="text-base text-[var(--color-text-dim)] leading-relaxed mt-4">
                  This combined plan is designed around moderation rather than extreme restriction. The workouts are capped at 45 minutes, ensuring they fit into academic schedule gaps, and the meals use accessible, everyday ingredients. It eliminates the friction of over-complex planning.
                </p>
              </div>

              <div className="bg-[var(--color-bg-dark)] p-6 border border-[var(--color-border-subtle)] rounded-lg shadow-sm">
                <strong className="block text-[var(--color-border-strong)] font-sans font-bold text-sm uppercase tracking-wider mb-2 border-b border-dashed border-[var(--color-border-subtle)] pb-2">Anticipated Challenges</strong>
                <p className="text-base text-[var(--color-text-dim)] leading-relaxed mt-4">
                  The primary hurdle will be consistency—specifically fighting tiredness after late classes and resisting unhealthy snacking during intense study sessions or stress peaks.
                </p>
              </div>
            </div>

            <div className="space-y-8">
               <div className="bg-[var(--color-bg-dark)] p-6 border border-[var(--color-border-subtle)] rounded-lg shadow-sm">
                <strong className="block text-[var(--color-border-strong)] font-sans font-bold text-sm uppercase tracking-wider mb-2 border-b border-dashed border-[var(--color-border-subtle)] pb-2">Overcoming Challenges</strong>
                <p className="text-base text-[var(--color-text-dim)] leading-relaxed mt-4">
                  I will manage these by meal-prepping on Sundays to prevent reactive eating, and by executing workouts immediately in the morning before fatigue sets in. Having healthy snacks pre-portioned will curb junk food cravings.
                </p>
              </div>

              <div className="bg-[var(--color-bg-dark)] p-6 border border-[var(--color-border-subtle)] rounded-lg shadow-sm">
                <strong className="block text-[var(--color-border-strong)] font-sans font-bold text-sm uppercase tracking-wider mb-2 border-b border-dashed border-[var(--color-border-subtle)] pb-2">Expected Benefits</strong>
                <p className="text-base text-[var(--color-text-dim)] leading-relaxed mt-4">
                  Successfully adhering to this routine will drastically improve my physical baseline energy, stabilize my focus during lectures, and replace chaotic stress-responses with a structured, grounding daily routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
