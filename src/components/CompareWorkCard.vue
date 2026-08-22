<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  title?: string
  beforeImage: string
  afterImage: string
}>()

const splitPosition = ref(50)
const isDragging = ref(false)
const compareRef = ref<HTMLElement | null>(null)

function updatePosition(clientX: number) {
  if (!compareRef.value) return

  const rect = compareRef.value.getBoundingClientRect()
  const relativeX = clientX - rect.left
  const percent = (relativeX / rect.width) * 100

  splitPosition.value = Math.min(100, Math.max(0, percent))
}

function onDragStart(event: PointerEvent) {
  if (event.button !== 0) return
  isDragging.value = true
  updatePosition(event.clientX)

  const target = event.currentTarget as HTMLElement | null
  if (target) {
    target.setPointerCapture(event.pointerId)
  }
}

function onDragMove(event: PointerEvent) {
  if (!isDragging.value) return
  updatePosition(event.clientX)
}

function onDragEnd(event: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false

  const target = event.currentTarget as HTMLElement | null
  if (target && target.hasPointerCapture(event.pointerId)) {
    target.releasePointerCapture(event.pointerId)
  }
}

function onWindowPointerMove(event: PointerEvent) {
  if (!isDragging.value) return
  updatePosition(event.clientX)
}

function onWindowPointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
}

onMounted(() => {
  window.addEventListener('pointermove', onWindowPointerMove)
  window.addEventListener('pointerup', onWindowPointerUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onWindowPointerMove)
  window.removeEventListener('pointerup', onWindowPointerUp)
})
</script>

<template>
  <q-card flat bordered class="compare-card">
    <div
      ref="compareRef"
      class="compare-card-inner"
      :class="{ dragging: isDragging }"
    >
      <q-img
        :src="props.beforeImage"
        fit="cover"
        class="compare-image compare-before"
        :class="{ dragging: isDragging }"
        :style="{ clipPath: `inset(0 ${100 - splitPosition}% 0 0)` }"
      />
      <q-img
        :src="props.afterImage"
        fit="cover"
        class="compare-image compare-after"
        :class="{ dragging: isDragging }"
        :style="{ clipPath: `inset(0 0 0 ${splitPosition}%)` }"
      />
      <div
        class="compare-split"
        :class="{ dragging: isDragging }"
        :style="{ left: `${splitPosition}%` }"
        @pointerdown.prevent="onDragStart"
        @pointermove.prevent="onDragMove"
        @pointerup.prevent="onDragEnd"
        @pointercancel.prevent="onDragEnd"
      >
        <div
          class="compare-handle"
          :class="{ dragging: isDragging }"
          @pointerdown.prevent.stop="onDragStart"
        >
          <q-icon name="mdi-drag-variant" size="20px" />
        </div>
      </div>
      <div class="compare-overlay">
        <span class="compare-label before">Antes</span>
        <span class="compare-label after">Depois</span>
      </div>
    </div>
    <!-- <q-card-section class="q-pa-md">
      <div class="text-subtitle2 text-weight-bold text-grey-9 compare-card-title">
        {{ props.title }}
      </div>
    </q-card-section> -->
  </q-card>
</template>

<style scoped>
.compare-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  min-height: 400px;
  height: 100%;
}

.compare-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.compare-card-inner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #111;
}

.compare-image {
  position: absolute;
  inset: 0;
  transition: clip-path 0.16s linear;
}

.compare-image.dragging {
  transition: none;
}

.compare-before {
  clip-path: inset(0 50% 0 0);
}

.compare-after {
  clip-path: inset(0 0 0 50%);
}

.compare-split {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  background: rgba(32, 158, 46, 0.9);
  z-index: 2;
  cursor: ew-resize;
  touch-action: none;
}

.compare-handle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fff;
  color: #209e2e;
  border: 2px solid rgba(32, 158, 46, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  cursor: grab;
}

.compare-handle.dragging {
  cursor: grabbing;
}

.compare-split.dragging {
  cursor: ew-resize;
}

.compare-card-inner.dragging,
.compare-card-inner.dragging * {
  user-select: none;
}

.compare-card-inner.dragging {
  cursor: ew-resize;
}

.compare-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
}

.compare-label {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.compare-card:hover .compare-overlay {
  opacity: 1;
}

.compare-card-title {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
  min-height: 2.7rem;
}
</style>