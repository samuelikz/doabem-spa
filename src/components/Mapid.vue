<template>
  <q-page>
    <q-card style="flex flex-center">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker">
                <l-icon
                    :icon-anchor="staticAnchor"
                    class-name="someExtraClass">
                    <div class="headline text-bold">
                        <q-breadcrumbs-el to="casos">
                            {{customText}}
                            <img src="../assets/local.png">
                        </q-breadcrumbs-el>
                    </div>
                </l-icon>
            </l-marker>
        </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data () {
    return {
      zoom: 10,
      center: L.latLng(-8.0429475, -35.0743063),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(-8.0622251, -34.882365),
      icon: L.icon({
        iconUrl: '../assets/local.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: 'Rodrigo',
      iconSize: 60
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card{
    margin: 0;
    width: 100%;
    height: 475px;
  }
  .headline{
    color: green;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  }
</style>
