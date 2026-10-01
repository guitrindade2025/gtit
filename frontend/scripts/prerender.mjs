import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { render, pages, pageMeta, structuredData, siteUrl } from '../dist-server/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const demos = ['advogados', 'entretenimento', 'planetas', 'ecommerce', 'saude', 'imobiliaria', 'tecnologia', 'educacao', 'mobile-apps'].map(slug => '/demo/' + slug);
for (const path of [...Object.keys(pages), ...demos, '/404']) {
  const meta = pageMeta(path);
  const head = `<title>${escape(meta.title)}</title>
<meta name="description" content="${escape(meta.description)}">
<meta name="robots" content="${pages[path] ? 'index,follow' : 'noindex,follow'}">
<link rel="canonical" href="${siteUrl + path.replace('/404', '/404.html')}">
<meta property="og:title" content="${escape(meta.title)}">
<meta property="og:description" content="${escape(meta.description)}">
<meta property="og:url" content="${siteUrl + path}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_PT">
<meta property="og:image" content="${siteUrl}/assets/images/logo.png">
<meta name="twitter:card" content="summary">
<script id="site-schema" type="application/ld+json">${JSON.stringify(structuredData(path)).replaceAll('<', '\\u003c')}</script>`;
  const output = template.replace(/<title>.*?<\/title>/s, head).replace('<div id="root"></div>', `<div id="root" data-prerender="true">${render(path)}</div>`);
  const file = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : join('dist', path.slice(1), 'index.html');
  await mkdir(join(file, '..'), { recursive: true });
  await writeFile(file, output);
}
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + Object.keys(pages).map(path => `  <url><loc>${siteUrl + path}</loc></url>`).join('\n') + '\n</urlset>\n');
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: https://gtit.pt/sitemap.xml\n');
// Static HTML takes precedence; unknown paths retain a genuine HTTP 404.
await writeFile('dist/_redirects', '/demo /services 301\n/* /404.html 404\n');
console.log(`Generated ${Object.keys(pages).length} pages, a 404 page, sitemap, robots and routing rules.`);
