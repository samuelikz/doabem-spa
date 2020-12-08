<template>
  <q-page>
    <!-- content -->
    <div>
      <div class="header">
        <HeaderMapa/>
      </div>
      <div>
        <Mapid/>
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
