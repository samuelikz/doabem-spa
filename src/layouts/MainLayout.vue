<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn stretch flat to="/">
          <q-avatar>
            <img src="../assets/doabem.svg" />
          </q-avatar>
        </q-btn>
        <q-space />
        <div class="menu">
          <q-btn stretch flat label="Casos" to="casos" />
          <q-btn stretch flat label="Mapa" />
          <q-btn stretch flat label="Login" to="login" />

          <q-btn-dropdown stretch flat label="Cadastro">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>
                    <q-breadcrumbs-el to="cadpessoa" label="Pessoal Fisica" />
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>
                    <q-breadcrumbs-el to="#" label="Pessoal Juridica" />
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>
                    <q-breadcrumbs-el to="#" label="Beneficiarios" />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn stretch flat label="Pesquisar Casos" icon="search"> </q-btn>
          <q-list></q-list>
        </div>
          <q-btn outline round class="m-hamburgue" icon="menu" flat>
            <q-menu>
              <q-list style="width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Casos</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Mapa</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Cadastrar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Login</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Pesquisar</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Mapa</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Sobre</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <Footer />
      <!-- components footer -->
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
.m-hamburgue{
  display: none;
}
.q-layout{
  background: $cinza;
}

@media only screen and (max-width: 645px) {
.menu{
  display:none;
}
.m-hamburgue{
  display: block;
}
}
</style>
