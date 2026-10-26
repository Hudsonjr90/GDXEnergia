<template>
  <q-fab
    flat
    label="Redes Sociais"
    color="primary"
    :direction="props.direction"
    icon="mdi-share-variant-outline"
    aria-label="Abrir redes sociais"
  >
    <q-fab-action
      icon="mdi-instagram"
      aria-label="Instagram"
      color="primary"
      :href="socialLinks.instagram"
      target="_blank"
      rel="noopener noreferrer"
    />
    <q-fab-action
      icon="mdi-linkedin"
      aria-label="LinkedIn"
      color="primary"
      :href="socialLinks.linkedin"
      target="_blank"
      rel="noopener noreferrer"
    />
    <q-fab-action
      icon="mdi-whatsapp"
      color="primary"
      aria-label="WhatsApp"
      :href="socialLinks.whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    />
  </q-fab>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    direction?: 'up' | 'down' | 'left' | 'right'
  }>(),
  {
    direction: 'right',
  },
)

const socialLinks = {
  instagram:
    'https://www.instagram.com/gdxenergia?igsh=MThkbHRiaThwYndweQ%3D%3D',
  linkedin: 'https://www.linkedin.com/company/gdx-energia/',
  whatsapp:
    'https://wa.me/5521999350077?text=Ol%C3%A1%20GDX%20Energia!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20solu%C3%A7%C3%B5es%20em%20energia.',
}
</script>


