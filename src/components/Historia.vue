<template>
  <div class="s-2">

    <div class="descricao-history">
      <div class="text-history">
        <p>História</p>
      </div>
    </div>

    <div class="text-descricao">
      <p>{{ lorem }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'História',
  data () {
    return {
      lorem: 'A Áhgil Soluções Tecnológicas, nasceu no início de 2020 inovando e desenvolvendo o maior site de doações do país, integrando pessoas físicas e empresas a beneficiários ajudando-os a receber suas doações de forma segura e rápida. Utilizando da expertise que temos em nossa equipe, resolvemos desenvolver a primeira plataforma composta de um web site de doações integrada a um aplicativo. O DoaBem é um produto para aproximar doadores a beneficiários.'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.text-history p {
  color: $azulescuro;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 29px;
}

.text-descricao p {
  font-family: Lato;
  font-size: 17px;
  font-style: normal;
  text-align: justify;
}

.s-2{
  margin: auto;
  width: 70vw;
  padding: 30px;
}

.s-2 p {
  padding-bottom: 40px;
  margin: 0 0 0;
}

@media screen and (max-width: 768px) {
  .s-2{
    margin: auto;
    width: 90vw;
    padding: 30px;
  }
}
</style>
