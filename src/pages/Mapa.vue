<template>
  <q-page>
    <!-- content -->
    <div>
      <div class="header">
        <HeaderMapa/>
      </div>
      <div class="q-pa-md">
        <Mapid class="flex flex-center"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import HeaderMapa from 'components/HeaderMapa.vue'
import Mapid from '../components/Mapid'

export default {
  name: 'Mapa',
  components: { HeaderMapa, Mapid },
  data () {
    return {}
  }
}
</script>
