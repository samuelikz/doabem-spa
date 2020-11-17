<template>
  <q-page padding class="flex flex-center">

    <div class="q-pa-md items-start q-gutter-md">

      <div class="text-sel text-h6 text-center">Cadastro</div>
      <div>
        <q-btn-dropdown color="primary" label="Selecionar Cadastro">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Pessoa Física" to="/cadpessoa"/>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Pessoa Jurídica" to="/cadpessoajuridica"/>
              </q-item-section>
            </q-item>
              <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section class="text-center">
                  <q-breadcrumbs-el label="Beneficiário" to="/cadbeneficiario"/>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Selecao'
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.text-sel {
  color: $azulescuro;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
}

</style>
