export interface SeoMeta {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export const SITE_NAME = 'GDX Energia'
// domínio atual (publicado no Vercel); trocar para o definitivo quando o site for migrado
export const SITE_URL = 'https://gdx-energia.vercel.app'
export const DEFAULT_DESCRIPTION =
  'Soluções completas em engenharia elétrica: subestações, redes de distribuição MT/BT, iluminação pública, laudos técnicos NR10 e SPDA, e legalização para loteamentos, condomínios e indústrias.'
export const DEFAULT_IMAGE = `${SITE_URL}/favicon-512.png`
export const DEFAULT_KEYWORDS = [
  'GDX Energia',
  'engenharia elétrica',
  'subestação',
  'rede elétrica',
  'rede de distribuição MT e BT',
  'loteamentos',
  'iluminação pública',
  'laudo NR10',
  'SPDA',
  'legalização elétrica',
]

// SEO estático por rota, consumido pelo App.vue e pelo script de pré-render (scripts/prerender-seo.ts)
export const staticRoutesSeo: Record<string, SeoMeta> = {
  '/': {
    title: 'Projetos Elétricos, Subestações e Loteamentos',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  },
  '/sobre': {
    title: 'Sobre a GDX Energia',
    description:
      'Conheça a GDX Energia, especialista em engenharia elétrica, subestações e infraestrutura para loteamentos, condomínios e indústrias.',
    keywords: ['sobre a GDX Energia', 'empresa de engenharia elétrica', ...DEFAULT_KEYWORDS],
  },
  '/portfolio': {
    title: 'Portfólio de Serviços',
    description:
      'Conheça os serviços da GDX Energia: laudos NR10 e SPDA, legalização elétrica, iluminação pública, subestações abrigadas, blindadas e simplificadas, e redes de distribuição MT/BT.',
    keywords: ['portfólio GDX Energia', 'subestação simplificada', 'subestação blindada', 'subestação abrigada', ...DEFAULT_KEYWORDS],
  },
  '/parceiros': {
    title: 'Parceiros',
    description: 'Conheça os parceiros e clientes que confiam na GDX Energia para projetos de infraestrutura elétrica.',
    keywords: ['parceiros GDX Energia', ...DEFAULT_KEYWORDS],
  },
  '/contato': {
    title: 'Contato',
    description:
      'Fale com a GDX Energia e solicite um orçamento para projetos de subestações, redes elétricas, iluminação pública e laudos técnicos.',
    keywords: ['contato GDX Energia', 'orçamento subestação', ...DEFAULT_KEYWORDS],
  },
}

// Dados mínimos (sem imagens) das páginas de portfólio, usados também pelo script de pré-render estático.
// Precisam ficar em sincronia com os slugs/títulos/previewText de src/data/portfolioProjects.ts
export const portfolioRoutesSeo: { slug: string; title: string; description: string }[] = [
  {
    slug: 'laudo-tecnico-nr10-e-spda',
    title: 'Laudo Técnico – NR10 e SPDA',
    description:
      'A segurança elétrica é um dos pilares fundamentais para qualquer empresa ou empreendimento que dependa de energia para suas operações. A GDX oferece serviços especializados na emissão de Laudo Técnico – NR10 e SPDA, garantindo que sua instalação elétrica esteja dentro das normas vigentes e protegida contra acidentes, falhas e descargas atmosféricas.',
  },
  {
    slug: 'legalizacao',
    title: 'Legalização',
    description:
      'A regularização de instalações elétricas é um processo fundamental para garantir que um empreendimento esteja em conformidade com as normas técnicas e regulamentações das concessionárias de energia. Sem essa regularização, o fornecimento de energia pode ser comprometido, resultando em multas, cortes no abastecimento e riscos de segurança.',
  },
  {
    slug: 'iluminacao-publica',
    title: 'Iluminação Pública',
    description:
      'A iluminação pública é essencial para a segurança, o bem-estar e a qualidade de vida das pessoas. A GDX oferece serviços especializados para planejamento, instalação e manutenção de sistemas de iluminação pública, com soluções modernas, eficientes e sustentáveis, utilizando tecnologia LED e sistemas de automação inteligente.',
  },
  {
    slug: 'autoconstrucao-rede-distribuicao-mt-bt',
    title: 'Autoconstrução de Rede de Distribuição MT e BT',
    description:
      'A autoconstrução de rede de distribuição é uma alternativa vantajosa para empresas e empreendedores que desejam otimizar o processo de fornecimento de energia elétrica, com obras de construção da rede de distribuição tanto para média tensão (MT) quanto para baixa tensão (BT).',
  },
  {
    slug: 'subestacao-abrigada',
    title: 'Subestação Abrigada',
    description:
      'A subestação abrigada é uma solução projetada para oferecer alta proteção e confiabilidade no fornecimento de energia elétrica, instalada em estruturas fechadas que protegem os equipamentos contra intempéries, riscos externos e vandalismo.',
  },
  {
    slug: 'subestacao-blindada',
    title: 'Subestação Blindada',
    description:
      'A subestação blindada é uma instalação elétrica projetada para oferecer proteção e segurança superiores em sistemas de distribuição de energia elétrica, protegendo equipamentos contra riscos ambientais e eventos externos.',
  },
  {
    slug: 'subestacao-simplificada',
    title: 'Subestação Simplificada',
    description:
      'A subestação simplificada é uma solução ideal para instalações de menor porte, que demandam eficiência energética e segurança, mas com custo reduzido e menos complexidade.',
  },
]
