export const measurementId = 'G-82CP6Z5CPT';
const choiceKey = 'gtit-analytics-consent';
const lifetime = 180 * 24 * 60 * 60 * 1000;
type Consent = 'accepted' | 'rejected';
type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: Gtag; }
}
export function getConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(choiceKey) || 'null');
    return saved && Date.now() < saved.expires && ['accepted', 'rejected'].includes(saved.value) ? saved.value : null;
  } catch { return null; }
}
export function startAnalytics() {
  if (typeof window === 'undefined' || !['gtit.pt', 'www.gtit.pt'].includes(window.location.hostname) || getConsent() !== 'accepted') return;
  if (document.getElementById('gtit-analytics')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // gtag's command queue uses the standard Arguments object.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('js', new Date());
  // Enhanced Measurement already handles history changes. Do not send manual page_view events.
  window.gtag('config', measurementId, {
    allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_expires: lifetime / 1000,
    page_location: window.location.origin + window.location.pathname,
  });
  const script = document.createElement('script');
  script.id = 'gtit-analytics';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(script);
}
export function saveConsent(value: Consent) {
  try { localStorage.setItem(choiceKey, JSON.stringify({ value, expires: Date.now() + lifetime })); } catch { /* Storage can be unavailable; tracking remains disabled. */ }
  if (value === 'accepted') { startAnalytics(); return; }
  if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (!/^_ga($|_)/.test(name)) continue;
    for (const domain of ['', window.location.hostname, '.' + window.location.hostname, '.gtit.pt']) {
      document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
    }
  }
  // A reload removes the already loaded Google library after consent is withdrawn.
  if (document.getElementById('gtit-analytics')) window.location.reload();
}
export function trackContact(method: 'phone' | 'email' | 'form') {
  if (getConsent() !== 'accepted' || !['gtit.pt', 'www.gtit.pt'].includes(window.location.hostname)) return;
  window.gtag?.('event', method === 'form' ? 'generate_lead' : 'contact_click', { contact_method: method });
}
