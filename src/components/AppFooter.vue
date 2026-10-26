<script setup lang="ts">
import { getCurrentYear } from '../utils/functions'
import logo from "../assets/images/logo.png";
import { useMobile } from '../composables/useMobile';

const currentYear = getCurrentYear()
const { isMobile } = useMobile()
</script>

<template>
  <q-footer class="bg-secondary text-white">
    <div class="row items-center q-pa-md footer-layout" :class="isMobile ? '' : 'wrapper' ">
      <div class="col-12 col-md-4 footer-brand">
        <!-- <img :src="logo" alt="GDX Energia" class="footer-logo" /> -->
      </div>

      <div class="col-12 col-md-4 footer-info">
        <div class="text-caption footer-address">
          CNPJ: 19.808.124/0001-26
        </div>
        <div class="text-caption footer-copyright">
          &copy; {{ currentYear }} GDX Energia. Todos os direitos reservados.
        </div>
      </div>

      <div class="col-12 col-md-4 footer-social-column">
        <div class="row q-gutter-sm footer-socials">
          <q-btn
            flat
            round
            dense
            icon="mdi-instagram"
            type="a"
            href="https://www.instagram.com/gdxenergia?igsh=MThkbHRiaThwYndweQ%3D%3D"
            target="_blank"
            aria-label="Instagram"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-linkedin"
            type="a"
            href="https://www.linkedin.com/company/gdx-energia/"
            target="_blank"
            aria-label="LinkedIn"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-whatsapp"
            type="a"
            href="https://wa.me/5521999350077?text=Olá%20GDX%20Energia!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20e%20soluções%20em%20energia."
            target="_blank"
            aria-label="WhatsApp"
          />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<style scoped>
.footer-layout {
  width: 100%;
  padding: 0 1rem;
}

.footer-brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer-logo {
  width: 150px;
  height: auto;
}

.footer-address,
.footer-copyright {
  line-height: 1.5;
  opacity: 0.95;
}

.footer-copyright {
  margin-top: 4px;
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
    padding: 8px 16px;
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
    margin-top: 4px;
    order: 3;
  }

  .footer-address,
  .footer-copyright {
    line-height: 1.25;
  }

  .footer-copyright {
    margin-top: 2px;
  }

  .footer-social-column {
    margin-left: 8px;
  }

  .footer-socials .q-btn {
    font-size: 12px;
  }
}
</style>