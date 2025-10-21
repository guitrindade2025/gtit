import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  minimal?: boolean;
  primaryAriaLabel?: string;
  secondaryAriaLabel?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = '/assets/images/cloud-technologies-blue-cloud-technology-background-digital-technology-background-network-technology-blue-line-cloud.jpg',
  minimal = false,
  primaryAriaLabel,
  secondaryAriaLabel,
}: HeroSectionProps) => {  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstRender = useRef(true);
  
  // Divide title and subtitle for word-by-word animations
  const [titleParts, setTitleParts] = useState<string[]>([]);
  const [subtitleParts, setSubtitleParts] = useState<string[]>([]);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Smoothed animation values
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 65, damping: 25 });
  const bgYPosition = useTransform(smoothProgress, [0, 1], ['0%', '35%']);
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.4], [0, -60]);
  
  // Split text for animations
  useEffect(() => {
    if (title && subtitle) {
      setTitleParts(title.split(' '));
      setSubtitleParts(subtitle.split(' '));
    }
  }, [title, subtitle]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!sectionRef.current || !headingRef.current) return;
      
      // Interactive glow effect for heading
      const rect = headingRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      headingRef.current.style.setProperty('--x', `${x}px`);
      headingRef.current.style.setProperty('--y', `${y}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Initial load animation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTimeout(() => setIsLoaded(true), 300);
    }
  }, []);

  // Smooth scroll to anchor when clicking a CTA pointing to current page hash
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    const [pathname, hash] = link.split('#');
    if (hash && window.location.pathname === pathname) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }, 80);
    }
  };
  // Render hero content with enhanced corporate design
  const renderHeroContent = () => {
    return (
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity: textOpacity, y: textY }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center relative">
            {/* Enhanced corporate badge at the top */}
            {!minimal && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="hidden md:flex items-center justify-center mb-8 mx-auto"
            >
              <div className="h-[1px] w-[40px] bg-gradient-to-r from-transparent to-primary/70"></div>
              <div className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary/90 font-medium letter-spacing-wider">
                Soluções Empresariais
              </div>
              <div className="h-[1px] w-[40px] bg-gradient-to-l from-transparent to-primary/70"></div>
            </motion.div>
            )}
            
            {/* Executive geometric accent before title */}
            {!minimal && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isMobile ? 60 : 120, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent mb-10 md:mx-auto"
            />
            )}
            
            {/* Title with sophisticated word-by-word animation */}
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight relative"
            >
              {titleParts.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2 md:mr-4 relative"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.8 + index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  {word}{' '}
                </motion.span>
              ))}
              {/* Elegant underline */}
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.8 }}
                className="absolute -bottom-2 left-0 md:left-[10%] right-0 md:right-[10%] h-[1.5px] bg-gradient-to-r from-transparent via-primary/70 to-transparent origin-left"
              />
            </h1>
            
            {/* Enhanced subtitle with text reveal (render as h2 for semantics) */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1, delay: 1.7 }}
              className="relative overflow-hidden md:mx-auto"
            >
              <motion.h2
                className="text-xl md:text-2xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed"
              >
                {subtitleParts.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.8 + index * 0.04,
                      ease: "easeOut"
                    }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>
            
            {/* Enhanced CTAs with executive styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="flex flex-col sm:flex-row gap-5 sm:gap-8 md:justify-center"
            >
              {/* Primary CTA with premium styling */}
              <Link
                to={ctaLink}
                aria-label={primaryAriaLabel ?? ctaText}
                onClick={(e) => handleAnchorClick(e, ctaLink)}
                className="group relative px-10 py-4 bg-primary text-white overflow-hidden rounded-sm font-medium tracking-wide border border-primary/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {ctaText}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 duration-700 bg-[radial-gradient(circle_at_var(--x)_var(--y),_white,_transparent_55%)]" />
              </Link>
              
              {/* Secondary CTA with elegant styling */}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  aria-label={secondaryAriaLabel ?? secondaryCtaText}
                  onClick={(e) => handleAnchorClick(e, secondaryCtaLink)}
                  className="group relative px-10 py-4 border border-white/40 text-white overflow-hidden rounded-sm font-medium tracking-wide backdrop-blur-sm"
                >
                  <span className="relative z-10">{secondaryCtaText}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ opacity: 0.08 }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 duration-700 bg-[radial-gradient(circle_at_var(--x)_var(--y),_white,_transparent_55%)]" />
                </Link>
              )}
            </motion.div>
          </div>
        
          {/* Enhanced executive corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="absolute top-0 left-0 w-full h-[2px] bg-primary/60 origin-left"
            />
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 2.3 }}
              className="absolute top-0 left-0 w-[2px] h-full bg-primary/60 origin-top"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="absolute top-[8px] left-[8px] w-2 h-2 bg-primary/80 rounded-full"
            />
          </div>
          
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-32 md:h-32">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="absolute bottom-0 right-0 w-full h-[2px] bg-primary/60 origin-right"
            />
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute bottom-0 right-0 w-[2px] h-full bg-primary/60 origin-bottom"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="absolute bottom-[8px] right-[8px] w-2 h-2 bg-primary/80 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-[700px] h-[90vh] md:h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y: bgYPosition,
          backgroundSize: '105%', // Slightly larger to allow movement without showing edges
          filter: 'brightness(0.8) contrast(1.1)' // More professional look
        }}
      />
      
      {/* Enhanced gradient overlay for more depth and professionalism */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080f] via-[#051529]/95 to-[#050d18]" />
      
      {/* Minimal mode: hide particle effects */}
      {!minimal && (
        <div className="absolute inset-0 opacity-30">
          <div className="particle-container">
            {[...Array(15)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full bg-blue-400/50"
                animate={{ y: ['0%', '100%'], opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
                transition={{ duration: Math.random() * 8 + 12, repeat: Infinity, delay: Math.random() * 15, ease: 'linear' }}
                style={{ width: Math.random() * 4 + 1 + 'px', height: Math.random() * 4 + 1 + 'px', left: Math.random() * 100 + '%', top: -10, filter: 'blur(1px)' }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Minimal mode: hide grid lines */}
      {!minimal && (
        <div className="absolute inset-0">
          <div className="w-full h-full opacity-8" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '5vw 5vw'
          }} />
        </div>
      )}
      
      {/* Minimal mode: hide extra accent lines */}
      {!minimal && (
        <>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[35%] w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform origin-left"
          />
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute top-[65%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent transform origin-left"
          />
        </>
      )}

      {/* Render content */}
      {renderHeroContent()}

  {/* Enhanced scroll indicator - hidden in minimal mode */}
  {!isMobile && !minimal && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div 
            className="w-[1px] h-14 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-white/60 text-xs uppercase tracking-widest mt-3 font-light">Explore</span>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HeroSection;
