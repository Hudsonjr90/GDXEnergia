<script setup lang="ts">
import homeImage1 from "../assets/images/home/Montagem-Subestacao-Simplificada-768x768.png";
import homeImage2 from "../assets/images/home/Iluminacao-Publica-768x768.png";
import homeImage3 from "../assets/images/home/Manutencao-Transformadores.png";

const slides = [
  {
    title: "Subestações e redes elétricas",
    description: "Projetos e soluções completas para distribuição de energia elétrica.",
    image: homeImage1,
  },
  {
    title: "Iluminação pública e privada",
    description:
      "Soluções de iluminação eficientes, sustentáveis e de alta performance.",
    image: homeImage2,
  },
  {
    title: "Manutenção de transformadores",
    description:
      "Detalhes técnicos, segurança e acompanhamento de ponta a ponta.",
    image: homeImage3,
  },
];
</script>

<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl home-page">
      <div class="row items-center q-col-gutter-xl q-mb-xl q-mt-xs home-text-enter">
        <div class="text-h4 text-md-h3 text-weight-bold text-grey-9">
          Soluções de engenharia e projetos elétricos.
        </div>
      
        <div class="col-12">
          <div class="row q-col-gutter-lg">
            <div v-for="(item, index) in slides" :key="index" class="col-12 col-md-4 home-card-wrap">
              <q-card flat bordered class="rounded-borders shadow-3 overflow-hidden home-card">
                <q-img
                  :src="item.image"
                  fit="contain"
                  class="partner-card-image"
                  style="min-height: 320px;"
                >
                  <div
                    class="absolute-bottom text-left q-pa-md bg-dark text-white home-card-text"
                    style="opacity: 0.82"
                  >
                    <div class="text-h6 text-weight-bold">{{ item.title }}</div>
                    <div class="text-subtitle2">{{ item.description }}</div>
                  </div>
                </q-img>
              </q-card>
            </div>
          </div>
        </div>

      <div class="q-pa-xl rounded-borders-xl">
        <q-chip color="primary" text-color="white" class="q-mb-sm home-text-enter"
          >Por que escolher a GDX?</q-chip
        >
        <div class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mb-lg home-text-enter delay-1">
          Expertise técnica com atuação ágil e focada em resultados
        </div>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card
              flat
              bordered
              class="bg-white rounded-borders-lg full-height"
            >
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">01</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">
                    Planejamento estratégico
                  </div>
                  <div class="text-body2 text-grey-7">
                    Projetos alinhados à operação real do cliente e às
                    exigências do mercado.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card
              flat
              bordered
              class="bg-white rounded-borders-lg full-height"
            >
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">02</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">
                    Execução com qualidade
                  </div>
                  <div class="text-body2 text-grey-7">
                    Processos rigorosos, equipe especializada e atenção aos
                    detalhes técnicos.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card
              flat
              bordered
              class="bg-white rounded-borders-lg full-height"
            >
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">03</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">
                    Relacionamento transparente
                  </div>
                  <div class="text-body2 text-grey-7">
                    Comunicação clara, relacionamento próximo e foco em soluções
                    confiáveis.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      </div>
    </q-container>
  </q-page>
</template>

<style scoped>
.home-page .home-card-wrap {
  opacity: 0;
  transform: translateY(24px);
  animation: cardIn 0.7s ease forwards;
}

.home-page .home-card-wrap:nth-child(1) {
  animation-delay: 0.15s;
}

.home-page .home-card-wrap:nth-child(2) {
  animation-delay: 0.25s;
}

.home-page .home-card-wrap:nth-child(3) {
  animation-delay: 0.35s;
}

.home-page .home-card-text {
  transform: translateX(-18px);
  opacity: 0;
  animation: textIn 0.75s ease forwards;
  animation-delay: 0.4s;
}

.home-text-enter {
  opacity: 0;
  transform: translateX(-18px);
  animation: textIn 0.7s ease forwards;
}

.home-text-enter.delay-1 {
  animation-delay: 0.15s;
}

@keyframes cardIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
