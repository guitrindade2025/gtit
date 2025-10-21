import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

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

const MobileApps = () => {
  // Page loading state
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  // Technologies we use
  const technologies = [
    { name: 'React Native', icon: '/assets/images/tech-icons/react.svg', description: 'Para apps multiplataforma de alta performance' },
    { name: 'Flutter', icon: '/assets/images/tech-icons/flutter.svg', description: 'Para interfaces nativas e fluidas' },
    { name: 'iOS/Swift', icon: '/assets/images/tech-icons/apple.svg', description: 'Para aplicações nativas para iOS' },
    { name: 'Android/Kotlin', icon: '/assets/images/tech-icons/android.svg', description: 'Para aplicações nativas para Android' },
    { name: 'Firebase', icon: '/assets/images/tech-icons/firebase.svg', description: 'Para backend rápido e escalável' },
    { name: 'PWA', icon: '/assets/images/tech-icons/pwa.svg', description: 'Para apps web progressivos' },
  ];

  // Process steps
  const process = [
    {
      number: '01',
      title: 'Descoberta e Planeamento',
      description: 'Entendemos as suas necessidades, objetivos de negócio e público-alvo para planear a melhor aplicação móvel.'
    },
    {
      number: '02',
      title: 'Design de Interface (UI/UX)',
      description: 'Criamos wireframes e designs que proporcionam a melhor experiência ao utilizador, seguindo as diretrizes de cada plataforma.'
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description: 'Codificamos a sua aplicação utilizando as tecnologias mais adequadas e modernas para o seu projeto específico.'
    },
    {
      number: '04',
      title: 'Testes e Revisão',
      description: 'Realizamos testes minuciosos para garantir funcionalidade, performance e compatibilidade em diferentes dispositivos.'
    },
    {
      number: '05',
      title: 'Publicação nas Lojas',
      description: 'Preparamos e publicamos a sua aplicação nas lojas oficiais (Google Play e Apple App Store), seguindo todas as diretrizes.'
    },
    {
      number: '06',
      title: 'Suporte Contínuo',
      description: 'Oferecemos serviços de manutenção e suporte para manter a sua aplicação atualizada e a funcionar corretamente.'
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'Quanto tempo demora a desenvolver uma aplicação móvel?',
      answer: 'O tempo de desenvolvimento depende da complexidade do projeto. Uma aplicação simples pode demorar de 2 a 3 meses, enquanto uma mais complexa pode demorar de 4 a 8 meses. Durante a fase de planeamento, fornecemos um cronograma detalhado para o seu projeto.'
    },
    {
      question: 'Quanto custa desenvolver uma aplicação móvel?',
      answer: 'O custo de desenvolvimento depende de vários fatores como funcionalidades necessárias, design personalizado, integrações com sistemas externos e se a aplicação será nativa ou multiplataforma. Trabalhamos com orçamentos personalizados baseados nas necessidades específicas de cada cliente. Entre em contacto connosco para receber uma estimativa gratuita para o seu projeto.'
    },
    {
      question: 'Desenvolvem para iOS e Android?',
      answer: 'Sim, desenvolvemos aplicações tanto para iOS como para Android. Podemos criar aplicações nativas específicas para cada plataforma, ou utilizar tecnologias multiplataforma como React Native ou Flutter que permitem criar aplicações para ambas as plataformas a partir de uma única base de código.'
    },
    {
      question: 'Como são publicadas as aplicações nas lojas?',
      answer: 'Tratamos de todo o processo de publicação nas lojas oficiais (Google Play e App Store). Isto inclui a preparação dos materiais necessários (capturas de ecrã, descrições, ícones), configuração das contas de programador e envio para revisão, seguindo todas as diretrizes das plataformas.'
    },
    {
      question: 'As aplicações podem funcionar offline?',
      answer: 'Sim, podemos desenvolver aplicações com funcionalidade offline, permitindo que os utilizadores acedam a determinadas funcionalidades mesmo sem ligação à internet. Quando o dispositivo voltar a ter ligação, os dados podem ser sincronizados automaticamente.'
    },
    {
      question: 'Oferecem manutenção após o lançamento da aplicação?',
      answer: 'Sim, oferecemos vários planos de suporte e manutenção após o lançamento da sua aplicação. Estes planos podem incluir atualizações regulares, monitorização de desempenho, correção de erros, adaptações para novos sistemas operativos e dispositivos, e suporte técnico contínuo.'
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
              Desenvolvimento de Aplicações Móveis
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Transformamos as suas ideias em aplicações móveis de alto desempenho,
              desde soluções empresariais até aplicações inovadoras para o mercado nacional e internacional.
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
                Solicitar orçamento
              </Link>
              <a
                href="#process"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-md font-medium"
              >
                Ver Processo
              </a>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias</h2>
            <p className="text-lg text-gray-600">
              Utilizamos as tecnologias mais modernas para desenvolver aplicações móveis de alto desempenho e experiência de utilizador excecional.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light p-4 md:p-6 rounded-lg text-center"
              >
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-auto" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja a Nossa Demonstração</h2>
            <p className="text-lg text-gray-600">
              Explore a nossa demonstração interativa de uma aplicação móvel para a área da saúde e veja como podemos transformar a sua ideia em realidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <Link
              to="/demo/mobile-apps"
              className="px-8 py-4 bg-primary text-white rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 shadow-lg"
            >
              <span className="mr-2">Ver Demonstração</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-xs">
              <img 
                src="/assets/images/mobile-app-demo-preview.jpg" 
                alt="Demonstração de App Móvel"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/300x600?text=Preview+do+App";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Types Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Aplicações</h2>
            <p className="text-lg text-gray-600">
              Desenvolvemos vários tipos de aplicações móveis para diferentes segmentos de mercado,
              sempre com foco na melhor experiência do utilizador e resultados para o seu negócio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* E-commerce App Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full group"
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
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">E-commerce</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Popular</span>
                </div>
                <p className="text-gray-600 mb-4">Aplicações de compras online com catálogos de produtos, carrinhos de compras, pagamentos integrados e gestão de encomendas. Ideal para lojas virtuais e marketplaces.</p>
              </div>
            </motion.div>

            {/* Social Media App Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <div className="absolute left-10 bottom-4 w-4 h-4 bg-white rounded-full opacity-30"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Redes Sociais</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Envolvimento</span>
                </div>
                <p className="text-gray-600 mb-4">Aplicações de interação social com perfis de utilizadores, feeds de conteúdo, mensagens, notificações e funcionalidades de partilha. Ideal para comunidades e plataformas de comunicação.</p>
              </div>
            </motion.div>

            {/* Health & Fitness App Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full group"
            >
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-800 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                {/* Decorative Elements */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 text-rose-200 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2v6h-2v-6H9v-2h2V8h2v2z" />
                </svg>
                <div className="absolute -left-5 top-5 w-24 h-24 rounded-full bg-rose-300 opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors mr-2">Saúde & Fitness</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">Tendência</span>
                </div>
                <p className="text-gray-600 mb-4">Aplicações de monitorização de saúde e bem-estar, com registo de atividades, planos de treino, dicas de nutrição e integração com dispositivos inteligentes.</p>
              </div>
            </motion.div>

            {/* Business App Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {/* Decorative Elements */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 text-slate-600 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z" />
                </svg>
                <div className="absolute -left-4 top-4 w-16 h-16 bg-slate-500 rounded-md opacity-20 rotate-45"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Empresarial</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">Profissional</span>
                </div>
                <p className="text-gray-600 mb-4">Soluções empresariais móveis para automatização de processos, gestão de equipas, CRM móvel, dashboards de BI e ferramentas de produtividade personalizadas para a sua empresa.</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tem uma ideia para uma aplicação inovadora? Podemos ajudar a transformar a sua visão em realidade!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Discutir a sua ideia de aplicação
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
              Seguimos uma metodologia estruturada para garantir que cada aplicação seja entregue com qualidade, dentro do orçamento e com resposta em 24–48h úteis para todas as solicitações.
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
              Respostas para as dúvidas mais comuns sobre os nossos serviços de desenvolvimento de aplicações móveis.
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
              Transforme a sua ideia numa aplicação de sucesso
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 opacity-90"
            >
              Entre em contacto para discutirmos o seu projeto e como podemos ajudar a levar a sua visão para o mercado mobile.
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

export default MobileApps;
