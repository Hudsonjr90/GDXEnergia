<script setup lang="ts">
import { getCurrentYear } from '../utils/functions'
import logo from "../assets/images/logo.svg";

const currentYear = getCurrentYear()
</script>

<template>
  <q-footer class="bg-primary text-white ">
    <q-row class="q-pa-md" justify="between" align="center">
      <div class="col-auto  items-start">
        <img
          :src="logo"
          alt="GDX Energia"
          width="100"
        >
        <div class="text-caption q-mt-sm">
         Rua Professora Luiza Nogueira Gonçalves, 350 – Recreio dos Bandeirantes, Rio de Janeiro/RJ –  22790-465 <br>
         CNPJ: 19.808.124/0001-26
        </div>
      </div>

      <div class="col-auto text-center">
        &copy; {{ currentYear }} GDX Energia. Todos os direitos reservados.
      </div>

      <div class="row q-gutter-sm">
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
    </q-row>
  </q-footer>
</template>