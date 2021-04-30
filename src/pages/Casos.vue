<template>
  <q-page padding class="flex flex-center">
    <div>
      <div class="q-page-container">
        <div class="text-center"> <!-- Div para o titulo da pagina-->
          <p class="title-casos">Casos</p>
          <p class="descricao-casos">Faça o Bem!</p>
        </div>
        <div class="row flex-center"> <!-- Div para os cards da pagina-->
          <div class="container-card">
            <CardUser class="card" v-for="user in users" :key="user.id" :user="user" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardUser from 'components/CardUser'
export default {
  name: 'PageCases',
  components: {
    CardUser
  },
  data () {
    return {
      users: [
        {
          id: 1
          // name: 'Maria'
        },
        {
          id: 2
          // name: 'João'
        },
        {
          id: 3
          // name: 'Carlos'
        },
        {
          id: 4
          // name: 'Ana'
        }
      ]
    }
  },
  methods: {
    listUsers () {
      this.$axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.users = response.data
      })
    }
  },
  beforeMount () {
    this.listUsers()
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

  /* Importante configuração grid */

  @media screen and (min-width: 900px) {
    .container-card {
      display: grid;
      grid-template-columns: 300px 300px 300px;
    }
  }

</style>

<style lang="sass" scoped>

.title-casos
  color: #5CC6D0
  font-family: Montserrat
  font-weight: bold
  font-size: 36px
  line-height: auto

.card
  padding: 10px

.descricao-casos
  font-family: Roboto
  font-weight: normal
  font-size: 18px
  line-height: 25px

  text-align: center
  letter-spacing: 0.18em
  color: #14213D

</style>
