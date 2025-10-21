import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaRocket, 
  FaPiggyBank, 
  FaBolt, 
  FaUserCheck, 
  FaHandshake,
  FaDigitalTachograph,
  FaSearch,
  FaClipboardList,
  FaPlay,
  FaInfinity
} from 'react-icons/fa';

export default function Consulting() {
  // Page loading state
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Consulting services
  const services = [
    {
      icon: <FaSearch />,
      title: 'Avaliação de Sistemas',
      description: 'Diagnóstico completo dos sistemas e processos atuais da sua empresa.'
    },
    {
      icon: <FaUserCheck />,
      title: 'Helpdesk & Suporte',
      description: 'Suporte técnico dedicado aos utilizadores, resolução de problemas e formação contínua.'
    },
    {
      icon: <FaCloud />,
      title: 'Migração para Cloud',
      description: 'Transição segura para Microsoft 365 ou Google Workspace com acompanhamento completo.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança & Monitorização',
      description: 'Proteção de dados, backup automático e monitorização 24/7 dos seus sistemas.'
    },
    {
      icon: <FaRocket />,
      title: 'Otimização de Performance',
      description: 'Melhoria contínua dos sistemas para máxima eficiência e produtividade.'
    },
    {
      icon: <FaHandshake />,
      title: 'Acompanhamento Dedicado',
      description: 'Parceria a longo prazo com técnicos especializados que conhecem o seu negócio.'
    }
  ];

  const benefits = [
    {
      icon: <FaUserCheck />,
      title: 'Suporte técnico sempre disponível',
      description: 'Helpdesk especializado que resolve problemas rapidamente, minimizando o impacto na produtividade da sua equipa.'
    },
    {
      icon: <FaBolt />,
      title: 'Resposta rápida e eficaz',
      description: 'Tempo de resposta otimizado e soluções práticas que mantêm os seus sistemas sempre operacionais.'
    },
    {
      icon: <FaChartLine />,
      title: 'Crescimento orientado por dados',
      description: 'Análises detalhadas e relatórios que ajudam a tomar decisões estratégicas fundamentadas.'
    },
    {
      icon: <FaHandshake />,
      title: 'Parceria de confiança',
      description: 'Relacionamento próximo com técnicos dedicados que compreendem as necessidades específicas do seu negócio.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: <FaSearch />,
      title: 'Análise & Diagnóstico',
      description: 'Avaliação completa dos sistemas atuais e identificação de necessidades específicas.'
    },
    {
      number: '02',
      icon: <FaClipboardList />,
      title: 'Planeamento Estratégico',
      description: 'Desenvolvimento de estratégia personalizada e roadmap de implementação.'
    },
    {
      number: '03',
      icon: <FaPlay />,
      title: 'Implementação & Formação',
      description: 'Execução das soluções com formação completa da equipa e configuração de helpdesk.'
    },
    {
      number: '04',
      icon: <FaInfinity />,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento permanente, manutenção proativa e evolução constante dos sistemas.'
    }
  ];

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Consultoria & Suporte Técnico para PME | GTIT</title>
        <meta name="description" content="Consultoria tecnológica e suporte técnico especializado para PME. Helpdesk dedicado, diagnóstico e implementação de soluções. GTIT Portugal." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Consultoria & Suporte Técnico para PME",
            "provider": {"@type": "Organization", "name": "GTIT"},
            "areaServed": "Portugal",
            "description": "Consultoria tecnológica e suporte técnico especializado para PME. Helpdesk dedicado, diagnóstico e implementação de soluções."
          }
        `}</script>
      </Helmet>
      
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
              Consultoria & Suporte Técnico para Empresas
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Consultoria especializada e suporte técnico dedicado para fazer crescer a sua empresa com tecnologia eficaz e acompanhamento próximo.
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
                Solicitar Orçamento
              </Link>
              <a
                href="#process"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-md font-medium"
              >
                Nosso Processo
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
              Oferecemos consultoria completa para acelerar a transformação tecnológica da sua empresa.
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

      {/* Helpdesk & Support Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Suporte Técnico & Helpdesk</h2>
            <p className="text-lg text-gray-600">
              Apoio técnico especializado para manter a sua equipa produtiva e os sistemas sempre operacionais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-primary text-4xl mb-4"><FaUserCheck /></div>
              <h3 className="text-xl font-bold mb-3">Helpdesk Dedicado</h3>
              <p className="text-gray-600">Suporte técnico direto por telefone, email ou chat para resolução rápida de problemas.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-primary text-4xl mb-4"><FaBolt /></div>
              <h3 className="text-xl font-bold mb-3">Resolução Rápida</h3>
              <p className="text-gray-600">Tempo médio de resposta otimizado e soluções eficazes para minimizar o tempo de inatividade.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-primary text-4xl mb-4"><FaRocket /></div>
              <h3 className="text-xl font-bold mb-3">Formação Contínua</h3>
              <p className="text-gray-600">Capacitação da sua equipa para uso eficiente das ferramentas e sistemas implementados.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios para a sua empresa</h2>
            <p className="text-lg text-gray-600">
              Consultoria especializada que gera resultados reais para o seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-primary text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600">
              Processo estruturado que garante resultados e acompanhamento próximo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-primary text-3xl mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para acelerar o crescimento da sua empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende uma reunião sem compromisso e descubra como a nossa consultoria pode impulsionar os seus resultados.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Fale Connosco
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
