import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import './TecnologiaDemo.css';

const TecnologiaDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  // Generate particles for the hero section background
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  // Função para retornar à página anterior e restaurar posição
  const handleReturnToWebDevelopment = () => {
    navigate('/services/web-development');
    // Delay para permitir que a navegação aconteça antes de restaurar o scroll
    setTimeout(() => {
      restoreScrollPosition();
    }, 100);
  };

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Aplicações web escaláveis e responsivas usando as mais recentes tecnologias.',
      features: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    },
    {
      title: 'DevOps & Cloud',
      description: 'Soluções de infraestrutura em nuvem e automação de processos.',
      features: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      title: 'Segurança Digital',
      description: 'Proteja os vossos dados e sistemas com as nossas soluções de segurança.',
      features: ['Pentesting', 'Criptografia', 'Firewall', 'SOC'],
    },
  ];

  return (
    <div className="tecnologia-demo">
      {/* Navigation */}
      <nav className="tecnologia-nav fixed w-full z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleReturnToWebDevelopment} className="text-2xl font-bold gradient-text cursor-pointer">
              GTIT
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
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
              {['Soluções', 'Tecnologias', 'Cases', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="tecnologia-nav-link text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            {['Soluções', 'Tecnologias', 'Cases', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="tecnologia-hero min-h-screen flex items-center relative">
        {/* Animated Particles */}
        <div className="hero-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="hero-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transformando Ideias em <span className="gradient-text">Inovação Digital</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-12 text-gray-300"
            >
              Soluções tecnológicas avançadas para impulsionar o vosso negócio no mundo digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#soluções"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
              >
                As Nossas Soluções
              </a>
              <a
                href="#cases"
                className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-md transition-colors duration-300"
              >
                Ver Cases
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="soluções" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              As Nossas <span className="gradient-text">Soluções</span>
            </h2>
            <p className="text-lg text-gray-400">
              Tecnologias inovadoras para cada necessidade do vosso negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tech-card p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="code-window">
              <div className="code-header">
                <div className="window-dot dot-red"></div>
                <div className="window-dot dot-yellow"></div>
                <div className="window-dot dot-green"></div>
              </div>
              <div className="code-content text-blue-400">
                <pre>
                  <code>
{`// Exemplo de código moderno
import { useState, useEffect } from 'react';

const TechSolution = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/data');
      setData(response.data);
    } catch (error) {
      // Handle error silently
    }
  };

  return (
    <div className="app">
      {/* Seu código aqui */}
    </div>
  );
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Web Development */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={handleReturnToWebDevelopment}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
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

export default TecnologiaDemo;
