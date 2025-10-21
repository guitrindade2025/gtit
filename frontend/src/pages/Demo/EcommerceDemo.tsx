import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import './EcommerceDemo.css';

const EcommerceDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const cursorRef = useRef<HTMLDivElement>(null);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [isLoaded, setIsLoaded] = useState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // Product interface
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    description: string;
  }

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
  name: 'Garrafa Reutilizável Ecológica',
  price: 24.99,
  image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
  category: 'lifestyle',
  rating: 4.5,
  description: 'Garrafa em aço inoxidável ecológica, mantém as suas bebidas frias por 24 horas ou quentes por 12 horas.'
    },
    {
      id: 2,
  name: 'Auscultadores Bluetooth Sem Fios',
  price: 129.99,
  image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
  category: 'electronics',
  rating: 4.8,
  description: 'Qualidade de som premium, cancelamento ativo de ruído e autonomia de 30 horas.'
    },
    {
      id: 3,
  name: 'T-shirt de Algodão Orgânico',
  price: 34.99,
  image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
  category: 'clothing',
  rating: 4.3,
  description: 'T-shirt macia e confortável em algodão orgânico, ideal para o dia a dia.'
    },
    {
      id: 4,
  name: 'Candeeiro Minimalista de Secretária',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
  category: 'home',
  rating: 4.6,
  description: 'Candeeiro LED moderno com brilho e temperatura de cor ajustáveis.'
    },
    {
      id: 5,
  name: 'Coluna Inteligente Bluetooth',
  price: 89.99,
  image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab',
  category: 'electronics',
  rating: 4.7,
  description: 'Coluna inteligente com controlo por voz, som premium e integração com casa inteligente.'
    },
    {
      id: 6,
  name: 'Carteira em Pele',
  price: 59.99,
  image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
  category: 'accessories',
  rating: 4.4,
  description: 'Carteira artesanal em pele genuína, com proteção RFID e vários compartimentos para cartões.'
    },
  ];

  // Handle page load effect
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    
    // Set document body class for styling
    document.body.classList.add('ecommerce-theme');
      // Custom cursor implementation with ultra-responsive positioning
    let lastX = 0;
    let lastY = 0;
    let rafId: number | null = null;
    
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${lastX}px, ${lastY}px)`;
      }
      rafId = null;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      
      if (!rafId) {
        rafId = requestAnimationFrame(updateCursorPosition);
      }
    };
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('ecommerce-cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('ecommerce-cursor-hover');
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add smooth scroll behavior to all anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);    return () => {
      document.body.classList.remove('ecommerce-theme');
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Cancel any pending animation frames
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
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

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Handle add to cart
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 3000);
    
    if (selectedProduct) {
      setSelectedProduct(null);
    }
  };

  // Stars rating component
  const RatingStars = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {halfStar && (
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  return (
    <div 
      ref={mainRef}
      className="min-h-screen bg-white text-gray-800 ecommerce-demo"
    >
      {/* Green money stack cursor */}      <div ref={cursorRef} className="ecommerce-cursor" style={{ willChange: 'transform' }}>
        <div className="money-bill"></div>
        <div className="money-bill"></div>
        <div className="money-bill"></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={handleReturnToWebDevelopment} className="flex items-center cursor-pointer">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <div className="w-10 h-10 bg-teal-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
                  e<span className="text-xs">shop</span>
                </div>
                <span className="text-xl font-bold text-gray-800">eComm<span className="text-teal-600">Store</span></span>
              </motion.div>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { key: 'home', label: 'Início' },
                { key: 'shop', label: 'Loja' },
                { key: 'categories', label: 'Categorias' },
                { key: 'sale', label: 'Promoções' },
                { key: 'about', label: 'Sobre' }
              ].map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={`#${item.key}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
            </nav>

            {/* User actions */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <button 
                  onClick={() => setShowCart(!showCart)}
                  className="p-2 text-gray-700 hover:text-teal-600 transition-colors relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                {/* Mini Cart */}
                <AnimatePresence>
                  {showCart && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 p-4"
                    >
                      <h3 className="font-medium mb-2">Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h3>
                      {cartCount > 0 ? (
                        <>
                          <div className="max-h-60 overflow-y-auto">
                            {Array(cartCount).fill(0).map((_, i) => (
                              <div key={i} className="flex items-center py-2 border-b">
                                <div className="w-12 h-12 bg-gray-100 rounded mr-3"></div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium">Product {i + 1}</p>
                                  <p className="text-xs text-gray-500">1 × €29.99</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between mb-2">
                              <span>Total:</span>
                              <span className="font-bold">€{(cartCount * 29.99).toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                              Checkout
                            </button>
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500">Your cart is empty</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-2 text-gray-700 hover:text-teal-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-2 text-gray-700 hover:text-teal-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Coleção de Verão <br/>
                <span className="text-yellow-300">2025</span>
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Descubra as nossas novidades e renove o seu estilo com a coleção exclusiva de verão.
              </p>
              <button className="px-8 py-3 bg-white text-teal-600 font-medium rounded-md hover:bg-opacity-90 transition shadow-md">
                Comprar Agora
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative h-80 md:h-96 w-full">
                <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg transform -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b" 
                    alt="Summer Collection" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section id="shop" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Compre por Categoria
          </motion.h2>
          
          <div className="flex flex-wrap justify-center mb-8">
            {[
              { key: 'all', label: 'Todas' },
              { key: 'electronics', label: 'Eletrónica' },
              { key: 'clothing', label: 'Vestuário' },
              { key: 'home', label: 'Casa' },
              { key: 'lifestyle', label: 'Estilo de Vida' },
              { key: 'accessories', label: 'Acessórios' }
            ].map((category, index) => (
              <motion.button
                key={category.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-5 py-2 m-2 rounded-full transition-all ${
                  activeCategory === category.key
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={`${product.image}?w=600&h=400&fit=crop`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-teal-600 px-4 py-2 rounded-full font-medium translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Quick View
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <span className="font-bold text-teal-600">€{product.price}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <RatingStars rating={product.rating} />
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="w-full py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <img 
                      src={`${selectedProduct.image}?w=800&h=600&fit=crop`}
                      alt={selectedProduct.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <div className="md:w-1/2 md:pl-6">
                    <div className="flex items-center mb-3">
                      <RatingStars rating={selectedProduct.rating} />
                      <span className="text-sm text-gray-500 ml-2">({selectedProduct.rating})</span>
                    </div>
                    
                    <p className="text-2xl font-bold text-teal-600 mb-4">
                      €{selectedProduct.price}
                    </p>
                    
                    <p className="text-gray-600 mb-6">
                      {selectedProduct.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Selecionar Quantidade</h3>
                      <div className="flex items-center border rounded w-32">
                        <button className="px-3 py-1 border-r">-</button>
                        <input type="text" value="1" readOnly className="w-full text-center py-1" />
                        <button className="px-3 py-1 border-l">+</button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition mb-4 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Adicionar ao Carrinho
                    </button>
                    
                    <button className="w-full py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Web Development Page */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={handleReturnToWebDevelopment}
          className="bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center hover:bg-teal-700 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar ao Desenvolvimento Web
        </button>
      </div>

      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-teal-600 rounded-full pointer-events-none transform translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
      ></div>
    </div>
  );
};

export default EcommerceDemo;
