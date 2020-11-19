<template>

<div>

  <div class="container_footer flex flex-center">

    <q-item class="justify-evenly">
      <q-item>
        <q-list>
          <li><p>Transparência</p></li>
          <li><q-breadcrumbs-el label="Relatório de Atividades" to="#"/></li>
          <li><q-breadcrumbs-el label="Quem somos" to="sobre"/></li>
          <li><q-breadcrumbs-el label="Voluntarios" to="#"/></li>
        </q-list>
        </q-item>

      <q-item>
        <q-list>
          <li><p>Links uteis</p></li>
          <li><q-breadcrumbs-el label="Política de privacidade" to="politica-de-privacidade"/></li>
          <li><q-breadcrumbs-el label="Dúvidas frequentes" to="duvidas"/></li>
          <li><q-breadcrumbs-el label="Fale conosco" to="fale-conosco"/></li>
        </q-list>
        </q-item>

        <q-item>
        <q-list>
          <li><p>Contato</p></li>
          <li><q-breadcrumbs-el label="Empresa" to="#"/></li>
          <li><q-breadcrumbs-el label="Parceiros" to="#"/></li>
          <li><q-breadcrumbs-el label="Atendimento" to="#"/></li>
        </q-list>
        </q-item>
    </q-item>

  </div>

  <div>

    <q-item class="footer-links">
      <q-list class="footer-icons">
        <a href="#"><img src="../assets/instagram.svg" alt="Instagram"></a>
        <a href="#"><img src="../assets/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="../assets/youtube.svg" alt="Youtube"></a>
      </q-list>
    </q-item>

  </div>

</div>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

.container_footer{
    height: 180px;
    width: 100%;
    background-color: $laranja;
}

.q-footer ul, li, a{
    list-style: none;
    text-decoration: none;
}

.row_footer .q-item{
  padding: 8px 40px;
}

.footer-links{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $larajuro;
    height: 50px;
    padding-bottom: 10px;
}

.footer-icons img {
  height: 46px;
  width : 46px;
  padding-right: 12px;
}

</style>
