import { Link } from 'react-router-dom';
import { FaDesktop, FaMicrosoft, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import Packages from '../components/Packages';
import HeroSection from '../components/ui/HeroSection';

const areas = [
  { icon: FaDesktop, title: 'Apoio aos utilizadores', text: 'Diagnóstico de problemas em computadores, aplicações e periféricos. Assistência remota e intervenções presenciais em Lisboa, de acordo com o serviço contratado.' },
  { icon: FaMicrosoft, title: 'Microsoft 365', text: 'Gestão de contas, acessos e permissões. Apoio ao email, Teams, OneDrive e SharePoint para que a equipa trabalhe com ferramentas bem configuradas.' },
  { icon: FaShieldAlt, title: 'Segurança e backups', text: 'Atualizações, proteção de acessos e verificação das cópias de segurança. Planeamento de testes de recuperação para conhecer o que pode ser recuperado e em que condições.' },
  { icon: FaNetworkWired, title: 'Redes e infraestrutura', text: 'Análise de falhas de ligação, Wi-Fi e equipamentos de rede. Organização e manutenção da infraestrutura para reduzir interrupções no trabalho.' },
];
export default function Support() {
  return <main className="flex-grow">
    <HeroSection
      title="Suporte próximo. Tecnologia a funcionar."
      subtitle="Apoio informático, Microsoft 365 e redes para a sua empresa."
      ctaText="Fale connosco"
      ctaLink="/contact#formulario"
      backgroundImage="/assets/images/hero.jpg"
      minimal
    />
    <section className="py-20 md:py-32 bg-white"><div className="container-custom">
      <h2 className="text-3xl md:text-4xl text-center mb-6">Assistência informática, com acompanhamento.</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-20">Ajudamos PME em Lisboa a organizar a informática e a dar resposta às necessidades do dia a dia. O plano é ajustado à equipa, aos equipamentos e às prioridades do negócio.</p>
      <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto">{areas.map(({icon: Icon,title,text}) => <article key={title} className="py-4"><Icon aria-hidden="true" className="text-3xl text-primary mb-5"/><h3 className="text-xl mb-3">{title}</h3><p className="text-gray-600 leading-relaxed">{text}</p></article>)}</div>
      <Link className="block text-center mt-16 text-primary underline" to="/services/microsoft-365">Conhecer o acompanhamento Microsoft 365</Link>
    </div></section>
    <section id="acompanhamento" className="py-20 md:py-32 bg-gray-50"><div className="container-custom">
      <h2 className="text-3xl md:text-4xl text-center mb-20">Como funciona o acompanhamento</h2>
      <ol className="grid md:grid-cols-3 gap-16">{[
        ['Conhecer a infraestrutura', 'Identificamos utilizadores, equipamentos, aplicações e problemas prioritários.'],
        ['Definir o serviço', 'Apresentamos o âmbito, os valores, os canais de contacto e as condições das intervenções.'],
        ['Acompanhar e rever', 'Prestamos apoio, registamos necessidades e revemos as melhorias com a sua empresa.'],
      ].map(([title,text],i)=><li key={title} className="py-4"><span className="text-primary font-bold text-sm">0{i+1}</span><h3 className="text-xl my-3">{title}</h3><p className="text-slate-600">{text}</p></li>)}</ol>
    </div></section>
    <Packages />
    <section className="py-20 md:py-32 bg-white"><div className="container-custom max-w-4xl">
      <h2 className="text-3xl md:text-4xl mb-12">Antes de contratar</h2>
      <div className="space-y-12">
        <div><h3 className="text-xl mb-2">O que inclui o plano desde 150 €/mês?</h3><p>O plano Suporte IT Essencial inclui até 10 utilizadores, administração Microsoft 365, suporte remoto e presencial, monitorização básica e revisão trimestral. Aos valores acresce IVA. O âmbito e as condições das intervenções são definidos na proposta.</p></div>
        <div><h3 className="text-xl mb-2">O suporte é permanente?</h3><p>O horário de contacto é de segunda a sexta, das 9h às 18h. A prioridade e os tempos de resposta dependem do acordo contratado. Confirme connosco as condições de acompanhamento de que precisa.</p></div>
        <div><h3 className="text-xl mb-2">Posso pedir ajuda para um problema pontual?</h3><p>Sim. Descreva o problema, o número de utilizadores afetados e a sua localização. Avaliamos o pedido e apresentamos as condições antes da intervenção.</p></div>
      </div>
      <Link to="/contact#formulario" className="inline-block text-primary underline mt-12">Fale connosco</Link>
    </div></section>
  </main>;
}
