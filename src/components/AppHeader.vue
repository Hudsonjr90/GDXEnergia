<script setup lang="ts">
import { ref } from "vue";
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo2.svg";

const menu = [
  { label: "Home", to: "/", icon: "mdi-home-outline" },
  { label: "Sobre nós", to: "/sobre", icon: "mdi-account-group-outline" },
  { label: "Portfólio", to: "/portfolio", icon: "mdi-briefcase-outline" },
  { label: "Parceiros", to: "/parceiros", icon: "mdi-handshake-outline" },
  { label: "Contato", to: "/contato", icon: "mdi-email-outline" },
];

const leftDrawerOpen = ref(false);
</script>

<template>
  <q-header elevated class="bg-primary text-grey-9 app-header">
    <q-toolbar class="q-px-lg q-py-sm header-toolbar wrapper">
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
        icon="mdi-menu"
        class="lt-md mobile-menu-btn text-white"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    class="mobile-drawer bg-mobile"
  >
    <div class="drawer-top row items-center justify-between q-pa-md">
      <q-img :src="logo2" alt="GDX Energia" class="header-logo" />
      <q-btn
        flat
        dense
        round
        icon="mdi-close"
        class="text-white"
        @click="leftDrawerOpen = false"
      />
    </div>

    <q-list padding class="drawer-list">
      <q-item
        v-for="item in menu"
        :key="item.label"
        clickable
        :to="item.to"
        @click="leftDrawerOpen = false"
        :active="$route.path === item.to"
        active-class="drawer-item-active"
        class="drawer-item"
      >
        <q-item-section avatar>
          <q-icon
            :name="item.icon"
            size="22px"
            :color="$route.path === item.to ? 'primary' : 'white'"
          />
        </q-item-section>

        <q-item-section>
          {{ item.label }}
        </q-item-section>
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
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;
}

.menu-item-active {
  border-bottom-color: #ffffff;
}

.drawer-item {
  color: #ffffff;
}

.drawer-item-active {
  border-left: 3px solid #209e2e;
  background: rgba(32, 158, 46, 0.25);
  color: #ffffff;
  font-weight: 600;
}

.bg-mobile {
  position: relative;
}

:deep(.bg-mobile) {
  background-image: linear-gradient(to bottom, rgba(4, 12, 8, 0.75), rgba(4, 12, 8, 0.9)), url(../assets/images/bg-gdx.jpg) !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.drawer-top {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

@media (max-width: 1023px) {
  .logo-button {
    min-width: 120px;
    height: 46px;
  }

  .header-logo {
    width: 90px;
    height: 40px;
  }
}
</style>
