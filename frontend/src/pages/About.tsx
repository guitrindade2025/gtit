import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaBriefcase, FaRegLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';

const About = () => {
  // Animation settings
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Counter animation hook
  function useCounterUp(target: number, start: boolean, duration = 1200) {
    const [count, setCount] = useState(start ? target : 0);
    useEffect(() => {
      if (!start) return;
      let startTime: number | null = null;
      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
        else setCount(target);
      }
      requestAnimationFrame(step);
      return () => setCount(target);
    }, [start, target, duration]);
    return count;
  }

  // Statistics data
  const stats = [
    { value: 120, label: 'Projetos Entregues', prefix: '+' },
    { value: 95, label: 'Taxa de Satisfação', suffix: '%' },
    { value: 10, label: 'Anos de Experiência', suffix: '+' },
    { value: 250, label: 'Clientes Satisfeitos', prefix: '+' },
  ];

  // Values data
  const values = [
    {
      icon: <FaHandshake className="text-3xl text-primary" />,
      title: 'Suporte Dedicado',
      description: 'Oferecemos apoio técnico especializado e personalizado para garantir o funcionamento otimizado dos seus sistemas.',
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      title: 'Parceria',
      description: 'Construímos relacionamentos de longo prazo baseados na confiança e no crescimento dos nossos clientes.',
    },
    {
      icon: <FaBriefcase className="text-3xl text-primary" />,
      title: 'Fiabilidade',
      description: 'Comprometemo-nos com soluções estáveis e confiáveis que garantem a continuidade do seu negócio.',
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-primary" />,
      title: 'Adaptação',
      description: 'Adaptamos as nossas soluções às necessidades específicas de cada cliente e às evoluções tecnológicas.',
    },
  ];

  return (
    <>
      {/* Page Header - Simple & Consistent */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Sobre Nós</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O seu parceiro de confiança em suporte e soluções tecnológicas personalizadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Natural & Simple */}
      <section className="section bg-white" ref={missionRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/images/icon-internet-world-nas-maos-de-uma-tecnologia-de-rede-de-empresario-e-comunicacao_34998-149.jpg"
                alt="Suporte e Conectividade Global"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-secondary">Sobre Nós</h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                As Tecnologias de Informação são hoje a base de funcionamento de qualquer empresa. A sua correta gestão é essencial ao desenvolvimento do seu negócio.
              </p>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                A nossa proposta é garantir que os trabalhadores têm à sua disposição as ferramentas adequadas à sua missão, totalmente funcionais e com isso aumentar a sua produtividade.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Com <strong>mais de 10 anos de experiência</strong> no mercado e <strong>mais de 120 projetos entregues</strong>, consolidámo-nos como parceiros estratégicos de empresas que procuram excelência em soluções tecnológicas. A nossa <strong>taxa de satisfação de 95%</strong> e <strong>mais de 250 clientes satisfeitos</strong> refletem o nosso compromisso com a qualidade e inovação.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Highlighted Stats */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white" ref={statsRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Nosso Progresso
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Números que refletem o nosso compromisso e dedicação aos nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const value = useCounterUp(stat.value, statsInView);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6"
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.prefix || ''}{value}{stat.suffix || ''}
                  </h3>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section - Simple & Clean */}
      <section className="section bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <FaBriefcase className="mr-3 text-xl" />
                A Nossa Missão
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Ser o parceiro tecnológico de confiança das empresas, oferecendo suporte especializado e soluções personalizadas que garantem o funcionamento eficiente dos seus sistemas de informação, permitindo que se concentrem no que fazem melhor.
              </p>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary flex items-center">
                <FaUsers className="mr-3 text-xl" />
                A Nossa Visão
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecidos como a referência em suporte e consultoria tecnológica, sendo o parceiro preferencial das empresas que procuram estabilidade, confiança e apoio contínuo nas suas infraestruturas de TI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Simple & Natural */}
      <section className="section bg-white" ref={valuesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Os nossos valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que norteiam as nossas ações e decisões em todos os aspectos do nosso trabalho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience and Expertise Section */}
      <section className="section bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Experiência Comprovada</h2>
              <p className="text-gray-600 mb-4">
                Ao longo de <strong>mais de 10 anos</strong> no mercado, desenvolvemos expertise em diversas áreas tecnológicas, sempre adaptando-nos às necessidades em constante evolução das empresas modernas.
              </p>
              <p className="text-gray-600 mb-6">
                A nossa abordagem personalizada permite-nos criar soluções que não apenas resolvem problemas imediatos, mas também preparam as organizações para os desafios futuros.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/images/infra-estrutura-de-rede.jpg"
                alt="Infraestrutura Tecnológica"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Nosso Compromisso</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mais do que fornecedores de tecnologia, somos parceiros comprometidos com o sucesso dos nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRegLightbulb className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Oferecemos suporte técnico especializado para garantir que as suas soluções funcionem sempre de forma otimizada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Relacionamento de Confiança</h3>
              <p className="text-gray-600">
                Construímos parcerias duradouras baseadas na transparência, comunicação clara e resultados consistentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Soluções Personalizadas</h3>
              <p className="text-gray-600">
                Cada empresa é única. Por isso, desenvolvemos soluções à medida que se adaptam perfeitamente às suas necessidades.
              </p>
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
              Pronto para Transformar o Seu Negócio?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Contacte-nos hoje e descubra como podemos ajudar a sua empresa a alcançar novos patamares de eficiência e produtividade.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg"
              >
                Contacte-nos
              </a>
              <a
                href="/services"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 text-lg"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
