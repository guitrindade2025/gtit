import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 120, label: 'Projetos Entregues', prefix: '+', aria: '+120' },
  { value: 95, label: 'Taxa de Satisfação', suffix: '%', aria: '95%' },
  { value: 10, label: 'Anos de Experiência', suffix: '+', aria: '10+' },
  { value: 250, label: 'Clientes Satisfeitos', prefix: '+', aria: '+250' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function useCounterUp(target: number, start: boolean, duration = 1200) {
  const [count, setCount] = useState(start ? target : 0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    }
    requestAnimationFrame(step);
    return () => setCount(target);
  }, [start, target, duration]);
  return count;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!inView) setInView(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [inView]);
  return (
    <motion.div
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
    >
      {stats.map((stat) => {
        const value = useCounterUp(stat.value, inView);
        return (
          <motion.div key={stat.label} variants={itemVariants} className="p-6">
            <h3 className="text-4xl font-bold mb-2" aria-label={stat.aria}>
              {stat.prefix || ''}{value}{stat.suffix || ''}
            </h3>
            <p className="text-lg opacity-80">{stat.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
