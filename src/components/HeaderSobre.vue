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
  margin-top: 0
  margin-bottom: .7rem
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  font-size: 5.5rem
  font-weight: 600
  color: white
  line-height: 1.2
  font-size: 54px;
  line-height: 85%;
  text-align: center;
}

.q-img__content > div {
    background: rgba(0,0,0,0);
}

</style>
