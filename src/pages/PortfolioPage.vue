<script setup lang="ts">
import CompareWorkCard from '../components/CompareWorkCard.vue'
import PortfolioInfoCard from '../components/PortfolioInfoCard.vue'
import { featuredProjects } from '../data/portfolioProjects'
import beforeImage1 from '../assets/images/portfolio/1.jpeg'
import afterImage1 from '../assets/images/portfolio/2.jpeg'
import beforeImage2 from '../assets/images/portfolio/3.jpeg'
import afterImage2 from '../assets/images/portfolio/4.jpeg'
import beforeImage3 from '../assets/images/portfolio/5.jpeg'
import afterImage3 from '../assets/images/portfolio/6.jpeg'

const works = [
  {
    title: 'Reforma elétrica completa',
    beforeImage: beforeImage1,
    afterImage: afterImage1
  },
  {
    title: 'Iluminação eficiente',
    beforeImage: beforeImage2,
    afterImage: afterImage2
  },
  {
    title: 'Modernização de quadro',
    beforeImage: beforeImage3,
    afterImage: afterImage3
  }
]
</script>

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

        <div class="row q-col-gutter-lg">
          <div v-for="(work, index) in works" :key="index" class="col-12 col-md-4 card-col">
            <CompareWorkCard
              :title="work.title"
              :beforeImage="work.beforeImage"
              :afterImage="work.afterImage"
            />
          </div>
        </div>
      </div>

      <div class="page-anim-item q-mt-xl q-mb-xl">
        <div class="row justify-center q-mb-md">
          <div class="text-h4 text-md-h2 text-center text-weight-bold text-grey-9 q-mt-md q-mb-none">
            Conheça alguns de nossos serviços e soluções em energia.
          </div>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="(project, index) in featuredProjects"
            :key="`project-${index}`"
            class="col-12 col-md-4 card-col"
          >
            <PortfolioInfoCard
              :title="project.title"
              :image="project.image"
              :slug="project.slug"
            />
          </div>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<style scoped>
.card-col {
  display: flex;
}

.card-col :deep(.compare-card),
.card-col :deep(.portfolio-info-card) {
  width: 100%;
  height: 100%;
}
</style>
