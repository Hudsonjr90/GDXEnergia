<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/portfolioProjects'
import { parseRichText } from '../utils/richText'
import { useSeo, useJsonLd } from '../composables/useSeo'
import { SITE_NAME, SITE_URL } from '../config/seo'

const route = useRoute()

const project = computed(() => getProjectBySlug(String(route.params.slug)))
const blocks = computed(() => (project.value ? parseRichText(project.value.modalDescription) : []))

useSeo(
  computed(() =>
    project.value
      ? {
          title: project.value.title,
          description: project.value.previewText,
          image: project.value.image,
          type: 'article' as const,
          keywords: [project.value.title, 'GDX Energia', 'engenharia elétrica'],
        }
      : { title: 'Projeto não encontrado', noIndex: true }
  )
)

useJsonLd(
  'portfolio-service',
  computed(() =>
    project.value
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: project.value.title,
          name: `${project.value.title} | ${SITE_NAME}`,
          description: project.value.previewText,
          provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
          areaServed: 'BR',
          url: `${SITE_URL}/portfolio/${project.value.slug}`,
        }
      : undefined
  )
)
</script>

<template>
  <q-page class="wrapper">
    <template v-if="project">
      <q-container class="q-py-xl page-animate">
        <q-btn
          flat
          no-caps
          icon="mdi-arrow-left"
          label="Voltar ao portfólio"
          color="primary"
          to="/portfolio"
          class="q-mb-md q-mt-md back-btn"
        />

        <div class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mb-lg detail-title">
          {{ project.title }}
        </div>

        <div class="detail-content">
          <template v-for="(block, index) in blocks" :key="index">
            <div v-if="block.type === 'heading'" class="text-h6 text-weight-bold text-grey-9 q-mt-lg q-mb-sm">
              {{ block.text }}
            </div>
            <p v-else-if="block.type === 'paragraph'" class="text-body1 text-grey-8 detail-paragraph">
              {{ block.text }}
            </p>
            <ul v-else class="detail-list">
              <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                <span class="detail-list-icon">{{ item.icon }}</span>
                <span>{{ item.text }}</span>
              </li>
            </ul>
          </template>
        </div>
      </q-container>
    </template>

    <q-container v-else class="q-py-xl text-center">
      <div class="text-h5 text-grey-8 q-mb-md">Projeto não encontrado.</div>
      <q-btn unelevated color="primary" label="Voltar ao portfólio" no-caps to="/portfolio" />
    </q-container>
  </q-page>
</template>

<style scoped>
.hero-image {
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.55));
}

.back-btn {
  padding-left: 0;
}

.detail-title {
  line-height: 1.25;
}

.detail-content {
  max-width: 820px;
}

.detail-paragraph {
  white-space: pre-line;
  line-height: 1.7;
}

.detail-list {
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.6;
  color: #424242;
}

.detail-list-icon {
  flex-shrink: 0;
}
</style>
