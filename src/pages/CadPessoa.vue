<template>
  <q-page padding>
    <div class="t-cadastro text-center text-h3">
      <p>Cadastro Pessoa Fisica</p>
    </div>
    <formcardp />
  </q-page>
</template>

<script>
import formcardp from 'components/formcardp.vue'

export default {
  name: 'Cadastro',
  components: { formcardp },
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
