<template>
  <q-page padding class="flex column flex-center">

  <div class="flex flex-center text-center ">
    <div class="sr">
      <q-btn
        size="35px"
        round
        color="green-5"
        icon="perm_identity"
        to="/cadpessoa"
      />
      <p class="text-sel">Pessoa Física</p>
      </div>
      <div class="sr">
      <q-btn
        size="35px"
        round
        color="light-blue-4"
        icon="corporate_fare"
        to="/cadpessoajuridica"
      />
      <p class="text-sel">Pessoa Jurídica</p>
      </div>
      <div class="sr">
      <q-btn
        size="35px"
        round
        color="amber-5"
        icon="emoji_people"
        to="/cadbeneficiario"
      />
      <p class="text-sel">Beneficiário</p>
    </div>
  </div>

  </q-page>
</template>

<script>
export default {
  name: 'Selecao'
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.text-sel {
  color: $azulescuro;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 29px;
}

.sr{
  padding: 20px;
}

</style>
