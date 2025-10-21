import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaUserCheck, FaCloud, FaBolt, FaChartLine, FaPiggyBank, FaShieldAlt } from 'react-icons/fa';

export default function Design() {
  // Page loading state
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Design services
  const services = [
    {
      icon: <FaPaintBrush />,
      title: 'Branding & Identidade Visual',
      description: 'Criação de logótipos, paleta de cores, tipografia e elementos visuais que refletem a sua marca.'
    },
    {
      icon: <FaUserCheck />,
      title: 'Experiência do Utilizador (UX)',
      description: 'Prototipagem, praticidade e melhoria de interfaces para facilitar o uso dos seus produtos digitais.'
    },
    {
      icon: <FaCloud />,
      title: 'Design para Web & Mobile',
      description: 'Layouts responsivos, acessibilidade e adaptação para diferentes dispositivos.'
    },
    {
      icon: <FaBolt />,
      title: 'Prototipagem Rápida',
      description: 'Desenvolvimento ágil de protótipos para validação de ideias e funcionalidades.'
    },
    {
      icon: <FaChartLine />,
      title: 'Design Estratégico',
      description: 'Alinhamento do design com os objetivos de negócio e comunicação clara.'
    },
    {
      icon: <FaPiggyBank />,
      title: 'Custos controlados',
      description: 'Soluções acessíveis, sem surpresas e com acompanhamento próximo.'
    }
  ];

  return (
    <main className="flex-grow bg-white">
      {/* <Helmet>
        <title>Design & Experiência Digital | GTIT</title>
        <meta name="description" content="Serviços de design digital, experiência do utilizador, branding, prototipagem e suporte para PME. GTIT Portugal." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Design & Experiência Digital para PME",
            "provider": {"@type": "Organization", "name": "GTIT"},
            "areaServed": "Portugal",
            "description": "Serviços de design digital, experiência do utilizador, branding, prototipagem e suporte para PME."
          }
        `}</script>
      </Helmet> */}
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
              Design & Experiência Digital para PME
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Criamos experiências digitais que valorizam a sua marca e facilitam o dia-a-dia dos seus utilizadores.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que tratamos no dia‑a‑dia</h2>
            <p className="text-lg text-gray-600">
              Oferecemos soluções completas de design digital para valorizar a sua marca e melhorar a experiência dos seus utilizadores.
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
              Design que valoriza a marca, melhora a experiência do utilizador e impulsiona os resultados do negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBolt />, title: 'Mais impacto', description: 'Design que valoriza a marca e melhora a experiência do utilizador.' },
              { icon: <FaShieldAlt />, title: 'Mais confiança', description: 'Interfaces claras, acessíveis e seguras.' },
              { icon: <FaPiggyBank />, title: 'Custos controlados', description: 'Avenças simples e claras.' },
              { icon: <FaUserCheck />, title: 'Equipa produtiva', description: 'Menos obstáculos técnicos, mais foco no trabalho.' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center transition-all duration-300"
              >
                <div className="text-primary text-4xl mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como trabalhamos</h2>
            <p className="text-lg text-gray-600">
              Processo simples e transparente para criar experiências digitais que valorizam a sua marca.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Diagnóstico', description: 'Levantamento das necessidades e objetivos de design.' },
              { number: '02', title: 'Plano simples', description: 'Proposta de design, protótipos e cronograma. Resposta 24–48h úteis.' },
              { number: '03', title: 'Implementação', description: 'Desenvolvimento dos elementos visuais e validação com o cliente.' },
              { number: '04', title: 'Suporte contínuo', description: 'Ajustes, manutenção e melhorias trimestrais.' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center transition-all duration-300"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">{step.number}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para valorizar a sua marca?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Fale connosco e receba um plano simples de design digital para a sua PME.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-primary hover:bg-opacity-90 transition-colors duration-300 rounded-md font-medium inline-block"
            >
              Solicitar Contacto
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
