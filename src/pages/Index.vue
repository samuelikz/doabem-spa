<template>
  <q-page>
    <div> <!-- Div para Central -->
      <div class="header">  <!-- Div para Header -->
        <Banner />
      </div>

      <div class="carrossel"> <!-- Div para Carrossel -->
      </div>

      <div class="conteudo"> <!-- Div para conteudo -->

        <div class="como-funciona">  <!-- Div para Como Funciona -->
          <ComoFunciona />
        </div>

        <div class="i-tr">  <!-- Div para Transparencia -->
          <Transparecia />
        </div>
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
