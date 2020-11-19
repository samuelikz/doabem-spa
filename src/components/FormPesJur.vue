<template>
  <div class="flex flex-center">
    <div class="fomr-bg q-pa-md" style="width: 75vw">
      <div>
        <p class="t-descricao text-h5">Identificação</p>
      </div>
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
        <q-input
          ref="Nome"
          v-model="Nome"
          label="Nome e Sobrenome"
          hint="Nome e sobrenome *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Email"
          v-model="Email"
          label="E-mail"
          hint="E-mail Ex:user@gmail.com *"
          type="email"
          :rules="[val => !!val || 'E-mail Invalido Ex:user@gmail.com', isValidEmail]"
        />

      <q-input
        ref="Password"
        v-model="Password"
        :type="isPwd ? 'password'
        : 'text'" hint="Definir senha de acesso"
        label="Senha"
        :rules="[ val => val && val.length > 5 ||'Campo Obrigatório Senha deve conter 6 números*']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

        <q-input
          ref="Telefone"
          mask="(##) ##### - ####"
          v-model="Telefone"
          hint="Número (00) 99999 - 9999 *"
          label="Número de Telefone"
          lazy-rules
          :rules="[
            val => val !== null && val.length > 16 || 'Campo Obrigatório'
          ]"
        />

        <q-input
          ref="Nome Fantasia"
          v-model="NomeFantasia"
          label="Nome Fantasia"
          hint="Nome Fantasia *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Razão Social"
          v-model="RazaoSocial"
          label="Razão Social"
          hint="Razão Social *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Inscrição Estadual"
          v-model="InscricaoEstadual"
          label="Inscrição Estadual"
          hint="Inscrição Estadual *"
          lazy-rules
          :rules="[ val => val && val.length > 9 || 'Campo Obrigatório']"
        />

        <q-input
          ref="CNPJ"
          mask="##.###.###/####-##"
          v-model="CNPJ"
          hint="Número do CNPJ *"
          label="Número do CNPJ"
          lazy-rules
          :rules="[
            val => val !== null && val.length > 14 || 'Campo Obrigatório'
          ]"
        />

        <p class="t-descricao text-h5">Endereço</p>

        <q-select
          ref="Cidade"
          v-model="Cidade"
          :options="C_options"
          hint="Cidade *"
          label="Selecionar Cidade"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-select
          ref="Estado"
          v-model="Estado"
          :options="C_estado"
          hint="Estado *"
          label="Selecionar Estado"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="CEP"
          type="number"
          v-model="CEP"
          label="CEP"
          hint="CEP"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Logradouro"
          v-model="Logradouro"
          label="Logradouro"
          hint="Logradouro *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Complemento"
          v-model="Complemento"
          label="Complemento"
          hint="Complemento *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-input
          ref="Numero"
          v-model="Numero"
          label="Número"
          hint="Número *"
          type="number"
          lazy-rules
          :rules="[ val => val && val.length > 5 || 'Campo Obrigatório']"
        />

        <q-select
          ref="Bairro"
          v-model="Bairro"
          :options="C_Bairro"
          label="Selecionar Bairro"
          hint="Bairro *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />

        <q-select
          ref="Pais"
          v-model="Pais"
          :options="options"
          label="Selecionar País"
          hint="País *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
          />

        <q-list class="termos_uso">
          <q-item class="flex flex-center">
            <q-breadcrumbs-el class="cursor-pointer"  @click="alert = true" label="Leia os Termos de Uso" />
          </q-item>
          <q-item>
            <q-toggle v-model="accept" label="Eu li e concordo com os Termos de Uso" />
          </q-item>
        </q-list>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Termo de Uso e Condições</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <p class="text-h6"></p>
              Bem-vindo. Ao utilizar nosso site e/ou aplicativo,
              você estará concordando com nossos Termos de Uso,
              por isso recomendamos que você leia atentamente nossos Termos e Condições.
              <p class="text-h6">Condições para Aceitação</p>
              Como condição de uso, você concorda em não usar o Serviço para qualquer finalidade que seja proibida pelos
              Termos de Uso e que afirma ter mais de 18 anos, estando ciente que não deve fornecer informações falsa,
              enganosa, ou inexata; e ilegal, ameaçadora, abusiva, ofensiva, difamatória, fraudulenta, invasiva da privacidade
              de outrem, injuriosa, obscena, profana, ofensiva, ou; constituir publicidade não autorizada,
              não solicitada ou "spam", qualquer descomprimento ou violação destes termos acarreterá em bloqueio
              ou banimento de nossa plataforma, caso necessário.
              <p class="text-h6">Garantias no uso e responsabilidades</p>
              O usuário deste site e/ou aplicativo deve ler cuidadosamente estes Termos e Condições,
              pois o seu uso importa em aceitação imediata das condições previstas neste documento –
                e também das alterações futuras. Caso você não concorde com os termos atuais, deve descontinuar o uso do site.<br>
              <p class="text-h6">Proteção à Privacidade</p>
              A Doa Bem possui um documento que explica de forma detalhada como utilizamos os dados pessoais fornecidos,
               e outras informações quando você utiliza nossa plataforma. Este documento se chama Política de Privacidade e pode ser consultado a qualquer momento.
              <p class="text-h6">Modificação dos Termos de Uso</p>
              A Doa Bem poderá rever, alterar e atualizar estes termos a qualquer momento, por interesse próprio, por conta de mudanças
              ou alteração nos serviços que ela presta. Isso pode acontecer a qualquer tempo, por isso é importante que você consulte
              este termo regularmente. Caso haja alguma alteração, a nossa equipe poderá enviar avisos dentro do site e/ou e-mail.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Aceitar" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <div class="text-center">
          <q-btn label="Cadastrar" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPesJur',
  data () {
    return {
      Nome: null,
      Email: null,
      Password: null,
      Telefone: null,
      NomeFantasia: null,
      RazaoSocial: null,
      InscricaoEstadual: null,
      CNPJ: null,
      Cidade: null,
      Estado: null,
      CEP: null,
      Logradouro: null,
      Complemento: null,
      Numero: null,
      Bairro: null,
      Pais: null,
      alert: false,
      isPwd: true,

      accept: false,
      options: [
        'Brasil'
      ],
      C_options: [
        'Recife', 'Olinda'
      ],
      C_estado: [
        'PE', 'SP'
      ],
      C_Bairro: [
        'Dois Unidos', 'Ibura'
      ]
    }
  },

  methods: {
    onSubmit () {
      this.$refs.Nome.validate()
      this.$refs.Telefone.validate()
      this.$refs.Email.validate()
      this.$refs.NomeFantasia.validate()
      this.$refs.RazaoSocial.validate()
      this.$refs.InscricaoEstadual.validate()
      this.$refs.CNPJ.validate()
      this.$refs.Estado.validate()
      this.$refs.Cidade.validate()
      this.$refs.CEP.validate()
      this.$refs.Logradouro.validate()
      this.$refs.Complemento.validate()
      this.$refs.Bairro.validate()
      this.$refs.Numero.validate()
      this.$refs.Pais.validate()
      this.$refs.Password.validate()

      if (this.$refs.Password.hasError || this.$refs.NomeFantasia.hasError || this.$refs.Nome.hasError || this.$refs.Telefone.hasError || this.$refs.Email.hasError || this.$refs.RazaoSocial.hasError || this.$refs.InscricaoEstadual.hasError || this.$refs.CNPJ.hasError || this.$refs.Estado.hasError || this.$refs.Cidade.hasError || this.$refs.CEP.hasError || this.$refs.Complemento.hasError || this.$refs.Logradouro.hasError || this.$refs.Bairro.hasError || this.$refs.Numero.hasError || this.$refs.Pais.hasError) {
        this.formHasError = true
        this.$q.notify({
          icon: 'error_outline',
          color: 'amber-9',
          message: 'Você precisa prencher todos os campos'
        })
      } else if (this.accept !== true) {
        this.$q.notify({
          icon: 'error_outline',
          color: 'amber-9',
          message: 'Você precisa concordar com os termos primeiro'
        })
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Submitted'
        })
      }
    },

    isValidEmail () {
      const EmailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return EmailPattern.test(this.Email) || 'E-mail Invalido'
    },

    onReset () {
      this.Nome = null
      this.Telefone = null
      this.Email = null
      this.NomeFantasia = null
      this.RazaoSocial = null
      this.InscricaoEstadual = null
      this.CNPJ = null
      this.Estado = null
      this.Cidade = null
      this.CEP = null
      this.Logradouro = null
      this.Complemento = null
      this.Bairro = null
      this.Numero = null
      this.Pais = null
      this.Password = null

      this.$refs.Nome.validate()
      this.$refs.Telefone.validate()
      this.$refs.Email.validate()
      this.$refs.NomeFantasia.validate()
      this.$refs.RazaoSocial.validate()
      this.$refs.InscricaoEstadual.validate()
      this.$refs.CNPJ.validate()
      this.$refs.Estado.validate()
      this.$refs.Cidade.validate()
      this.$refs.CEP.validate()
      this.$refs.Logradouro.validate()
      this.$refs.Complemento.validate()
      this.$refs.Bairro.validate()
      this.$refs.Numero.validate()
      this.$refs.Pais.validate()
      this.$refs.Password.validate()
    }
  }
}

</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&display=swap');

.termos_uso .q-breadcrumbs__el {
    color: #1c62aa;
}

.fomr-bg{
  background: white;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
}

.t-descricao {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: #14213D;
}

</style>
