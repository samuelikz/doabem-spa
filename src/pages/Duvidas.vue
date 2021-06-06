<template>
  <q-page padding>
  <div class="Controle-conteudo">

    <div class="">
      <div class="Titulo-Pagina text-center">Dúvidas frequentes</div>

      <p class="Texto-Principal">Como realizar uma doação ?</p>

      <p class="Texto-Conteudo">Na página home você pode encontrar pedidos de ajuda, ou até mesmo ir para a página de casos.</p>

      <p class="Texto-Principal">Posso realizar más de um pedido de ajuda ?</p>

      <p class="Texto-Conteudo">Cada Usuário poderá realizar uma solicitação de ajuda por conta, caso desejar realizar outro o mesmo deve encerrar o atual e abrir uma novamente.</p>

      <p class="Texto-Principal">Existe um tempo determinado para fechar um pedido de ajuda ?</p>

      <p class="Texto-Conteudo">No momento o caso não tem limite de tempo para ficar no ar, porém quando a meta for alcançada o mesmo deverá encerrá-lo. </p>

      <p class="Texto-Principal">Como me tornar um voluntário ?</p>

      <p class="Texto-Conteudo">No momento não estamos com o serviço de voluntários aberto porém fique atento pois em breve estaremos com novos colaboradores nesta causa.</p>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.Titulo-Pagina{
  margin-top: 0
  margin-bottom: 7rem
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  font-size: 3.5rem
  font-weight: 300
  color: #6c757d
  line-height: 1.2
}

.Texto-Principal {
  color: $azulescuro;
  font-family: roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 29px;
}

.Texto-Conteudo {
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
