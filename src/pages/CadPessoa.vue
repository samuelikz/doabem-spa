<template>
  <q-page padding>
    <div class="t-cadastro text-center text-h3">
      <p>Cadastro Pessoa Física</p>
    </div>
    <Formcardp />
  </q-page>
</template>

<script>
import Formcardp from '../components/Formcardp'

export default {
  name: 'Cadastro',
  components: { Formcardp },
  data () {
    return {}
  }
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
