import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaLaptopCode, 
  FaChartLine, 
  FaUsers, 
  FaServer, 
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaMobileAlt
} from 'react-icons/fa';

// UI Components
import HeroSection from '../components/ui/HeroSection';
import Packages from '../components/Packages';
import FAQ from '../components/FAQ';
import FeatureCard from '../components/ui/FeatureCard';

// Services API
// import { fetchTestimonials } from '../services/api';

// Define testimonial interface locally (commented out as not used)
// interface Testimonial {
//   id: string;
//   content: string;
//   author: string;
//   company: string;
//   rating: number;
//   image: string;
// }

const Home = () => {
  // Removed testimonials state and useEffect as section was removed

  // Features data
  const features = [
    {
      icon: <FaRocket />,
      title: 'Soluções Inovadoras',
      description: 'Desenvolvemos soluções tecnológicas práticas que resolvem os seus desafios e apoiam o crescimento sustentável do seu negócio.',
      imageSrc: '/assets/images/17438_01-08-2021.jpg'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos tecnologias modernas e fiáveis para criar sistemas que realmente funcionam e facilitam o seu dia-a-dia.',
      imageSrc: '/assets/images/Ilustração-de-Tecnologia.png'
    },
    {
      icon: <FaChartLine />,
      title: 'Apoio Personalizado',
      description: 'Cada projeto é único. Oferecemos soluções personalizadas e acompanhamento próximo em todas as etapas.',
      imageSrc: '/assets/images/diagrama-de-circuito-de-tecnologia-azul-com-luzes-de-linha-brilhante_1017-17266.jpg'
    },
    {
      icon: <FaUsers />,
      title: 'Equipa Dedicada',
      description: 'A nossa equipa de 10+ anos de experiência está sempre disponível para o apoiar e garantir o sucesso dos seus projetos.',
      imageSrc: '/assets/images/icon-internet-world-nas-maos-de-uma-tecnologia-de-rede-de-empresario-e-comunicacao_34998-149.jpg'
    }
  ];

  // Services data
  const services = [
    {
      icon: <FaServer />,
      title: 'Suporte IT',
      description: 'Assistência técnica, apoio ao utilizador e resolução rápida de problemas.',
      link: '/services/support'
    },
    {
      icon: <FaServer />,
      title: 'Consultoria IT',
      description: 'Análise especializada e recomendações para otimizar sua infraestrutura tecnológica.',
      link: '/services/consulting'
    },
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas com foco em performance e experiência do utilizador.',
      link: '/services/web-development'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Aplicações Móveis',
      description: 'Aplicações nativas e híbridas para iOS e Android com experiências de utilizador excecionais.',
      link: '/services/mobile-apps'
    },
    {
      icon: <FaCloud />,
      title: 'Soluções Cloud',
      description: 'Migração, hospedagem e gestão de infraestrutura na nuvem para máxima escalabilidade.',
      link: '/services/cloud-solutions'
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <HeroSection
        title="Tecnologia que simplesmente funciona."
        subtitle="Suporte IT, Websites e Cloud para PMEs.
Menos problemas, mais soluções."
        ctaText="Pedir proposta"
        ctaLink="/contact"
        secondaryCtaText="Ver pacotes"
        secondaryCtaLink="/#pacotes"
        backgroundImage="/assets/images/hero.jpg"
        minimal
        primaryAriaLabel="Pedir proposta de serviços IT, websites e cloud"
        secondaryAriaLabel="Ver pacotes de serviços"
      />



      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Porquê escolher a GTIT?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Colocamos o foco no apoio e proximidade ao cliente, oferecendo soluções tecnológicas que realmente fazem a diferença no seu negócio.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </div>

  </section>

  {/* Pacotes e Preços */}
  <Packages />

  {/* FAQ */}
  <FAQ />
      
      {/* IT Support Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Parceria de Confiança no Suporte Informático</h2>
              <p className="text-lg text-gray-600 mb-8">
                Construímos relações de confiança duradouras com os nossos clientes. 
                Com mais de 10 anos de experiência, oferecemos suporte técnico especializado e contínuo, 
                manutenção proactiva e resolução rápida de problemas para manter a sua empresa sempre operacional.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Manutenção proactiva e actualização de sistemas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Resolução rápida e eficaz de problemas técnicos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Backup seguro e recuperação garantida de dados</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Consultoria estratégica em infraestrutura IT</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Suporte técnico disponível quando precisam</p>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Fale connosco sobre a nossa parceria de suporte IT
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img 
                src="/assets/images/infra-estrutura-de-rede.jpg" 
                alt="Suporte Informático GTIT" 
                className="rounded-lg shadow-lg w-full" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section id="pacotes" className="py-16 md:py-24 bg-gradient-to-r from-[#0066CC] to-[#0b1627] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Os nossos serviços
              </motion.h2>
              {/* Parágrafo removido conforme pedido pelo utilizador */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg h-full flex flex-col items-center text-center group bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="text-4xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            Precisa de apoio com o seu sistema informático?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto text-gray-600"
          >
            Entre em contacto connosco e descubra como podemos ajudar a manter o seu parque informático a funcionar de forma eficiente e segura.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Contactar para Suporte
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
