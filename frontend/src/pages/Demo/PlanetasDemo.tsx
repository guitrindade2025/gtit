import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import './PlanetasDemo.css';

const PlanetasDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const cursorRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const trailsContainerRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const cosmicDustRef = useRef<HTMLDivElement>(null);
  const cometsRef = useRef<HTMLDivElement[]>([]);
    // Create an array to keep track of cursor positions for the trail
  const cursorPositionsRef = useRef<{x: number, y: number}[]>([]);
  
  // Cursor size for calculations
  const cursorSize = 25; // Increased base size in pixels

  // Handle custom cursor and parallax effect
  useEffect(() => {
    // Set document body class for styling
    document.body.classList.add('planetas-demo');
    
    // Generate stars - increased count for more immersive feel
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      for (let i = 0; i < 500; i++) { // Further increased star count
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white';
        
        // Random size between 1px and 5px (larger stars for more visibility)
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random opacity for enhanced twinkling effect
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
        
        // Animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
      }
    }
    
    // Generate cosmic dust
    if (cosmicDustRef.current) {
      const dustContainer = cosmicDustRef.current;
      for (let i = 0; i < 100; i++) {
        const dust = document.createElement('div');
        dust.className = 'cosmic-dust absolute';
        
        // Random position
        dust.style.top = `${Math.random() * 100}%`;
        dust.style.left = `${Math.random() * 100}%`;
        
        // Random size for variety
        const size = Math.random() * 2 + 1;
        dust.style.width = `${size}px`;
        dust.style.height = `${size}px`;
        
        // Animation delay and duration
        const duration = Math.random() * 15 + 10;
        dust.style.animation = `dust-float ${duration}s linear infinite`;
        dust.style.animationDelay = `${Math.random() * 10}s`;
        
        dustContainer.appendChild(dust);
      }
    }
    
    // Create fire trail elements - increased for more dramatic effect
    const trailCount = 20; // Increased number of trail elements
    const trailContainer = trailsContainerRef.current;
    
    if (trailContainer) {
      for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        
        // Calculate trail size - gradually smaller as they go further back
        const trailSize = Math.max(cursorSize * (1 - i / trailCount * 0.7), 5); 
        trail.style.width = `${trailSize}px`;
        trail.style.height = `${trailSize}px`;
        
        // Set initial position off-screen
        trail.style.left = '-100px';
        trail.style.top = '-100px';
        
        trail.style.zIndex = `${9950 - i}`; // Make sure trails stack behind cursor
        
        // Add animation with delay based on position in trail
        trail.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        
        // Enhanced color variations for fire trail
        const hue = 30 + i * 2; // Transition from orange to red
        const saturation = 100 - i * 2;
        const lightness = 60 - i * 2;
        trail.style.filter = `blur(${2 + i * 0.15}px) brightness(${1.2 - i * 0.02})`;
        trail.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.8 - i * 0.03})`;
        
        trailContainer.appendChild(trail);
        trailsRef.current.push(trail);
      }
    }
    
    // Create comets that randomly appear
    const createComet = () => {
      if (!document.body.contains(starsRef.current)) return; // Safety check

      const comet = document.createElement('div');
      comet.className = 'comet';
      
      // Random position at the edge of the screen
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY, angle;
      
      switch(side) {
        case 0: // top
          startX = Math.random() * window.innerWidth;
          startY = -50;
          endX = startX + (Math.random() * 400 - 200);
          endY = window.innerHeight + 50;
          angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
          break;
        case 1: // right
          startX = window.innerWidth + 50;
          startY = Math.random() * window.innerHeight;
          endX = -50;
          endY = startY + (Math.random() * 400 - 200);
          angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
          break;
        case 2: // bottom
          startX = Math.random() * window.innerWidth;
          startY = window.innerHeight + 50;
          endX = startX + (Math.random() * 400 - 200);
          endY = -50;
          angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
          break;
        case 3: // left
        default:
          startX = -50;
          startY = Math.random() * window.innerHeight;
          endX = window.innerWidth + 50;
          endY = startY + (Math.random() * 400 - 200);
          angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
          break;
      }
      
      comet.style.left = `${startX}px`;
      comet.style.top = `${startY}px`;
      
      // Set the comet's animation
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      comet.style.opacity = '1';
      comet.style.transition = `transform ${duration}s linear, opacity 0.2s ease-in, opacity 0.5s ease-out ${duration - 0.5}s`;
      
      // Rotate the comet tail
      comet.style.transform = `rotate(${angle}deg)`;
      
      starsRef.current?.appendChild(comet);
      cometsRef.current.push(comet);
      
      // Animate the comet
      setTimeout(() => {
        comet.style.transform = `translate(${endX - startX}px, ${endY - startY}px) rotate(${angle}deg)`;
      }, 10);
      
      // Remove comet after animation
      setTimeout(() => {
        if (comet.parentNode) {
          comet.parentNode.removeChild(comet);
          cometsRef.current = cometsRef.current.filter(c => c !== comet);
        }
      }, duration * 1000 + 600);
    };
    
    // Trigger comets periodically
    const cometInterval = setInterval(() => {
      createComet();
    }, 4000); // A new comet every 4 seconds

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
        // Update cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
      // Store the current position for the trail
      cursorPositionsRef.current.push({ x: clientX, y: clientY });
      
      // Keep only the needed positions for the trail
      if (cursorPositionsRef.current.length > trailsRef.current.length) {
        cursorPositionsRef.current.shift();
      }
      
      // Update trail positions
      trailsRef.current.forEach((trail, i) => {
        const pos = cursorPositionsRef.current[Math.max(0, cursorPositionsRef.current.length - i - 1)];
        if (pos) {
          trail.style.left = `${pos.x}px`;
          trail.style.top = `${pos.y}px`;
          
          // Enhanced opacity and scale effects for the trail
          const opacity = Math.max(0.1, 1 - (i / trailsRef.current.length) * 1.2);
          trail.style.opacity = `${opacity}`;
          
          // Varying scale for more dynamic trail effect
          const scale = Math.max(0.2, 1 - (i / trailsRef.current.length) * 0.7);
          trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      });
      
      // Enhanced parallax effect for planets - different speeds and directions for more depth
      const planets = document.querySelectorAll('.planet');
      planets.forEach((planet, index) => {
        // Each planet has a different parallax speed and direction
        const speed = (index + 1) * 0.03;
        const randomFactor = (index % 2 === 0) ? 1 : -0.8; // Alternate direction for some planets
        
        const x = (window.innerWidth / 2 - clientX) * speed * randomFactor;
        const y = (window.innerHeight / 2 - clientY) * speed * randomFactor;
        
        (planet as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${index * 0.2}deg)`;
      });
      
      // Parallax effect for nebula
      if (nebulaRef.current) {
        const nebulaSpeed = 0.01;
        const x = (window.innerWidth / 2 - clientX) * nebulaSpeed;
        const y = (window.innerHeight / 2 - clientY) * nebulaSpeed;
        
        nebulaRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    // Mobile: scroll-based parallax fallback
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const handleScroll = () => {
      const y = window.scrollY;
      const planets = document.querySelectorAll('.planet');
      planets.forEach((planet, index) => {
        const speed = (index + 1) * 0.05; // slower movement
        (planet as HTMLElement).style.transform = `translateY(${y * speed}px)`;
      });
      if (nebulaRef.current) {
        nebulaRef.current.style.transform = `translateY(${y * 0.02}px)`;
      }
    };

    if (isTouch) {
      // Don't render the custom cursor/trails on touch devices
      document.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    // Inline cursor styles for links
    const links = document.querySelectorAll('a, button');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.body.classList.remove('planetas-demo');
      if (isTouch) {
        document.removeEventListener('scroll', handleScroll as any);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(cometInterval);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      // Clean up trail elements when unmounting
      if (trailsContainerRef.current) {
        while (trailsContainerRef.current.firstChild) {
          trailsContainerRef.current.removeChild(trailsContainerRef.current.firstChild);
        }
      }
      
      // Clean up comets
      cometsRef.current.forEach(comet => {
        if (comet.parentNode) {
          comet.parentNode.removeChild(comet);
        }
      });
    };
  }, []);

  // Função para retornar à página anterior e restaurar posição
  const handleReturnToWebDevelopment = () => {
    navigate('/services/web-development');
    // Delay para permitir que a navegação aconteça antes de restaurar o scroll
    setTimeout(() => {
      restoreScrollPosition();
    }, 100);
  };

  // Navigation items
  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Exploração', href: '#exploration' },
    { name: 'Descobertas', href: '#discoveries' },
    { name: 'Contato', href: '#contact' }
  ];
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Nebula Background Effect */}
      <div ref={nebulaRef} className="nebula fixed inset-0"></div>
      
      {/* Cosmic Dust */}
      <div ref={cosmicDustRef} className="fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="custom-cursor fixed w-20 h-20 pointer-events-none z-50 transition-transform duration-100"
      />
      
      {/* Cursor Trails Container */}
      <div ref={trailsContainerRef} className="fixed inset-0 z-40 pointer-events-none" />

      {/* Stars Background */}
      <div ref={starsRef} className="stars-container fixed inset-0 z-0" />
      
  {/* Animated Planets */}
  <div className="planets-overlay pointer-events-none z-10">
        {/* Mercury - closest to the sun */}
        <div className="planet planet-mercury absolute w-14 h-14 rounded-full top-[18%] left-[12%]" />
        
        {/* Venus */}
        <div className="planet planet-venus absolute w-24 h-24 rounded-full top-[35%] left-[18%]" />
        
        {/* Earth with cloud layer and atmosphere */}
        <div className="planet planet-earth absolute w-28 h-28 rounded-full top-[22%] left-[32%]" />
        
        {/* Mars with polar caps and craters */}
        <div className="planet planet-mars absolute w-20 h-20 rounded-full top-[58%] left-[22%]" />
        
        {/* Jupiter - largest planet with spot and bands */}
        <div className="planet planet-jupiter absolute w-56 h-56 rounded-full bottom-[18%] right-[30%]" />
        
        {/* Saturn with enhanced rings */}
        <div className="planet planet-saturn absolute w-48 h-48 rounded-full top-[26%] right-[12%] overflow-visible">
          <div className="saturn-ring"></div>
        </div>
        
        {/* Uranus - tilted planet with rings */}
        <div className="planet planet-uranus absolute w-32 h-32 rounded-full bottom-[35%] left-[40%]" />
        
        {/* Neptune - blue gas giant */}
        <div className="planet planet-neptune absolute w-36 h-36 rounded-full top-[45%] right-[38%]" />
        
        {/* Pluto - dwarf planet */}
        <div className="planet planet-pluto absolute w-10 h-10 rounded-full top-[12%] right-[28%]" />
        
        {/* Asteroids */}
        <div className="asteroid absolute w-6 h-8 top-[65%] left-[8%]"></div>
        <div className="asteroid absolute w-5 h-7 top-[15%] right-[45%]"></div>
        <div className="asteroid absolute w-8 h-6 bottom-[25%] left-[55%]"></div>
        <div className="asteroid absolute w-4 h-5 top-[50%] right-[8%]"></div>
        <div className="asteroid absolute w-7 h-5 bottom-[12%] left-[28%]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div 
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold tracking-tight"
            >
              Universo<span className="text-blue-400">Tech</span>
            </motion.div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-white/80 hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="block md:hidden text-2xl"
          >
            ☰
          </motion.button>
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words"
            >
              Explore o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Universo</span> Digital
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-xl text-white/70 mb-10"
            >
              Navegue pelas constelações digitais e descubra novos horizontes para a sua marca. 
              Criamos experiências web imersivas que transcendem o comum.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Iniciar Exploração
              </a>
              <a 
                href="#discoveries"
                className="border border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center bg-white/5 hover:bg-white/10"
              >
                Ver Descobertas
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words">
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Jornada</span> Cósmica
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Assim como os planetas orbitam em harmonia no sistema solar, 
                criamos ecossistemas digitais perfeitamente sincronizados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-blue-400">O Sistema Solar Digital</h3>
                <p className="text-white/80 leading-relaxed">
                  Cada projeto é como um sistema planetário único. O seu site é o centro gravitacional 
                  que atrai e mantém os usuários em órbita, enquanto as funcionalidades orbitam 
                  harmoniosamente ao redor da experiência principal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-white/90">Design responsivo como a gravidade universal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-white/90">Performance otimizada à velocidade da luz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <span className="text-white/90">SEO que alcança galáxias distantes</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">Tecnologias do Futuro</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">React & Next.js</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">TypeScript</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-purple-400"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Cloud Computing</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-pink-400"></div>
                        ))}
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exploration Section */}
        <section id="exploration" className="py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Exploração</span> Planetária
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Cada planeta representa uma área de especialização em desenvolvimento web.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  planet: "Terra",
                  specialty: "Frontend Development",
                  description: "O nosso lar digital, onde criamos interfaces intuitivas e experiências centradas no usuário.",
                  features: ["React", "Vue.js", "Angular", "UI/UX Design"],
                  color: "from-blue-500 to-green-500"
                },
                {
                  planet: "Marte",
                  specialty: "Backend Development",
                  description: "A fronteira vermelha da tecnologia, onde construímos a infraestrutura robusta dos seus projetos.",
                  features: ["Node.js", "Python", "Java", "Databases"],
                  color: "from-red-500 to-orange-500"
                },
                {
                  planet: "Júpiter",
                  specialty: "Cloud Solutions",
                  description: "O gigante gasoso da computação em nuvem, oferecendo escalabilidade infinita.",
                  features: ["AWS", "Azure", "Docker", "Kubernetes"],
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mb-4 mx-auto`}></div>
                  <h3 className="text-2xl font-bold text-center mb-2">{item.planet}</h3>
                  <h4 className="text-lg font-semibold text-blue-400 text-center mb-4">{item.specialty}</h4>
                  <p className="text-white/70 text-center mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Discoveries Section */}
        <section id="discoveries" className="py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words">
                Últimas <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Descobertas</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Avanços tecnológicos que estamos implementando nos nossos projetos.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Inteligência Artificial Integrada",
                  description: "Implementamos chatbots inteligentes e análise preditiva para melhorar a experiência do usuário.",
                  icon: "🤖",
                  technologies: ["OpenAI", "TensorFlow", "Machine Learning"]
                },
                {
                  title: "Realidade Aumentada Web",
                  description: "Criamos experiências imersivas usando WebXR para visualização de produtos em 3D.",
                  icon: "🥽",
                  technologies: ["WebXR", "Three.js", "AR.js"]
                },
                {
                  title: "Performance Quântica",
                  description: "Otimizações avançadas que fazem os sites carregarem instantaneamente.",
                  icon: "⚡",
                  technologies: ["Vite", "Service Workers", "Edge Computing"]
                },
                {
                  title: "Blockchain Integration",
                  description: "Soluções descentralizadas para autenticação e transações seguras.",
                  icon: "⛓️",
                  technologies: ["Web3", "Ethereum", "Smart Contracts"]
                }
              ].map((discovery, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{discovery.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">{discovery.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{discovery.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {discovery.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Decolar</span>?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Junte-se a nós nesta jornada espacial e transforme as suas ideias 
                em realidades digitais que transcendem os limites do possível.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contato@gtit.pt"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  Iniciar Missão
                </a>
                <a 
                  href="tel:+351123456789"
                  className="border border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center bg-white/5 hover:bg-white/10 gap-2"
                >
                  <span>📡</span>
                  Contacto Direto
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/60 mb-4">Siga nossa jornada pelo cosmos digital</p>
                <div className="flex justify-center gap-6">
                  {['🌐', '📱', '💻', '🛰️'].map((icon, index) => (
                    <div key={index} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <span className="text-xl">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Back to Web Development Page */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={handleReturnToWebDevelopment}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Voltar ao Desenvolvimento Web</span>
        </button>
      </div>
    </div>
  );
};

export default PlanetasDemo;
