<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useMobile } from "../composables/useMobile";

const { isMobile } = useMobile();

const showButton = ref(false);
const SCROLL_THRESHOLD = 200;
const BOTTOM_TOLERANCE = 140;

const handleScroll = () => {
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const nearBottom =
    window.innerHeight + window.scrollY >= scrollHeight - BOTTOM_TOLERANCE;

  showButton.value = window.scrollY > SCROLL_THRESHOLD && !nearBottom;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <transition name="scroll-top-fade">
    <q-btn
      v-if="isMobile && showButton"
      round
      unelevated
      color="primary"
      icon="mdi-chevron-up"
      aria-label="Voltar ao topo"
      class="scroll-top-btn"
      @click="scrollToTop"
    />
  </transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 2500;
  width: 48px;
  height: 48px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.scroll-top-fade-enter-active,
.scroll-top-fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.scroll-top-fade-enter-from,
.scroll-top-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
