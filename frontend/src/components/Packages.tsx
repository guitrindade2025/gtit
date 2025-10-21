
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Suporte IT Essencial',
    price: 'desde 150€/mês (+IVA)',
    intro: 'Inclui até 10 utilizadores.',
    features: [
      'Administração Microsoft 365',
      'Suporte remoto e presencial',
      'Monitorização básica e revisão trimestral',
  'Extras:',
  '— Utilizadores adicionais: 25€/mês cada',
      '— Trabalhos fora do plano: 45€/h (+IVA)',
    ],
    
  },
  {
    title: 'Website Profissional',
    price: '1 200€–1 800€ (+IVA)',
    intro: '',
    features: [
      'Website responsivo (4–6 secções) + blog',
      'SEO básico + Google Analytics',
      'Formulários com RGPD',
      'Alojamento incluído 12 meses',
      'Extras:',
      '— Manutenção opcional: 25–40€/mês (+IVA)',
    ],
  },
  {
    title: 'Cloud & Backup Completo',
    price: '600€–900€ implementação + 150€/mês (+IVA)',
    intro: '',
    features: [
      'NAS local configurado',
      'Backup Microsoft 365',
      'Redundância em cloud',
      'Relatório mensal + teste de recuperação trimestral',
    ],
    sla: '',
  },
];

export default function Packages() {
  return (
    <section id="pacotes" className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-32 bg-gradient-to-r from-primary/10 via-transparent to-blue-200 blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary drop-shadow"
        >
          Pacotes e Preços
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12"
        >
          Escolha o pacote ideal para o seu negócio. Todos incluem suporte dedicado e implementação rápida.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-blue-50 p-8 md:p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-primary text-xl font-semibold mb-2 text-center drop-shadow-sm" style={{ cursor: 'none' }}>{pkg.title}</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">{pkg.price}</p>
              {pkg.intro && (
                <p className="text-sm text-blue-700 mt-4 text-center font-medium">{pkg.intro}</p>
              )}
              <ul className="text-gray-700 space-y-2 text-base leading-relaxed mb-4">
                {pkg.features.map((feature, i) => {
                  if (feature === 'Extras:') {
                    return (
                      <div key={i} className="mt-4 mb-2 font-semibold text-blue-700 text-sm">Extras:</div>
                    );
                  }
                  if (feature.startsWith('—')) {
                    return (
                      <li key={i} className="ml-4 list-disc text-sm text-gray-600">{feature.replace('— ', '')}</li>
                    );
                  }
                  return (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              {pkg.sla && (
                <div className="mb-2 text-sm text-center text-blue-600"><strong>SLA:</strong> {pkg.sla}</div>
              )}
              <div className="flex-grow" />
              <div className="flex items-end justify-center h-20">
                <Link
                  to={pkg.title === 'Website Profissional' ? '/services/web-development' : '/contact#pacotes'}
                  aria-label={`Saber mais sobre o pacote ${pkg.title}`}
                  className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors shadow text-center"
                >
                  Saber mais
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
