import { FadeIn } from './FadeIn';
import { Brain, Utensils, Moon, HeartPulse, Target, Leaf } from 'lucide-react';

export function ReflectiveActivities() {
  const activities = [
    {
      icon: <Brain className="w-8 h-8 text-[var(--color-border-strong)]" />,
      title: "Stress Management",
      learning: "Stress is a natural biological response, but it becomes heavily destructive when constant. It impairs sleep architecture, damages concentration, and creates a negative physiological feedback loop during peak responsibility periods.",
      connection: "I noticed my academic output actually decreases when I push through extreme stress without a break.",
      action: "I will enforce a strict cutoff time for academic work each night to ensure my nervous system naturally winds down."
    },
    {
      icon: <Utensils className="w-8 h-8 text-[var(--color-border-strong)]" />,
      title: "Nutrition",
      learning: "Diet is the primary fuel for cognitive endurance. Healthy eating isn't about restriction; it's about systematically balancing macronutrients to support immunity and prevent mid-afternoon energy crashes.",
      connection: "I realized my tendency to rely on high-sugar convenience foods directly caused my afternoon lethargy and poor focus.",
      action: "I will consciously meal prep complex carbohydrates and a protein source to stabilize my daily blood sugar."
    },
    {
      icon: <Moon className="w-8 h-8 text-[var(--color-border-strong)]" />,
      title: "Sleep and Well-Being",
      learning: "Sleep is the foundational pillar for both physical repair and memory consolidation. Without proper REM and deep sleep cycles, cognitive function and emotional regulation immediately degrade.",
      connection: "When I sacrifice sleep for extra study time, the resulting fatigue makes the extra study time completely inefficient.",
      action: "I will drastically cut screen exposure 45 minutes before bed and commit to a non-negotiable 7-hour sleep minimum."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[var(--color-border-strong)]" />,
      title: "Exercise & Daily Health",
      learning: "Consistent physical movement acts as a direct countermeasure to psychological stress. It metabolizes cortisol and forces the body entirely out of the 'fight or flight' rigid posture associated with desktop studying.",
      connection: "I learned that waiting for the 'perfect' 2-hour gym window meant I rarely exercised, whereas a 20-minute daily home workout is highly achievable and effective.",
      action: "I will execute a 20-minute immediate morning exercise routine rather than delaying it to the unpredictable evening."
    },
    {
      icon: <Target className="w-8 h-8 text-[var(--color-border-strong)]" />,
      title: "Mental Health & Self-Care",
      learning: "Mental endurance requires proactive maintenance, perfectly mirroring physical endurance. True self-care involves creating boundaries, leaning on social support, and scheduling intentional rest periods before burnout occurs.",
      connection: "I historically treated self-care as a luxury permitted only after work was completed, which is an unsustainable model.",
      action: "I will schedule unstructured, non-academic downtime into my calendar with the same priority as a university lecture."
    }
  ];

  return (
    <section id="reflections" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)] relative">
      <div className="absolute top-10 right-10 opacity-30 transform scale-x-100">
        <Leaf className="w-24 h-24 text-[var(--color-accent)]" />
      </div>
      <FadeIn>
        <span className="section-tag mb-6">06. Deep Dives</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-16 font-normal tracking-tight">Reflective Activities</h3>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {activities.map((ref, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="glass-card flex flex-col h-full p-8 lg:p-10 group bg-[var(--color-card-bg)] hover:bg-[#f0e6d2] transition-colors duration-500">
            <div className="mb-8 bg-[var(--color-card-darker)] border border-[var(--color-border-subtle)] w-16 h-16 rounded-2xl flex items-center justify-center transition-colors group-hover:border-[var(--color-border-strong)]">
              {ref.icon}
            </div>
            
            <h4 className="text-2xl font-display font-medium tracking-tight text-[var(--color-text-main)] mb-8 border-b border-[var(--color-border-subtle)] pb-4">{ref.title}</h4>
            
            <div className="space-y-6 flex-grow">
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold text-[var(--color-text-dim)] mb-2">Key Learning</span>
                <p className="text-sm font-sans text-[var(--color-text-main)] leading-relaxed">{ref.learning}</p>
              </div>
              
              <div className="bg-[rgba(253,251,247,0.5)] p-4 rounded-lg border border-[var(--color-border-subtle)] relative">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] rounded-l-lg" />
                <span className="block text-xs uppercase tracking-widest font-bold text-[var(--color-text-dim)] mb-2 pl-2">Personal Connection</span>
                <p className="text-sm font-sans text-[var(--color-text-main)] leading-relaxed pl-2">{ref.connection}</p>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)]">
              <span className="block text-xs uppercase tracking-widest font-bold text-[var(--color-accent-dim)] mb-2">Action I Will Take</span>
              <p className="text-base text-[var(--color-text-main)] font-semibold leading-relaxed">{ref.action}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
