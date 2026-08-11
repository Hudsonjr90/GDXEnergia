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

      <q-carousel
        v-model="slide"
        animated
        infinite
        autoplay
        swipeable
        control-color="primary"
        class="full-width page-anim-item delay-1"
      >
        <q-carousel-slide v-for="(group, index) in partnerGroups" :key="index" :name="index" class="column no-wrap">
          <div class="row q-col-gutter-lg items-stretch justify-center q-pa-md">
            <div v-for="partner in group" :key="partner.name" class="col-12 col-sm-6 col-md-4">
              <q-card flat bordered class="partner-card">
                <q-card-section class="flex flex-center  q-pa-lg">
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
        </q-carousel-slide>
      </q-carousel>
    </q-container>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

import apj from '../assets/images/parceiros/APJ-Construcoes.png'
import bothanica from '../assets/images/parceiros/Bothanica-Urbanismo.png'
import gtb from '../assets/images/parceiros/GTB-Empreendimentos.png'
import legusta from '../assets/images/parceiros/Legusta.png'
import tyr from '../assets/images/parceiros/TYR-energia.png'
import villaBlanca from '../assets/images/parceiros/Villa-Blanca-Residence.png'

const $q = useQuasar()

const partners = [
  { name: 'APJ Construções', image: apj },
  { name: 'Bothanica Urbanismo', image: bothanica },
  { name: 'GTB Empreendimentos', image: gtb },
  { name: 'Legusta', image: legusta },
  { name: 'TYR Energia', image: tyr },
  { name: 'Villa Blanca Residence', image: villaBlanca }
]

const slide = ref(0)

const chunkSize = computed(() => ($q.screen.lt.md ? 1 : 3))

const partnerGroups = computed(() => {
  const groups: Array<typeof partners> = []

  for (let index = 0; index < partners.length; index += chunkSize.value) {
    groups.push(partners.slice(index, index + chunkSize.value))
  }

  return groups
})
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
</style>
