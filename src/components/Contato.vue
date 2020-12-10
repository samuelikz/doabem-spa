<template>
<div class="justify-center">
  <div>
    <div class="text-h3 text-center">Fale Conosco</div>
  </div>

  <div class="flex flex-center text-center ">
    <div class="sr">
      <q-btn
        size="35px"
        round
        color="green-5"
        icon="support_agent"
        to="#"
      />
      <p class="text-sel">Centro de Atendimento Rápido</p>
      </div>

      <div class="sr">
      <q-btn
        size="35px"
        round
        color="light-blue-4"
        icon="message"
        to="#"
      />
      <p class="text-sel">Sugestões?</p>
      </div>

      <div class="sr">
      <q-btn
        size="35px"
        round
        color="amber-5"
        icon="help"
        to="duvidas"
      />
      <p class="text-sel">Dúvidas Frequentes</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Contato',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.text-sel {
  color: $azulescuro;
  font-family: Lato;
  font-weight: bold;
  font-size: 15px;
  line-height: 29px;
  padding:10px;
}

.text-h3{
  color: #5CC6D0;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36px;
  padding: 10px;
}

.sr{
  padding: 20px;
}

</style>
