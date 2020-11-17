<template>
  <div>

    <q-img
      src="../assets/banner-sobre.svg"
      style="height: 400px; max-width: 100%"
    >

    <div class="descricao-banner-sobre flex flex-center">
      <div class="text-banner-sobre">
        <p>Já somamos mais de 200 voluntários</p>
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

<style lang="sass" scoped>

.descricao-banner-sobre
  flex-direction: column

</style>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.q-img__content div {
  position: relative;
  padding: 16px;
  background: rgba(0,0,0,0);
}

.text-banner-sobre p {
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 300px;
  text-align: center;
}

</style>
