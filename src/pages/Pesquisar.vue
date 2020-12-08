<template>
  <div class="content-center">

    <q-img
      src="../assets/banner-parallax.jpg"
      style="height: 500px; max-width: 100%"
    >

    <div class="descricao-banner-mapa absolute-full flex flex-center">
      <div class="text-banner-mapa ">
      <p class="headline">Pesquisar Casos</p>
        <div>
          <q-input class="configura-inpunt" rounded outlined label="Pesquisar" v-model="text">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>

    </q-img>

  </div>
</template>

<script>
export default {
  name: 'Pesquisar',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.text-banner-mapa p {
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 85%;
  text-align: center;
}

.q-img__content > div {
    background: rgba(0,0,0,0);
}

.configura-inpunt{
  background: rgba(255, 255, 255, 0.86);
  border-radius: 30px;
}

.headline{
  color: white;
  text-shadow: 2px 0 0 #000;
}

</style>
