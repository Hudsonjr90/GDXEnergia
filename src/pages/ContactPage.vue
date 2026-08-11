<script setup lang="ts">
</script>

<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl page-animate">
      <div class="text-center q-mb-xl page-anim-item">
        <div class="text-h4 text-md-h2 text-weight-bold text-grey-9 q-mt-lg q-mb-lg">
          Vamos discutir a solução ideal para o seu projeto.
        </div>
      </div>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6 page-anim-item delay-1">
          <div class="q-gutter-md">
            <div class="row items-center q-gutter-sm">
              <q-btn
                flat
                unelevated
                label="contato@gdxenergia.com.br"
                no-caps
                color="primary"
                dense
                icon="mdi-email-outline"
                type="a"
                href="mailto:contato@gdxenergia.com.br?subject=Contato%20GDX%20Energia&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20e%20soluções%20em%20energia."
              />
            </div>

            <div class="row items-center q-gutter-sm">
              <q-btn
                flat
                unelevated
                dense
                no-caps
                label="projetos@gdxenergia.com.br"
                color="primary"
                icon="mdi-email-outline"
                type="a"
                href="mailto:projetos@gdxenergia.com.br?subject=Novo%20Projeto%20-%20GDX%20Energia&body=Olá,%20gostaria%20de%20discutir%20um%20novo%20projeto%20e%20solicitar%20um%20orçamento."
              />
            </div>

            <div class="row items-center q-gutter-sm">
              <q-btn
                label="Whatsapp"
                no-caps
                color="primary"
                flat
                unelevated
                dense
                icon="mdi-whatsapp"
                type="a"
                href="https://wa.me/5521999350077?text=Olá%20GDX%20Energia!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20e%20soluções%20em%20energia."
                target="_blank"
              />
            </div>
          </div>
        </div>

        <!-- Coluna direita: Mapa com URL exata do seu antigo site -->
        <div class="col-12 col-md-6 page-anim-item delay-2">
          <div class="map-container rounded-borders">
            <iframe
              src="https://www.google.com/maps?cid=17482256488818489539&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=pt-BR&output=embed"
              width="100%"
              height="400"
              style="border:0;"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<style scoped>
.map-container {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>