<template>
  <div class="tr-container" padding>
    <div>
      <p class="txt-tr flex flex-center">Transparência</p>
    </div>

    <div class="flex flex-center items-baseline">
      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/network1.svg">
        </div>
        <div class="text-descricao">
          <p>Conectar doações a quem necessita.</p>
        </div>
      </div>

      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/network1.svg">
        </div>
        <div class="text-descricao">
          <p>Conectar doações a quem necessita.</p>
        </div>
      </div>

      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/network1.svg">
        </div>
        <div class="text-descricao">
          <p>Empresas parceiras contribuem para uma sociedade mais justa.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Componentrasparencia',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.tr-container{
  background: white;
  padding: 30px;
}

.txt-tr{
  color: #5cc6d0;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36px;
  line-height: auto;
}

.text-descricao p{
  padding-top: 10px;
  color: #14213D;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
}

.s1{
  width: 380px;
  height: auto;
  padding: 1rem;
}

</style>
