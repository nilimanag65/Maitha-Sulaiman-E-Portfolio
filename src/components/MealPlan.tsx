import { FadeIn } from './FadeIn';
import { Utensils, Leaf } from 'lucide-react';

export function MealPlan() {
  const plannerImages = [
    {
      title: "Week 1 Meal Planner",
      src: "/images/meal-week-1.jpg",
      alt: "Week 1 Meal Plan"
    },
    {
      title: "Week 2 Meal Planner",
      src: "/images/meal-week-2.jpg",
      alt: "Week 2 Meal Plan"
    }
  ];

  return (
    <section id="meal" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto relative border-t border-[var(--color-border-subtle)]">
      <div className="absolute top-10 right-10 opacity-30">
        <Leaf className="w-24 h-24 text-[var(--color-accent)]" />
      </div>
      <FadeIn>
        <span className="section-tag mb-6">04. Nutrition</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-16 font-normal tracking-tight">Two-Week Nutrition</h3>
      </FadeIn>

      <div className="space-y-16 relative z-10">
        {plannerImages.map((week, wIdx) => (
          <div key={wIdx}>
            <FadeIn>
              <h4 className="text-3xl font-display font-medium text-[var(--color-text-main)] mb-8 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <span>{week.title}</span><Utensils className="w-8 h-8 text-[var(--color-border-strong)]" />
              </h4>
            </FadeIn>
            <FadeIn delay={0.2} className="glass-card p-4 lg:p-8 bg-[var(--color-card-bg)]">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border-subtle)] shadow-[0_8px_30px_rgba(74,55,40,0.08)] flex justify-center bg-[var(--color-bg-dark)]">
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
