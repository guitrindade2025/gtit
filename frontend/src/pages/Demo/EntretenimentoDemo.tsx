import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import './EntretenimentoDemo.css';

const EntretenimentoDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [isLoaded, setIsLoaded] = useState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const toggleAudio = () => {
    if (audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.pause();
      } else {
        audioPlayerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.volume = newVolume / 100;
    }
  };

  // Handle audio initialization
  useEffect(() => {
    audioPlayerRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioPlayerRef.current.loop = true;
    audioPlayerRef.current.volume = volume / 100;

    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }
    };
  }, []);

  // Handle custom cursor and canvas animation
  useEffect(() => {
    setIsLoaded(true);
    let animationFrameId: number;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        
        // Music-themed colors
        const colors = ['#8A2BE2', '#FF1493', '#FF00FF', '#1E90FF', '#00CED1'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.05;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }
    
    let particlesArray: Particle[] = [];
    
    // Generate particles when mouse moves
    const generateParticles = (e: MouseEvent) => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create multiple particles at once for a more dramatic effect
      for (let i = 0; i < 3; i++) {
        particlesArray.push(new Particle(x, y));
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
        
        // Remove particles that are too small or out of canvas
        if (particlesArray[i].size <= 0.2 || 
            particlesArray[i].x < 0 || 
            particlesArray[i].x > canvas.width || 
            particlesArray[i].y < 0 || 
            particlesArray[i].y > canvas.height) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize canvas and events
    if (canvas && ctx) {
      // Set canvas to full window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Start animation
      animate();
      
      // Add event listeners
      window.addEventListener('mousemove', generateParticles);
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
    
    // Handle custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
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
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', generateParticles);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
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
    { name: 'HOME', href: '#home' },
    { name: 'EVENTOS', href: '#events' },
    { name: 'GALERIA', href: '#gallery' },
    { name: 'ARTISTAS', href: '#artists' },
    { name: 'CONTATO', href: '#contact' }
  ];

  // Featured events
  const events = [
    { 
      title: 'Festival de Verão', 
      date: '15-18 JUL', 
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      category: 'MÚSICA'
    },
    { 
      title: 'Exposição de Arte Digital', 
      date: '20-30 AGO', 
      image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      category: 'ARTE'
    },
    { 
      title: 'Noite de Stand-up Comedy', 
      date: '10 SET', 
      image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80',
      category: 'COMÉDIA'
    }
  ];

  // Gallery images
  const galleryImages = [
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  ];

  // Artists
  const artists = [
    { name: 'DJ Pulse', photo: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' },
    { name: 'The Echoes', photo: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' },
    { name: 'Aria Luna', photo: 'https://images.unsplash.com/photo-1594131975464-8f5bbe8f6ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' },
    { name: 'Neon Dreams', photo: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden cursor-none">
      {/* Interactive background canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="entertainment-cursor fixed w-8 h-8 rounded-full border-2 border-fuchsia-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
      />

      {/* Audio player UI */}
      <div className="fixed bottom-4 right-4 z-40 bg-black bg-opacity-70 backdrop-blur-md p-4 rounded-xl border border-fuchsia-500/30 flex items-center gap-4">
        <button 
          onClick={toggleAudio}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 transition-colors"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        
        <div className="w-32">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 overflow-x-hidden">
        {/* Header */}
        <header className="py-6 px-6 md:px-12">
          <div className="container mx-auto flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
                PULSE<span className="text-white">ENTERTAINMENT</span>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-white hover:text-fuchsia-400 transition-colors duration-300 font-medium tracking-wider"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block md:hidden text-2xl"
            >
              ☰
            </motion.button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight glitch-text"
                data-text="VIVA A EXPERIÊNCIA"
              >
                VIVA A EXPERIÊNCIA
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 mb-10 max-w-2xl"
              >
                Produções de eventos memoráveis, shows inesquecíveis e experiências 
                imersivas que ultrapassam as fronteiras do entretenimento.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#events"
                  className="neon-button px-8 py-4 font-medium transition-all duration-300 inline-flex items-center justify-center text-lg"
                >
                  PRÓXIMOS EVENTOS
                </a>
                <a 
                  href="#contact"
                  className="border border-fuchsia-500/30 text-white px-8 py-4 font-medium transition-all duration-300 inline-flex items-center justify-center hover:bg-fuchsia-900/20 text-lg"
                >
                  CONTATO
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Animated scroll icon */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="scroll-icon">
              <div className="scroll-icon__dot"></div>
            </div>
          </motion.div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-5xl font-bold mb-4 glitch-subtle" data-text="PRÓXIMOS EVENTOS">PRÓXIMOS EVENTOS</h2>
              <div className="h-1 w-40 bg-gradient-to-r from-fuchsia-500 to-purple-600"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-lg aspect-[3/4]"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-fuchsia-600 text-xs font-bold tracking-wider rounded">
                      {event.category}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-fuchsia-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-white/90 font-medium">{event.date}</span>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-fuchsia-400 font-medium group"
                    >
                      <span className="mr-2">SAIBA MAIS</span>
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="neon-button-sm inline-flex items-center px-8 py-3 font-medium">
                VER TODOS OS EVENTOS
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-6 bg-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-5xl font-bold mb-4 glitch-subtle" data-text="GALERIA">GALERIA</h2>
              <div className="h-1 w-40 bg-gradient-to-r from-fuchsia-500 to-purple-600"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden aspect-square rounded-md cursor-pointer"
                >
                  <img 
                    src={image} 
                    alt="Gallery" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="neon-button-sm inline-flex items-center px-8 py-3 font-medium">
                VER GALERIA COMPLETA
              </a>
            </div>
          </div>
        </section>

        {/* Artists Section */}
        <section id="artists" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-5xl font-bold mb-4 glitch-subtle" data-text="ARTISTAS">ARTISTAS</h2>
              <div className="h-1 w-40 bg-gradient-to-r from-fuchsia-500 to-purple-600"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {artists.map((artist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
                    <img 
                      src={artist.photo} 
                      alt={artist.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex space-x-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                          <i className="fab fa-spotify"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-fuchsia-400 transition-colors">{artist.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-black">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold mb-4 glitch-subtle" data-text="CONTACTO">CONTACTO</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-purple-600 mb-8"></div>
                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  Interessado nos nossos serviços ou gostaria de realizar um evento? 
                  Entre em contacto connosco para transformar a sua visão em realidade.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-fuchsia-400">Email</h4>
                      <p className="text-white/80">contacto@pulseentertainment.pt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-fuchsia-400">Telefone</h4>
                      <p className="text-white/80">+351 91234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-fuchsia-400">Endereço</h4>
                      <p className="text-white/80">Av. da Liberdade, 100, Lisboa</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-white hover:bg-fuchsia-600 transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-fuchsia-500/20">
                  <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
                  
                  <div className="mb-4">
                    <label className="block text-white/80 font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/20 rounded-md focus:outline-none focus:border-fuchsia-500 text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-white/80 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/20 rounded-md focus:outline-none focus:border-fuchsia-500 text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-white/80 font-medium mb-2">Assunto</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/20 rounded-md focus:outline-none focus:border-fuchsia-500 text-white">
                      <option value="">Selecione um assunto</option>
                      <option value="event">Organização de evento</option>
                      <option value="artist">Contratação de artista</option>
                      <option value="partnership">Proposta de parceria</option>
                      <option value="other">Outros</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white/80 font-medium mb-2">Mensagem</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/20 rounded-md focus:outline-none focus:border-fuchsia-500 text-white"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white font-medium rounded-md transition-colors"
                  >
                    ENVIAR MENSAGEM
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-black border-t border-fuchsia-900/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600 mb-2">
                  PULSE<span className="text-white">ENTERTAINMENT</span>
                </div>
                <p className="text-white/60">© 2025 Pulse Entertainment. Todos os direitos reservados.</p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
                {/* Botão removido do footer */}
              </div>
            </div>
          </div>
        </footer>

        {/* Botão fixo para voltar ao Desenvolvimento Web */}
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={handleReturnToWebDevelopment}
            className="bg-fuchsia-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center hover:bg-fuchsia-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar ao Desenvolvimento Web
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntretenimentoDemo;
