import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import './AdvogadosDemo.css';

const AdvogadosDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('areas');
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const cursorRef = useRef<HTMLDivElement>(null);

  // Handle custom cursor
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Inline cursor styles for links
    const links = document.querySelectorAll('a, button');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Função para retornar à página anterior e restaurar posição
  const handleReturnToWebDevelopment = () => {
    navigate('/services/web-development');
    // Delay para permitir que a navegação aconteça antes de restaurar o scroll
    setTimeout(() => {
      restoreScrollPosition();
    }, 100);
  };

  // Navigation items
  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Equipe', href: '#team' },
    { name: 'Contato', href: '#contact' }
  ];

  // Practice areas
  const practiceAreas = [
    { name: 'Direito Civil', icon: 'balance-scale' },
    { name: 'Direito Trabalhista', icon: 'briefcase' },
    { name: 'Direito Empresarial', icon: 'building' },
    { name: 'Direito Tributário', icon: 'file-invoice-dollar' },
    { name: 'Direito da Família', icon: 'users' },
    { name: 'Direito Imobiliário', icon: 'home' }
  ];

  // Team members
  const teamMembers = [
    { name: 'Dr. João Silva', role: 'Advogado Sênior', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Dra. Maria Santos', role: 'Especialista em Direito Civil', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Dr. Pedro Almeida', role: 'Especialista em Direito Empresarial', photo: 'https://randomuser.me/api/portraits/men/62.jpg' }
  ];

  return (
    <div className="relative bg-gray-50 text-gray-800 min-h-screen overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="advogados-cursor fixed w-6 h-6 rounded-full border-2 border-amber-600 pointer-events-none z-50 transition-transform duration-100"
      />

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pattern-background"></div>

      {/* Content */}
      <div className="relative z-20">
        {/* Header */}
        <header className="py-4 px-6 md:px-12 bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 rounded-md bg-amber-800 flex items-center justify-center text-white font-serif text-xl mr-4">A</div>
              <span className="text-2xl font-serif text-amber-900">
                ADVOGADOS<span className="text-amber-600">&</span>ASSOCIADOS
              </span>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block md:hidden text-2xl"
            >
              ☰
            </motion.button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Law Office" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '100px' }} 
                transition={{ duration: 1 }} 
                className="h-1 bg-amber-600 mb-8"
              ></motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
              >
                Excelência Jurídica e Tradição
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 mb-10 font-light max-w-2xl"
              >
                Com mais de 25 anos de experiência, o nosso escritório oferece soluções jurídicas 
                especializadas para proteger os seus direitos e interesses com competência e dedicação.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#contact"
                  className="btn-gold px-8 py-4 font-medium transition-all duration-300 inline-flex items-center justify-center"
                >
                  Marque uma Consulta
                </a>
                <a 
                  href="#areas"
                  className="border border-white/30 hover:border-amber-600 text-white px-8 py-4 font-medium transition-all duration-300 inline-flex items-center justify-center"
                >
                  Áreas de Atuação
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="h-1 w-20 bg-amber-600 mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nosso Compromisso com a Justiça</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Fundado em 1998, o nosso escritório de advocacia construiu uma reputação de excelência, integridade e resultados. 
                  A nossa filosofia de trabalho baseia-se no atendimento personalizado e na procura constante pela melhor solução jurídica.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Procuramos não apenas resolver questões legais, mas estabelecer relações duradouras com os nossos clientes, 
                  compreendendo as suas necessidades e objetivos para oferecer um apoio jurídico completo e eficaz.
                </p>
                <div className="flex gap-8 mt-10">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-amber-800">25+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-amber-800">2000+</div>
                    <div className="text-gray-600">Casos de Sucesso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-amber-800">15+</div>
                    <div className="text-gray-600">Advogados Especialistas</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative before:absolute before:bg-amber-600/80 before:inset-0 before:scale-y-[1.05] before:scale-x-[1.05] before:-rotate-6 before:rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1505&q=80" 
                    alt="Law Office" 
                    className="rounded-md shadow-xl relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section id="areas" className="py-20 px-6 bg-slate-900 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="h-1 w-20 bg-amber-600 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Áreas de Atuação</h2>
              <p className="text-lg text-white/80">
                Oferecemos apoio jurídico especializado em diversas áreas do direito, sempre com foco 
                na excelência e no atendimento personalizado às necessidades de cada cliente.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 rounded-md p-8 border border-amber-600/30 
                             transition-all duration-300 hover:shadow-amber-600/10 hover:shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mb-6">
                    <i className={`fas fa-${area.icon} text-amber-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{area.name}</h3>
                  <p className="text-white/70">
                    Consultoria especializada e representação jurídica em todas as instâncias, 
                    oferecendo soluções eficazes e personalizadas.
                  </p>
                  <a href="#contact" className="inline-block mt-6 text-amber-600 hover:text-amber-400 font-medium">
                    Saiba mais →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="h-1 w-20 bg-amber-600 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nossa Equipe</h2>
              <p className="text-lg text-gray-700">
                Conheça os advogados especialistas que formam a nossa equipa, profissionais dedicados 
                e comprometidos com a defesa dos interesses dos nossos clientes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md overflow-hidden shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                    <p className="text-amber-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">
                      Com vasta experiência e formação especializada, oferece consultoria jurídica de excelência.
                    </p>
                    <div className="mt-4 flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-amber-600">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-amber-600">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="h-1 w-20 bg-amber-600 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">O que Dizem Nossos Clientes</h2>
                <p className="text-lg text-gray-700">
                  A opinião dos nossos clientes é o melhor testemunho da qualidade e compromisso 
                  dos nossos serviços jurídicos.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-md shadow-lg relative"
              >
                <div className="text-amber-600 text-5xl absolute -top-5 -left-2">"</div>
                <p className="text-gray-700 mb-6 pt-4">
                  A equipe demonstrou profundo conhecimento jurídico e total comprometimento com meu caso. 
                  Foram ágeis, eficientes e sempre me mantiveram informado. Resultado excelente!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="Cliente" />
                  </div>
                  <div>
                    <h4 className="font-bold">Roberto Mendes</h4>
                    <p className="text-gray-500 text-sm">Cliente desde 2019</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-md shadow-lg relative"
              >
                <div className="text-amber-600 text-5xl absolute -top-5 -left-2">"</div>
                <p className="text-gray-700 mb-6 pt-4">
                  Atendimento excepcional e resultados além das expectativas. A dedicação 
                  dos advogados e o conhecimento técnico fizeram toda a diferença no meu processo.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Cliente" />
                  </div>
                  <div>
                    <h4 className="font-bold">Carla Oliveira</h4>
                    <p className="text-gray-500 text-sm">Cliente desde 2020</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-md shadow-lg relative"
              >
                <div className="text-amber-600 text-5xl absolute -top-5 -left-2">"</div>
                <p className="text-gray-700 mb-6 pt-4">
                  Profissionalismo, ética e eficiência definem o trabalho deste escritório. 
                  Solucionaram minha questão empresarial com maestria, sempre com comunicação clara.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="Cliente" />
                  </div>
                  <div>
                    <h4 className="font-bold">Marcelo Santos</h4>
                    <p className="text-gray-500 text-sm">Cliente desde 2018</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="h-1 w-20 bg-amber-600 mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Entre em Contato</h2>
                <p className="text-lg text-white/80 mb-8">
                  Estamos à disposição para esclarecer as suas dúvidas e oferecer a orientação 
                  jurídica que necessita. Marque uma consulta ou entre em contacto.
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-amber-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Endereço</h4>
                      <p className="text-white/70">Av. da Liberdade, 100, Lisboa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-amber-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Telefone</h4>
                      <p className="text-white/70">(11) 3000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-amber-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-white/70">contacto@advogadoseassociados.pt</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="bg-white p-8 rounded-md">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Agende uma Consulta</h3>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-gray-800"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-gray-800"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-gray-800"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Assunto</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-gray-800">
                      <option value="">Selecione uma área</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area.name}>{area.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-gray-800"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-amber-800 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 text-white/70">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-md bg-amber-800 flex items-center justify-center text-white font-serif text-xl mr-4">A</div>
                  <span className="text-2xl font-serif text-white">
                    ADVOGADOS<span className="text-amber-600">&</span>ASSOCIADOS
                  </span>
                </div>
                <p>© 2025 Advogados & Associados. Todos os direitos reservados.</p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
                {/* Botão removido do footer */}
              </div>
            </div>
          </div>
        </footer>

        {/* Botão fixo para voltar ao Desenvolvimento Web */}
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={handleReturnToWebDevelopment}
            className="bg-amber-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center hover:bg-amber-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar ao Desenvolvimento Web
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvogadosDemo;
