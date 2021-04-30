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
          <q-btn stretch flat label="Mapa" to="mapa"/>
          <q-btn stretch flat label="Login" to="/controle/login" />

          <q-btn-dropdown stretch flat label="Cadastro">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                    <q-breadcrumbs-el to="cadpessoa" label="Pessoal Física" />
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                    <q-breadcrumbs-el to="cadpessoajuridica" label="Pessoal Jurídica" />
                </q-item-section>
              </q-item>
                <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>
                    <q-breadcrumbs-el to="cadbeneficiario" label="Beneficiários" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn stretch flat label="Pesquisar Casos" icon="search" to="pesquisar"> </q-btn>
          <q-list></q-list>
        </div>
          <q-btn outline round class="m-hamburgue" icon="menu" flat>
            <q-menu>
              <q-list style="width: 150px">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-breadcrumbs-el label="Casos" to="casos"/>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-breadcrumbs-el label="Mapa" to="mapa"/>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-breadcrumbs-el label="Cadastrar" to="/controle/Selecao"/>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-breadcrumbs-el label="Login" to="/controle/login"/>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-breadcrumbs-el label="Pesquisar" to="pesquisar"/>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-breadcrumbs-el label="Sobre" to="sobre"/>
                  </q-item-section>
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

.q-btn:hover{
  height: 50px;
}

@media only screen and (max-width: 660px) {
.menu{
  display:none;
}
.m-hamburgue{
  display: block;
}
}
</style>
