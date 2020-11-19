<template>
  <q-page>
    <!-- content -->
    <div>
      <div class="header">
        <HeaderMapa/>
      </div>
    </div>
  </q-page>
</template>

<script>
import HeaderMapa from 'components/HeaderMapa.vue'

export default {
  name: 'Mapa',
  components: { HeaderMapa },
  data () {
    return {}
  }
}
</script>
