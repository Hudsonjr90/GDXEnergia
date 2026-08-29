<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue'
import { useSeo } from './composables/useSeo'
import { staticRoutesSeo } from './config/seo'

const route = useRoute()

// Aplica o SEO padrão da rota atual; páginas com dados dinâmicos (ex.: PortfolioDetailPage) sobrescrevem por conta própria
useSeo(computed(() => staticRoutesSeo[route.path]))
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <AppHeader />
    <q-page-container class="page-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <AppFooter />
    <ScrollToTopButton />
  </q-layout>
</template>

<style>
.page-animate {
  opacity: 0;
  transform: translateY(20px);
  animation: pageFadeUp 0.6s ease forwards;
}

.page-anim-item {
  opacity: 0;
  transform: translateY(22px);
  animation: pageFadeUp 0.65s ease forwards;
}

.page-anim-item.delay-1 {
  animation-delay: 0.18s;
}

.page-anim-item.delay-2 {
  animation-delay: 0.32s;
}

.page-anim-item.delay-3 {
  animation-delay: 0.46s;
}

@keyframes pageFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
