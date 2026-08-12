<script setup lang="ts">
import CompareWorkCard from '../components/CompareWorkCard.vue'
import PortfolioInfoCard from '../components/PortfolioInfoCard.vue'
import beforeImage1 from '../assets/images/home/Montagem-Subestacao-Simplificada-768x768.png'
import afterImage1 from '../assets/images/home/Iluminacao-Publica-768x768.png'
import beforeImage2 from '../assets/images/home/Iluminacao-Publica-768x768.png'
import afterImage2 from '../assets/images/home/Manutencao-Transformadores.png'
import beforeImage3 from '../assets/images/home/Manutencao-Transformadores.png'
import afterImage3 from '../assets/images/home/Montagem-Subestacao-Simplificada-768x768.png'

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

const featuredProjects = [
  {
    title: 'Laudo Técnico – NR10 e SPDA',
    image: beforeImage1,
    previewText: 'A segurança elétrica é um dos pilares fundamentais para qualquer empresa ou empreendimento que dependa de energia para suas operações. A GDX oferece serviços especializados na emissão de Laudo Técnico – NR10 e SPDA, garantindo que sua instalação elétrica esteja dentro das normas vigentes e protegida contra acidentes, falhas e descargas atmosféricas.',
    modalDescription: ''
  },
  {
    title: 'Legalização',
    image: afterImage1,
    previewText: 'A regularização de instalações elétricas é um processo fundamental para garantir que um empreendimento esteja em conformidade com as normas técnicas e regulamentações das concessionárias de energia. Sem essa regularização, o fornecimento de energia pode ser comprometido, resultando em multas, cortes no abastecimento e riscos de segurança.',
    modalDescription: ''
  },
  {
    title: 'Iluminação Pública',
    image: afterImage2,
    previewText: 'A iluminação pública é essencial para a segurança, o bem-estar e a qualidade de vida das pessoas. Além de proporcionar visibilidade nas vias urbanas e rurais, ela também desempenha um papel vital na redução de crimes, acidentes e na melhoria da mobilidade urbana. A GDX oferece serviços especializados para planejamento, instalação e manutenção de sistemas de iluminação pública, com soluções modernas, eficientes e sustentáveis, utilizando tecnologia LED e sistemas de automação inteligente.',
    modalDescription: ''
  },
  {
    title: 'Autoconstrução de Rede de Distribuição MT e BT',
    image: afterImage3,
    previewText: 'A autoconstrução de rede de distribuição é uma alternativa vantajosa para empresas e empreendedores que desejam otimizar o processo de fornecimento de energia elétrica, especialmente em regiões que não possuem infraestrutura adequada. Essa solução envolve a execução das obras de construção da rede de distribuição de energia elétrica, tanto para média tensão (MT) quanto para baixa tensão (BT), garantindo que as instalações atendam às normas e regulamentações exigidas pelas concessionárias e órgãos reguladores.',
    modalDescription: ''
  },
  {
    title: 'Subestação Abrigada',
    image: beforeImage2,
    previewText: 'A subestação abrigada é uma solução projetada para oferecer alta proteção e confiabilidade no fornecimento de energia elétrica. Ao contrário das subestações tradicionais, as subestações abrigadas são instaladas em estruturas fechadas, proporcionando maior proteção aos equipamentos contra intempéries, riscos externos e vandalismo. São ideais para locais onde a segurança e a eficiência são prioridade, como em áreas urbanas ou zonas com alto risco de exposição a eventos ambientais adversos.',
    modalDescription: ''
  },
  {
    title: 'Subestação Blindada',
    image: beforeImage3,
    previewText: 'A subestação blindada é uma instalação elétrica projetada para oferecer proteção e segurança superiores em sistemas de distribuição de energia elétrica. Com o aumento da demanda por infraestruturas mais seguras e eficientes, as subestações blindadas se destacam como uma solução moderna para proteger equipamentos e sistemas contra riscos ambientais e eventos externos, como choques elétricos, intempéries e vandalismo.',
    modalDescription: ''
  },
  {
    title: 'Subestação Simplificada',
    image: afterImage1,
    previewText: 'A subestação simplificada é uma solução ideal para instalações de menor porte, que demandam eficiência energética e segurança, mas com custo reduzido e menos complexidade. Essas subestações são compactas e fáceis de instalar, atendendo principalmente empreendimentos de pequeno e médio porte que precisam de um fornecimento de energia confiável e eficiente, mas não necessitam de uma estrutura tão grande quanto as subestações tradicionais.',
    modalDescription: ''
  },
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

      <div class="page-anim-item q-mt-xl">
        <div class="row justify-center q-mb-md">
          <q-chip color="primary" text-color="white" dense class="q-mr-sm">
            Conheça alguns de nossos projetos
          </q-chip>
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
              :preview-text="project.previewText"
              :modal-description="project.modalDescription"
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
