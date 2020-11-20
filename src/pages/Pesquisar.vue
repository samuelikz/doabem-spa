<template>
 <q-page class="flex flex-center">
 <form action="">
   <p>Pesquisar Casos</p>
<input type="text" placeholder="encontrar um caso....." class="matMenu"><br>

</form>
</q-page>
</template>

<script>

export default {
  name: 'Pagepesquisar'
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
//O CSS abaixo seria para adicionar como esta no FIGMA, com um texto acima da pesquisa
/*#q-app > div > div > main > p{
font-family: Nunito;
font-style: normal;
font-weight: 800;
line-height: 25px;
letter-spacing: 0.01em;
color: #FFFFFF;
display: flex;
justify-content: center;
margin: 0px 160px;
width: 60%;
font-size: 2rem;
}*/
//Background da página
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

#q-app > div > div > main > form > input{
background: rgba(255, 255, 255, 0.86);
border-radius: 40px;
border: none;
position: relative;
display: flex;
justify-content: center;
align-items: center;
text-align :center;
width:100%;

}

form{
  text-align :center;
}

p{
  text-align: center;
    width: 100%;
    margin: 20px 0 0;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}

</style>
