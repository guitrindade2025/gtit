import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaCloudUploadAlt, FaChartLine, FaLock, FaDesktop } from 'react-icons/fa';
import { FiSearch, FiEdit3, FiCode, FiCheckCircle, FiSend, FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import StatsSection from './StatsSection'; // Importando o novo componente StatsSection
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
// Imagens locais (bundled pelo Vite)
import imgDesenvWeb from '../assets/images/DesenvWeb.jpg';
import imgSegDig from '../assets/images/SegDig.jpg';

export type Service = {
  slug: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  button: string;
  image: string;
  features: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  detailedDescription: string;
  Icon: IconType;
};

export type TechIcon = {
  name: string;
  image: string;
  alt: string;
  description: string;
};

const StepIcon = ({ icon: Icon }: { icon: IconType }) => (
  <span className="inline-flex items-center justify-center text-blue-600 bg-blue-100 rounded-full w-14 h-14 text-4xl transition-transform duration-300 group-hover:scale-110">
    <Icon aria-hidden="true" />
  </span>
);

const Services = () => {
  // Animation settings
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Services data
  const services: Service[] = [
    {
      slug: 'consultoria-tecnologica',
      icon: <FaChartLine className="text-3xl text-primary" />,
      title: 'Consultoria & Suporte Técnico',
  description: 'Acompanhamento próximo e suporte rápido para resolver qualquer problema, sempre que precisar.',
      link: '/services/consulting',
      button: 'Explorar Consultoria',
      image: '/assets/images/icon-internet-world-nas-maos-de-uma-tecnologia-de-rede-de-empresario-e-comunicacao_34998-149.jpg',
      features: ['Transformação Digital', 'Estratégia', 'Otimização', 'Análise']
    },
    {
      slug: 'desenvolvimento-web',
      icon: <FaCode className="text-3xl text-primary" />,
      title: 'Desenvolvimento Web',
      description: 'Websites empresariais, comércio eletrónico e plataformas rápidas e escaláveis para aumentar a sua presença online.',
      link: '/services/web-development',
      button: 'Explorar Websites',
  image: imgDesenvWeb,
      features: ['Websites Corporativos', 'E-commerce', 'Plataformas Digitais', 'SEO']
    },
    {
      slug: 'aplicacoes-moveis',
      icon: <FaMobileAlt className="text-3xl text-primary" />,
      title: 'Aplicações Móveis',
      description: 'Apps iOS e Android com alto desempenho e integração total com os seus sistemas.',
      link: '/services/mobile-apps',
      button: 'Ver Apps',
      image: '/assets/images/Ilustração-de-Tecnologia.png',
      features: ['iOS', 'Android', 'Flutter', 'React Native']
    },
    {
      slug: 'solucoes-cloud',
      icon: <FaCloudUploadAlt className="text-3xl text-primary" />,
      title: 'Soluções em Cloud',
      description: 'Infraestrutura cloud segura e escalável (AWS, Azure, Google Cloud) para a sua empresa.',
      link: '/services/cloud-solutions',
      button: 'Conhecer Cloud',
      image: '/assets/images/cloud-technologies-blue-cloud-technology-background-digital-technology-background-network-technology-blue-line-cloud.jpg',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      slug: 'seguranca-digital',
      icon: <FaLock className="text-3xl text-primary" />,
      title: 'Segurança Digital',
      description: 'Proteção avançada com auditorias e testes que mantêm os seus dados seguros.',
      link: '/services/security',
      button: 'Ver Soluções de Segurança',
  image: imgSegDig,
      features: ['Cibersegurança', 'Auditorias', 'Pentesting', 'Consultoria']
    },
    {
      slug: 'design-ux-ui',
      icon: <FaDesktop className="text-3xl text-primary" />,
      title: 'Design UX/UI',
      description: 'Interfaces intuitivas e apelativas, focadas na experiência dos seus clientes.',
      link: '/services/design',
      button: 'Explorar Design',
      image: '/assets/images/diagrama-de-circuito-de-tecnologia-azul-com-luzes-de-linha-brilhante_1017-17266.jpg',
      features: ['UX Design', 'UI Design', 'Prototipagem', 'Testes de Usabilidade']
    },
  ];

  // Process steps with icons
  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Descoberta',
      description: 'Identificamos objetivos e requisitos do negócio.',
      detailedDescription: 'Entendemos as suas necessidades e objetivos de negócio, analisando requisitos e identificando a melhor abordagem tecnológica.',
      Icon: FiSearch
    },
    {
      number: '02',
      title: 'Planeamento',
      description: 'Criamos uma estratégia clara e personalizada.',
      detailedDescription: 'Desenvolvemos um plano detalhado e uma estratégia de implementação personalizada para o seu projeto.',
      Icon: FiEdit3
    },
    {
      number: '03',
      title: 'Design e Desenvolvimento',
      description: 'Construímos soluções ágeis e escaláveis.',
      detailedDescription: 'A nossa equipa cria e desenvolve soluções seguindo as melhores práticas e metodologias ágeis.',
      Icon: FiCode
    },
    {
      number: '04',
      title: 'Testes',
      description: 'Garantimos qualidade e segurança.',
      detailedDescription: 'Realizamos testes rigorosos para garantir que a solução atenda a todos os requisitos e padrões de qualidade.',
      Icon: FiCheckCircle
    },
    {
      number: '05',
      title: 'Lançamento',
      description: 'Implementamos sem falhas.',
      detailedDescription: 'Implementamos a solução no ambiente de produção, garantindo uma transição suave e sem interrupções.',
      Icon: FiSend
    },
    {
      number: '06',
      title: 'Suporte',
      description: 'Evoluímos consigo.',
      detailedDescription: 'Oferecemos suporte contínuo e evoluímos a solução de acordo com as necessidades em mudança do seu negócio.',
      Icon: FiRefreshCw
    },
  ];
  // Tech stack icons
  const techIcons: TechIcon[] = [
    { name: 'React', image: '/assets/images/tech-icons/react.svg', alt: 'React', description: 'Framework moderna para apps web rápidas.' },
    { name: 'Angular', image: '/assets/images/tech-icons/angular.svg', alt: 'Angular', description: 'Framework robusta para aplicações enterprise.' },
    { name: 'Vue', image: '/assets/images/tech-icons/vue.svg', alt: 'Vue', description: 'Framework progressiva para interfaces dinâmicas.' },
    { name: 'Node.js', image: '/assets/images/tech-icons/nodejs.svg', alt: 'Node.js', description: 'Tecnologia para back-end escalável e eficiente.' },
    { name: 'Laravel', image: '/assets/images/tech-icons/laravel.svg', alt: 'Laravel', description: 'Framework PHP elegante para desenvolvimento web.' },
    { name: 'WordPress', image: '/assets/images/tech-icons/wordpress.svg', alt: 'WordPress', description: 'CMS versátil para sites e blogs.' },
    { name: 'Firebase', image: '/assets/images/tech-icons/firebase.svg', alt: 'Firebase', description: 'Plataforma Google para apps em tempo real.' },
    { name: 'Flutter', image: '/assets/images/tech-icons/flutter.svg', alt: 'Flutter', description: 'Framework para apps móveis multiplataforma.' },
    { name: 'Android', image: '/assets/images/tech-icons/android.svg', alt: 'Android', description: 'Desenvolvimento nativo para Android.' },
    { name: 'iOS', image: '/assets/images/tech-icons/apple.svg', alt: 'iOS', description: 'Apps nativas para iPhone e iPad.' },
    { name: 'AWS', image: '/assets/images/tech-icons/aws.svg', alt: 'AWS', description: 'Cloud segura e escalável.' },
  ];

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      {/* <Helmet>
        <title>Serviços de TI | Websites, Apps, Cloud e Segurança | GTIT</title>
        <meta name="description" content="Soluções de TI para PME: desenvolvimento web, apps móveis, cloud, segurança e consultoria. Transparência e suporte próximo." />
  {/* Scripts removidos pois as variáveis foram removidas */}
  {/* Fragmento removido */}

      {/* Page Header - Simple & Consistent */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-secondary">Os Nossos Serviços</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-2">
              Soluções de TI adaptadas ao seu negócio: desenvolvimento web, aplicações móveis, cloud, segurança digital e muito mais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Simple & Clean */}
      <section className="section bg-light" ref={servicesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Soluções Tecnológicas Abrangentes
            </h2>
            <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
              Ajudamos empresas a crescer com tecnologia moderna, design apelativo e suporte próximo. Descubra os nossos serviços digitais.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                {/* Imagem ou ícone no topo */}
                <div className="relative h-44 flex items-center justify-center bg-gray-50 rounded-t-xl">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt="" 
                      role="presentation"
                      loading="lazy"
                      decoding="async"
                      className="w-32 h-32 object-cover rounded-xl shadow-sm mx-auto transition-transform duration-300 group-hover:scale-105" 
                    />
                  ) : (
                    <span className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full text-4xl text-primary mx-auto">{service.icon}</span>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Link 
                    to={service.link}
                    className="text-primary text-xl font-semibold mb-2 text-center block hover:underline focus:underline"
                    aria-label={`Ir para página de ${service.title}`}
                  >
                    {service.title}
                  </Link>
                  <p className="text-gray-700 mb-4 text-center leading-relaxed">{service.description}</p>
                  <div className="mb-6 flex flex-wrap justify-center gap-2">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="mt-auto inline-block px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Saiba mais
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Animated & Accessible */}
      <section aria-labelledby="metrics-h2" className="section bg-secondary text-white">
        <div className="container-custom">
          <h2 id="metrics-h2" className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Métricas</h2>
          <StatsSection />
        </div>
      </section>

      {/* Our Process Section - Simple & Clean */}
      <section className="section bg-white" ref={processRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              O Nosso Processo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma abordagem estruturada e transparente que garante resultados excecionais para cada projeto.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <StepIcon icon={step.Icon} />
                  <div className="text-primary text-sm font-bold">{step.number}</div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Tooltip */}
                <div
                  id={`process-tooltip-${index}`}
                  role="tooltip"
                  aria-describedby={`process-tooltip-${index}`}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-normal max-w-md text-center shadow-lg"
                  style={{ wordBreak: 'break-word' }}
                >
                  {step.detailedDescription}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Acreditamos que um processo claro e estruturado é a base para projetos bem-sucedidos.
              A nossa metodologia foi refinada ao longo de anos de experiência para garantir consistência,
              eficiência e resultados superiores.
            </p>
            <Link 
              to="/about" 
              className="btn bg-secondary hover:bg-secondary-dark text-white px-6 py-3"
            >
              Conheça mais sobre nós
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section - Simple & Clean */}
      <section className="section bg-light" ref={techRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Tecnologias que Utilizamos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com tecnologias modernas e comprovadas para entregar soluções robustas e de alto desempenho.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={techInView ? 'show' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="relative text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-12 mb-3 flex items-center justify-center">
                  <img 
                    src={tech.image} 
                    alt={tech.alt} 
                    loading="lazy" decoding="async"
                    sizes="(min-width:1024px) 33vw, 100vw"
                    width="64" height="64"
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {tech.name}
                </span>
                {/* Tooltip */}
                <div
                  id={`tech-tooltip-${index}`}
                  role="tooltip"
                  aria-describedby={`tech-tooltip-${index}`}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-normal max-w-md text-center shadow-lg"
                  style={{ wordBreak: 'break-word' }}
                >
                  {tech.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={techInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-500 mt-8 text-sm"
          >
            E muitas outras tecnologias adaptadas às necessidades específicas de cada projeto.
          </motion.p>
        </div>
      </section>      {/* FAQ Section - Simple & Clean */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Respostas para algumas das perguntas mais comuns sobre os nossos serviços e processos.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <details className="bg-light rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                  <span>Quanto tempo demora a desenvolver um projeto?</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>O prazo de desenvolvimento varia consoante a complexidade e o âmbito do projeto. Projetos simples podem demorar algumas semanas, enquanto projetos mais complexos podem demorar vários meses. Durante a fase de análise e planeamento, forneceremos um cronograma detalhado para o seu projeto específico.</p>
                </div>
              </details>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <details className="bg-light rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                  <span>Como funciona o processo de desenvolvimento?</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>O nosso processo de desenvolvimento segue metodologias ágeis, com entregas incrementais e feedback contínuo. Iniciamos com uma fase de descoberta e análise, seguida por planeamento, design, desenvolvimento, testes e implementação. Mantemos comunicação constante durante todo o processo para garantir que o projeto corresponda às suas expectativas.</p>
                </div>
              </details>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <details className="bg-light rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                  <span>Que tecnologias utilizam?</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>Trabalhamos com diversas tecnologias de ponta, escolhendo as mais adequadas para cada projeto. A nossa equipa tem experiência com React, Angular, Vue.js, Node.js, Python, PHP, .NET, AWS, Azure, entre outras. A escolha tecnológica é feita com base nos requisitos específicos do seu projeto.</p>
                </div>
              </details>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <details className="bg-light rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                  <span>Oferecem suporte após o lançamento?</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>Sim, oferecemos vários planos de suporte e manutenção após o lançamento. Entendemos que os sistemas digitais necessitam evoluir continuamente, por isso estamos disponíveis para garantir que a sua solução continue a funcionar corretamente e possa ser atualizada conforme as necessidades do seu negócio.</p>
                </div>
              </details>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <details className="bg-light rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                  <span>Como é determinado o orçamento de um projeto?</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>O orçamento é determinado com base na complexidade, âmbito e prazo do projeto. Realizamos uma análise detalhada dos requisitos e funcionalidades necessárias e, com base nisso, elaboramos uma proposta comercial transparente que detalha todos os custos envolvidos.</p>
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Simple & Consistent */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar as suas ideias em realidade digital?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-4">
              Entre em contacto connosco hoje para discutir as suas necessidades e descobrir como podemos ajudar a impulsionar o seu negócio através da tecnologia.
            </p>
            <p className="text-lg opacity-80 max-w-lg mx-auto mb-8">
              Agende uma reunião gratuita e descubra como podemos transformar o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                Fale connosco
              </Link>
              <Link 
                to="/about" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 text-lg rounded-md transition-all duration-300"
              >
                Conheça mais sobre nós
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
