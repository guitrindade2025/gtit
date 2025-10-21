import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaUserCheck, FaShareAlt, FaFileAlt, FaBolt, FaPiggyBank, FaCogs, FaShieldAlt } from 'react-icons/fa';

export default function CloudSolutions() {
  // Page loading state
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Cloud services
  const services = [
    {
      icon: <FaCloud />,
      title: 'Migração para Microsoft 365',
      description: 'Transferência de e-mails, ficheiros e utilizadores para o ambiente cloud, sem perdas e com mínimo impacto.'
    },
    {
      icon: <FaUserCheck />,
      title: 'Gestão de Utilizadores & Licenças',
      description: 'Criação, alteração e remoção de contas, atribuição de licenças e permissões, controlo de acessos.'
    },
    {
      icon: <FaShareAlt />,
      title: 'SharePoint & OneDrive',
      description: 'Configuração de partilhas, bibliotecas, permissões e sincronização de ficheiros.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Backups & Recuperação',
      description: 'Backups regulares de e-mails e ficheiros, testes de restauro e proteção contra perdas.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança & Políticas',
      description: 'Implementação de MFA, políticas de acesso, proteção de dados e conformidade.'
    },
    {
      icon: <FaCogs />,
      title: 'Manutenção e Suporte',
      description: 'Gestão eficiente de licenças e recursos, suporte contínuo sem surpresas na fatura.'
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
              Soluções Cloud & Microsoft 365
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Migração, gestão e suporte a utilizadores, ficheiros, licenças e segurança no Microsoft 365 e SharePoint. 
              Tudo para a sua empresa funcionar sem complicações.
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
              Apoiamos a sua empresa em todas as etapas do Microsoft 365: desde a migração até à gestão diária, garantindo máxima eficiência, segurança e tranquilidade.
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
              Trabalhamos com Microsoft 365 para oferecer máxima produtividade, segurança e facilidade de gestão.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBolt />, title: 'Menos tempo parado', description: 'Migração e suporte rápidos, sem interrupções no trabalho.' },
              { icon: <FaShieldAlt />, title: 'Mais segurança', description: 'Proteção de dados, backups testados e políticas de acesso.' },
              { icon: <FaPiggyBank />, title: 'Custos controlados', description: 'Avenças simples e claras, sem surpresas.' },
              { icon: <FaUserCheck />, title: 'Equipa produtiva', description: 'Menos problemas técnicos, mais foco no trabalho.' }
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
              Processo simples e transparente para migrar e gerir o Microsoft 365 na sua PME.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Diagnóstico', description: 'Levantamento do ambiente, contas, ficheiros e necessidades.' },
              { number: '02', title: 'Plano simples', description: 'Proposta de migração, gestão e suporte. Resposta 24–48h úteis.' },
              { number: '03', title: 'Implementação', description: 'Migração, configuração e documentação.' },
              { number: '04', title: 'Suporte contínuo', description: 'Pedidos, manutenção e melhorias trimestrais.' }
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
              Pronto para evoluir para a cloud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Fale connosco e receba um plano simples para migrar e gerir o Microsoft 365 na sua PME.
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