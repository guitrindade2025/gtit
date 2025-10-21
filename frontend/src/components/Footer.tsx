import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer role="contentinfo" className="bg-white dark:bg-[#0b1627] border-t border-gray-200 dark:border-blue-900 text-gray-900 dark:text-blue-100 py-10">
    <h2 className="sr-only">Rodapé</h2>
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contactos */}
        <div aria-label="Contactos" className="space-y-2">
          <h3 className="text-lg font-semibold text-primary mb-2">Contactos</h3>
          <div>GTIT</div>
          <div>NIF: 999 999 999</div>
          <div>Lisboa, Portugal</div>
          <div>
            <a href="mailto:info@gtit.pt" className="hover:underline text-blue-700 dark:text-blue-300">info@gtit.pt</a>
          </div>
          <div>
            <a href="tel:+3519XXXXXXXX" className="hover:underline text-blue-700 dark:text-blue-300">+351 9XX XXX XXX</a>
          </div>
        </div>
        {/* Serviços */}
        <div aria-label="Serviços" className="space-y-2">
          <h3 className="text-lg font-semibold text-primary mb-2">Serviços</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/services/web-development" className="hover:underline text-blue-700 dark:text-blue-300">Desenvolvimento Web</Link>
            </li>
            <li>
              <Link to="/services/mobile-apps" className="hover:underline text-blue-700 dark:text-blue-300">Aplicações Móveis</Link>
            </li>
            <li>
              <Link to="/services/consulting" className="hover:underline text-blue-700 dark:text-blue-300">Consultoria Tecnológica</Link>
            </li>
            <li>
              <Link to="/services/support" className="hover:underline text-blue-700 dark:text-blue-300">Suporte e Manutenção</Link>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div aria-label="Legal" className="space-y-2">
          <h3 className="text-lg font-semibold text-primary mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/termos" className="hover:underline text-blue-700 dark:text-blue-300">Termos de Serviço</Link>
            </li>
            <li>
              <Link to="/privacidade" className="hover:underline text-blue-700 dark:text-blue-300">Política de Privacidade</Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:underline text-blue-700 dark:text-blue-300">Política de Cookies</Link>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <div className="text-base text-blue-700 dark:text-blue-300 font-medium">Valores apresentados não incluem IVA.</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">Propostas com escopo definido e prazos realistas.</div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-blue-900 dark:text-blue-300">
        © 2025 GTIT. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;