import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaHandshake, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Function to handle anchor navigation
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const [pathname, hash] = path.split('#');
    
    // If we're already on the target page and there's a hash, always scroll to it
    if (location.pathname === pathname && hash) {
      e.preventDefault();
      
      // Small delay to ensure the page is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // If element doesn't exist, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  // Footer links columns
  const footerLinks = [
    {
      title: 'Sobre Nós',
      links: [
        { name: 'A Nossa História', path: '/about#historia' },
        { name: 'Como Trabalhamos', path: '/about#metodologia' },
        { name: 'Parceria de Confiança', path: '/about#parceria' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Desenvolvimento Web', path: '/services#web-development' },
        { name: 'Aplicações Móveis', path: '/services#mobile-apps' },
        { name: 'Consultoria Tecnológica', path: '/services#consultoria' },
        { name: 'Suporte e Manutenção', path: '/services#suporte' }
      ]
    },
    {
      title: 'Contacto',
      links: [
        { name: 'Falar Connosco', path: '/contact#formulario' },
        { name: 'Solicitar Orçamento', path: '/contact#orcamento' },
        { name: 'Pedir Suporte', path: '/contact#suporte' }
      ]
    }
  ];
  
  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://pt.linkedin.com/company/gt-i-t-consultadoria-inform%C3%A1tica?trk=public_profile_topcard-current-company' }
  ];
  
  return (
  <footer className="bg-secondary text-white pt-8 pb-4">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust and Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 py-6 border-b border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            A Sua Confiança é o Nosso Compromisso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4" style={{height: '2.5em'}}>
                <FaHandshake className="text-4xl text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parceria Duradoura</h3>
              <p className="text-gray-300">
                Estabelecemos relações de longo prazo, acompanhando o crescimento do seu negócio com soluções que evoluem.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-4" style={{height: '2.5em'}}>
                <FaShieldAlt className="text-4xl text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suporte Contínuo</h3>
              <p className="text-gray-300">
                Oferecemos assistência técnica especializada e manutenção proactiva para garantir que os seus sistemas funcionem perfeitamente.
              </p>
            </div>
            <div className="text-center">
                  <div className="flex justify-center items-center mb-4" style={{height: '2.5em'}}>
                    <FaUserCog className="text-4xl text-sky-400" />
                  </div>
                <h3 className="text-xl font-semibold mb-3">Assistência IT Personalizada</h3>
              <p className="text-gray-300">
                Disponível para resolver questões técnicas, implementar soluções e planear melhorias para o seu sistema informático.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">
          {/* Company info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="w-full flex justify-center items-center mb-6">
              <Link to="/" className="inline-block">
                <img src="/assets/images/logo.png" alt="GTIT Logo" className="h-24 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-105" />
              </Link>
            </div>
              {/* Texto institucional removido conforme solicitado */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark hover:bg-primary transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Links columns */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      onClick={(e) => handleAnchorClick(e, link.path)}
                      className="text-gray-300 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom section */}
  <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} GTIT. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Tecnologia com confiança. Parceria para o futuro.
              </p>
            </div>
            {/* Links removidos conforme solicitado */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
