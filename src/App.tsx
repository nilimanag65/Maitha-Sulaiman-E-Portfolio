import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import { Heart, Leaf } from 'lucide-react'; // Added icons for footer transition
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SmartGoals } from './components/SmartGoals';
import { FitnessPlan } from './components/FitnessPlan';
import { MealPlan } from './components/MealPlan';
import { FitnessMealReflection } from './components/FitnessMealReflection';
import { Interviews } from './components/Interviews';
import { ReflectiveActivities } from './components/ReflectiveActivities';
import { Conclusion } from './components/Conclusion';

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
  };

  return (
    <div className="min-h-screen relative font-sans text-[var(--color-text-main)]">
      <div className="grid-overlay" />
      <div className="decorative-corner-tl" />
      
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navigation activeSection={activeSection} scrollTo={scrollTo} SECTIONS={SECTIONS} />

      <main className="relative pt-20">
        <Hero scrollTo={scrollTo} />
        <Introduction />
        <SmartGoals />
        <FitnessPlan />
        <MealPlan />
        <FitnessMealReflection />
        <Interviews />
        <ReflectiveActivities />
        <Conclusion />

        <div className="w-full relative flex justify-center items-center mt-12 mb-8 px-6 max-w-7xl mx-auto">
          <div className="w-full h-px bg-[var(--color-border-subtle)]"></div>
          <div className="absolute flex gap-2 rotate-180 bg-[var(--color-bg-dark)] px-4">
            <Leaf className="w-6 h-6 text-[var(--color-accent)] opacity-40" />
          </div>
        </div>

        <footer className="py-12 bg-[var(--color-card-bg)] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 w-full border-t border-[var(--color-border-subtle)]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-xs uppercase text-[var(--color-text-dim)] tracking-widest font-bold">
              © {new Date().getFullYear()} Maitha Sulaiman.
            </div>
            <div className="text-xs text-[var(--color-text-dim)]">E-Portfolio Submission</div>
          </div>
          <div className="flex gap-4 text-xs text-[var(--color-border-strong)] mt-4 md:mt-0 tracking-wider">
            <span>ID: M00020396@fchs.ac.ae</span>
            <span className="opacity-50 text-[var(--color-border-subtle)]">•</span>
            <span>APR 18, 2026</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
