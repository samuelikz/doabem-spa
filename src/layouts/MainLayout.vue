<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn stretch flat to="/">
          <q-avatar>
              <img src="../assets/doabem.svg">
          </q-avatar>
        </q-btn>
      <q-space />

        <q-btn stretch flat label="Casos" to="casos"/>
        <q-btn stretch flat label="Mapa" />
        <q-btn stretch flat label="Login" to="login" />

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
      <q-btn stretch flat label="Pesquisar Casos" icon="search">
      </q-btn>
        <q-list></q-list>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <Footer /> <!-- components footer -->
    </q-footer>

  </q-layout>
</template>

<script>
import Footer from 'components/Footer.vue'

export default {
  name: 'MainLayout',
  components: { Footer },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.q-layout{
  background: $cinza;
}
</style>
