<script setup lang="ts">
import { ref } from 'vue'
import logo from '../assets/images/logo.png'

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Contato', to: '/contato' },
]

const leftDrawerOpen = ref(false)
</script>

<template>
  <q-header elevated class="bg-primary text-grey-9 app-header">
    <q-toolbar class="q-px-lg q-py-sm header-toolbar">
        <q-img :src="logo" alt="GDX Energia" class="header-logo" />
      <q-space />

      <div class="row items-center no-wrap gt-sm">
        <q-btn
          v-for="item in menu"
          :key="item.label"
          :to="item.to"
          flat
          unelevated
          no-caps
          :class="{ 'menu-item-active text-white': $route.path === item.to }"
          class="q-px-md q-py-xs text-white text-weight-medium menu-item"
        >
          {{ item.label }}
        </q-btn>
      </div>

      <q-btn
        flat
        dense
        round
        icon="menu"
        class="lt-md mobile-menu-btn text-white"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="right" overlay behavior="mobile" class="bg-white mobile-drawer">
    <div class="drawer-top row items-center justify-between q-pa-md">
      
      <q-btn flat dense round icon="close" @click="leftDrawerOpen = false" />
    </div>

    <q-list padding>
      <q-item
        v-for="item in menu"
        :key="item.label"
        clickable
        :to="item.to"
        @click="leftDrawerOpen = false"
        :active="$route.path === item.to"
        active-class="drawer-item-active"
      >
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>

    </q-list>
  </q-drawer>
</template>

<style scoped>
.header-logo {
  width: 100px;
  height: 42px;
  object-fit: cover;
  background: transparent;
  border-radius: 10px;
  padding: 2px 8px;
}

.menu-item {
  border-bottom: 2px solid transparent;
  border-radius: 0;
  transition: border-color 0.2s ease, opacity 0.2s ease;
}

.menu-item-active {
  border-bottom-color: #ffffff;
}

.drawer-item-active {
  border-left: 3px solid #209E2E;
  background: rgba(32, 158, 46, 0.08);
}

@media (max-width: 1023px) {
  .logo-button {
    min-width: 120px;
    height: 46px;
  }

  .header-logo {
    width: 120px;
    height: 32px;
  }
}
</style>
