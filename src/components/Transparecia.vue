<template>
  <div class="tr-container" padding>
    <div>
      <p class="txt-tr flex flex-center">Transparência</p>
    </div>

    <div class="flex flex-center items-baseline">
      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/PAjudadas.svg">
        </div>
        <div class="text-descricao">
          <div class="text-body2">0</div>
          <q-separator />
          <div class="text-body2">Pessoas <br> Ajudadas</div>
        </div>
      </div>

      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/DRecebidas.svg">
        </div>
        <div class="text-descricao">
          <div class="text-body2">0</div>
          <q-separator />
          <div class="text-body2">Doacões <br> Recebidas</div>
        </div>
      </div>

      <div class="s1 text-center">
        <div class="icone">
          <img src= "../assets/DCadastrados.svg">
        </div>
        <div class="text-descricao">
          <div class="text-body2">0</div>
          <q-separator />
          <div class="text-body2">Doadores <br> Cadastrados</div>
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
  padding: 5px;
}

.txt-tr{
  color: #5cc6d0;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36px;
  line-height: auto;
}

.text-descricao .text-body2{
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

.q-separator--horizontal {
    background-color: #5cc6d0;
    display: inline-grid;
    height: 3px;
    width: 30%;
}

</style>
