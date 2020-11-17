<template>
  <q-layout view="hHh Lpr fFf" class="flex flex-center"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Footer -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn stretch flat to="/">
          <q-avatar>
              <img src="../assets/doabem.svg">
          </q-avatar>
        </q-btn>
      <q-space />

      <q-btn stretch flat label="Pagina Inicial" to="/"/>
      <q-btn-dropdown stretch flat label="Cadastro">
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>
                <q-breadcrumbs-el to="cadpessoa" label="Pessoal Fisica"/>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>
                <q-breadcrumbs-el to="#" label="Pessoal Juridica"/>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>
                <q-breadcrumbs-el to="#" label="Beneficiarios"/>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <q-footer class="absolute-bottom text-subtitle1 text-center">
      Create by Áhgil - Soluções Tecnológicas.
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutControle',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .q-layout{
    background: $cinza;
    width: 100vw;
    height 100vh;
  }
  .text-subtitle1{
    position: absolute;
    padding: 10px;
    color: #fff;
    background-color: $primary;
  }
</style>
