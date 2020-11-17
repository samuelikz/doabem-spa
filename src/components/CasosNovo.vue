<template>
  <div>

    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      height="400px"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" class="column no-wrap" v-for="caso in casos" :key="caso._id">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="my-card">
            <q-img
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-h6">
                {{ caso.nomeColaborador }}
              </div>
            </q-img>

            <q-card-section>
              {{ caso.descricao }}
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>

<script>
export default {
  name: 'CasosNovo',
  data () {
    return {
      slide: 1,
      casos: [],
      autoplay: true
    }
  }
}
</script>
