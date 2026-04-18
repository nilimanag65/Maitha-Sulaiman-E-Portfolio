import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, ArrowDownCircle, Target, Activity, Utensils, 
  Brain, Users, HeartPulse, CheckCircle2, ChevronRight, Moon, Lightbulb 
} from 'lucide-react';
import { FadeIn } from './components/FadeIn';

const SECTIONS = [
  { id: 'home', label: 'Overview' },
  { id: 'intro', label: 'Context' },
  { id: 'goals', label: 'Objectives' },
  { id: 'fitness', label: 'Movement' },
  { id: 'meal', label: 'Nutrition' },
  { id: 'interviews', label: 'Insights' },
  { id: 'reflections', label: 'Reflections' },
  { id: 'conclusion', label: 'Synthesis' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative font-sans">
      <div className="bg-mesh-gradient" />
      <div className="grid-overlay" />
      
      <motion.div className="progress-bar" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <div className="font-display text-[18px] xl:text-[20px] font-black text-white cursor-pointer tracking-wider uppercase" onClick={() => scrollTo('home')}>
             <span className="text-[var(--color-accent)]">M.</span> Sulaiman
           </div>
           
           <div className="hidden lg:flex items-center gap-1 xl:gap-2">
             {SECTIONS.map((section) => (
               <button
                 key={section.id}
                 onClick={() => scrollTo(section.id)}
                 className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
               >
                 {section.label}
               </button>
             ))}
           </div>
           
           <button 
             className="lg:hidden text-white w-8 h-8 flex flex-col justify-center items-end gap-1.5" 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             <span className="block w-6 h-[1px] bg-current transition-transform"></span>
             <span className="block w-full h-[1px] bg-[var(--color-accent)] transition-transform"></span>
             <span className="block w-4 h-[1px] bg-current transition-transform"></span>
           </button>
         </div>

         {isMobileMenuOpen && (
           <div className="absolute top-20 left-0 right-0 glass-nav border-t border-[var(--color-border-subtle)] flex flex-col p-4 lg:hidden">
             {SECTIONS.map((section) => (
               <button
                 key={section.id}
                 onClick={() => scrollTo(section.id)}
                 className={`text-left py-4 px-6 text-xs uppercase tracking-widest font-medium border-b border-[var(--color-border-subtle)] last:border-none ${activeSection === section.id ? 'text-[var(--color-accent)]' : 'text-gray-400'}`}
               >
                 {section.label}
               </button>
             ))}
           </div>
         )}
      </nav>

      <main className="relative pt-20">
        <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <FadeIn>
            <span className="section-tag mb-4">Academic E-Portfolio</span>
            <h1 className="font-display text-[16vw] leading-[0.8] lg:text-[130px] xl:text-[160px] text-white font-black tracking-tighter uppercase mb-8">
              Health <span className="text-[var(--color-accent)]">&</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-white">Well-being</span>
            </h1>
          </FadeIn>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <FadeIn delay={0.2} className="lg:col-span-7">
              <p className="text-gray-400 text-base md:text-xl font-light mb-10 leading-relaxed max-w-2xl">
                A comprehensive portfolio exploring stress management, actionable habits, and sustainable well-being routines to maintain balance during demanding academic periods.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="lg:col-span-5 flex lg:justify-end">
              <button onClick={() => scrollTo('intro')} className="cta-btn text-white bg-white/5 border border-[var(--color-border-subtle)]">
                Explore Work <ArrowRight className="w-4 h-4" />
              </button>
            </FadeIn>
          </div>
        </section>

        <section id="intro" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
          <FadeIn>
            <span className="section-tag">01. Context</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">Introduction</h3>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn delay={0.1}>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl font-light text-[var(--color-text-main)] leading-relaxed mb-6">
                  Health is deeply multidimensional. It is intrinsically connected to our emotional balance, nutritional habits, and physical activity.
                </p>
                <p className="text-sm md:text-base text-[var(--color-text-dim)] leading-relaxed">
                  Throughout this journey, my primary focus has been to understand how to build resilient habits that can genuinely withstand high-pressure scenarios. Rather than seeking perfection, this portfolio reflects an emphasis on sustainable, practical modifications that drastically improve the quality of daily life.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="glass-card p-8 md:p-12">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-[var(--color-border-subtle)] pb-4">Key Priorities</h4>
              <ul className="space-y-6">
                {[
                  "Transform erratic sleep into a structured 7-hour nightly routine.",
                  "Integrate small, consistent daily exercises instead of waiting for perfect gym hours.",
                  "Reduce cognitive burn-out through purposeful, intentional rest periods."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-xs text-[var(--color-text-dim)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section id="goals" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
          <FadeIn>
            <span className="section-tag">02. Objectives</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">SMART Goals</h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Activity className="w-5 h-5" />,
                title: "Fitness",
                goal: "Improve cardiovascular endurance by running 3 times a week (30 mins per session) for the next month.",
                specific: "Running 3 times weekly.",
                measurable: "Track 30 minutes per run.",
                achievable: "Gradually increasing stamina from current base.",
                relevant: "Boosts heart health and reduces academic stress.",
                timeBound: "To be evaluated at the end of four weeks.",
                color: "text-[#00d2d3]",
                bg: "bg-[rgba(0,210,211,0.05)]",
                border: "border-[#00d2d3]/20"
              },
              {
                icon: <Utensils className="w-5 h-5" />,
                title: "Nutrition",
                goal: "Increase hydration by drinking 2.5 liters of water daily, tracking intake via a mobile app for two weeks.",
                specific: "Drink 2.5L of water daily.",
                measurable: "Usage of a hydration tracking app.",
                achievable: "Using a marked physical water bottle.",
                relevant: "Improves overall energy baseline and focus.",
                timeBound: "Strict continuous tracking over 14 days.",
                color: "text-[#4fd1c5]",
                bg: "bg-[rgba(79,209,197,0.05)]",
                border: "border-[#4fd1c5]/20"
              },
              {
                icon: <Brain className="w-5 h-5" />,
                title: "Mental Health",
                goal: "Dedicate 10 minutes every single evening before bed to mindfulness meditation to profoundly improve sleep quality.",
                specific: "10 minutes of evening meditation.",
                measurable: "Follow daily guided audio tracks.",
                achievable: "Extremely minimal time commitment.",
                relevant: "Reduces anxiety spikes and aids restorative rest.",
                timeBound: "Review impact after one complete month.",
                color: "text-[#81e6d9]",
                bg: "bg-[rgba(129,230,217,0.05)]",
                border: "border-[#81e6d9]/20"
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="glass-card p-8 flex flex-col transition-all hover:border-[var(--color-accent)]">
                <div className={`w-12 h-12 rounded-full ${item.bg} border ${item.border} flex items-center justify-center mb-6`}>
                  <div className={item.color}>{item.icon}</div>
                </div>
                <h4 className="text-2xl font-display font-black uppercase tracking-tighter text-white mb-4">{item.title}</h4>
                <p className="text-sm font-medium text-[var(--color-text-main)] leading-relaxed mb-8 flex-grow">
                  {item.goal}
                </p>
                <div className="space-y-3 pt-6 border-t border-[var(--color-border-subtle)]">
                  {[
                    { l: 'S', t: item.specific },
                    { l: 'M', t: item.measurable },
                    { l: 'A', t: item.achievable },
                    { l: 'R', t: item.relevant },
                    { l: 'T', t: item.timeBound }
                  ].map((smart, i) => (
                    <div key={i} className="flex gap-3 text-xs">
                      <span className={`font-bold ${item.color} w-3`}>{smart.l}</span>
                      <span className="text-[var(--color-text-dim)]">{smart.t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="fitness" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
          <FadeIn>
            <span className="section-tag">03. Movement</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">Two-Week Fitness</h3>
          </FadeIn>

          <div className="space-y-16">
            {[
              {
                title: "Week 01",
                days: [
                  { day: "MON", activity: "Light Jogging", duration: "30 min", intensity: "Moderate" },
                  { day: "TUE", activity: "Rest / Stretching", duration: "15 min", intensity: "Low" },
                  { day: "WED", activity: "Bodyweight Workout", duration: "45 min", intensity: "High" },
                  { day: "THU", activity: "Brisk Walk", duration: "30 min", intensity: "Low" },
                  { day: "FRI", activity: "Core Exercises", duration: "20 min", intensity: "Moderate" },
                ]
              },
              {
                title: "Week 02",
                days: [
                  { day: "MON", activity: "Interval Running", duration: "30 min", intensity: "High" },
                  { day: "TUE", activity: "Yoga Flow", duration: "30 min", intensity: "Low" },
                  { day: "WED", activity: "Strength Training", duration: "45 min", intensity: "High" },
                  { day: "THU", activity: "Active Recovery Walk", duration: "40 min", intensity: "Low" },
                  { day: "FRI", activity: "HIIT Workout", duration: "25 min", intensity: "Very High" },
                ]
              }
            ].map((week, wIdx) => (
              <div key={wIdx}>
                <FadeIn>
                  <h4 className="text-3xl font-display font-black uppercase tracking-tighter text-white mb-6 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                    <span>{week.title}</span><Target className="w-5 h-5 text-[var(--color-accent)]" />
                  </h4>
                </FadeIn>
                <div className="grid md:grid-cols-5 gap-4 lg:gap-6">
                  {week.days.map((day, dIdx) => (
                    <FadeIn key={dIdx} delay={dIdx * 0.05} className="glass-card p-5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3 pb-3 border-b border-[var(--color-border-subtle)]">{day.day}</div>
                      <h5 className="text-sm font-medium text-white mb-4 leading-snug h-10">{day.activity}</h5>
                      <div className="flex justify-between items-center text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                        <span>Duration</span>
                        <span className="text-white">{day.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">
                        <span>Level</span>
                        <span className="text-white">{day.intensity}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="meal" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
          <FadeIn>
            <span className="section-tag">04. Nutrition</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">Two-Week Nutrition</h3>
          </FadeIn>

          <div className="space-y-16">
            {[
              {
                title: "Week 01",
                days: [
                  { day: "MON", meals: { breakfast: "Oatmeal, fruits", lunch: "Grilled chicken wrap", dinner: "Baked salmon, veggies" } },
                  { day: "TUE", meals: { breakfast: "Greek yogurt, nuts", lunch: "Quinoa salad", dinner: "Lentil soup" } },
                  { day: "WED", meals: { breakfast: "Scrambled eggs", lunch: "Pasta, tomato sauce", dinner: "Chicken stir-fry" } },
                  { day: "THU", meals: { breakfast: "Smoothie bowl", lunch: "Turkey sandwich", dinner: "Beef stew" } },
                  { day: "FRI", meals: { breakfast: "Avocado toast", lunch: "Mixed bean salad", dinner: "Vegetable curry" } },
                ]
              },
              {
                title: "Week 02",
                days: [
                  { day: "MON", meals: { breakfast: "Oatmeal, banana", lunch: "Rice, meat, veg", dinner: "Roti, egg curry" } },
                  { day: "TUE", meals: { breakfast: "Cheese sandwich", lunch: "Chicken salad", dinner: "Rice, dal, veg" } },
                  { day: "WED", meals: { breakfast: "Muesli, chia seeds", lunch: "Rice, egg, veg", dinner: "Roti, chicken, salad" } },
                  { day: "THU", meals: { breakfast: "Boiled egg, tea", lunch: "Rice, grilled chicken", dinner: "Veg soup, toast" } },
                  { day: "FRI", meals: { breakfast: "Oatmeal, milk", lunch: "Rice, meat, salad", dinner: "Roti, milk, egg" } },
                ]
              }
            ].map((week, wIdx) => (
              <div key={wIdx}>
                <FadeIn>
                  <h4 className="text-3xl font-display font-black uppercase tracking-tighter text-white mb-6 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                    <span>{week.title}</span><Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  </h4>
                </FadeIn>
                <div className="grid md:grid-cols-5 gap-4 lg:gap-6">
                  {week.days.map((day, dIdx) => (
                    <FadeIn key={dIdx} delay={dIdx * 0.05} className="glass-card p-5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">{day.day}</div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-[var(--color-text-dim)] mb-1">Breakfast</div>
                          <div className="text-xs text-white leading-relaxed">{day.meals.breakfast}</div>
                        </div>
                        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.05)]"></div>
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-[var(--color-text-dim)] mb-1">Lunch</div>
                          <div className="text-xs text-white leading-relaxed">{day.meals.lunch}</div>
                        </div>
                        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.05)]"></div>
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-[var(--color-text-dim)] mb-1">Dinner</div>
                          <div className="text-xs text-white leading-relaxed">{day.meals.dinner}</div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="interviews" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
          <FadeIn>
            <span className="section-tag">05. Primary Research</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">Interview Learnings</h3>
          </FadeIn>

          <FadeIn delay={0.1} className="glass-card mb-12 p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0">
              <Users className="text-[var(--color-accent)] w-5 h-5" />
            </div>
            <div className="flex-grow pt-1">
              <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-2">Scope & Methodology</h4>
              <p className="text-sm font-light text-[var(--color-text-dim)] leading-relaxed max-w-3xl">
                The purpose of these interviews was to understand how others maintain health during stressful periods, learning from their real experiences, coping habits, and challenges.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                person: "Fatima Al Mansoori",
                strategies: "Short walks, limiting night screen time, music, talking to close friends.",
                challenges: "Academic pressure causing poor sleep.",
                solutions: "Simple study schedule, short breaks.",
                goal: "Improve sleep routine and reduce late-night phone use."
              },
              {
                person: "Omar Al Suwaidi",
                strategies: "Physical activity, light stretching, writing daily tasks.",
                challenges: "Lack of motivation when stressed.",
                solutions: "Start with one small task, practice gratitude.",
                goal: "Drink more water and exercise consistently."
              },
              {
                person: "Dr. Khalid Al Nuaimi",
                strategies: "Preparing simple meals, quiet reflection moments, deep breathing.",
                challenges: "Finding time for self-care during busy periods.",
                solutions: "Planning ahead.",
                goal: "Maintain better work-life balance and avoid burnout."
              }
            ].map((interview, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="glass-card flex flex-col h-full p-6">
                <div className="flex items-center gap-4 mb-6 border-b border-[var(--color-border-subtle)] pb-5">
                  <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[var(--color-accent)]">0{idx+1}</span>
                  </div>
                  <div>
                    <div className="text-[9px] text-[var(--color-text-dim)] uppercase tracking-widest font-bold">Profile</div>
                    <div className="text-lg font-display font-black uppercase tracking-tighter text-white mt-0.5">{interview.person}</div>
                  </div>
                </div>
                <div className="space-y-5 flex-grow">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Key Strategies</span>
                    <p className="text-xs text-[var(--color-text-dim)] font-light leading-relaxed">{interview.strategies}</p>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Challenges & Coping</span>
                    <div className="text-xs text-[var(--color-text-dim)] font-light leading-relaxed bg-[rgba(255,255,255,0.02)] p-3 rounded-md border border-[var(--color-border-subtle)]">
                      <div>{interview.challenges}</div>
                      <div className="my-2 border-l-2 border-[rgba(255,255,255,0.1)] pl-2 text-[11px] italic text-[var(--color-text-main)]">
                        Solution: {interview.solutions}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5 mt-5 border-t border-[var(--color-border-subtle)]">
                   <span className="block text-[9px] font-bold uppercase tracking-widest text-white mb-2">Personal Goal</span>
                   <p className="text-xs font-medium text-[var(--color-accent)] leading-relaxed">{interview.goal}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <FadeIn className="md:col-span-12 lg:col-span-5 glass-card p-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <Lightbulb className="w-4 h-4 text-[var(--color-accent)]" />
                Emerging Themes
              </h4>
              <ul className="space-y-6">
                {[
                  { title: "Stress is Universal", desc: "Common barrier to maintaining health across all peers." },
                  { title: "Simple Habits Excel", desc: "Walking, stretching, and breathing were highly effective." },
                  { title: "Social Support Value", desc: "Sharing worries significantly makes stress manageable." }
                ].map((theme, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs text-white font-bold tracking-wide uppercase mb-1">{theme.title}</h5>
                      <p className="text-[11px] text-[var(--color-text-dim)] leading-relaxed">{theme.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-12 lg:col-span-7 glass-card p-8 border-t border-t-[var(--color-accent)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-[0.03] blur-[60px] rounded-full pointer-events-none" />
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6 relative z-10">Reflection on Data</h4>
              <div className="text-sm font-light text-[var(--color-text-dim)] leading-relaxed space-y-6 relative z-10">
                <p>
                  These interviews provided critical insight: perfection is not required for self-care. Even simple habits make a meaningful difference. I was inspired that despite universal challenges, each individual found practical coping mechanisms quickly.
                </p>
                <div className="pl-6 border-l-4 border-[var(--color-accent)] py-2 bg-[rgba(255,255,255,0.02)] -ml-6 pr-6">
                  <p className="italic text-[var(--color-text-main)] text-lg font-display font-bold">
                    "This reminded me that well-being is not about being perfect; it is about making intentional choices, even in small ways."
                  </p>
                </div>
                <p>
                  This reinforced course principles showing health includes emotional balance and social support—not merely physical metrics. I learned definitively that realistic self-care habits are consistently more sustainable than strict, rigid plans that cannot survive a busy academic week.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="reflections" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)]">
           <FadeIn>
            <span className="section-tag">06. Deep Dives</span>
            <h3 className="font-display text-[50px] md:text-[80px] leading-[0.9] text-white mb-12 font-black uppercase tracking-tighter">Reflective Activities</h3>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Stress Management",
                content: "Stress is a natural response but becomes harmful when constant and unmanaged. It deeply affects sleep, concentration, and physical health, especially during peak responsibility periods.",
                action: "I will create a simple daily routine that strictly includes a short period of relaxation to reduce pressure.",
              },
              {
                icon: <Utensils className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Nutrition",
                content: "Healthy eating focuses on balanced meals from different food groups, actively supporting immunity and sustained energy. I realized my tendency to rely on convenience foods over nutrition.",
                action: "I will consciously include at least one fruit or vegetable in my meals each single day.",
              },
              {
                icon: <Moon className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Sleep and Well-Being",
                content: "Sleep is foundational for mental and physical health. Poor sleep directly lowers my daytime energy and focus, especially when busy. Rest should absolutely not be treated as unimportant.",
                action: "I will deliberately reduce screen time before bed and follow a significantly more regular sleep schedule.",
              },
              {
                icon: <HeartPulse className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Exercise & Daily Health",
                content: "Regular movement strengthens both body and mood over time. I now understand that exercise doesn't require intense gym sessions to be highly effective—even moderate home workflows yield benefits.",
                action: "I will stay consistent with short daily exercise sessions instead of waiting for the 'perfect' intense block of time.",
              },
              {
                icon: <Target className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Mental Health & Self-Care",
                content: "Emotional health requires proactive maintenance, not just reaction to burnout. True self-care includes deep rest, reflection, and supportive relationships. Caring for mental health is a regular habit.",
                action: "I will allocate dedicated time each day to simply pause and reflect instead of staying relentlessly busy.",
              }
            ].map((ref, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="glass-card flex flex-col h-full p-8 group">
                <div className="mb-6 bg-[rgba(255,255,255,0.02)] border border-[var(--color-border-subtle)] w-12 h-12 rounded-full flex items-center justify-center transition-colors group-hover:bg-[rgba(0,210,211,0.05)] group-hover:border-[var(--color-accent)]">
                  {ref.icon}
                </div>
                <h4 className="text-xl font-display font-black uppercase tracking-tighter text-white mb-4">{ref.title}</h4>
                <p className="text-xs font-light text-[var(--color-text-dim)] leading-relaxed mb-6 flex-grow">{ref.content}</p>
                <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                  <span className="block text-[9px] uppercase tracking-widest font-bold text-white mb-2">My Action</span>
                  <p className="text-xs text-[var(--color-accent)] font-medium leading-relaxed">{ref.action}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="conclusion" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--color-border-subtle)] relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
              <span className="section-tag mb-8 text-center">07. Synthesis</span>
              <h3 className="font-display text-[60px] md:text-[100px] text-white mb-16 leading-[0.9] font-black uppercase tracking-tighter">Closing The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#0098A6]">Journey</span></h3>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="glass-card p-10 md:p-14 text-left border-t border-t-[var(--color-accent)] text-sm font-light text-[var(--color-text-dim)] leading-relaxed space-y-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <p className="text-base md:text-lg text-[var(--color-text-main)] mb-2">
                  This e-portfolio fundamentally changed how I approach personal wellness. Before this context, health was narrowly defined by rigorous gym sessions and flawless diets. Through this extended process, I learned that true well-being structurally requires emotional balance, strict sleep hygiene, and critical social support.
                </p>
                <div className="pl-6 border-l border-[var(--color-border-subtle)] space-y-6">
                  <p>
                    The SMART framework forced abstract goals into actionable mechanics. Creating two-week plans demonstrated that consistency always outperforms intensity—and sustainability demands pragmatic flexibility rather than punitive rigidity.
                  </p>
                  <p>
                    The investigative interviews proved heavily resonant, showcasing that academic and personal stress is universally navigated through micro-habits and social structures. The subsequent reflections solidified these externally observed mechanisms into deeply internalized principles.
                  </p>
                </div>
                <div className="pt-8 border-t border-[var(--color-border-subtle)] mt-8">
                  <p className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-relaxed">
                    Overall, this portfolio is not a record of a completed task, but the structural foundation for proactive lifelong health. I leave understanding that well-being is not achieved via perfection, but strictly through consistency, reflection, and realistic commitments.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <footer className="py-12 border-t border-[var(--color-border-subtle)] bg-[rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 w-full">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-[10px] uppercase text-[var(--color-text-dim)] tracking-widest font-bold">
              © {new Date().getFullYear()} Maitha Sulaiman.
            </div>
            <div className="text-[10px] text-[var(--color-text-dim)]">E-Portfolio Submission</div>
          </div>
          <div className="flex gap-4 text-[10px] text-[var(--color-accent)] font-mono mt-4 md:mt-0 tracking-wider">
            <span>ID: M00020396@fchs.ac.ae</span>
            <span className="opacity-50">•</span>
            <span>APR 18, 2026</span>
          </div>
        </footer>

      </main>
    </div>
  );
}
