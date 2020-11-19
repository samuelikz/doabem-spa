<template>
 <q-page class="flex flex-center">
<p>Pesquisar Casos</p>
  </q-page>
</template>

<script>

export default {
  name: 'Pagepesquisar'
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
#q-app > div > div > main > p{
font-family: Nunito;
font-style: normal;
font-weight: 800;
line-height: 25px;
letter-spacing: 0.01em;
color: #FFFFFF;
}

#q-app > div > div > main{
background :url(../assets/banner.svg)
background-position: center;
background-repeat: no-repeat;
background-size: cover; /*Ajuste de imagem para manter proporção*/
position: relative;
display: flex;
justify-content: center;
align-items: center;
}
</style>
