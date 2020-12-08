<template class="flex flex-center">
    <div class="text-center">
      <div class=" q-pa-md">
        <q-avatar size="100px" font-size="52px" >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </div>
      <div class="q-pa-md" align="center">
        <div class="text-h5">{{ nome }} ({{estado}})</div>
        <div class="t-font">{{ lorem }}</div>
      </div>
      <div class="cards q-pa-md">
        <q-card class="my-card">

          <q-video class="vid-1" src="https://www.youtube.com/embed/rQyde3infHE" />

          <q-card-actions align="center">
            <q-btn flat size="12px" label="compartilhar" color="primary" icon="share" />
          </q-card-actions>
        </q-card>
      </div>
      <div>
        <form class="q-pa-md row justify-center" action="https://www.paypal.com/donate" method="post">
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
    return {
      users: [
        {
          id: 1
          // name: 'Maria'
        }],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      estado: 'Recife',
      nome: 'Usuario'
    }
  }
}
</script>

<style scoped>
  .botao-doar{
    width: 90px;
  }

  .my-card{
    width: 80vw;
    max-width: 500px;
    height: auto;
  }

  .vid-1{
    width: 100%;
    height: 330px;
  }

  .t-font{
    max-width: 440px;
    color: #14213D;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
  }
</style>
