import { FadeIn } from './FadeIn';
import { Activity, Utensils, Brain, Leaf } from 'lucide-react';

export function SmartGoals() {
  const goals = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Fitness Goal",
      statement: "Improve cardiovascular endurance by running 3 times a week (30 mins per session) for the next month.",
      why: "Cardio is essential for stamina, heart health, and clearing academic stress. I specifically want to build baseline endurance without burning out.",
      smart: [
        { label: "Specific", text: "Running 3 times weekly." },
        { label: "Measurable", text: "Track 30 minutes per run." },
        { label: "Achievable", text: "Gradually increasing stamina from my current base." },
        { label: "Relevant", text: "Directly boosts heart health and reduces study anxiety." },
        { label: "Time-Bound", text: "Evaluate after four weeks." }
      ],
      growth: "Builds physical discipline and proves to myself that I can stick to a demanding routine.",
      feasibility: "Highly feasible. Requires no gym equipment, just 30 minutes and running shoes.",
      challenges: "Challenge: Rain or fatigue. Solution: Substitute with an intensive 30-min home HIIT session.",
      color: "text-[var(--color-border-strong)]",
      border: "border-[var(--color-border-subtle)]",
      bg: "bg-[var(--color-card-darker)]"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrition Goal",
      statement: "Increase hydration by drinking 2.5 liters of water daily, tracking intake via a mobile app for two weeks.",
      why: "Hydration directly correlates with my daily energy levels and cognitive function during classes.",
      smart: [
        { label: "Specific", text: "Drink 2.5L of water daily." },
        { label: "Measurable", text: "Usage of a hydration tracking app." },
        { label: "Achievable", text: "Using a marked 1L physical water bottle to easily measure." },
        { label: "Relevant", text: "Improves overall energy baseline and study focus." },
        { label: "Time-Bound", text: "Strict continuous tracking over 14 days." }
      ],
      growth: "Trains my mindfulness regarding bodily needs, moving away from surviving on caffeine.",
      feasibility: "Extremely simple to execute, just requires remembering to refill.",
      challenges: "Challenge: Forgetting to drink. Solution: Keep the large bottle on my study desk at all times.",
      color: "text-[var(--color-border-strong)]",
      border: "border-[var(--color-border-subtle)]",
      bg: "bg-[var(--color-card-darker)]"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Health Goal",
      statement: "Dedicate 10 minutes every single evening before bed to mindfulness meditation.",
      why: "To proactively calm an overactive mind and profoundly improve sleep efficiency.",
      smart: [
        { label: "Specific", text: "10 minutes of evening meditation." },
        { label: "Measurable", text: "Follow daily guided audio tracks." },
        { label: "Achievable", text: "Extremely minimal time commitment before sleep." },
        { label: "Relevant", text: "Reduces anxiety spikes and aids restorative rest." },
        { label: "Time-Bound", text: "Review impact after one complete month." }
      ],
      growth: "Develops emotional regulation and helps establish a strong boundary between work and rest.",
      feasibility: "Easily incorporated into the existing pre-sleep routine.",
      challenges: "Challenge: Falling asleep during meditation. Solution: Sit up comfortably instead of lying down.",
      color: "text-[var(--color-border-strong)]",
      border: "border-[var(--color-border-subtle)]",
      bg: "bg-[var(--color-card-darker)]"
    }
  ];

  return (
    <section id="goals" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)] relative">
      <div className="absolute top-10 right-10 opacity-30">
        <Leaf className="w-24 h-24 text-[var(--color-accent)]" />
      </div>
      <FadeIn>
        <span className="section-tag mb-6">02. Objectives</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-6 font-normal tracking-tight">SMART Goals</h3>
        <p className="text-xl font-sans text-[var(--color-text-dim)] max-w-3xl mb-16 leading-relaxed tracking-wide">
          Three practical and realistic goals designed to improve overall well-being.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-16 relative z-10">
        {goals.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.15} className="glass-card p-8 lg:p-10 flex flex-col bg-[var(--color-card-bg)]">
            <div className={`w-16 h-16 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-8 shadow-sm`}>
              <div className={item.color}>{item.icon}</div>
            </div>
            
            <h4 className="text-3xl font-display font-medium text-[var(--color-text-main)] mb-6 border-b border-[var(--color-border-subtle)] pb-4">
              {item.title}
            </h4>
            
            <div className="space-y-6 flex-grow">
              <div className="bg-[var(--color-bg-dark)] shadow-inner p-5 rounded-xl border border-[var(--color-border-subtle)] relative">
                <div className="absolute -top-3 left-4 bg-[var(--color-card-bg)] px-2">
                   <strong className="text-[var(--color-accent)] font-sans font-bold text-xs uppercase tracking-wider">Goal Statement</strong>
                </div>
                <p className="text-base font-medium text-[var(--color-text-main)] leading-relaxed mt-2">{item.statement}</p>
              </div>

              <div>
                <strong className="block text-[var(--color-accent-dim)] font-sans font-bold text-xs uppercase tracking-wider mb-2">Why I Chose This</strong>
                <p className="text-base text-[var(--color-text-dim)] leading-relaxed">{item.why}</p>
              </div>

              <div className="bg-[#f0e6d2] rounded-xl p-6 border border-[var(--color-border-subtle)] space-y-4 shadow-sm relative pt-8">
                 <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-border-subtle)] rounded-t-xl" />
                <strong className="block text-[var(--color-text-main)] font-sans font-bold text-xs uppercase tracking-wider mb-4 border-b border-[var(--color-border-subtle)] pb-2">SMART Breakdown</strong>
                {item.smart.map((s, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-[var(--color-border-subtle)] last:border-0 pb-2 last:pb-0">
                    <span className="font-bold text-[var(--color-border-strong)] w-28 flex-shrink-0 text-sm tracking-wide">{s.label}</span>
                    <span className="text-sm text-[var(--color-text-dim)] leading-relaxed">{s.text}</span>
                  </div>
                ))}
              </div>

              <div>
                <strong className="block text-[var(--color-accent-dim)] font-sans font-bold text-xs uppercase tracking-wider mb-2">Growth & Feasibility</strong>
                <ul className="space-y-3">
                  <li className="text-sm text-[var(--color-text-dim)] leading-relaxed"><strong className="text-[var(--color-text-main)]">Growth:</strong> {item.growth}</li>
                  <li className="text-sm text-[var(--color-text-dim)] leading-relaxed"><strong className="text-[var(--color-text-main)]">Feasibility:</strong> {item.feasibility}</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[var(--color-accent-dim)] font-sans font-bold text-xs uppercase tracking-wider mb-2">Challenges</strong>
                <p className="text-sm font-medium text-[var(--color-text-main)] leading-relaxed bg-[var(--color-card-darker)] p-4 rounded-lg border border-[var(--color-border-subtle)]">{item.challenges}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="glass-card p-10 lg:p-12 border-l-8 border-l-[var(--color-accent)] bg-[var(--color-card-bg)]">
        <h4 className="text-3xl font-display font-medium text-[var(--color-text-main)] mb-6">Overall Reflection on My SMART Goals</h4>
        <p className="text-xl text-[var(--color-text-dim)] leading-relaxed font-sans">
          These three goals work synergistically across physical activity, nutrition, and stress management. They are designed not in isolation, but as a cohesive system that supports discipline, self-awareness, consistency, and long-term well-being. By focusing on achievable micro-habits rather than massive overhauls, I ensure that my foundational health remains intact even during the busiest academic weeks.
        </p>
      </FadeIn>
    </section>
  );
}
