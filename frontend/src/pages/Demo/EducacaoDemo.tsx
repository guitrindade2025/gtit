import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import { FaGraduationCap, FaBook, FaUsers, FaStar } from 'react-icons/fa';
import './EducacaoDemo.css';

const EducacaoDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom cursor implementation
  useEffect(() => {
    // Set document body class for styling
    document.body.classList.add('educacao-theme');
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('educacao-cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('educacao-cursor-hover');
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.classList.remove('educacao-theme');
      document.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
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

  const courses = [
    {
      title: 'Desenvolvimento Web Full Stack',
      duration: '6 meses',
      level: 'Intermediário',
      students: 1250,
      rating: 4.8,
      progress: 85,
    },
    {
      title: 'Data Science & Analytics',
      duration: '8 meses',
      level: 'Avançado',
      students: 850,
      rating: 4.9,
      progress: 92,
    },
    {
      title: 'Design UI/UX',
      duration: '4 meses',
      level: 'Iniciante',
      students: 2100,
      rating: 4.7,
      progress: 78,
    },
  ];

  const stats = [
    { icon: <FaGraduationCap />, value: '10mil+', label: 'Alunos' },
    { icon: <FaBook />, value: '100+', label: 'Cursos' },
    { icon: <FaUsers />, value: '50+', label: 'Professores' },
    { icon: <FaStar />, value: '4.8', label: 'Avaliação Média' },
  ];
  return (
    <div className="educacao-demo">
      {/* Pink custom cursor */}
      <div ref={cursorRef} className="educacao-cursor" />
      
      {/* Navigation */}
      <nav className="educacao-nav fixed w-full z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleReturnToWebDevelopment} className="text-2xl font-bold text-pink-600 cursor-pointer">
              EduTech
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Cursos', 'Professores', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="educacao-nav-link text-gray-600 hover:text-pink-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            {['Cursos', 'Professores', 'Sobre', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="educacao-hero pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transforme o seu Futuro com Educação Digital
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              Cursos online de alta qualidade com certificação reconhecida pelo mercado português.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#cursos"
                className="px-8 py-3 bg-white text-pink-600 hover:bg-opacity-90 transition-colors duration-300 rounded-md font-medium"
              >
                Ver Cursos
              </a>
              <a                href="#contacto"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-pink-600 transition-colors duration-300 rounded-md font-medium"
              >
                Contacte-nos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card p-6 rounded-lg text-center"
              >
                <div className="text-pink-600 text-3xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos em Destaque</h2>
            <p className="text-lg text-gray-600">
              Explore nossos cursos mais populares e inicie sua jornada de aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="curso-card bg-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">{course.duration}</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-gray-400" />
                    <span className="text-gray-600">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-600">{course.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Progresso do curso</div>
                  <div className="progress-bar">
                    <div
                      className="progress-value"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Começar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Return to Web Development */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={handleReturnToWebDevelopment}
          className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Voltar ao Desenvolvimento Web</span>
        </button>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none w-10 h-10 rounded-full bg-pink-600 transform -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: 'difference' }}
      ></div>
    </div>
  );
};

export default EducacaoDemo;
