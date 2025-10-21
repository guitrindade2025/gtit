import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaMobileAlt, FaShoppingCart, FaRocket, FaTools, FaChevronDown } from 'react-icons/fa';
import { useLayout } from '../../context/LayoutContext';

// FAQ component
interface FAQProps {
  question: string;
  answer: string;
  index: number;
}

const FAQ = ({ question, answer, index }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <button
        className={`w-full text-left p-4 md:p-6 flex justify-between items-center rounded-lg ${
          isOpen ? "bg-primary text-white" : "bg-light hover:bg-gray-200"
        } transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 bg-white border border-gray-200 border-t-0 rounded-b-lg">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WebDevelopment = () => {
  const { saveScrollPosition } = useLayout();
  
  // Page loading state
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  // Technologies we use
  const technologies = [
  { name: 'React', icon: '/assets/images/tech-icons/react.svg', description: 'Para interfaces dinâmicas e responsivas' },
  { name: 'Node.js', icon: '/assets/images/tech-icons/nodejs.svg', description: 'Para backend robusto e escalável' },
  { name: 'Angular', icon: '/assets/images/tech-icons/angular.svg', description: 'Para aplicações empresariais complexas' },
  { name: 'Vue.js', icon: '/assets/images/tech-icons/vue.svg', description: 'Para interfaces rápidas e flexíveis' },
  { name: 'PHP/Laravel', icon: '/assets/images/tech-icons/laravel.svg', description: 'Para sistemas web completos' },
  { name: 'WordPress', icon: '/assets/images/tech-icons/wordpress.svg', description: 'Para sites e blogs fáceis de gerir' },
  ];

  // Web development services
  const services = [
    {
      icon: <FaCode />,
      title: 'Sites Institucionais',
  description: 'Sites profissionais que representam a sua marca e negócio na web, com designs personalizados e responsivos.'
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gestão de produtos, pagamentos online e experiência de compra otimizada.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Aplicações Web',
      description: 'Sistemas web personalizados para otimizar processos internos e aumentar a produtividade da sua empresa.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Sites Responsivos',
      description: 'Sites que se adaptam perfeitamente a qualquer dispositivo, proporcionando uma experiência consistente.'
    },
    {
      icon: <FaRocket />,
      title: 'Otimização de SEO',
      description: 'Estratégias de otimização para melhorar o posicionamento do seu site nos mecanismos de busca.'
    },
    {
      icon: <FaTools />,
      title: 'Manutenção e Suporte',
      description: 'Serviços contínuos de manutenção, atualizações e suporte técnico para o seu website.'
    }
  ];

  // Process steps
  const process = [
    {
      number: '01',
      title: 'Descoberta e Planeamento',
  description: 'Compreendemos as suas necessidades, objetivos de negócio e público-alvo para planear a melhor solução web.'
    },
    {
      number: '02',
      title: 'Design de Interface',
  description: 'Criamos wireframes e designs que capturam a essência da sua marca e proporcionam a melhor experiência ao utilizador.'
    },
    {
      number: '03',
      title: 'Desenvolvimento',
  description: 'Transformamos o design em código, construindo o seu site com as tecnologias mais adequadas e modernas.'
    },
    {
      number: '04',
      title: 'Testes e Revisão',
      description: 'Realizamos testes minuciosos para garantir funcionalidade, segurança e compatibilidade em todos os dispositivos.'
    },
    {
      number: '05',
      title: 'Lançamento',
  description: 'Publicamos o seu site e garantimos que tudo está a funcionar perfeitamente no ambiente de produção.'
    },
    {
      number: '06',
      title: 'Suporte Contínuo',
  description: 'Oferecemos serviços de manutenção e suporte para manter o seu site sempre atualizado e a funcionar corretamente.'
    }
  ];  // Portfolio items
    // Variável removida pois não é utilizada
  // FAQ items
  const faqs = [
    {
      question: 'Quanto tempo demora a desenvolver um site?',
      answer: 'O tempo de desenvolvimento varia conforme a complexidade do projecto. Um site institucional simples pode demorar entre 2 a 4 semanas, enquanto um e-commerce ou aplicação web mais complexa pode demorar entre 2 a 6 meses. Durante a fase de planeamento, forneceremos um cronograma detalhado para o seu projecto específico.'
    },
    {
      question: 'Quanto custa desenvolver um site?',
      answer: 'O custo de desenvolvimento depende de diversos fatores como funcionalidades necessárias, design personalizado, integrações com sistemas externos, entre outros. Elaboramos orçamentos personalizados com base nas necessidades específicas de cada cliente. Contacte-nos para receber uma estimativa gratuita para o seu projecto.'
    },
    {
      question: 'Fazem manutenção de sites existentes?',
      answer: 'Sim, oferecemos serviços de manutenção e actualização para sites existentes, mesmo que não tenham sido desenvolvidos por nós. Os nossos serviços de manutenção incluem actualizações de segurança, correcções de bugs, adição de novas funcionalidades e melhorias de performance.'
    },
    {
      question: 'Os sites são optimizados para SEO?',
      answer: 'Sim, todos os nossos sites são desenvolvidos seguindo as melhores práticas de SEO, incluindo código limpo e semântico, optimização da velocidade de carregamento, estrutura de URLs amigável e meta tags optimizadas. Também oferecemos serviços adicionais de SEO para melhorar ainda mais o posicionamento do seu site nos motores de busca.'
    },
    {
      question: 'Os sites são responsivos para dispositivos móveis?',
      answer: 'Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma excelente experiência ao utilizador em todos os dispositivos, desde smartphones e tablets até desktops e ecrãs maiores.'
    },
    {
      question: 'Prestam suporte após o lançamento do site?',
      answer: 'Sim, oferecemos diversos planos de suporte e manutenção após o lançamento do seu site. Estes planos podem incluir actualizações regulares, monitorização de segurança, backup de dados, correcções de bugs e suporte técnico contínuo.'
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Desenvolvimento Web Profissional
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Criamos soluções web personalizadas que impulsionam o seu negócio,
              desde sites institucionais elegantes até plataformas de comércio eletrónico robustas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary hover:bg-opacity-90 transition-colors duration-300 rounded-md font-medium"
              >
                Solicitar Orçamento Gratuito
              </Link>
              <a
                href="#process"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-md font-medium"
              >
                O Nosso Processo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os nossos serviços</h2>
            <p className="text-lg text-gray-600">
              Oferecemos uma gama completa de serviços de desenvolvimento web para responder às necessidades específicas do seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-primary text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias que Utilizamos</h2>
            <p className="text-lg text-gray-600">
              Trabalhamos com as tecnologias mais modernas e eficientes para desenvolver soluções web 
              de alta performance e fácil manutenção.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center flex flex-col items-center transition-all duration-300"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-light rounded-full p-4">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="max-w-full max-h-full"
                  />
                </div>
                <h3 className="font-bold mb-2 text-lg">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Styles Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubra o seu estilo</h2>
            <p className="text-lg text-gray-600">
              Explore os nossos designs personalizados e interativos para diferentes segmentos.
              Clique em qualquer estilo para visualizar uma demonstração única e criativa.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Advogados Style Card */}
            <Link to="/demo/advogados" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <svg className="absolute bottom-0 right-0 w-32 h-32 text-slate-600 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z" />
                  </svg>
                  <div className="absolute -left-4 top-4 w-16 h-16 bg-amber-200 rounded-md opacity-20 rotate-45"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 opacity-30"></div>
                  <div className="absolute top-2 right-2 w-20 h-1 bg-amber-400 opacity-30"></div>
                  <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Advogados</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Tradicional</span>
                  </div>
                  <p className="text-gray-600 mb-4">Elegante e profissional, com tipografia clássica e estrutura organizada. Perfeito para escritórios de advocacia, consultórios jurídicos e profissionais liberais que procuram transmitir confiança e autoridade.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Entretenimento Style Card */}
            <Link to="/demo/entretenimento" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-fuchsia-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>
                    <div className="absolute right-6 top-4 w-12 h-12 bg-fuchsia-300 rounded-full opacity-30"></div>
                    <div className="absolute right-12 bottom-8 w-6 h-6 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute left-10 top-10 w-4 h-4 bg-indigo-300 rounded-full opacity-40"></div>
                    <svg className="absolute bottom-2 right-2 h-24 w-24 text-fuchsia-200 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
                      <path d="M10 17l6-5-6-5v10z" />
                    </svg>
                    <div className="absolute w-full h-6 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 -rotate-45 top-1/3"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Entretenimento</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800">Dinâmico</span>
                  </div>
                  <p className="text-gray-600 mb-4">Vibrante e imersivo, com animações envolventes e cores marcantes. Ideal para produtoras, estúdios criativos, eventos, festivais e negócios focados em experiências de entretenimento e lazer.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* E-commerce Style Card */}
            <Link to="/demo/ecommerce" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-300 opacity-20 rounded-full"></div>
                  
                  {/* Shopping UI Elements */}
                  <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-1">
                    <div className="w-10 h-1 bg-white rounded-full opacity-40"></div>
                    <div className="w-6 h-1 bg-white rounded-full opacity-20"></div>
                    <div className="w-4 h-1 bg-white rounded-full opacity-30"></div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="absolute top-3 left-3 grid grid-cols-2 gap-1 opacity-20">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  
                  <svg className="absolute bottom-0 right-0 w-32 h-8 text-teal-200 opacity-30" viewBox="0 0 100 24" fill="none">
                    <path d="M0 24h8v-8H0v8zm12 0h8V8h-8v16zm12 0h8V0h-8v24zm12 0h8v-12h-8v12zm12 0h8v-4h-8v4zm12 0h8v-18h-8v18zm12 0h8v-8h-8v8zm12 0h8V8h-8v16z" fill="currentColor" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">E-commerce</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Vendas</span>
                  </div>
                  <p className="text-gray-600 mb-4">Intuitivo e orientado para vendas, com fluxos de compra simplificados e interfaces de catálogo optimizadas. Ideal para lojas online, marketplaces e negócios focados em vendas digitais que procuram aumentar conversões.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Planetas Style Card */}
            <Link to="/demo/planetas" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Stellar Elements */}
                  <div className="absolute w-full h-full">
                    {/* Stars */}
                    <div className="absolute left-5 top-5 w-1 h-1 bg-white rounded-full opacity-80"></div>
                    <div className="absolute left-12 top-8 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
                    <div className="absolute right-10 top-10 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
                    <div className="absolute right-20 top-16 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                    <div className="absolute left-20 bottom-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="absolute right-5 bottom-12 w-2 h-2 bg-white rounded-full opacity-30"></div>
                    
                    {/* Planets */}
                    <div className="absolute top-4 right-6 w-12 h-12 rounded-full bg-indigo-300 opacity-20"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-400 opacity-20"></div>
                    
                    {/* Orbital paths */}
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-blue-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-blue-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                    
                    {/* Shooting star */}
                    <div className="absolute top-6 right-10 w-12 h-0.5 bg-gradient-to-r from-transparent to-white opacity-60 -rotate-30"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Planetas</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Futurista</span>
                  </div>
                  <p className="text-gray-600 mb-4">Futurista e imersivo, com design espacial e elementos visuais que evocam o universo. Perfeito para startups de tecnologia avançada, projetos científicos e experiências digitais inovadoras.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Saúde Style Card */}
            <Link to="/demo/saude" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-sky-400 to-cyan-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <svg className="absolute bottom-0 right-0 w-32 h-32 text-cyan-200 opacity-20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2v6h-2v-6H9v-2h2V8h2v2z" />
                  </svg>
                  <div className="absolute -left-5 top-5 w-24 h-24 rounded-full bg-cyan-300 opacity-20"></div>
                  <div className="absolute -right-12 top-12 w-32 h-32 rounded-full border-4 border-cyan-200 opacity-20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mr-2">Saúde</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Premium</span>
                  </div>
                  <p className="text-gray-600 mb-4">Simples e acolhedor, com paleta tranquilizadora e elementos visuais que transmitem confiança e bem-estar. Ideal para clínicas, hospitais e profissionais de saúde.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Imobiliária Style Card */}
            <Link to="/demo/imobiliaria" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40">
                    <svg className="w-full h-full text-amber-200 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 w-20 h-20 border-2 border-amber-200 opacity-20 rotate-45"></div>
                  <div className="absolute bottom-8 left-10 w-6 h-6 bg-amber-300 opacity-30 rounded-full"></div>
                  <div className="absolute top-10 right-10 w-4 h-4 bg-amber-100 opacity-40 rounded-full"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Imobiliária</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Exclusivo</span>
                  </div>
                  <p className="text-gray-600 mb-4">Sofisticado e prático, com visual elegante e ferramentas poderosas para apresentação de imóveis. Ideal para agências imobiliárias e agentes imobiliários que procuram destacar os seus empreendimentos.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Tecnologia Style Card */}
            <Link to="/demo/tecnologia" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-950 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Tech Elements */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-5 left-5 w-8 h-8 border border-gray-300 rounded-sm"></div>
                    <div className="absolute top-8 left-8 w-5 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-5 right-5 w-16 h-5 bg-blue-400 opacity-50"></div>
                    <div className="absolute top-1/4 right-8 h-24 w-1 bg-green-400 opacity-50"></div>
                    <svg className="absolute bottom-0 right-0 w-full h-12" viewBox="0 0 100 20" fill="none">
                      <path d="M0 20h5v-5H0v5zm10 0h5v-10h-5v10zm10 0h5v-15h-5v15zm10 0h5V5h-5v15zm10 0h5V8h-5v8zm10 0h5V0h-5v20zm10 0h5v-3h-5v3zm10 0h5v-7h-5v7zm10 0h5v-4h-5v4zm10 0h5v-6h-5v6z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-10"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-10"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Tecnologia</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Inovador</span>
                  </div>
                  <p className="text-gray-600 mb-4">Moderno e minimalista, com elementos visuais de ponta e interfaces dinâmicas. Perfeito para startups, empresas de tecnologia e produtos digitais inovadores.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Educação Style Card */}
            <Link to="/demo/educacao" className="group" onClick={saveScrollPosition}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 bg-gradient-to-br from-rose-500 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-800 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
                  <div className="absolute left-10 bottom-4 w-4 h-4 bg-white rounded-full opacity-30"></div>
                  <div className="absolute left-20 bottom-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
                  <div className="absolute left-4 top-4 w-20 h-20">
                    <svg className="w-full h-full text-pink-200 opacity-20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 right-8 w-24 h-1 bg-pink-200 opacity-30 rotate-45"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Educação</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">Interativo</span>
                  </div>
                  <p className="text-gray-600 mb-4">Acessível e engajador, com design atraente e funcionalidades que incentivam a participação. Ideal para escolas, universidades e plataformas de ensino que desejam oferecer experiências educacionais memoráveis.</p>
                  <div className="flex items-center">
                    <span className="inline-block text-primary font-medium group-hover:underline">Ver demonstração</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Não encontrou o estilo ideal para o seu projecto? Podemos criar um personalizado para si!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Solicitar estilo personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Nosso Processo de Desenvolvimento</h2>
            <p className="text-lg text-gray-600">
              Seguimos uma metodologia estruturada para garantir que cada projeto seja entregue com qualidade, dentro do orçamento e com resposta em 24–48h úteis para todas as solicitações.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-lg shadow-md relative border-b-4 border-primary transition-all duration-300"
              >
                <div 
                  className="absolute -top-5 -left-5 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
                  style={{
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    border: "4px solid white"
                  }}
                >
                  {step.number}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">
              Respostas para as dúvidas mais comuns sobre os nossos serviços de desenvolvimento web.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <FAQ 
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Pronto para transformar a sua presença digital?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 opacity-90"
            >
              Entre em contacto para discutirmos o seu projeto e como o podemos ajudar a alcançar os seus objetivos online.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-primary hover:bg-opacity-90 transition-colors duration-300 rounded-md font-medium"
              >
                Solicitar Orçamento Gratuito
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;
