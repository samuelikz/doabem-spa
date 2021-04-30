<template>
  <div>
    <q-card class="my-card flex flex-center">
      <q-img
        src="https://source.unsplash.com/random?1"
        basic
      >
        <div class="absolute-bottom text-h6">
          {{ user.name }}
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <div class="q-pa-md">
        <q-btn color="green" label="Doar" to="caso-id" />
      </div>
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
  width: 100%
  max-width: 270px
  max-height: auto
.q-img
 max-width: 400px
 max-height: 200px
 min-height: 200px
</style>
