import { FadeIn } from './FadeIn';
import { Users, Quote, Leaf } from 'lucide-react';

export function Interviews() {
  const interviewImages = [
    { name: "Fatima Al Mansoori", src: "/images/interview-1.jpg" },
    { name: "Aisha Al Mazrouei", src: "/images/interview-2.jpg" },
    { name: "Mariam Al Dhaheri", src: "/images/interview-3.jpg" }
  ];

  return (
    <section id="interviews" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto relative border-t border-[var(--color-border-subtle)]">
      <div className="absolute top-10 left-10 opacity-30 transform -rotate-45">
        <Leaf className="w-16 h-16 text-[var(--color-accent)]" />
      </div>

      <FadeIn>
        <span className="section-tag mb-6">05. Primary Research</span>
        <h3 className="font-display text-[40px] md:text-[60px] text-[var(--color-text-main)] mb-16 font-normal tracking-tight">Interview Learnings</h3>
      </FadeIn>

      <FadeIn delay={0.1} className="glass-card mb-16 p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 bg-[var(--color-card-darker)]">
        <div className="w-16 h-16 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card-bg)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Users className="text-[var(--color-border-strong)] w-8 h-8" />
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-display font-bold tracking-tight uppercase text-[var(--color-text-main)] mb-4">Topic & Purpose</h4>
          <p className="text-lg font-sans text-[var(--color-text-dim)] leading-relaxed max-w-4xl">
            The focus of these interviews was understanding how diverse individuals maintain health during highly stressful periods. The purpose was to collect qualitative data on real-life coping habits, practical challenges, and behavioral solutions outside of theoretical textbook ideals.
          </p>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-3 gap-8 mb-24 relative z-10">
        {interviewImages.map((interview, idx) => (
          <FadeIn key={idx} delay={idx * 0.15} className="glass-card flex flex-col h-full p-4 lg:p-6 bg-[var(--color-card-bg)] border-[var(--color-border-subtle)]">
            <div className="flex items-center justify-between mb-4 px-2">
              <h4 className="text-lg font-display font-medium text-[var(--color-text-main)] bg-[var(--color-card-darker)] px-3 py-1 rounded-md border border-[var(--color-border-subtle)] shadow-sm">
                {interview.name}
              </h4>
              <Quote className="w-6 h-6 text-[var(--color-accent)] opacity-50" />
            </div>
            
            <div className="rounded-xl overflow-hidden border border-[var(--color-border-subtle)] shadow-[0_8px_30px_rgba(74,55,40,0.08)] flex justify-center bg-[var(--color-bg-dark)]">
              <img 
                src={interview.src} 
                alt={`${interview.name} Interview`} 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="glass-card p-10 lg:p-14 border-l-8 border-[var(--color-accent)] bg-[var(--color-card-bg)] relative overflow-hidden">
        <h4 className="text-3xl font-display font-medium text-[var(--color-text-main)] mb-8 relative z-10">Reflection on the Interviews</h4>
        <div className="space-y-6 relative z-10 text-lg font-sans text-[var(--color-text-dim)] leading-relaxed">
          <p>
            These interviews provided the profound insight that perfection is not required for successful self-care. It was surprising, and deeply inspiring, to see that highly successful professionals still struggle with time management, yet they cope by defaulting to incredibly simple micro-habits rather than complex wellness regimes.
          </p>
          <div className="pl-6 border-l-4 border-[var(--color-accent)] py-4 bg-[rgba(212,138,86,0.05)] -ml-6 pr-6 my-8 rounded-r-xl">
            <p className="italic text-[var(--color-border-strong)] text-2xl font-display font-medium">
              "This reminded me that well-being is not about being flawless; it is about making intentional, practical choices, even in small ways when time is scarce."
            </p>
          </div>
          <p>
            Personally, I learned definitively that committing to a realistic, slightly imperfect self-care habit is vastly superior to a strict plan that breaks under pressure.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
