<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl page-animate">
      <div class="text-center q-mb-xl page-anim-item">
        <div class="text-h4 text-md-h2 text-weight-bold text-grey-9 q-mt-lg q-mb-none">
          Relacionamentos que ampliam capacidade e confiança.
        </div>
      </div>

      <div class="q-mb-xl">
        <div class="text-h5 text-md-h3 text-center text-weight-bold text-grey-9">
          Empresas que compartilham nossa visão de excelência e inovação.
        </div>
      </div>

      <div class="row q-col-gutter-lg items-stretch justify-center q-mb-xl page-anim-item delay-1">
        <div v-for="partner in featuredPartners" :key="partner.name" class="col-12 col-sm-6 col-md-4">
          <q-card flat bordered class="partner-card">
            <q-card-section class="flex flex-center q-pa-lg">
              <q-img
                :src="partner.image"
                fit="contain"
                class="partner-logo"
                :ratio="4/3"
                loading="lazy"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="marquee-wrapper page-anim-item delay-2">
        <div class="marquee-track">
          <div v-for="(partner, index) in marqueePartners" :key="`marquee-${index}`" class="marquee-item">
            <q-img
              :src="partner.image"
              fit="contain"
              class="marquee-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import apj from '../assets/images/parceiros/APJ-Construcoes.png'
import bothanica from '../assets/images/parceiros/Bothanica-Urbanismo.png'
import gtb from '../assets/images/parceiros/GTB-Empreendimentos.png'
import legusta from '../assets/images/parceiros/Legusta.png'
import tyr from '../assets/images/parceiros/TYR-energia.png'
import villaBlanca from '../assets/images/parceiros/Villa-Blanca-Residence.png'
import smart from '../assets/images/parceiros/smart.png'
import riosul from '../assets/images/parceiros/riosul.png'
import mega from '../assets/images/parceiros/mega.jpg'
import fgv from '../assets/images/parceiros/fgv.png'
import igreja from '../assets/images/parceiros/igreja.jpg'
import souza from '../assets/images/parceiros/souza.jpg'
import vitalle from '../assets/images/parceiros/vitalle.png'
import light from '../assets/images/parceiros/light.png'

const carouselPartners = [
  { name: 'Legusta', image: legusta },
  { name: 'Bothanica Urbanismo', image: bothanica },
  { name: 'APJ Construções', image: apj },
  { name: 'GTB Empreendimentos', image: gtb },
  { name: 'TYR Energia', image: tyr },
  { name: 'Villa Blanca Residence', image: villaBlanca },
  { name: 'Smart', image: smart },
  { name: 'Rio Sul', image: riosul },
  { name: 'Mega', image: mega },
  { name: 'FGV', image: fgv },
  { name: 'Igreja', image: igreja },
  { name: 'Souza', image: souza },
  { name: 'Vitalle', image: vitalle },
  { name: 'Light', image: light },

]

const featuredPartners = computed(() => carouselPartners.slice(0, 3))

const marqueePartners = computed(() => [...carouselPartners, ...carouselPartners])
</script>

<style scoped>
.partner-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.partner-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.partner-logo {
  width: 100%;
  max-width: 220px;
  background: transparent !important;
  mix-blend-mode: multiply !important;
}

.partner-logo :deep(img) {
  background: transparent !important;
  object-fit: contain !important;
  mix-blend-mode: multiply !important;
}

.marquee-wrapper {
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
}

.marquee-logo {
  width: 260px;
  background: transparent !important;
  mix-blend-mode: multiply !important;
}

.marquee-logo :deep(img) {
  background: transparent !important;
  object-fit: contain !important;
  mix-blend-mode: multiply !important;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
