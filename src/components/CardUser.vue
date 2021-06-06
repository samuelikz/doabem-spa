<template>
  <div>
    <q-card class="my-card flex flex-center">
      <q-img
        :src="src"
        basic
      >
        <div class="absolute-bottom text-h7 text-center">
          {{ user.nome }}
        </div>
      </q-img>

      <q-card-section class="q-pa-md text-center">
        <p>({{user.raca}})</p>
        <p>{{ user.descrincao }}</p>
        <q-btn color="green" label="Doar" to="caso-id" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardUsuario',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  max-width: 270px
  max-height: 450px
  width: 100%
  height: 100%

.q-img
 max-width: 270px
 max-height: 200px
 min-height: 200px
 min-width: 270px
 width: 100%
 height: 100%

</style>
