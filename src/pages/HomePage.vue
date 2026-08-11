<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(0)

const slides = [
  {
    title: 'Projetos elétricos sob medida',
    description: 'Energia segura e performance para empresas e condomínios.',
    image:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automação e eficiência',
    description: 'Soluções inteligentes para otimizar consumo e reduzir perdas.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Infraestrutura confiável',
    description: 'Detalhes técnicos, segurança e acompanhamento de ponta a ponta.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
]
</script>

<template>
  <q-page class="bg-grey-1">
    <q-container class="q-py-xl">
      <div class="row items-center q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-6">
          <q-badge color="primary" text-color="white" class="q-mb-md text-weight-bold">
            Soluções em engenharia elétrica
          </q-badge>

          <h1 class="text-h3 text-md-h2 text-weight-bold text-grey-9 q-mb-md">
            Energia que move projetos, empresas e cidades.
          </h1>

          <p class="text-body1 text-grey-7 q-mb-lg">
            A GDX Energia atua com projetos elétricos, automação, eficiência energética e
            soluções sob medida para clientes que buscam desempenho, segurança e evolução.
          </p>

          <div class="row q-col-gutter-sm q-mb-lg">
            <div class="col-auto">
              <q-btn color="primary" unelevated label="Conheça nossos serviços" to="/portfolio" />
            </div>
            <div class="col-auto">
              <q-btn outline color="secondary" label="Fale com a GDX" to="/contato" />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-4">
              <q-card flat bordered class="bg-white rounded-borders-xl">
                <q-card-section class="text-center">
                  <div class="text-h5 text-primary text-weight-bold">+12 anos</div>
                  <div class="text-caption text-grey-7">de experiência</div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 col-sm-4">
              <q-card flat bordered class="bg-white rounded-borders-xl">
                <q-card-section class="text-center">
                  <div class="text-h5 text-primary text-weight-bold">180+</div>
                  <div class="text-caption text-grey-7">projetos entregues</div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 col-sm-4">
              <q-card flat bordered class="bg-white rounded-borders-xl">
                <q-card-section class="text-center">
                  <div class="text-h5 text-primary text-weight-bold">100%</div>
                  <div class="text-caption text-grey-7">foco em qualidade</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <q-carousel
            v-model="slide"
            animated
            arrows
            navigation
            infinite
            autoplay
            height="440px"
            class="rounded-borders-xl shadow-3"
          >
            <q-carousel-slide
              v-for="(item, index) in slides"
              :key="index"
              :name="index"
              :img-src="item.image"
            >
              <div class="absolute-bottom text-left q-pa-md bg-dark text-white" style="opacity: 0.82">
                <div class="text-h6 text-weight-bold">{{ item.title }}</div>
                <div class="text-subtitle2">{{ item.description }}</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <div class="q-mb-xl">
        <q-badge color="primary" text-color="white" class="q-mb-sm">O que fazemos</q-badge>
        <h2 class="text-h4 text-md-h3 text-weight-bold text-grey-9">
          Soluções integradas para infraestrutura e performance
        </h2>
      </div>

      <div class="row q-col-gutter-lg q-mb-xl">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-white rounded-borders-xl full-height">
            <q-card-section>
              <div class="row items-center q-col-gutter-sm q-mb-md">
                <div class="col-auto">
                  <q-icon name="bolt" color="primary" size="32px" />
                </div>
              </div>
              <div class="text-h6 text-grey-9 q-mb-sm">Projetos Elétricos</div>
              <div class="text-body2 text-grey-7">
                Dimensionamento, infraestrutura, redes e sistemas para obras comerciais e industriais.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-white rounded-borders-xl full-height">
            <q-card-section>
              <div class="row items-center q-col-gutter-sm q-mb-md">
                <div class="col-auto">
                  <q-icon name="build" color="secondary" size="32px" />
                </div>
              </div>
              <div class="text-h6 text-grey-9 q-mb-sm">Manutenção e Diagnóstico</div>
              <div class="text-body2 text-grey-7">
                Monitoramento, ajustes, inspeção e suporte preventivo para máxima confiabilidade.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-white rounded-borders-xl full-height">
            <q-card-section>
              <div class="row items-center q-col-gutter-sm q-mb-md">
                <div class="col-auto">
                  <q-icon name="lightbulb" color="primary" size="32px" />
                </div>
              </div>
              <div class="text-h6 text-grey-9 q-mb-sm">Eficiência Energética</div>
              <div class="text-body2 text-grey-7">
                Estratégias para reduzir custo, otimizar consumo e ampliar sustentabilidade operacional.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="q-pa-lg bg-green-1 rounded-borders-xl">
        <q-badge color="primary" text-color="white" class="q-mb-sm">Por que escolher a GDX</q-badge>
        <h2 class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mb-lg">
          Expertise técnica com atuação ágil e focada em resultados
        </h2>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card flat bordered class="bg-white rounded-borders-lg full-height">
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">01</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">Planejamento estratégico</div>
                  <div class="text-body2 text-grey-7">
                    Projetos alinhados à operação real do cliente e às exigências do mercado.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="bg-white rounded-borders-lg full-height">
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">02</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">Execução com qualidade</div>
                  <div class="text-body2 text-grey-7">
                    Processos rigorosos, equipe especializada e atenção aos detalhes técnicos.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="bg-white rounded-borders-lg full-height">
              <q-card-section class="row items-start q-col-gutter-md">
                <div class="text-h4 text-primary text-weight-bold">03</div>
                <div>
                  <div class="text-h6 text-grey-9 q-mb-xs">Relacionamento transparente</div>
                  <div class="text-body2 text-grey-7">
                    Comunicação clara, relacionamento próximo e foco em soluções confiáveis.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-container>
  </q-page>
</template>
