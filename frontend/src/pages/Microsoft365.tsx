import { Link } from 'react-router-dom';
export default function Microsoft365() {
  return <main >
    <section className="pt-36 pb-20 bg-slate-950 text-white"><div className="container-custom max-w-5xl">
      <p className="text-sky-300 font-semibold mb-5">Microsoft 365 para PME</p>
      <h1 className="text-4xl md:text-6xl leading-tight">Contas organizadas. Acessos protegidos. Uma equipa com apoio.</h1>
      <p className="text-xl text-slate-200 mt-7 max-w-3xl">A GT IT acompanha a gestão do Microsoft 365: utilizadores, email, colaboração, segurança e cópias de segurança, com o âmbito definido para a sua empresa.</p>
      <Link to="/contact#formulario" className="btn btn-primary mt-8">Pedir apoio Microsoft 365</Link>
    </div></section>
    <section className="section"><div className="container-custom grid md:grid-cols-2 gap-7">{[
      ['Utilizadores e permissões', 'Criação e desativação de contas, grupos e permissões. Organização dos acessos quando alguém entra, muda de função ou sai da empresa.'],
      ['Email e colaboração', 'Apoio a Outlook, Teams, OneDrive e SharePoint. Configuração das ferramentas e orientação para partilhar e trabalhar com informação.'],
      ['Segurança de acessos', 'Apoio à configuração de autenticação multifator e revisão de permissões. As funcionalidades disponíveis dependem das licenças e das necessidades da organização.'],
      ['Backups e recuperação', 'Definição dos dados a proteger e do processo de recuperação. O backup Microsoft 365 pode integrar o pacote Cloud & Backup, com testes de recuperação previstos no plano.'],
    ].map(([title,text])=><article key={title} className="p-8 rounded-xl bg-slate-50 border border-slate-200"><h2 className="text-2xl mb-4">{title}</h2><p className="text-slate-600 leading-relaxed">{text}</p></article>)}</div></section>
    <section className="section bg-slate-100"><div className="container-custom max-w-4xl">
      <h2 className="text-3xl mb-6">Começamos pela situação atual da sua empresa.</h2>
      <p className="text-lg text-slate-600 mb-5">Avaliamos a configuração existente, as contas e as prioridades. A proposta identifica os trabalhos, os custos e o acompanhamento. Licenças, migrações e serviços adicionais são discriminados quando aplicáveis.</p>
      <p className="text-slate-600 mb-7">A administração Microsoft 365 integra o plano Suporte IT Essencial, desde 150 €/mês + IVA, para até 10 utilizadores. Consulte as condições do plano e confirme o âmbito na proposta.</p>
      <div className="flex flex-wrap gap-4"><Link to="/services/support#pacotes" className="btn btn-primary">Ver plano de suporte</Link><Link to="/services/cloud-solutions" className="btn btn-outline">Conhecer cloud e backups</Link></div>
    </div></section>
  </main>;
}
