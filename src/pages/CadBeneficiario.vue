<template>
  <q-page padding>
    <div class="t-cadastro text-center text-h3">
      <p>Cadastro Beneficiário</p>
    </div>
    <FormBeneficiario />
  </q-page>
</template>

<script>
import FormBeneficiario from 'components/FormBeneficiario'

export default {
  name: 'CadPesJur',
  components: { FormBeneficiario }
}
</script>
