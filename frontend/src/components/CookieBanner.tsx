import React, { useState, useEffect, useRef } from 'react';

export type CookieConsent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const LOCAL_KEY = 'gtit_cookie_consent';

interface CookieBannerProps {
  onConsentChange?: (consent: CookieConsent) => void;
}

const defaultConsent: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
};

const CookieBanner: React.FC<CookieBannerProps> = ({ onConsentChange }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const modalRef = useRef<HTMLDivElement>(null);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && parsed.essential === true) {
          setConsent(parsed);
          setShowBanner(false);
          onConsentChange?.(parsed);
          return;
        }
      } catch {}
    }
    setShowBanner(true);
  }, [onConsentChange]);

  // Focus management for modal
  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showModal]);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!showModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showModal]);

  const saveConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowModal(false);
    onConsentChange?.(newConsent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center items-end pointer-events-none">
      <div className="bg-white dark:bg-[#101c36] border border-blue-200 dark:border-blue-900 shadow-lg rounded-t-lg p-6 max-w-lg w-full mx-2 mb-4 pointer-events-auto">
        <p className="text-gray-900 dark:text-blue-100 mb-4 text-base">Usamos cookies para melhorar a sua experiência e analisar o tráfego. Pode aceitar ou gerir preferências.</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => saveConsent({ essential: true, analytics: true, marketing: true })}
          >Aceitar</button>
          <button
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => saveConsent({ essential: true, analytics: false, marketing: false })}
          >Recusar</button>
          <button
            className="px-4 py-2 bg-white dark:bg-[#0b1627] border border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-100 rounded hover:bg-blue-50 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setShowModal(true)}
          >Preferências</button>
        </div>
      </div>
      {/* Modal de Preferências */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white dark:bg-[#101c36] rounded-lg shadow-lg p-6 w-full max-w-md outline-none" tabIndex={0}>
            <h2 className="text-lg font-semibold mb-4 text-primary">Preferências de Cookies</h2>
            <form onSubmit={e => { e.preventDefault(); saveConsent(consent); }}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Essenciais (obrigatórios)</span>
                  <input type="checkbox" checked disabled className="form-checkbox h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Estatísticas</span>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={e => setConsent(c => ({ ...c, analytics: e.target.checked }))}
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Marketing</span>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={e => setConsent(c => ({ ...c, marketing: e.target.checked }))}
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setShowModal(false)}
                >Cancelar</button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
