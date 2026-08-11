<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showFullText = ref(false);

const stats = [
  {
    value: 10,
    suffix: ' anos',
    label: 'ANOS DE EXPERIÊNCIA',
    description: 'Mais de uma década oferecendo soluções com excelência no setor elétrico.',
    icon: 'mdi-calendar-clock'
  },
  {
    value: 20000,
    suffix: '',
    label: 'UNIDADES CONSUMIDORAS ATENDIDAS',
    description: 'Atendimento de qualidade que gera confiança e relacionamentos duradouros.',
    icon: 'mdi-home-group'
  },
  {
    value: 150,
    suffix: ' MVA',
    label: 'MVA DE POTÊNCIA INSTALADA',
    description: 'Projetos robustos que impulsionam o desenvolvimento com segurança e eficiência.',
    icon: 'mdi-lightning-bolt'
  },
  {
    value: 100,
    suffix: ' KM',
    label: 'KM DE CABOS DE MT E BT IMPLANTADOS',
    description: 'Infraestrutura elétrica implantada com qualidade, precisão e conformidade.',
    icon: 'mdi-transmission-tower'
  },
  {
    value: 800,
    suffix: '',
    label: 'RESPONSABILIDADES TÉCNICAS EMITIDAS',
    description: 'Compromisso técnico formalizado com responsabilidade e credibilidade.',
    icon: 'mdi-clipboard-text'
  }
];

const displayedValues = ref(stats.map(() => 0));
const animated = ref(false);

const formatNumber = (value: number) => value.toLocaleString('pt-BR');

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
      displayedValues.value[index] = Math.floor(startValue + (endValue - startValue) * progress);

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
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.value?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const target = document.querySelector('.stats-container');
  if (target) observer.value.observe(target);
});

onUnmounted(() => observer.value?.disconnect());
</script>

<template>
  <q-page class="wrapper">

    <div class="stats-container q-mb-xl">
      <h2 class="text-h4 text-center text-weight-bold text-grey-9 q-mb-md">
        GDX EM NÚMEROS
      </h2>
      <div class="text-subtitle1 text-center text-grey-7 q-mb-lg no">
        Idicadores institucionais que refletem nossa trajetória e compromisso com a excelência.
      </div>

      <div class="row q-col-gutter-xl justify-center">
        <div v-for="(stat, index) in stats" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-2">
          <q-card flat bordered class="text-center q-pa-md">
            <q-card-section>
              <div class="flex flex-center q-mb-sm">
                <q-icon :name="stat.icon" size="48px" color="primary" />
              </div>
              <div class="text-h3 text-weight-bold text-primary q-mb-xs">
                +{{ formatNumber(displayedValues[index]) }}{{ stat.suffix }}
              </div>
              <div class="text-subtitle2 text-weight-bold text-grey-8 q-mb-sm">
                {{ stat.label }}
              </div>
              <div class="text-caption text-grey-6">
                {{ stat.description }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="text-center q-mb-xl">
      <h1 class="text-h4 text-md-h3 text-weight-bold text-grey-9 q-mt-md q-mb-sm">
        A GDX é uma empresa com uma sólida reputação no mercado elétrico
      </h1>
      <div
        class="text-body1 text-grey-7"
        :style="$q.screen.gt.sm ? { maxWidth: '800px' } : { maxHeight: showFullText ? 'none' : '120px', overflow: 'hidden' }"
      >
        marcada por sua dedicação, experiência e inovação que se destaca no setor elétrico.
        Desde sua fundação, a GDX tem se comprometido com a qualidade e a excelência nos serviços prestados,
        atendendo as necessidades dos nossos clientes de acordo com as normas regulamentadoras de energia elétrica vigentes,
        contribuindo para o desenvolvimento do setor. Com um escritório localizado no Recreio dos Bandeirantes,
        a GDX abriga uma equipe administrativa altamente qualificada, além do marketing, departamento de projetos e
        eficiência energética que trabalham em sinergia para garantir soluções eficazes e inovadoras. A empresa também
        conta com equipes de obra e supervisores técnicos, todos comprometidos com a entrega de resultados que
        superem as expectativas dos clientes.
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

    <div class="row q-col-gutter-lg justify-center q-mb-xl">
      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white rounded-borders-xl h-full">
          <q-card-section class="text-center q-pa-lg">
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
            <div class="text-body1 text-grey-7">
              Estamos há 10 anos no mercado de engenharia elétrica, pautados pela responsabilidade e comprometimento
              na entrega dos nossos serviços. Persistimos na busca pela excelência, sempre priorizando a satisfação do
              cliente e pronto para enfrentar qualquer desafio que se apresente.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white rounded-borders-xl h-full">
          <q-card-section class="text-center q-pa-lg">
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
            <div class="text-body1 text-grey-7">
              Temos como missão realizar serviços de soluções em engenharia e projetos elétricos com responsabilidade
              no atendimento e cumprimento de prazos, objetivos e metas pré-estabelecidas. Prestando serviços nas áreas
              de inspeções, laudos, projetos e execução de obras.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white rounded-borders-xl h-full">
          <q-card-section class="text-center q-pa-lg">
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
            <div class="text-body1 text-grey-7">
              Nossa visão é superar as expectativas dos nossos clientes com um preço acessível e qualidade na entrega
              de nossos serviços. Em nossos resultados estão contidos os indicadores de qualidade e satisfação dos nossos
              clientes.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<style scoped>
.rounded-borders-circle {
  border-radius: 50% !important;
}
</style>