<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  image: string
  previewText?: string
  modalTitle?: string
  modalImage?: string
  modalDescription: string
  buttonLabel?: string
}>()

const open = ref(false)
</script>

<template>
  <q-card flat bordered class="portfolio-info-card">
    <q-img :src="props.image" height="180px" fit="cover" />

    <q-card-section class="q-pb-sm card-content">
      <div class="text-subtitle1 text-weight-bold text-grey-9 card-title">{{ props.title }}</div>
      <div v-if="props.previewText" class="text-body2 text-grey-8 q-mt-sm card-preview">
        {{ props.previewText }}
      </div>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md card-actions">
      <q-btn
        unelevated
        color="primary"
        :label="props.buttonLabel || 'Saiba mais'"
        @click="open = true"
        no-caps
      />
    </q-card-actions>
  </q-card>

  <q-dialog v-model="open" persistent>
    <q-card class="portfolio-modal-card">
      <q-img :src="props.modalImage || props.image" height="220px" fit="cover" />

      <q-card-section>
        <div class="text-h6 text-weight-bold q-mb-sm">{{ props.modalTitle || props.title }}</div>
        <div class="text-body2 text-grey-8">{{ props.modalDescription }}</div>
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn flat color="primary" label="Fechar" @click="open = false" no-caps />
      </q-card-actions>
    </q-card>
  </q-dialog>
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

.portfolio-modal-card {
  width: min(92vw, 680px);
  border-radius: 16px;
  overflow: hidden;
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

.card-preview {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6rem;
}

.card-actions {
  margin-top: auto;
}
</style>
