export const siteUrl = 'https://gtit.pt';
export const phone = '+351934094801';
export const email = 'suporte@gtit.pt';
export const pages: Record<string, { title: string; description: string }> = {
  '/': { title: 'Suporte Informático para Empresas em Lisboa | GT IT', description: 'Suporte informático para PME em Lisboa. Gestão Microsoft 365, segurança, backups, redes e websites. Apoio remoto e presencial. Conheça os serviços e preços.' },
  '/about': { title: 'Sobre a GT IT | Consultoria informática em Lisboa', description: 'Conheça a GT IT e o nosso modelo de acompanhamento: diagnóstico, proposta clara, implementação e suporte informático para a sua empresa.' },
  '/services': { title: 'Serviços de informática para empresas | GT IT', description: 'Suporte informático, Microsoft 365, segurança, cloud, backups e desenvolvimento web. Soluções para as necessidades da sua empresa.' },
  '/services/support': { title: 'Suporte informático em Lisboa | Assistência a empresas | GT IT', description: 'Assistência informática remota e presencial em Lisboa. Apoio aos utilizadores, Microsoft 365, manutenção, backups e redes. Planos desde 150 €/mês + IVA.' },
  '/services/microsoft-365': { title: 'Gestão Microsoft 365 para empresas | GT IT Lisboa', description: 'Gestão de utilizadores, permissões, email e segurança Microsoft 365. Apoio à migração, autenticação multifator e backups para PME.' },
  '/services/cloud-solutions': { title: 'Cloud e backups para empresas | GT IT', description: 'Soluções cloud, cópias de segurança e continuidade para empresas. Planeamento, implementação e acompanhamento da infraestrutura.' },
  '/services/security': { title: 'Segurança informática para empresas | GT IT', description: 'Proteção de sistemas, acessos e dados da sua empresa. Conheça os serviços de segurança informática e acompanhamento da GT IT.' },
  '/services/consulting': { title: 'Consultoria informática para PME | GT IT Lisboa', description: 'Diagnóstico, planeamento e acompanhamento tecnológico para PME. Organize a infraestrutura, os acessos e as prioridades da sua empresa.' },
  '/services/web-development': { title: 'Criação de websites profissionais para empresas | GT IT', description: 'Websites profissionais adaptados a computador e telemóvel, com SEO e acompanhamento. Conheça o processo e peça uma proposta à GT IT.' },
  '/services/mobile-apps': { title: 'Desenvolvimento de aplicações móveis | GT IT', description: 'Aplicações móveis para iOS e Android, adaptadas aos processos da sua empresa. Planeamento, desenvolvimento e acompanhamento pela GT IT.' },
  '/services/design': { title: 'Design UX/UI para websites e aplicações | GT IT', description: 'Design de interfaces e experiências digitais para websites e aplicações. Estrutura, protótipos e usabilidade ao serviço do seu projeto.' },
  '/privacy': { title: 'Privacidade e cookies | GT IT', description: 'Como são utilizados os dados do formulário de contacto e as preferências de cookies analíticos no site da GT IT.' },
  '/contact': { title: 'Contactar a GT IT | Suporte informático em Lisboa', description: 'Fale com a GT IT sobre suporte informático, Microsoft 365, backups e websites. Ligue 934 094 801 ou envie um pedido de contacto.' },
};
export function pageMeta(path: string) {
  return pages[path.replace(/\/$/, '') || '/'] ?? {
    title: path.startsWith('/demo/') ? 'Demonstração de design | GT IT' : 'Página não encontrada | GT IT',
    description: path.startsWith('/demo/') ? 'Exemplo de interface criado para demonstração de design. Não representa um cliente ou caso de estudo.' : 'Encontre os serviços e contactos da GT IT.',
  };
}
export function structuredData(path: string) {
  const meta = pageMeta(path);
  const business = {
    '@type': 'ProfessionalService', '@id': siteUrl + '/#organization', name: 'GT IT',
    url: siteUrl, telephone: phone, email, image: siteUrl + '/assets/images/logo.png',
    areaServed: { '@type': 'City', name: 'Lisboa' },
  };
  return { '@context': 'https://schema.org', '@graph': [
    business,
    { '@type': 'WebPage', '@id': siteUrl + path + '#webpage', url: siteUrl + path, name: meta.title, description: meta.description, inLanguage: 'pt-PT', isPartOf: { '@id': siteUrl + '/#website' } },
    { '@type': 'WebSite', '@id': siteUrl + '/#website', url: siteUrl, name: 'GT IT', publisher: { '@id': business['@id'] } },
  ] };
}
