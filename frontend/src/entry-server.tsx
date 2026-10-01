import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { LayoutProvider } from './context/LayoutContext';
export { pages, pageMeta, structuredData, siteUrl } from './seo';
export function render(path: string) {
  return renderToStaticMarkup(<StaticRouter location={path}><LayoutProvider><AppContent /></LayoutProvider></StaticRouter>);
}
