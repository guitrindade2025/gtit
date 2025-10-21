import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserCheck, FaCloud, FaBolt, FaChartLine, FaPiggyBank, FaCogs, FaLightbulb, FaRocket, FaChartBar, FaLock, FaEye, FaDatabase } from 'react-icons/fa';

export default function Security() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Proteção de Dados",
      description: "Implementação de políticas de segurança, backups automáticos e proteção contra ameaças digitais."
    },
    {
      icon: <FaUserCheck />,
      title: "Gestão de Acessos",
      description: "Controlo de permissões, MFA, monitorização de acessos e auditorias regulares."
    },
    {
      icon: <FaCloud />,
      title: "Segurança na Cloud",
      description: "Proteção de contas Microsoft 365/Google Workspace, partilhas seguras e políticas de acesso."
    },
    {
      icon: <FaLock />,
      title: "Antivírus & Firewall",
      description: "Proteção endpoint, firewall gerido e monitorização de tráfego em tempo real."
    },
    {
      icon: <FaEye />,
      title: "Monitorização 24/7",
      description: "Vigilância contínua de sistemas, alertas automáticos e resposta rápida a incidentes."
    },
    {
      icon: <FaDatabase />,
      title: "Backups & Recuperação",
      description: "Cópias de segurança automatizadas, testes de recuperação e planos de continuidade."
    }
  ];

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Segurança & Proteção Digital | GTIT</title>
        <meta name="description" content="Serviços de segurança digital, proteção de dados, backups, monitorização e suporte para PMEs. GTIT Portugal." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Segurança & Proteção Digital para PMEs",
            "provider": {"@type": "Organization", "name": "GTIT"},
            "areaServed": "Portugal",
            "description": "Serviços de segurança digital, proteção de dados, backups, monitorização e suporte para PMEs."
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Segurança & Proteção Digital para PMEs
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Protegemos os seus dados, sistemas e utilizadores com soluções simples, eficazes e adaptadas à sua empresa.
              </p>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary hover:bg-opacity-90 transition-colors duration-300 rounded-md font-medium"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="#process"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-md font-medium ml-4"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Os nossos serviços</h2>
            <p className="text-lg text-gray-600">
              Oferecemos soluções completas de segurança digital para proteger a sua empresa.
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

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
              <FaEye className="text-3xl text-sky-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Monitorização & Alertas</h3>
              <p className="text-slate-700">Monitorização de serviços críticos, alertas proativos e resposta rápida a incidentes.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
              <FaChartLine className="text-3xl text-sky-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Auditoria & Conformidade</h3>
              <p className="text-slate-700">Relatórios de conformidade, testes de segurança e apoio à legislação vigente.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
              <FaPiggyBank className="text-3xl text-sky-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Custos controlados</h3>
              <p className="text-slate-700">Soluções acessíveis, sem surpresas e com acompanhamento próximo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">Benefícios para a sua empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start text-white">
            <FaBolt className="text-3xl text-sky-600 mb-4" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Menos riscos</h3>
            <p className="text-slate-700">Redução de vulnerabilidades e resposta rápida a incidentes.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
            <FaShieldAlt className="text-3xl text-sky-600 mb-4" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Mais confiança</h3>
            <p className="text-slate-700">Ambiente protegido, backups testados e conformidade garantida.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
            <FaPiggyBank className="text-3xl text-sky-600 mb-4" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Custos controlados</h3>
            <p className="text-slate-700">Avenças simples e claras.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col items-start">
            <FaUserCheck className="text-3xl text-sky-600 mb-4" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Equipa tranquila</h3>
            <p className="text-slate-700">Menos preocupações técnicas, mais foco no trabalho.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">Como trabalhamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-lg">1</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Diagnóstico</h3>
            <p className="text-slate-700 text-center">Levantamento do ambiente, riscos e prioridades.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-lg">2</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Plano simples</h3>
            <p className="text-slate-700 text-center">O que fica sob gestão, SLAs e acessos.<br />Resposta 24–48h úteis.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-lg">3</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Implementação</h3>
            <p className="text-slate-700 text-center">Ajustes, configuração de segurança e documentação.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-lg">4</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Suporte contínuo</h3>
            <p className="text-slate-700 text-center">Pedidos, manutenção e melhorias trimestrais.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Secção opcional: Linha de Maturidade Digital (reduzida) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Evolução Digital da sua PME</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-3xl text-sky-600 mb-2" />
            <span className="font-bold text-slate-900">Básico</span>
            <span className="text-slate-600 text-sm">Ferramentas digitais iniciais</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCogs className="text-3xl text-sky-600 mb-2" />
            <span className="font-bold text-slate-900">Em Desenvolvimento</span>
            <span className="text-slate-600 text-sm">Processos integrados</span>
          </div>
          <div className="flex flex-col items-center">
            <FaChartBar className="text-3xl text-sky-600 mb-2" />
            <span className="font-bold text-slate-900">Avançado</span>
            <span className="text-slate-600 text-sm">Decisões baseadas em dados</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-3xl text-sky-600 mb-2" />
            <span className="font-bold text-slate-900">Transformado</span>
            <span className="text-slate-600 text-sm">Inovação contínua</span>
          </div>
        </div>
        </div>
      </section>

      {/* CTA final */}
  <section className="py-16 md:py-20 text-center bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para proteger a sua empresa?</h2>
          <p className="text-lg text-white mb-8">Fale connosco e receba um plano simples de segurança digital.</p>
          <a href="/contact" aria-label="Solicitar Contacto" className="inline-block px-8 py-4 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 transition shadow-lg text-lg">Solicitar Contacto</a>
        </div>
      </section>
    </main>
  );
}
