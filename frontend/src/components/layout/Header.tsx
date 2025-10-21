import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiX, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaCode, FaMobile } from 'react-icons/fa';
import { useLayout } from '../../context/LayoutContext';

// Header component with responsive design
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useLayout(); // Get scrolled state from context
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
  { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Contacto', path: '/contact' }
  ];
  
  // Service links for the dropdown/quick access
  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development', icon: <FaCode className="mr-2" /> },
    { name: 'Mobile Apps', path: '/services/mobile-apps', icon: <FaMobile className="mr-2" /> },
  ];
  
  // Check if current path matches link path
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out no-select ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center text-2xl font-bold text-primary" aria-label="Ir para a página inicial">
            {/* Container para integrar o logo com o header */}
            <div className="flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm p-1.5 md:p-2 transition-all duration-300 hover:bg-white/20">
              <img
                src="/assets/images/logo.png"
                alt="GTIT Logo"
                className="h-10 md:h-12 rounded-md drop-shadow-md border border-white/10 bg-white/0"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        </motion.div>
          {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-base font-medium transition-all px-3 py-2 rounded-md ${
                    isActive(link.path)
                      ? 'text-primary font-semibold bg-primary/10'
                      : scrolled 
                        ? 'text-secondary hover:text-primary hover:bg-primary/5' 
                        : 'text-gray-800 font-semibold hover:text-primary hover:bg-white/20'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            
            {/* Service Quick Links */}
            {serviceLinks.map((link, index) => (
              <motion.li
                key={`service-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (navLinks.length + index) * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-base font-medium flex items-center px-3 py-2 rounded-md transition-all shadow-md ${
                    isActive(link.path)
                      ? 'bg-primary text-white border-2 border-primary'
                      : scrolled 
                        ? 'bg-white border-2 border-gray-600 text-secondary hover:border-primary hover:text-primary hover:bg-primary/5'
                        : 'bg-white border-2 border-gray-700 text-secondary hover:border-primary hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              </motion.li>
            ))}
            
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + serviceLinks.length) * 0.1 }}
            >
              <Link 
                to="/contact" 
                className="px-5 py-2.5 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Fale Connosco
              </Link>
            </motion.li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-5">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 text-base font-medium rounded-md transition-colors ${
                      isActive(link.path)
                        ? 'text-primary font-semibold bg-primary/10'
                        : 'text-secondary hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block px-5 py-3 rounded-md bg-primary text-white text-center font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md mt-3"
                  onClick={() => setIsOpen(false)}
                >
                  Fale Connosco
                </Link>
              </li>
              
              {/* Service links in mobile menu */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className={`flex items-center py-2 text-base transition-colors ${
                        isActive(service.path)
                          ? 'text-primary font-semibold'
                          : 'text-secondary hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      {service.name}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
