import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta, pages, siteUrl, structuredData } from '../seo';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/';
    const meta = pageMeta(path);
    document.title = meta.title;
    document.documentElement.lang = 'pt-PT';
    const setMeta = (key: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta('description', meta.description);
    setMeta('robots', pages[path] ? 'index,follow' : 'noindex,follow');
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:url', siteUrl + path, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'pt_PT', true);
    setMeta('og:image', siteUrl + '/assets/images/logo.png', true);
    setMeta('twitter:card', 'summary');
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl + path;
    let schema = document.getElementById('site-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'site-schema';
      schema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData(path));
  }, [pathname]);
  return null;
}
