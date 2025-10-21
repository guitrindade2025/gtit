import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useDemoCursor from '../../hooks/useDemoCursor';
// importação removida pois não é utilizada
import './DemoCursor.css';

// Componentes de app móvel simulado
const AppHeader = () => (
  <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-xl">
    <div className="flex items-center">
      <div className="text-2xl font-bold">SaudeMobile</div>
    </div>
    <div className="flex space-x-2">
      <div className="bg-white bg-opacity-30 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div className="bg-white bg-opacity-30 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>
  </div>
);

const AppBottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', name: 'Home', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ) },
    { id: 'consultas', name: 'Consultas', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ) },
    { id: 'medicamentos', name: 'Medicamentos', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ) },
    { id: 'perfil', name: 'Perfil', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ) }
  ];

  return (
    <div className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 px-6 py-2 flex justify-between rounded-b-xl">
      {tabs.map(tab => (
        <button 
          key={tab.id} 
          className={`flex flex-col items-center p-2 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <div className={`${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'}`}>
            {tab.icon}
          </div>
          <span className="text-xs mt-1">{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

// Página Demo de Aplicativo Móvel
const MobileAppsDemo = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { cursorRef } = useDemoCursor();
  const [showAgendar, setShowAgendar] = useState(false);
  // Dados de exemplo para a aplicação
  const proximasConsultas = [
    { id: 1, doctor: 'Dra. Maria Silva', specialty: 'Cardiologia', date: '15/06/2025', time: '14:30', status: 'Confirmada' },
    { id: 2, doctor: 'Dr. João Costa', specialty: 'Ortopedia', date: '22/06/2025', time: '10:00', status: 'Pendente' },
    { id: 3, doctor: 'Dra. Ana Ferreira', specialty: 'Dermatologia', date: '30/06/2025', time: '16:00', status: 'Confirmada' }
  ];
  const medicamentos = [
    { id: 1, name: 'Paracetamol', dosage: '500mg', frequency: '8/8h', days: 'Seg, Ter, Qua, Qui, Sex, Sáb, Dom', checked: false },
    { id: 2, name: 'Omeprazol', dosage: '20mg', frequency: '1x ao dia', days: 'Seg, Ter, Qua, Qui, Sex, Sáb, Dom', checked: false },
    { id: 3, name: 'Losartana', dosage: '50mg', frequency: '12/12h', days: 'Seg, Ter, Qua, Qui, Sex, Sáb, Dom', checked: false },
    { id: 4, name: 'Vitamina D', dosage: '2000UI', frequency: '1x ao dia', days: 'Seg, Qua, Sex', checked: false }
  ];
  const notificacoes = [
    { id: 1, text: 'Nova consulta disponível para agendamento!', type: 'info' },
    { id: 2, text: 'Lembrete: tomar Paracetamol às 14:00', type: 'reminder' },
    { id: 3, text: 'Resultado de exame disponível', type: 'success' }
  ];
  // Simples gráfico de saúde (mock)
  const healthStats = [
    { label: 'Passos', value: 7500, goal: 10000 },
    { label: 'Sono', value: 7, goal: 8 },
    { label: 'Água', value: 1.5, goal: 2 }
  ];
  return (
    <div className="min-h-screen bg-gray-100 demo-page">
      {/* Cursor personalizado */}
      <div ref={cursorRef} className="demo-cursor"></div>
      
      <div className="container mx-auto px-4 py-6 mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Coluna esquerda - Informações */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Aplicativo SaudeMobile
              </h1>
              
              <p className="text-lg text-gray-700 mb-8">
                Um exemplo de aplicativo móvel para gestão de saúde, desenvolvido pela nossa equipe. 
                Esta demonstração ilustra a interface de usuário e as funcionalidades principais 
                que podemos implementar em seu projeto.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Design Intuitivo</h3>
                    <p className="text-gray-600">Interface limpa e fácil de usar, adaptada para diferentes tamanhos de tela.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Funcionalidades Personalizáveis</h3>
                    <p className="text-gray-600">Módulos adaptados às necessidades específicas do seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Alto Desempenho</h3>
                    <p className="text-gray-600">Aplicações rápidas e responsivas mesmo com grandes volumes de dados.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services/mobile-apps" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <span>Saiba Mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Coluna direita - Simulação de App */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-8 border-gray-800" style={{ maxWidth: '360px', margin: '0 auto', height: '640px' }}>
              {/* App Header */}
              <AppHeader />
              
              {/* App Content */}
              <div className="p-4 h-full" style={{ maxHeight: 'calc(100% - 128px)', overflowY: 'auto' }}>
                {activeTab === 'home' && (
                  <div>
                    {/* Notificações */}
                    <div className="mb-4">
                      {notificacoes.map(n => (
                        <div key={n.id} className={`rounded-lg p-3 mb-2 text-sm shadow-sm ${n.type === 'info' ? 'bg-blue-50 text-blue-700' : n.type === 'reminder' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                          {n.text}
                        </div>
                      ))}
                    </div>
                    {/* Card de boas-vindas */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Olá, Carlos!</h3>
                        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">CS</div>
                      </div>
                      <p className="text-sm text-gray-600">Bem-vindo de volta ao seu assistente de saúde</p>
                    </div>
                    {/* Gráfico simples de saúde */}
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Resumo de Saúde</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {healthStats.map(stat => (
                          <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-2 text-center">
                            <div className="font-bold text-blue-600">{stat.value}{stat.label === 'Água' ? 'L' : stat.label === 'Sono' ? 'h' : ''}</div>
                            <div className="text-xs text-gray-500">{stat.label} <span className="text-gray-400">/ {stat.goal}{stat.label === 'Água' ? 'L' : stat.label === 'Sono' ? 'h' : stat.label === 'Passos' ? '' : ''}</span></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Próximas Consultas */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Próximas Consultas</h3>
                        <button className="text-blue-500 text-sm" onClick={() => setActiveTab('consultas')}>Ver todas</button>
                      </div>
                      {proximasConsultas.map(consulta => (
                        <div key={consulta.id} className="bg-white border border-gray-200 rounded-lg p-3 mb-2 shadow-sm flex justify-between items-center">
                          <div>
                            <p className="font-medium">{consulta.doctor}</p>
                            <p className="text-sm text-gray-600">{consulta.specialty}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-blue-600 font-medium">{consulta.date}</p>
                            <p className="text-sm text-gray-600">{consulta.time}</p>
                            <span className={`text-xs px-2 py-0.5 rounded ${consulta.status === 'Confirmada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{consulta.status}</span>
                          </div>
                        </div>
                      ))}
                      <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded" onClick={() => setShowAgendar(true)}>Marcar consulta</button>
                    </div>
                    {/* Medicamentos de Hoje */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Medicamentos de Hoje</h3>
                        <button className="text-blue-500 text-sm" onClick={() => setActiveTab('medicamentos')}>Ver todos</button>
                      </div>
                      {medicamentos.slice(0,2).map(med => (
                        <div key={med.id} className="bg-white border border-gray-200 rounded-lg p-3 mb-2 shadow-sm flex justify-between items-center">
                          <div>
                            <p className="font-medium">{med.name} {med.dosage}</p>
                            <p className="text-sm text-gray-600">Tomar {med.frequency}</p>
                          </div>
                          <input type="checkbox" className="h-5 w-5 text-blue-500" />
                        </div>
                      ))}
                    </div>
                    {/* Modal de agendamento simples */}
                    {showAgendar && (
                      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-80 shadow-xl">
                          <h3 className="text-lg font-bold mb-4">Agendar Consulta</h3>
                          <div className="mb-2">
                            <label className="block text-sm mb-1">Especialidade</label>
                            <select className="w-full p-2 border border-gray-300 rounded">
                              <option>Cardiologia</option>
                              <option>Ortopedia</option>
                              <option>Dermatologia</option>
                              <option>Clínico Geral</option>
                            </select>
                          </div>
                          <div className="mb-2">
                            <label className="block text-sm mb-1">Data</label>
                            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                          </div>
                          <div className="mb-2">
                            <label className="block text-sm mb-1">Hora</label>
                            <input type="time" className="w-full p-2 border border-gray-300 rounded" />
                          </div>
                          <button className="w-full bg-blue-500 text-white p-2 rounded mt-2" onClick={() => setShowAgendar(false)}>Agendar</button>
                          <button className="w-full mt-2 text-blue-500" onClick={() => setShowAgendar(false)}>Cancelar</button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'consultas' && (
                  <div>
                    <h2 className="text-lg font-medium mb-4">Suas Consultas</h2>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                      <h3 className="font-medium mb-2">Agendar Nova Consulta</h3>
                      
                      <div className="mb-3">
                        <label className="block text-sm text-gray-600 mb-1">Especialidade</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                          <option>Selecione uma especialidade</option>
                          <option>Cardiologia</option>
                          <option>Dermatologia</option>
                          <option>Ortopedia</option>
                          <option>Oftalmologia</option>
                        </select>
                      </div>
                      
                      <div className="mb-3">
                        <label className="block text-sm text-gray-600 mb-1">Data Preferencial</label>
                        <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                      </div>
                      
                      <button className="w-full bg-blue-500 text-white p-2 rounded">
                        Verificar Disponibilidade
                      </button>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Histórico de Consultas</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-3 mb-2">
                        <p className="font-medium">Dr. Pedro Santos</p>
                        <p className="text-sm text-gray-600">Clínico Geral</p>
                        <p className="text-sm text-gray-500 mt-1">05/05/2025 - 9:00</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3 mb-2">
                        <p className="font-medium">Dra. Ana Ferreira</p>
                        <p className="text-sm text-gray-600">Dermatologia</p>
                        <p className="text-sm text-gray-500 mt-1">28/04/2025 - 14:30</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'medicamentos' && (
                  <div>
                    <h2 className="text-lg font-medium mb-4">Seus Medicamentos</h2>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Medicamentos Atuais</h3>
                        <button className="text-blue-500 text-sm">Adicionar</button>
                      </div>
                      
                      {medicamentos.map(med => (
                        <div key={med.id} className="bg-white border border-gray-200 rounded-lg p-3 mb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{med.name}</p>
                              <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                              <p className="text-xs text-gray-500 mt-1">{med.days}</p>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Lembretes</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <p className="mb-2">Configure lembretes para não esquecer de tomar seus medicamentos</p>
                        <button className="w-full bg-blue-500 text-white p-2 rounded">
                          Configurar Lembretes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'perfil' && (
                  <div>
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-blue-500 text-2xl font-bold">CS</span>
                      </div>
                      <h2 className="text-xl font-medium">Carlos Silva</h2>
                      <p className="text-gray-600">carlos.silva@email.com</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>Informações Pessoais</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span>Privacidade e Segurança</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Configurações</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Ajuda e Suporte</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3 mt-6">
                        <div className="flex items-center text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span>Sair</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* App Bottom Navigation */}
              <AppBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </motion.div>
        </div>
        
        {/* Back to services link */}
        <div className="mt-16 text-center">
          <Link
            to="/services/mobile-apps"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Aplicações Móveis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAppsDemo;
