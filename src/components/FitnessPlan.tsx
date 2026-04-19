import { FadeIn } from './FadeIn';
import { Target, Leaf } from 'lucide-react';

export function FitnessPlan() {
  const plannerImages = [
    {
      title: "Week 1 Fitness Planner",
      src: "/images/fitness-week-1.jpg",
      alt: "Week 1 Fitness Plan"
    },
    {
      title: "Week 2 Fitness Planner",
      src: "/images/fitness-week-2.jpg",
      alt: "Week 2 Fitness Plan"
    }
  ];

  return (
    <section id="fitness" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-10 left-10 opacity-30 transform -scale-x-100">
        <Leaf className="w-24 h-24 text-[var(--color-accent)]" />
      </div>
      <FadeIn>
        <span className="section-tag mb-6">03. Movement</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-16 font-normal tracking-tight flex items-center flex-wrap gap-x-4">
          Two-Week Fitness
          <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)] opacity-40" />
        </h3>
      </FadeIn>

      <div className="space-y-16 mb-20 relative z-10">
        {plannerImages.map((week, wIdx) => (
          <div key={wIdx}>
            <FadeIn>
              <h4 className="text-3xl font-display font-medium text-[var(--color-text-main)] mb-8 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <span>{week.title}</span><Target className="w-8 h-8 text-[var(--color-border-strong)]" />
              </h4>
            </FadeIn>
            <FadeIn delay={0.2} className="glass-card p-4 lg:p-8 bg-[var(--color-card-bg)]">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border-subtle)] shadow-[0_8px_30px_rgba(74,55,40,0.08)] flex justify-center bg-[var(--color-bg-dark)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,55,40,0.15)] hover:border-[var(--color-border-strong)]">
                <img 
                  src={week.src} 
                  alt={week.alt} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
