<template>
  <q-page padding class="flex flex-center">
    <div>
      <div class="q-page-container">
        <div class="text-center"> <!-- Div para o titulo da pagina-->
          <p class="title-casos">#FaçaSuaParte</p>
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
      users: []
    }
  },
  methods: {
    listUsers () {
      this.$axios.get('https://json-serverikz.herokuapp.com/pets').then(response => {
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
  margin-top: 0
  margin-bottom: .7rem
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  font-size: 3.5rem
  font-weight: 300
  color: #6c757d
  line-height: 1.2

.card
  padding: 10px

</style>
