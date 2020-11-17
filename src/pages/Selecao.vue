<template>
  <q-page padding class="flex flex-center">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h5">Selecionar tipo de cadastro</div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-center">
        <q-btn-dropdown color="primary" label="Selecionar Cadastro">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Pessoa Fisica" to="/cadpessoa"/>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Pessoa Juridica" to="/"/>
              </q-item-section>
            </q-item>
              <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Beneficiario" to="/"/>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-card-actions>
    </q-card>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Selecao'
}
</script>
