import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../context/LayoutContext';
import { 
  FaCalendar, FaUserMd, FaHospital, FaHeartbeat, 
  FaCheck, FaLungs, FaStethoscope, FaBrain,
  FaBone, FaHeart, FaWheelchair, FaAllergies
} from 'react-icons/fa';
import './SaudeDemo.css';

const SaudeDemo = () => {
  const navigate = useNavigate();
  const { restoreScrollPosition } = useLayout();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('consulta');
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [showThankYou, setShowThankYou] = useState(false);
  const [appointmentStep, setAppointmentStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    symptoms: ''
  });

  // Detect scroll for navbar styling
  useEffect(() => {
    // Set document body class for styling
    document.body.classList.add('saude-theme');
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Custom cursor implementation
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('saude-cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('saude-cursor-hover');
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.classList.remove('saude-theme');
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const specialties = [
    { id: 'cardiologia', name: 'Cardiologia', icon: <FaHeart className="w-5 h-5" /> },
    { id: 'neurologia', name: 'Neurologia', icon: <FaBrain className="w-5 h-5" /> },
    { id: 'pneumologia', name: 'Pneumologia', icon: <FaLungs className="w-5 h-5" /> },
    { id: 'ortopedia', name: 'Ortopedia', icon: <FaBone className="w-5 h-5" /> },
    { id: 'alergologia', name: 'Alergologia', icon: <FaAllergies className="w-5 h-5" /> },
    { id: 'clinica-geral', name: 'Clínica Geral', icon: <FaStethoscope className="w-5 h-5" /> }
  ];
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const services = [
    {
      icon: <FaUserMd className="w-12 h-12 text-cyan-600" />,
      title: 'Consultas Médicas',
      description: 'Atendimento personalizado com profissionais especializados em diversas áreas da medicina.'
    },
    {
      icon: <FaHeartbeat className="w-12 h-12 text-cyan-600" />,
      title: 'Exames Diagnósticos',
      description: 'Equipamentos modernos e resultados precisos para diagnósticos seguros e eficazes.'
    },
    {
      icon: <FaHospital className="w-12 h-12 text-cyan-600" />,
      title: 'Centro de Tratamento',
      description: 'Instalações confortáveis e equipe multidisciplinar dedicada ao seu bem-estar.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Anos de Experiência', icon: <FaCalendar className="w-6 h-6 text-cyan-500" /> },
    { value: '50+', label: 'Médicos Especialistas', icon: <FaUserMd className="w-6 h-6 text-cyan-500" /> },
    { value: '10k+', label: 'Pacientes Atendidos', icon: <FaWheelchair className="w-6 h-6 text-cyan-500" /> },
    { value: '98%', label: 'Taxa de Satisfação', icon: <FaCheck className="w-6 h-6 text-cyan-500" /> }
  ];

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    setAppointmentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setAppointmentStep(prev => prev - 1);
  };
  
  const submitAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setAppointmentStep(1);
      setAppointmentData({
        specialty: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        symptoms: ''
      });
      setActiveTab('home');
    }, 3000);
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return (
    <div className="saude-demo">
      {/* Blue heart cursor */}
      <div ref={cursorRef} className="saude-cursor" />
      {/* Navigation */}
      <nav className={`saude-nav fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <button onClick={handleReturnToWebDevelopment} className="flex items-center gap-2 cursor-pointer">
              <motion.div 
                className="bg-cyan-500 text-white p-2 rounded-md"
                whileHover={{ rotate: 5 }}
              >
                <FaHeartbeat className="w-6 h-6" />
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-cyan-600">Saúde+</span>
                <div className="text-xs text-cyan-500 -mt-1">Clínica de Saúde</div>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActiveTab('home')} className={`saude-nav-link ${activeTab === 'home' ? 'text-cyan-600 active' : ''}`}>
                Home
              </button>
              <button onClick={() => setActiveTab('especialidades')} className={`saude-nav-link ${activeTab === 'especialidades' ? 'text-cyan-600 active' : ''}`}>
                Especialidades
              </button>
              <button onClick={() => setActiveTab('servicos')} className={`saude-nav-link ${activeTab === 'servicos' ? 'text-cyan-600 active' : ''}`}>
                Serviços
              </button>
              <button onClick={() => setActiveTab('consulta')} className={`saude-nav-link ${activeTab === 'consulta' ? 'text-cyan-600 active' : ''}`}>
                Agende a sua consulta
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-cyan-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Início', 'Serviços', 'Especialidades', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="saude-nav-link text-gray-600 hover:text-cyan-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            {['Início', 'Serviços', 'Especialidades', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>      {/* Hero Section com design elegante e profissional */}
      <section className="saude-hero pt-32 pb-20 relative overflow-hidden">
        {/* Background com elementos sutis */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gradiente de fundo */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/90 via-cyan-800/80 to-cyan-900/90" />
          
          {/* Padrão de pontos/grid para dar profundidade */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Linhas decorativas sutis */}
          <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
          <div className="absolute bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6 inline-block"
            >
              <div className="p-3 rounded-full border border-cyan-400/30">
                <FaHeartbeat className="text-3xl text-cyan-400" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Cuidamos do seu bem-estar com excelência
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-10 text-white/80 leading-relaxed"
            >
              Oferecemos atendimento humanizado e tecnologia avançada para garantir a sua qualidade de vida.
            </motion.p>

            {/* Linha decorativa */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-0.5 bg-cyan-400 mx-auto mb-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href="#agendar"
                className="px-8 py-3 bg-cyan-600 text-white hover:bg-cyan-700 transition-all duration-300 rounded font-medium flex items-center justify-center gap-2"
              >
                <FaCalendar className="text-lg" />
                <span>Marcar consulta</span>
              </a>
              <a
                href="#servicos"
                className="px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-cyan-800 transition-all duration-300 rounded font-medium flex items-center justify-center gap-2"
              >
                <FaStethoscope className="text-lg" />
                <span>Os nossos serviços</span>
              </a>
            </motion.div>
            
            {/* Stats em layout elegante */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-0 max-w-3xl mx-auto mt-16">
              {stats.slice(0, 4).map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className="p-6 border-r border-b last:border-r-0 md:even:border-r-0 md:last:border-r md:last:border-b-0 md:nth-last-child(2):border-b-0 border-white/10"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-cyan-400 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os nossos serviços</h2>
            <p className="text-lg text-gray-600">
              Dispomos de uma ampla gama de serviços para cuidar da sua saúde e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="saude-card bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="saude-icon p-4 bg-cyan-50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="saude-stats py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="agendar" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende a sua consulta</h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e entraremos em contacto para confirmar o seu agendamento.
              </p>
            </div>

            <form className="saude-appointment-form bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    placeholder="Digite seu telefone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Especialidade
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  >
                    <option value="">Selecione uma especialidade</option>
                    <option value="clínica-geral">Clínica Geral</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="ortopedia">Ortopedia</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  rows={4}
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-300 rounded-md font-medium"
                >
                  Solicitar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Return to Web Development */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={handleReturnToWebDevelopment}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Voltar ao Desenvolvimento Web</span>
        </button>
      </div>
    </div>
  );
};

export default SaudeDemo;
