// Gera, após o "vite build", uma cópia estática de index.html para cada rota conhecida,
// com <title>/description/canonical/OG/Twitter corretos. Isso é necessário porque crawlers
// de redes sociais (Instagram, LinkedIn, Facebook, WhatsApp) não executam JavaScript e,
// numa SPA pura, só veriam sempre o mesmo index.html genérico sem essa etapa.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_IMAGE,
  DEFAULT_DESCRIPTION,
  staticRoutesSeo,
  portfolioRoutesSeo,
} from '../src/config/seo'

interface RouteToRender {
  path: string
  title?: string
  description?: string
  image?: string
}

const distDir = resolve(process.cwd(), 'dist')
const templatePath = resolve(distDir, 'index.html')
const template = readFileSync(templatePath, 'utf-8')

const routes: RouteToRender[] = [
  ...Object.entries(staticRoutesSeo).map(([path, meta]) => ({ path, ...meta })),
  ...portfolioRoutesSeo.map((project) => ({
    path: `/portfolio/${project.slug}`,
    title: project.title,
    description: project.description,
  })),
]

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderHtml(route: RouteToRender): string {
  const title = escapeHtml(route.title ? `${route.title} | ${SITE_NAME}` : SITE_NAME)
  const description = escapeHtml(route.description || DEFAULT_DESCRIPTION)
  const image = escapeHtml(route.image || DEFAULT_IMAGE)
  const url = `${SITE_URL}${route.path}`

  let html = template
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`)
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`)
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`)
  html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`)
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  html = html.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`)
  html = html.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`)
  html = html.replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`)

  return html
}

function buildSitemap(): string {
  const urls = routes
    .map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

for (const route of routes) {
  const html = renderHtml(route)
  const outDir = route.path === '/' ? distDir : resolve(distDir, `.${route.path}`)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(resolve(outDir, 'index.html'), html, 'utf-8')
  console.log(`✓ SEO prerender: ${route.path}`)
}

writeFileSync(resolve(distDir, 'sitemap.xml'), buildSitemap(), 'utf-8')
console.log('✓ sitemap.xml gerado')
