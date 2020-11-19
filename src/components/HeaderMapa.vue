<template>
  <div class="content-center">

    <q-img
      src="../assets/banner-parallax.jpg"
      style="height: 400px; max-width: 100%"
    >

    <div class="descricao-banner-mapa absolute-full flex flex-center">
      <div class="text-banner-mapa ">
      <p>Saiba por onde começar</p>
      </div>
    </div>

    </q-img>

  </div>
</template>

<script>
export default {
  name: 'HeaderMapa',
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

</style>
