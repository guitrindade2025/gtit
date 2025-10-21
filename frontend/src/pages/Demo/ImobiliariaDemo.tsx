import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import { FaBed, FaBath, FaRuler, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './ImobiliariaDemo.css';

const ImobiliariaDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    type: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
  });

  const properties = [
    {
      id: 1,
      title: 'Apartamento Moderno',
  location: 'Centro Urbano',
      price: '€ 750.000',
      image: '/assets/images/portfolio/modern-apartment.jpg',
      type: 'Apartamento',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      featured: true,
    },
    {
      id: 2,
      title: 'Moradia com Jardim',
  location: 'Zona Residencial',
      price: '€ 1.200.000',
      image: '/assets/images/portfolio/garden-house.jpg',
      type: 'Casa',
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      featured: false,
    },
    {
      id: 3,
      title: 'Penthouse Duplex',
  location: 'Bairro Moderno',
      price: '€ 2.500.000',
      image: '/assets/images/portfolio/penthouse.jpg',
      type: 'Apartamento',
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
      featured: true,
    },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Custom cursor implementation
  useEffect(() => {
    // Set document body class for styling
    document.body.classList.add('imobiliaria-theme');
    
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
        cursorRef.current.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.classList.remove('imobiliaria-theme');
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

  return (
    <div className="imobiliaria-demo">
      {/* Orange custom cursor */}
      <div ref={cursorRef} className="imobiliaria-cursor" />
      
      {/* Navigation */}
      <nav className="imobiliaria-nav fixed w-full z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleReturnToWebDevelopment} className="text-2xl font-bold text-amber-600 cursor-pointer">
              ImobPro
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
              {['Início', 'Imóveis', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="imobiliaria-nav-link text-gray-600 hover:text-amber-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            {['Início', 'Imóveis', 'Sobre', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="imobiliaria-hero pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Encontre o seu novo espaço
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-12 opacity-90"
            >
              As melhores opções de imóveis para si, com condições vantajosas e atendimento personalizado.
            </motion.p>

            {/* Search Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="search-filters bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  name="type"
                  value={searchFilters.type}
                  onChange={handleFilterChange}
                  className="search-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700"
                >
                  <option value="all">Tipo de Imóvel</option>
                  <option value="apartment">Apartamento</option>
                  <option value="house">Casa</option>
                  <option value="commercial">Comercial</option>
                </select>

                <input
                  type="text"
                  name="minPrice"
                  value={searchFilters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Preço Mínimo"
                  className="search-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700"
                />

                <input
                  type="text"
                  name="maxPrice"
                  value={searchFilters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Preço Máximo"
                  className="search-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700"
                />

                <select
                  name="bedrooms"
                  value={searchFilters.bedrooms}
                  onChange={handleFilterChange}
                  className="search-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700"
                >
                  <option value="any">Quartos</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <button className="mt-4 w-full md:w-auto px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <FaSearch />
                Buscar Imóveis
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Imóveis em Destaque</h2>
            <p className="text-lg text-gray-600">
              Confira nossa seleção de imóveis premium em localizações privilegiadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="property-card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  {property.featured && (
                    <span className="property-badge px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-md">
                      Destaque
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                      <p className="text-gray-600 flex items-center gap-1 mb-2">
                        <FaMapMarkerAlt className="text-amber-600" />
                        {property.location}
                      </p>
                    </div>
                    <p className="text-xl font-bold text-amber-600">{property.price}</p>
                  </div>

                  <div className="property-features">
                    <div className="property-feature">
                      <FaBed />
                      <span>{property.bedrooms} Quartos</span>
                    </div>
                    <div className="property-feature">
                      <FaBath />
                      <span>{property.bathrooms} Casas de Banho</span>
                    </div>
                    <div className="property-feature">
                      <FaRuler />
                      <span>{property.area}m²</span>
                    </div>
                  </div>

                  <button className="mt-4 w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300">
                    Ver Detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Return to Web Development */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={handleReturnToWebDevelopment}
          className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300"
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
        className="fixed pointer-events-none w-12 h-12 rounded-full bg-amber-600 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </div>
  );
};

export default ImobiliariaDemo;
