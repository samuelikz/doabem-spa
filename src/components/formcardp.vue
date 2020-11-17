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
          label="Nome Sobrenome"
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

        <div class="selsexo">
          <p>Sexo</p>

          <q-radio
            v-model="Sexo"
            val="line"
            label="Masculino"
          />

          <q-radio
            v-model="Sexo"
            val="rectangle"
            label="Feminino"
          />

        </div>

        <q-input
          ref="CPF"
          mask="###.###.###-##"
          v-model="CPF"
          hint="Número de CPF *"
          label="Número de CPF"
          lazy-rules
          :rules="[
            val => val !== null && val.length > 13 || 'Campo Obrigatório'
          ]"
        />

        <q-input
          ref="RG"
          mask="#.###.###"
          v-model="RG"
          hint="Número de RG *"
          label="Número de RG"
          lazy-rules
          :rules="[
            val => val !== null && val.length > 8 || 'Campo Obrigatório'
          ]"
        />

        <q-input
          ref="Data_Nascimento"
          v-model="Data_Nascimento"
          type="date"
          hint="Data de Nascimento"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"

        />

        <q-select
          ref="Org_Expedidor"
          v-model="Org_Expedidor"
          :options="O_options"
          hint="Orgão Expedidor"
          label="Orgão Expedidor"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
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
          label="Lagadouro"
          hint="Lagadouro *"
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
          label="Numero"
          hint="Numero *"
          type="number"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
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
          label="Selecionar Pais"
          hint="Pais *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
          />

        <q-list class="termos_uso">
          <q-item class="flex flex-center">
            <q-breadcrumbs-el class="cursor-pointer"  @click="alert = true" label="Leia os termos de uso" />
          </q-item>
          <q-item>
            <q-toggle v-model="accept" label="Eu li e concordo com os termos de uso" />
          </q-item>
        </q-list>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Termos de Usos</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
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
  name: 'formcardp',
  data () {
    return {
      Nome: null,
      Telefone: null,
      Email: null,
      Sexo: null,
      CPF: null,
      RG: null,
      Org_Expedidor: null,
      Data_Nascimento: null,
      Cidade: null,
      Estado: null,
      CEP: null,
      Logradouro: null,
      Complemento: null,
      Bairro: null,
      Numero: null,
      Pais: null,
      alert: false,

      accept: false,
      O_options: [
        'SDS', 'SSC'
      ],
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
      this.$refs.CPF.validate()
      this.$refs.RG.validate()
      this.$refs.Org_Expedidor.validate()
      this.$refs.Estado.validate()
      this.$refs.Cidade.validate()
      this.$refs.CEP.validate()
      this.$refs.Data_Nascimento.validate()
      this.$refs.Logradouro.validate()
      this.$refs.Complemento.validate()
      this.$refs.Bairro.validate()
      this.$refs.Numero.validate()
      this.$refs.Pais.validate()

      if (this.$refs.Data_Nascimento.hasError || this.$refs.Nome.hasError || this.$refs.Telefone.hasError || this.$refs.Email.hasError || this.$refs.CPF.hasError || this.$refs.RG.hasError || this.$refs.Org_Expedidor.hasError || this.$refs.Estado.hasError || this.$refs.Cidade.hasError || this.$refs.CEP.hasError || this.$refs.Complemento.hasError || this.$refs.Logradouro.hasError || this.$refs.Bairro.hasError || this.$refs.Numero.hasError || this.$refs.Pais.hasError) {
        this.formHasError = true
        this.$q.notify({
          color: 'warning',
          message: 'Você precisa prencher todos os campos'
        })
      } else if (this.accept !== true) {
        this.$q.notify({
          color: 'negative',
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
      this.CPF = null
      this.RG = null
      this.Org_Expedidor = null
      this.Estado = null
      this.Cidade = null
      this.CEP = null
      this.Logradouro = null
      this.Complemento = null
      this.Data_Nascimento = null
      this.Bairro = null
      this.Numero = null
      this.Pais = null

      this.$refs.Nome.resetValidation()
      this.$refs.Telefone.resetValidation()
      this.$refs.Email.resetValidation()
      this.$refs.CPF.resetValidation()
      this.$refs.RG.resetValidation()
      this.$refs.Org_Expedidor.resetValidation()
      this.$refs.Cidade.resetValidation()
      this.$refs.Estado.resetValidation()
      this.$refs.CEP.resetValidation()
      this.$refs.Logradouro.resetValidation()
      this.$refs.Complemento.resetValidation()
      this.$refs.Bairro.resetValidation()
      this.$refs.Numero.resetValidation()
      this.$refs.Pais.resetValidation()
      this.$refs.Data_Nascimento.resetValidation()
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
