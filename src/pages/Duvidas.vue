<template>
  <q-page padding>
  <div class="Controle-conteudo">

    <div class="Titulo-Pagina text-center">Dúvidas</div>

    <div class="Texto-Principal">
      <p>Dúvidas</p>
    </div>

    <div class="Texto-Conteudo">
      <p>Descrinção</p>
    </div>

  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Duvidas',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto+Condensed&display=swap');

.Titulo-Pagina{
  color: $azulescuro;
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  padding-bottom: 40px;
}

.Texto-Principal p {
  color: $azulescuro;
  font-family: roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
}

.Texto-Conteudo p {
  font-family: Poppins;
  color: #7F8182;
  font-size: 17px;
  font-style: normal;
  text-align: justify;
}

.Controle-conteudo{
  margin: auto;
  width: 70vw;
  padding: 30px;
}

.Controle-conteudo p {
  padding-bottom: 40px;
  margin: 0 0 0;
}

@media screen and (max-width: 768px) {
  .Controle-conteudo{
    margin: auto;
    width: 90vw;
    padding: 30px;
  }
}
</style>
