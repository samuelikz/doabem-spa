<template>
  <div class="content-center">

    <q-img
      src="../assets/banner-sobre.svg"
      style="height: 400px; max-width: 100%"
    >

    <div class="descricao-banner-sobre absolute-full flex flex-center">
      <div class="text-banner-sobre ">
        <p>Já somamos <br> mais de 200 voluntários</p>
      </div>
      <div class="pesquisar-mapa">
        <q-btn stretch flat label="Pesquisar Casos" icon="search"> </q-btn>
      </div>
    </div>

    </q-img>
  </div>
</template>

<script>
export default {
  name: 'HeaderSobre',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.text-banner-sobre p {
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
