<template>
    <q-card style="flex flex-center">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker">
                <l-icon
                    :icon-anchor="staticAnchor"
                    class-name="someExtraClass">
                    <div class="headline text-bold text-center">
                        <q-breadcrumbs-el to="/">
                          <p>
                            {{customText}}
                            <img src="../assets/local.png">
                          </p>
                        </q-breadcrumbs-el>
                    </div>
                </l-icon>
            </l-marker>
        </l-map>
    </q-card>
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
      zoom: 16,
      center: L.latLng(-8.0490003, -34.8772769),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(-8.0490003, -34.8772769),
      icon: L.icon({
        iconUrl: '../assets/local.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: 'Doa Bem(Recife)',
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
