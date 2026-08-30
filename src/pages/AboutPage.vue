<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import work13 from "../assets/images/trabalhos/13.png";
import workSubestacaoSimplificada from "../assets/images/trabalhos/Montagem-de-Subestacao-simplificada-2.png";
import workRedeMediaTensao2 from "../assets/images/trabalhos/Rede-de-Media-tensao-2.png";
import workRedeMediaTensao from "../assets/images/trabalhos/Rede-de-Media-Tensao.png";
import workRedeSubterranea3 from "../assets/images/trabalhos/Rede-Subterranea-Villa-Blanca-3.png";
import workRedeSubterranea from "../assets/images/trabalhos/Rede-Subterranea-Villa-Blanca.png";
import { useMobile } from "../composables/useMobile";

const showFullText = ref(false);
const showCompanyPdf = ref(false);
const companyPdfUrl = "/empresa-gdx.pdf";

const workImages = [
  work13,
  workSubestacaoSimplificada,
  workRedeMediaTensao2,
  workRedeMediaTensao,
  workRedeSubterranea3,
  workRedeSubterranea,
];
const workSlide = ref(0);
const { isMobile } = useMobile();

const stats = [
  {
    value: 10,
    label: "ANOS DE EXPERIÊNCIA",
    description:
      "Mais de uma década oferecendo soluções com excelência no setor elétrico.",
    icon: "mdi-calendar-clock",
  },
  {
    value: 20000,
    label: "UNIDADES ATENDIDAS",
    description:
      "Atendimento de qualidade que gera confiança e relacionamentos duradouros.",
    icon: "mdi-home-group",
  },
  {
    value: 150,
    label: "MVA DE POTÊNCIA INSTALADA",
    description:
      "Projetos robustos que impulsionam o desenvolvimento com segurança e eficiência.",
    icon: "mdi-lightning-bolt",
  },
  {
    value: 100,
    label: "KM DE CABOS DE MT E BT IMPLANTADOS",
    description:
      "Infraestrutura elétrica implantada com qualidade, precisão e conformidade.",
    icon: "mdi-transmission-tower",
  },
  {
    value: 800,
    label: "RESPONSABILIDADES TÉCNICAS EMITIDAS",
    description:
      "Compromisso técnico formalizado com responsabilidade e credibilidade.",
    icon: "mdi-clipboard-text",
  },
];

const displayedValues = ref(stats.map(() => 0));
const animated = ref(false);

const formatNumber = (value: number) => value.toLocaleString("pt-BR");

const animateNumbers = () => {
  if (animated.value) return;
  animated.value = true;

  stats.forEach((stat, index) => {
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;
    const endValue = stat.value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      displayedValues.value[index] = Math.floor(
        startValue + (endValue - startValue) * progress,
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        displayedValues.value[index] = endValue;
      }
    };
    requestAnimationFrame(animate);
  });
};

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.value?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  const target = document.querySelector(".stats-container");
  if (target) observer.value.observe(target);
});

onUnmounted(() => observer.value?.disconnect());
</script>

<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl page-animate">
      <div class="stats-container q-mb-xl page-anim-item">
        <h2 class="text-h4 text-center text-weight-bold text-grey-9 q-mb-md">
          GDX em números
        </h2>
        <div class="text-subtitle1 text-center text-grey-7 q-mb-lg">
          Indicadores institucionais que refletem nossa trajetória e compromisso
          com a excelência.
        </div>

        <div class="row q-col-gutter-lg stats-grid page-anim-item delay-1">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="col-12 col-sm-6 col-md stats-item"
          >
            <q-card flat class="bg-secondary text-white h-full stat-card">
              <q-card-section
                class="fit column justify-center items-center q-py-lg q-px-md"
              >
                <div class="q-mb-md">
                  <q-avatar size="64px" class="bg-white">
                    <q-icon :name="stat.icon" size="32px" color="primary" />
                  </q-avatar>
                </div>

                <div
                  class="text-h4 text-weight-bold text-white text-center q-mb-xs"
                >
                  +{{ formatNumber(displayedValues[index]) }}
                </div>

                <div
                  class="text-center text-weight-bold text-white q-mb-sm stat-label"
                >
                  {{ stat.label }}
                </div>
                <div
                  class="text-caption text-center text-grey-4 stat-description"
                >
                  {{ stat.description }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div
        class="row q-col-gutter-lg justify-center q-mb-xl cards-equal-height page-anim-item delay-3">
        <div class="col-12 col-md-4">
          <q-card
            flat
            bordered
            class="bg-white rounded-borders-xl card-equal-height h-full"
          >
            <q-card-section
              class="text-center q-pa-lg full-height column justify-between"
            >
              <div>
                <div class="flex flex-center q-mb-md">
                  <q-icon
                    name="mdi-account-group"
                    size="48px"
                    color="white"
                    class="bg-primary text-white rounded-borders-circle q-pa-sm"
                  />
                </div>
                <div class="text-h5 text-weight-bold text-grey-9 q-mb-sm">
                  Quem somos
                </div>
              </div>
              <div class="text-body1 text-grey-7">
                Estamos há 10 anos no mercado de engenharia elétrica, pautados
                pela responsabilidade e comprometimento na entrega dos nossos
                serviços.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card
            flat
            bordered
            class="bg-white rounded-borders-xl card-equal-height h-full"
          >
            <q-card-section
              class="text-center q-pa-lg full-height column justify-between"
            >
              <div>
                <div class="flex flex-center q-mb-md">
                  <q-icon
                    name="mdi-bullseye-arrow"
                    size="48px"
                    color="white"
                    class="bg-primary text-white rounded-borders-circle q-pa-sm"
                  />
                </div>
                <div class="text-h5 text-weight-bold text-grey-9 q-mb-sm">
                  Nossa missão
                </div>
              </div>
              <div class="text-body1 text-grey-7">
                Temos como missão realizar serviços de soluções em engenharia e
                projetos elétricos com excelência, garantindo a satisfação dos nossos clientes e parceiros.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card
            flat
            bordered
            class="bg-white rounded-borders-xl card-equal-height h-full"
          >
            <q-card-section
              class="text-center q-pa-lg full-height column justify-between"
            >
              <div>
                <div class="flex flex-center q-mb-md">
                  <q-icon
                    name="mdi-eye"
                    size="48px"
                    color="white"
                    class="bg-primary text-white rounded-borders-circle q-pa-sm"
                  />
                </div>
                <div class="text-h5 text-weight-bold text-grey-9 q-mb-sm">
                  Nossa visão
                </div>
              </div>
              <div class="text-body1 text-grey-7">
                Nossa visão é superar as expectativas dos nossos clientes com
                preço acessível e qualidade, tornando-nos referência no setor elétrico.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-center q-mb-xl page-anim-item delay-2">
        <h1
          class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mt-md q-mb-sm"
        >
          A GDX é uma empresa com uma sólida reputação no mercado elétrico
        </h1>
        <div
          class="text-body1 text-grey-7 q-mx-auto"
          :style="
            $q.screen.gt.sm
              ? { maxWidth: '800px' }
              : {
                  maxHeight: showFullText ? 'none' : '120px',
                  overflow: 'hidden',
                }
          "
        >
          marcada por sua dedicação, experiência e inovação que se destaca no
          setor elétrico. Desde sua fundação, a GDX tem se comprometido com a
          qualidade e a excelência nos serviços prestados, atendendo as
          necessidades dos nossos clientes de acordo com as normas
          regulamentadoras de energia elétrica vigentes, contribuindo para o
          desenvolvimento do setor. Com um escritório localizado no Recreio dos
          Bandeirantes, a GDX abriga uma equipe administrativa altamente
          qualificada, além do marketing, departamento de projetos e eficiência
          energética que trabalham em sinergia para garantir soluções eficazes e
          inovadoras.
        </div>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          no-caps
          :icon-right="showFullText ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          :label="showFullText ? 'Ver menos' : 'Leia mais'"
          color="primary"
          class="q-mt-sm"
          @click="showFullText = !showFullText"
        />
      </div>

      <div class="q-mb-xl page-anim-item delay-3">
        <q-carousel
          v-model="workSlide"
          animated
          infinite
          swipeable
          :autoplay="3000"
          transition-prev="slide-left"
          transition-next="slide-right"
          control-color="primary"
          padding
          :height="isMobile ? '380px' : '800px'"
          class="about-carousel"
        >
          <q-carousel-slide
            v-for="(image, index) in workImages"
            :key="index"
            :name="index"
            class="q-pa-md column"
          >
            <q-img
              :src="image"
              :fit="isMobile ? 'contain' : 'cover'"
              class="about-work-image"
              alt="Trabalho realizado pela GDX Energia"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>

      <div class="text-center q-mt-xl page-anim-item">
        <q-btn
          dense
          unelevated
          color="primary"
          label="Veja mais sobre nós"
          no-caps
          class="q-mb-md"
          @click="showCompanyPdf = true"
        />
      </div>

      <q-dialog v-model="showCompanyPdf" maximized>
        <q-card class="pdf-modal-card column no-wrap">
          <q-card-section
            class="row items-center justify-between q-py-sm q-px-md bg-white"
          >
            <div class="text-subtitle1 text-weight-bold text-grey-9">
              Apresentacao institucional da GDX
            </div>
            <div class="row items-center q-gutter-sm">
              <q-btn
                flat
                color="primary"
                icon="mdi-open-in-new"
                label="Abrir em nova aba"
                no-caps
                :href="companyPdfUrl"
                target="_blank"
              />
              <q-btn
                flat
                round
                dense
                icon="mdi-close"
                color="grey-8"
                @click="showCompanyPdf = false"
              />
            </div>
          </q-card-section>

          <q-separator />

          <div class="pdf-frame-wrap">
            <iframe
              :src="companyPdfUrl"
              title="PDF institucional da GDX"
              class="pdf-frame"
            />
          </div>
        </q-card>
      </q-dialog>
    </q-container>
  </q-page>
</template>

<style scoped>
.rounded-borders-circle {
  border-radius: 50% !important;
}

.about-carousel {
  max-width: 760px;
  margin: 0 auto;
}

.about-slide-card {
  height: 100%;
}

.about-work-image {
  width: 100%;
  flex: 1 1 auto;
}

.stat-card {
  min-height: 320px;
  height: 100%;
}

.stats-grid {
  align-items: stretch;
}

.stats-item {
  display: flex;
}

.stat-label {
  min-height: 48px;
}

.stat-description {
  min-height: 52px;
}

.pdf-modal-card {
  height: 100vh;
}

.pdf-frame-wrap {
  flex: 1;
  min-height: 0;
  background: #f4f6f8;
}

.pdf-frame {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 599px) {
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stats-item {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }

  .stat-card {
    min-height: 220px;
  }
}
</style>
