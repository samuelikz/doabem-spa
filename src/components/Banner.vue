<template>
  <div>

    <q-parallax
      src="../assets/banner.svg"
      style="height: 400px; max-width: 100%"
    >

    <div class="descrincao-banner flex flex-center">
      <div class="avatar flex flex-center">
          <img src="../assets/avatar.svg">
      </div>
      <div class="text-banner">
        <p>O Maior Site de Doações do Brasil</p>
      </div>
      <div class="button-banner text-center absolute-bottom">
        <q-btn unelevated>
            <img src="../assets/googleplay.svg">
        </q-btn>
        <q-btn unelevated>
            <img src="../assets/appstore.svg">
        </q-btn>
      </div>
    </div>

    </q-parallax>

  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>

.descrincao-banner
  flex-direction: column

.avatar img
  width: 196px
  height: 196px

.button-banner img
  width: 241px
  height: 72px

.button-banner
  padding: 7px

</style>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.text-banner p{
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}

.absolute-bottom {
    right: 0;
    bottom: 0px;
    left: 0;
}

.q-btn__wrapper {
    padding: 4px 12px;
    min-height: 2.572em;
    border-radius: inherit;
    width: 100%;
    height: 100%;
}
</style>
