<script setup lang="ts">
import { getCurrentYear } from '../utils/functions'
import logo from "../assets/images/logo.svg";
import { useMobile } from '../composables/useMobile';

const currentYear = getCurrentYear()
const { isMobile } = useMobile()
</script>

<template>
  <q-footer class="bg-primary text-white">
    <div class="row items-center q-pa-md footer-layout" :class="isMobile ? '' : 'wrapper' ">
      <div class="col-12 col-md-4 footer-brand">
        <img :src="logo" alt="GDX Energia" width="85" class="footer-logo" />
      </div>

      <div class="col-12 col-md-4 footer-info">
        <div class="text-caption footer-address">
          CNPJ: 19.808.124/0001-26
        </div>
        <div class="text-caption q-mt-sm footer-copyright">
          &copy; {{ currentYear }} GDX Energia. Todos os direitos reservados.
        </div>
      </div>

      <div class="col-12 col-md-4 footer-social-column">
        <div class="row q-gutter-sm footer-socials">
          <q-btn
            flat
            round
            dense
            icon="mdi-facebook"
            type="a"
            href="#"
            target="_blank"
            aria-label="Facebook"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-instagram"
            type="a"
            href="#"
            target="_blank"
            aria-label="Instagram"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-linkedin"
            type="a"
            href="#"
            target="_blank"
            aria-label="LinkedIn"
          />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<style scoped>
.footer-layout {
  width: 100%;
}

.footer-brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer-address,
.footer-copyright {
  line-height: 1.5;
  opacity: 0.95;
}

.footer-social-column {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-socials {
  align-items: center;
}

@media (max-width: 767px) {
  .footer-layout {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .footer-brand,
  .footer-social-column {
    width: auto;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-brand {
    margin-right: 8px;
  }

  .footer-info {
    width: 100%;
    margin-top: 10px;
    order: 3;
  }

  .footer-social-column {
    margin-left: 8px;
  }
}
</style>