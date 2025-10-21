// SLA: não prometer “mesmo dia”. Padrão = 24–48h úteis. Prioridade opcional (até 8h).
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Que tipo de suporte oferecem?',
    answer: 'Damos assistência técnica permanente, manutenção preventiva e resolução rápida de problemas. Adaptamos o nível de serviço às necessidades da sua empresa.'
  },
  {
    question: 'Tratam da gestão de domínios e DNS?',
    answer: 'Sim. Fazemos registo, renovação e configuração de domínios e DNS. Também aplicamos políticas de segurança (DKIM, SPF, DMARC) para proteger a reputação digital da sua organização.'
  },
  {
    question: 'Gerem contas Microsoft 365?',
    answer: 'Sim. Gerimos utilizadores, permissões, segurança e backups. Também ajudamos na adoção de novas funcionalidades do Microsoft 365 para aumentar produtividade e proteger dados.'
  },
  {
    question: 'Criam e mantêm sites?',
    answer: 'Criamos sites institucionais, lojas online e landing pages com design moderno, adaptativo e otimizado para SEO e desempenho.'
  },
  {
    question: 'Como garantem a segurança e continuidade dos serviços?',
    answer: 'Realizamos backups regulares, planos de recuperação em caso de falha e reforço de segurança nos sistemas, garantindo estabilidade e continuidade.'
  },
  {
    question: 'Posso contratar apenas um serviço?',
    answer: 'Claro. Pode contratar apenas aquilo que precisa (ex.: só gestão de domínios ou apenas suporte Microsoft 365) ou um pacote completo de suporte.'
  },
  {
    question: 'Como funcionam os orçamentos e contratos?',
    answer: 'Apresentamos sempre propostas claras com valores e prazos definidos. Nos serviços recorrentes, celebramos contratos de manutenção com relatórios periódicos.'
  },
  {
    question: 'O que devo fazer em caso de incidente grave?',
    answer: 'Contacte-nos de imediato pelo canal de emergência indicado no acordo. Temos procedimentos estruturados para reduzir o impacto e restaurar os serviços rapidamente.'
  }
] as const;

const FAQ = () => (
  <section className="py-16 md:py-24 bg-white dark:bg-[#0b1627]">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
      >
        Perguntas Frequentes
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-[#101c36] rounded-lg p-6"
            >
                <h3 className="text-lg font-semibold mb-3 text-primary" style={{ cursor: 'none' }}>
                {faq.question}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
