<template>
  <q-page padding>
    <div class="t-cadastro text-center text-h3">
      <p>Cadastro Pessoa Jurídica</p>
    </div>
    <FormPesJur />
  </q-page>
</template>

<script>
import FormPesJur from 'components/FormPesJur'

export default {
  name: 'CadPesJur',
  components: { FormPesJur }
}
</script>

<style scoped>

.t-cadastro{
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36px;
  line-height: auto;
}
</style>
