<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl page-animate">
      <div class="q-mb-xl page-anim-item">
        <div class="text-h4 text-md-h2 text-center text-weight-bold text-grey-9 q-mt-md q-mb-none">
          Projetos que unem eficiência, inovação e desempenho real.
        </div>
      </div>

      <div class="page-anim-item q-mt-xl">
        <div class="row justify-center q-mb-md">
          <q-chip color="primary" text-color="white" dense class="q-mr-sm">
            o que a GDX entrega?
          </q-chip>
        </div>

        <q-card flat bordered class="bg-grey-1 rounded-borders overflow-hidden">
          <div
            class="relative-position"
            style="height: 400px;"
            @mousedown="startDrag"
            @mousemove="updatePosition"
            @mouseup="stopDrag"
            @mouseleave="stopDrag"
          >
            <q-img
              :src="afterImage"
              class="absolute-full"
              :style="{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }"
              fit="cover"
            />

            <q-img
              :src="beforeImage"
              class="absolute-full"
              :style="{ clipPath: `inset(0 0 0 ${dividerPosition}%)` }"
              fit="cover"
            />

            <q-btn
              flat
              round
              dense
              class="absolute cursor-pointer"
              :style="{
                left: `${dividerPosition}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }"
              icon="mdi-drag-variant"
              color="primary"
              size="sm"
              @mousedown="startDrag"
            />
          </div>
        </q-card>
      </div>
    </q-container>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import beforeImage from '../assets/images/home/Iluminacao-Publica-768x768.png';
import afterImage from '../assets/images/home/Manutencao-Transformadores.png';

const dividerPosition = ref(50);
const isDragging = ref(false);

function startDrag() {
  isDragging.value = true;
}

function stopDrag() {
  isDragging.value = false;
}

function updatePosition(e) {
  if (!isDragging.value) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
  dividerPosition.value = percent;
}
</script>