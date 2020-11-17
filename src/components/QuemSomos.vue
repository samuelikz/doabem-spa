<template>
  <div>

    <div class="descricao-sobre flex flex-center">
      <div class="text-sobre fit column items-start content-start">
        <p>Quem somos</p>
      </div>
    </div>

    <div class="text-descricao-sobre flex flex-center">
      <p>{{ lorem }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'QuemSomos',
  data () {
    return {
      lorem: 'Uma plataforma online, administrada pela Áhgil, empresa de multi plataformas digitais, atuante no mercado de tecnologia de web developer e mobile app. Nós vamos revolucionar o seu modo de captar doações, de maneira que você possa financiar a sua visão, o seu sonho. Faça a diferença em sua comunidade e ajude a melhorar a vida de pessoas em todo o mundo. Não estamos apenas vendendo uma plataforma de doações, queremos atender as suas necessidades, tornando real os seus planos de ajudar ao próximo. Temos as soluções perfeitas para você.'
    }
  }
}
</script>

<style lang="sass" scoped>

.descricao-sobre
  flex-direction: column

</style>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.text-sobre p {
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

.text-descricao-sobre p {
  font-family: Lato;
  font-size: 17px;
  font-style: normal;
  text-align: justify;
  width: 900px;
  }

</style>
