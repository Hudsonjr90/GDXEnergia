import { watchEffect, toValue, type MaybeRefOrGetter } from 'vue'
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, type SeoMeta } from '../config/seo'

export type { SeoMeta }

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function resolveImageUrl(image: string): string {
  return image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`
}

export function useSeo(source: MaybeRefOrGetter<SeoMeta | undefined>) {
  watchEffect(() => {
    if (typeof document === 'undefined') return

    const meta = toValue(source)
    if (!meta) return

    const title = meta.title ? `${meta.title} | ${SITE_NAME}` : SITE_NAME
    const description = meta.description || DEFAULT_DESCRIPTION
    const image = resolveImageUrl(meta.image || DEFAULT_IMAGE)
    const url = `${SITE_URL}${window.location.pathname}`
    const type = meta.type || 'website'

    document.title = title
    upsertMetaByName('description', description)
    if (meta.keywords?.length) upsertMetaByName('keywords', meta.keywords.join(', '))
    upsertMetaByName('robots', meta.noIndex ? 'noindex, nofollow' : 'index, follow')

    upsertCanonical(url)

    upsertMetaByProperty('og:site_name', SITE_NAME)
    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', description)
    upsertMetaByProperty('og:image', image)
    upsertMetaByProperty('og:url', url)
    upsertMetaByProperty('og:type', type)
    upsertMetaByProperty('og:locale', 'pt_BR')

    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', title)
    upsertMetaByName('twitter:description', description)
    upsertMetaByName('twitter:image', image)
  })
}

export function useJsonLd(id: string, source: MaybeRefOrGetter<Record<string, unknown> | undefined>) {
  watchEffect(() => {
    if (typeof document === 'undefined') return

    const data = toValue(source)
    if (!data) return

    let tag = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`)
    if (!tag) {
      tag = document.createElement('script')
      tag.type = 'application/ld+json'
      tag.setAttribute('data-seo-id', id)
      document.head.appendChild(tag)
    }
    tag.textContent = JSON.stringify(data)
  })
}
