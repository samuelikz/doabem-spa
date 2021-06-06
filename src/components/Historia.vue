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
  margin-top: 0
  margin-bottom: 7rem
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  font-size: 3.5rem
  font-weight: 300
  color: #6c757d
  line-height: 1.2
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
