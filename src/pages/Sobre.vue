<template>
  <q-page>
    <!-- page content -->
    <div>
      <div class="header">
        <HeaderSobre/>
      </div>

      <div class="QuemSomos">
        <QuemSomos/>
      </div>

      <div class="QuemSomos">
        <Historia/>
      </div>

      <div class="conteudo">

      </div>
    </div>
  </q-page>
</template>

<script>
import HeaderSobre from 'components/HeaderSobre.vue'
import QuemSomos from 'components/QuemSomos.vue'
import Historia from 'components/Historia.vue'

export default {
  name: 'sobre',
  components: { HeaderSobre, QuemSomos, Historia },
  data () {
    return {}
  }
}
</script>
