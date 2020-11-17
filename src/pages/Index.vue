<template>
  <q-page>
    <div> <!-- Div para Central -->
      <div class="header">  <!-- Div para Header -->
        <Banner />
      </div>

      <div class="carrossel"> <!-- Div para Carrossel -->
      </div>

      <div class="conteudo flex flex-center"> <!-- Div para conteudo -->

        <div class="como-funciona">  <!-- Div para Como Funciona -->
          <ComoFunciona />
        </div>

        <!-- Cards transparência -->
        <div padding class="q-pa-md row flex-center q-gutter-md">
          <q-card class="my-card">
            <img src="../assets/network1.svg">
            <q-card-section>
              <div class="text-h6">Conectar doações a quem necessita.</div>
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>

        </div>
        <!-- Fim cards transparência -->
      </div>

      <div class="i-tr">  <!-- Div para Como Funciona -->
        <Transparecia />
      </div>
    </div>
  </q-page>
</template>

<script>
import Banner from 'components/Banner.vue'
import ComoFunciona from 'components/ComoFunciona.vue'
import Transparecia from 'components/Transparecia.vue'

export default {
  name: 'PageIndex',
  components: { Banner, ComoFunciona, Transparecia },
  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.my-card /*TAMANHO DOS CARDS*/
  width: 100%
  height: 25rem
  max-width: 250px
</style>
