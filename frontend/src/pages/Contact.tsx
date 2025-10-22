import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaCheckCircle, 
  FaExclamationTriangle 
} from 'react-icons/fa';
import { type ContactFormData } from '../services/api';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // React Hook Form
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<ContactFormData>();
  
  // Contact info data
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: 'Localização',
      details: [
        'Lisboa, Portugal',
        'Serviços remotos e presenciais'
      ],
    },
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: 'Telefone',
      details: [
        '+351 93 409 4801',        
      ],
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: 'Email',
      details: [
        'suporte@gtit.pt',        
      ],
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: 'Horário',
      details: [
        'Segunda - Sexta: 9:00 - 18:00',  
      ],
    }
  ];

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('submitting');
    setErrorMessage(null);
    try {
      await emailjs.send(
        'service_k6pwatr', // Service ID
        'template_htre21b', // Template ID
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'OyScfh5Re3iaf3zdA' // Public Key
      );
      setFormStatus('success');
      reset();
    } catch (error) {
  setFormStatus('error');
  setErrorMessage('Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fale Connosco
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Tem alguma dúvida ou precisa de informações sobre os nossos serviços? Entre em contacto connosco e responderemos o mais breve possível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact-form" className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full"
              >
                <h2 className="text-2xl font-bold mb-6">Informações de Contacto</h2>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        {/* Adiciona o botão "Ligar Agora" logo abaixo do bloco Horário */}
                          {item.title === 'Horário' && (
                            <div style={{ marginTop: '1cm' }}>
                              <Link 
                                to="tel:+351211234567" 
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                              >
                                <FaPhone className="mr-2" />
                                Ligar Agora
                              </Link>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
                
                {/* Success message */}
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <p className="text-green-700">
                      A sua mensagem foi enviada..
                    </p>
                  </div>
                )}
                
                {/* Error message */}
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
                    <FaExclamationTriangle className="text-red-500 mr-3" />
                    <p className="text-red-700">
                      {errorMessage || 'Ocorreu um erro ao enviar a sua mensagem.'}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="O seu nome"
                      {...register('name', { required: 'Este campo é de preenchimento obrigatório' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="o.seu.email@exemplo.com"
                      {...register('email', { 
                        required: 'Este campo é de preenchimento obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'O endereço de email é inválido'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="+351 900 000 000"
                      {...register('phone')}
                    />
                  </div>
                  
                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Como podemos ajudá-lo?"
                      {...register('subject', { required: 'Este campo é de preenchimento obrigatório' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Escreva a sua mensagem aqui..."
                      {...register('message', { required: 'Este campo é de preenchimento obrigatório' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center justify-center">
                          <svg 
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : 'Enviar Mensagem'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
  {/* Location Section removido */}
    </main>
  );
};

export default Contact;
