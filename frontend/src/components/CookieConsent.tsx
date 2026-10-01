import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, saveConsent, startAnalytics } from '../analytics';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(getConsent() === null);
    startAnalytics();
    const open = () => setVisible(true);
    window.addEventListener('gtit-cookie-settings', open);
    return () => window.removeEventListener('gtit-cookie-settings', open);
  }, []);
  if (!visible) return null;
  const choose = (value: 'accepted' | 'rejected') => { saveConsent(value); setVisible(false); };
  return <aside role="region" aria-label="Preferências de cookies" className="fixed bottom-0 inset-x-0 z-[90] border-t border-slate-200 bg-white p-4 shadow-2xl">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:items-center">
      <div className="flex-1 text-sm text-slate-700"><p className="font-semibold text-slate-900 mb-1">A sua escolha de cookies</p>
        <p>Com a sua autorização, usamos o Google Analytics para compreender a utilização do site. Pode recusar e continuar a navegar, ou mudar a escolha no rodapé. <Link className="underline" to="/privacy">Privacidade e cookies</Link>.</p></div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <button onClick={() => choose('rejected')} className="px-5 py-3 rounded-md border border-primary text-primary font-semibold">Recusar analíticos</button>
        <button onClick={() => choose('accepted')} className="px-5 py-3 rounded-md border border-primary bg-primary text-white font-semibold">Aceitar analíticos</button>
      </div>
    </div>
  </aside>;
}
