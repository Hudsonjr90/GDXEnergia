<script setup lang="ts">
</script>

<template>
  <q-page class="wrapper">
    <q-container class="q-py-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <h1 class="text-h3 text-md-h2 text-weight-bold text-grey-9 q-mt-lg q-mb-lg">
            Vamos discutir a solução ideal para o seu projeto.
          </h1>

          <div class="q-gutter-md text-body1 text-grey-7">
            <div class="row items-center q-gutter-sm">
              <q-btn
                flat
                unelevated
                label="contato@gdxenergia.com.br"
                no-caps
                color="primary"
                dense
                icon="mdi-email"
                type="a"
                :href="`mailto:contato@gdxenergia.com.br?subject=Contato%20GDX%20Energia&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20e%20soluções%20em%20energia.`"
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
                icon="mdi-email"
                type="a"
                :href="`mailto:projetos@gdxenergia.com.br?subject=Novo%20Projeto%20-%20GDX%20Energia&body=Olá,%20gostaria%20de%20discutir%20um%20novo%20projeto%20e%20solicitar%20um%20orçamento.`"
              />
              <span></span>
            </div>

            <div class="row items-center q-gutter-sm">
              <q-btn
                flat
                unelevated
                label="(21) 99935-0077"
                no-caps
                color="primary"
                dense
                icon="mdi-phone"
                type="a"
                href="tel:+5521999350077"
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
      </div>
    </q-container>
  </q-page>
</template>