<template class="flex flex-center">
    <div>
      <div class="text-center">
        <q-avatar size="100px" font-size="52px" >
          <img src="http://placeimg.com/52/52/animals">
        </q-avatar>
      </div>
      <div class="text-center">Titulo</div>
      <div class="text-center">Descrinção</div>
      <div class="text-center">
        <q-card class="my-card">

          <q-video class="vid-1" src="https://www.youtube.com/embed/rQyde3infHE" />

          <q-card-actions align="center">
            <q-btn flat size="12px" label="compartilhar" color="primary" icon="share" />
          </q-card-actions>
        </q-card>
      </div>
      <div>
        <form class="flex flex-center" action="https://www.paypal.com/donate" method="post">
          <input type="hidden" name="hosted_button_id" value="ERVFSVNTPKT4J" />
          <input class="botao-doar" type="image" src="https://i.imgur.com/qsXR5lL.png" border="0" name="submit"/>
          <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="auto" height="auto" />
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Caso_id',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .botao-doar{
    width: 90px;
  }

  .my-card{
  width: 100%;
  width: 450px;
  }

  .vid-1{
    height: 330px;
  }
</style>
