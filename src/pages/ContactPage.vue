<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})
</script>

<template>
  <q-page class="bg-grey-1">
    <q-container class="q-py-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-badge color="primary" text-color="white">Contato</q-badge>
          <h1 class="text-h3 text-md-h2 text-weight-bold text-grey-9 q-mt-md q-mb-lg">
            Vamos discutir a solução ideal para o seu projeto.
          </h1>

          <div class="q-gutter-sm text-body1 text-grey-7">
            <div><strong>Email:</strong> contato@gdxenergia.com.br</div>
            <div><strong>Telefone:</strong> (xx) xxxx-xxxx</div>
            <div><strong>Atendimento:</strong> segunda a sexta, das 8h às 18h</div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <q-card flat bordered class="bg-white rounded-borders-xl">
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input outlined v-model="form.name" label="Nome" />
                <q-input outlined v-model="form.email" label="E-mail" type="email" />
                <q-input outlined v-model="form.message" type="textarea" label="Mensagem" autosize />
                <q-btn color="primary" label="Enviar mensagem" unelevated class="full-width" />
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-container>
  </q-page>
</template>
