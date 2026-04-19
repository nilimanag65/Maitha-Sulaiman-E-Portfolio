import { FadeIn } from './FadeIn';
import { ArrowRight, Star, Heart, Target, Leaf } from 'lucide-react';

export function Conclusion() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="conclusion" className="py-24 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)] relative overflow-hidden">
       <div className="absolute top-10 right-10 opacity-30">
        <Leaf className="w-16 h-16 text-[var(--color-accent)]" />
      </div>
      
      <FadeIn>
        <span className="section-tag mb-6">07. Final Synthesis</span>
        <h3 className="font-display text-[40px] md:text-[80px] leading-[1] text-[var(--color-text-main)] mb-16 font-normal tracking-tight">Conclusion</h3>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        <FadeIn delay={0.1}>
          <div className="text-lg text-[var(--color-text-dim)] font-sans leading-[1.8]">
            <p className="text-2xl text-[var(--color-border-strong)] font-display italic font-medium mb-8 leading-relaxed">
              "This semester fundamentally reshaped my definition of health from a singular physical metric into a deeply interconnected web of physical resilience, nutritional awareness, and mental fortification."
            </p>
            <p className="mb-6">
              Throughout this course, I have explicitly learned that isolated attempts at well-being (like exercising without managing sleep) are ultimately unsustainable. Through the precise development of SMART goals, I gained practical tools to deconstruct large, overwhelming lifestyle changes into actionable, highly realistic daily metrics.
            </p>
            <p className="mb-6">
              Specifically, outlining structured, realistic fitness and meal plans forced me to confront the gap between theoretical knowledge and practical execution. Furthermore, the qualitative primary research via interviews proved that even highly successful professionals require intentional boundaries to prevent burnout, powerfully reinforcing the necessity of social support and time management.
            </p>
            <p>
              Looking forward, the specific habits I will actively adopt are strict nighttime electronic curfews, proactive weekly meal prepping, and viewing un-structured rest not as laziness, but as a critical physiological necessity. The cumulative elements of this portfolio have built a personalized, permanent roadmap for my long-term university success and overall health.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col justify-center">
          <div className="glass-card p-10 lg:p-12 relative overflow-hidden group bg-[#f0e6d2]">
             <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-accent)]" />
            <h4 className="text-2xl font-display font-medium tracking-tight text-[var(--color-text-main)] mb-8 border-b border-[var(--color-border-subtle)] pb-4">Highlighted Takeaways</h4>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex gap-6 group/item">
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] flex items-center justify-center transition-transform group-hover/item:scale-110">
                  <Target className="text-[var(--color-border-strong)] w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[var(--color-text-main)] uppercase tracking-tight mb-2">Intentional Goal Setting</h5>
                  <p className="text-sm text-[var(--color-text-dim)] leading-relaxed font-sans">Structure (SMART format) makes the abstract objective of 'getting healthier' an achievable reality.</p>
                </div>
              </li>
              
              <li className="flex gap-6 group/item">
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] flex items-center justify-center transition-transform group-hover/item:scale-110">
                  <Star className="text-[var(--color-border-strong)] w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[var(--color-text-main)] uppercase tracking-tight mb-2">Holistic Synergy</h5>
                  <p className="text-sm text-[var(--color-text-dim)] leading-relaxed font-sans">Sleep, nutrition, and stress management are deeply interlinked and demand equal attention.</p>
                </div>
              </li>
              
              <li className="flex gap-6 group/item">
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] flex items-center justify-center transition-transform group-hover/item:scale-110">
                  <Heart className="text-[var(--color-border-strong)] w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[var(--color-text-main)] uppercase tracking-tight mb-2">Sustainable Boundaries</h5>
                  <p className="text-sm text-[var(--color-text-dim)] leading-relaxed font-sans">Long-term mental endurance requires deliberate limits on academic workload and active prioritization of rest.</p>
                </div>
              </li>
            </ul>

            <button onClick={() => scrollTo('home')} className="mt-12 w-full flex items-center justify-between p-4 bg-[var(--color-card-bg)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-card-darker)] transition-all group/btn rounded shadow-sm text-[var(--color-text-main)]">
              <span className="font-sans text-sm tracking-widest uppercase font-bold transition-colors">Return to Top</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:-translate-y-1 transform -rotate-90" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
