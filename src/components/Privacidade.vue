<template>
  <div class="Controle-conteudo">

    <div class="Titulo-Pagina text-center">Política de Privacidade do site e aplicativo</div>

    <div class="Texto-Principal">
      <p>1. As informações que coletamos</p>
    </div>

    <div class="Texto-Conteudo">
      <p>Informações a seu respeito quando você acessa ou utiliza um site ou aplicativo (não vale para áreas em que você fez login):<br>
        <p>Informações que você fornece voluntariamente;<br>
        Dados fornecidos de forma automática quando você utiliza nossos serviços;<br>
        As recebidas de terceiros.<br><br>
        Abaixo explicamos melhor como as informações podem ser reunidas e coletadas em cada uma dessas categorias.</p>
    </div>

    <div class="Texto-Principal">
      <p>1.1. Informações que você fornece voluntariamente</p>
    </div>

    <div class="Texto-Conteudo">
      <p>São aquelas informações, em geral pessoais, fornecidas por cadastros ou formulários. Por exemplo: quando você navega em nosso site, realiza alguma solicitação ou ainda interage com o site pelo nosso aplicativo, é provável que você nos forneça conscientemente dados como: <br><br>
      Nome; <br>
      Endereço de e-mail;<br>
      Telefone;<br>
      Informações Bancárias;<br><br>

      Outras informações pessoais que você opte por fornecer.<br>
      Ou seja, podemos coletar informação pessoal que o usuário forneça por meio de nosso site e/ou aplicativo para fins de utilização dentro da plataforma. Exceto, é claro, senhas e informações de quando você estiver dentro de uma área em que fez login.

      </p>
    </div>

    <div class="Texto-Principal">
      <p>1.2. Dados fornecidos de forma automática quando você utiliza nossos serviços</p>
    </div>

    <div class="Texto-Conteudo">
      <p>Quando você entra no site ou aplicativo não coletamos dados, exceto quando você realiza ou solicita uma doação no site e/ou aplicativo. São dados já fornecido por você e que estão em nossa base de dados,
      não coletamos nem identificamos individualmente essas informações para fins de análise. Também não colhemos dados após você fazer login ou interagir com sua conta dentro da plataforma.
      </p>
    </div>

    <div class="Texto-Principal">
      <p>2. Como nós utilizamos as suas informações</p>
    </div>

    <div class="Texto-Conteudo">
      <p>As informações que são coletadas possuem um objetivo muito simples: facilitar a utilização de nosso serviço no site e aplicativo, ou seja, reunimos e coletamos estes dados para oferecer uma experiência cada vez melhor e mais segura na sua interação com nossas plataformas. Abaixo listamos de forma específica como e para que podemos utilizar seus dados:<br><br>

        Monitorar e analisar as tendências e o uso do site e do aplicativo;<br>
        Verificar sua identidade e evitar fraudes ou outra atividade que descupram os Termos de Uso;
        Fazer melhorias no site e no aplicativo;<br>
        Corrigir problemas;<br>
        Desenvolver novos serviços e produtos para o site e aplicativo;<br>
        Comunicar-se com você;<br>
        Facilitar funcionalidades de compartilhamento social;<br>
        Enviar informações administrativas a você, como Termos, Condições e Políticas;<br>
        Proteger a instituição e nossos usuários;<br>
        Viabilizar soluções de tecnologia da informação e publicidade online (notificações de push, retargeting, geolocalização, dentre outras);<br>
        Medir a audiência de nossas plataformas;<br>
        Responder a dúvidas e solicitações;<br>
        Para fins legais.
      </p>
    </div>

    <div class="Texto-Principal">
      <p>2.1. O compartilhamento com terceiros</p>
    </div>

    <div class="Texto-Conteudo">
      <p>Não alugamos nem vendemos suas informações pessoais para terceiros. Mas pode compartilhar suas informações não pessoais de acordo com nossos objetivos e também com nossas afiliadas e outras entidades que participam do mesmo propósito.</p>
    </div>

    <div class="Texto-Principal">
      <p>3. Revisões em nossa Política de Privacidade</p>
    </div>

    <div class="Texto-Conteudo">
      <p>A Nossa Equipe poderá mudar esta Política de Privacidade de tempos em tempos, publicando uma versão mais atualizada. Mas sempre o deixaremos informado. Você poderá saber quando foi a última revisão conferindo a data no final deste documento. E, em caso de mudanças significativas, enviaremos um aviso adicional, como uma declaração em nosso site ou uma notificação em nosso aplicativo.
      </p>
    </div>

    <div class="Texto-Principal">
      <p>4. Responsabilidade</p>
    </div>

    <div class="Texto-Conteudo">
      <p>Nós privamos pela segurança dos dados e informações dos usuários, bem como em oferecer um ambiente seguro em nosso site, mas não nos responsabilizamos por eventuais danos e/ou problemas decorrentes da demora, interrupção ou bloqueio nas transmissões de dados ocorridos na internet. Não nos responsabilizamos caso o equipamento do usuário esteja infectado com vírus e outras ameaças à sua segurança decorrentes da navegação realizada na internet.
      </p>
    </div>

    <div class="Texto-Updade">
      <p>Última modificação: 17/11/2020</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Privacidade',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.Titulo-Pagina{
  margin-top: 0
  margin-bottom: 5rem
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  font-size: 3.5rem
  font-weight: 300
  color: #6c757d
  line-height: 1.2
}

.Texto-Principal p {
  color: $azulescuro;
  font-family: roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
}

.Texto-Conteudo p {
  font-family: Poppins;
  color: #7F8182;
  font-size: 17px;
  font-style: normal;
  text-align: justify;
}

.Controle-conteudo{
  margin: auto;
  width: 70vw;
  padding: 30px;
}

.Controle-conteudo p {
  padding-bottom: 40px;
  margin: 0 0 0;
}

.Texto-Updade{

}

@media screen and (max-width: 768px) {
  .Controle-conteudo{
    margin: auto;
    width: 90vw;
    padding: 30px;
  }
}
</style>
