<script setup lang="ts">
import homeImage1 from "../assets/images/home/Montagem-Subestacao-Simplificada-768x768.png";
import homeImage2 from "../assets/images/home/Iluminacao-Publica-768x768.png";
import homeImage3 from "../assets/images/home/Manutencao-Transformadores.png";

import homeSegment1 from "../assets/images/home/loteamentos.png";
import homeSegment2 from "../assets/images/home/condominios.png";
import homeSegment3 from "../assets/images/home/industrias.png";
import homeSegment4 from "../assets/images/home/centrologisticos.png";
import homeSegment5 from "../assets/images/home/empreendimentoscomerciais.png";
import homeSegment6 from "../assets/images/home/empreendimentosresidenciais.png";

const slides = [
  {
    title: "Subestações e redes elétricas",
    description:
      "Projetos e soluções completas para distribuição de energia elétrica.",
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

const segments = [
  {
    title: "Loteamentos",
    icon: "mdi-map-outline",
    image: homeSegment1,
  },
  {
    title: "Condomínios",
    icon: "mdi-city-variant-outline",
    image: homeSegment2,
  },
  {
    title: "Indústrias",
    icon: "mdi-factory",
    image: homeSegment3,
  },
  {
    title: "Centros logísticos",
    icon: "mdi-truck-fast-outline",
    image: homeSegment4,
  },
  {
    title: "Empreendimentos comerciais",
    icon: "mdi-office-building-outline",
    image: homeSegment5,
  },
  {
    title: "Empreendimentos residenciais",
    icon: "mdi-home-city-outline",
    image: homeSegment6,
  },
];
</script>

<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl home-page">
      <div
        class="row items-start q-col-gutter-xl q-mb-xl q-mt-xs home-text-enter"
      >
        <div class="col-12 text-h4 text-md-h3 text-weight-bold text-grey-9">
          Soluções de engenharia e projetos elétricos.
        </div>

        <div class="col-12">
          <div class="row q-col-gutter-lg">
            <div
              v-for="(item, index) in slides"
              :key="index"
              class="col-12 col-md-4 home-card-wrap"
            >
              <q-card
                flat
                bordered
                class="rounded-borders shadow-3 overflow-hidden home-card"
              >
                <q-img
                  :src="item.image"
                  fit="contain"
                  class="partner-card-image"
                  style="min-height: 320px"
                >
                  <div
                    class="absolute-bottom text-left q-pa-md bg-dark text-white home-card-text"
                    style="opacity: 0.82"
                  >
                    <div class="text-h6 text-weight-bold">
                      {{ item.title }}
                    </div>

                    <div class="text-subtitle2">
                      {{ item.description }}
                    </div>
                  </div>
                </q-img>
              </q-card>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="row q-col-gutter-xl items-center video-section">
            <div class="col-12 col-md-5">
              <q-chip color="primary" text-color="white" class="q-mb-sm">
                Por que escolher a GDX?
              </q-chip>

              <div class="text-h5 text-weight-bold text-grey-9 q-mb-sm">
                Solidez técnica com foco em resultado
              </div>

              <div class="text-body1 text-grey-7">
                Conheça um pouco da nossa estrutura, da nossa equipe e de como
                conduzimos cada projeto com qualidade, segurança e eficiência.
              </div>
            </div>

            <div class="col-12 col-md-7">
              <div class="video-frame">
                <video
                  autoplay
                  muted
                  loop
                  playsinline
                  controls
                  class="video-mobile"
                >
                  <source src="/video/empresa.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 q-pa-xl rounded-borders-xl segments-block">
          <div class="row q-col-gutter-lg items-start">
            <div class="col-12">
              <div class="segments-intro full-height">
                <div
                  class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mb-sm home-text-enter delay-1"
                >
                  Segmentos atendidos
                </div>

                <div class="text-subtitle1 text-grey-7 q-mb-lg">
                  Soluções completas e personalizadas para diferentes tipos de
                  empreendimento.
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="row q-col-gutter-md justify-center segments-grid">
                <div
                  v-for="(segment, index) in segments"
                  :key="index"
                  class="col-12 col-sm-6 col-md-4 segment-wrap"
                >
                  <q-card
                    flat
                    bordered
                    class="rounded-borders-lg overflow-hidden segment-card"
                  >
                    <q-img
                      :src="segment.image"
                      fit="cover"
                      class="segment-image"
                    >
                      <div
                        class="absolute-bottom segment-caption row items-center no-wrap q-gutter-sm"
                      >
                        <q-icon
                          :name="segment.icon"
                          color="primary"
                          size="22px"
                        />

                        <div
                          class="text-subtitle2 text-weight-bold text-uppercase ellipsis-2-lines"
                        >
                          {{ segment.title }}
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                </div>
              </div>
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

.video-mobile {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 12px;
}

.video-section {
  margin-top: 6px;
}

.video-frame {
  width: 100%;
  max-width: 760px;
  margin-left: auto;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #0d0f12;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
}

.segments-block {
  background: #fff;
}

.segments-intro {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}

.segment-callout {
  margin-top: 10px;
}

.segments-grid {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.segment-wrap {
  display: flex;
}

.segment-card {
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
}

.segment-image {
  min-height: 250px;
  max-height: 250px;
}

.segment-caption {
  background: rgba(15, 26, 20, 0.86);
  border-top: 1px solid rgba(121, 219, 0, 0.35);
}

.ellipsis-2-lines {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .segments-grid {
    max-width: 980px;
  }
}

@media (max-width: 1023px) {
  .segment-wrap {
    width: 100%;
    max-width: 360px;
    margin-left: 30px;
  }

  .segment-card,
  .segment-image {
    min-height: 220px;
  }

  .video-frame {
    max-width: 100%;
    margin-left: 0;
  }
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