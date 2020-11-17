<template>
  <div>

    <div class="descricao-history flex flex-center">
      <div class="text-history  fit column items-start content-start">
        <p>História</p>
      </div>
    </div>

    <div class="text-descricao flex flex-center">
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
  padding-left: 16.5%;
  padding-bottom: 24px;
  margin-block-start: 1em;
  }

.text-descricao p {
  font-family: Lato;
  font-size: 17px;
  font-style: normal;
  text-align: justify;
  width: 900px;
  display: block;
  margin-block-end: 6em;
  }
</style>
