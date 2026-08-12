<script setup lang="ts">
defineProps<{
  title: string
  image: string
  slug: string
  previewText?: string
  buttonLabel?: string
}>()
</script>

<template>
  <q-card flat bordered class="portfolio-info-card">
    <q-img :src="image" height="180px" fit="cover" />

    <q-card-section class="q-pb-sm card-content">
      <div class="text-subtitle1 text-weight-bold text-grey-9 card-title">{{ title }}</div>
      <div v-if="previewText" class="text-body2 text-grey-8 q-mt-sm card-preview">
        {{ previewText }}
      </div>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md card-actions">
      <q-btn
        unelevated
        color="primary"
        :label="buttonLabel || 'Saiba mais'"
        :to="`/portfolio/${slug}`"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.portfolio-info-card {
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  min-height: 360px;
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.portfolio-info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-content {
  min-height: 120px;
}

.card-title {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
  min-height: 2.7rem;
}



.card-actions {
  margin-top: auto;
}
</style>
