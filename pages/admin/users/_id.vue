<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Editar Usuário</h1></div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-primary is-medium"
            @click.prevent.stop="saveUser"
          >Salvar</button>
        </div>
      </div>
    </div>
    <div class="content">
      <form class="form">
        <b-field grouped>
          <b-field
            label="Nome"
            expanded
            :type="isInvalid('name') ? 'is-danger' : ''"
            :message="isInvalid('name')
              ? 'Nome é um campo obrigatório.' : ''"
          >
            <b-input v-model="user.name" placeholder="Nome" />
          </b-field>
          <b-field
            label="Apelido"
            expanded
            :type="isInvalid('nickname') ? 'is-danger' : ''"
            :message="isInvalid('nickname')
              ? 'Apelido é um campo obrigatório.' : ''"
          >
            <b-input v-model="user.nickname" placeholder="Nickname" />
          </b-field>
          <b-field
            label="E-mail"
            expanded
            :type="isInvalid('email') ? 'is-danger' : ''"
            :message="isInvalid('email')
              ? 'E-mail é um campo obrigatório.' : ''"
          >
            <b-input v-model="user.email" placeholder="E-mail" />
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field label="Senha" expanded>
            <b-input v-model="user.password" type="password" placeholder="Senha" />
          </b-field>
          <b-field
            label="Função"
          >
            <b-select v-model="user.role" placeholder="Selecione uma função">
              <option
                v-for="role in roles"
                :key="role.id"
                :value="role.id"
              >
                {{ role.name }}
              </option>
            </b-select>
          </b-field>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'AdminUser',
  layout: 'admin',
  data() {
    const roles = [
      { id: '5b86e1c30370530ab24e04e7', name: 'Administrador(a)' },
      { id: 2, name: 'Coordenador(a)' },
      { id: 3, name: 'Tradutor(a)' },
      { id: 4, name: 'Revisor(a)' },
    ];
    const user = {
      name: '',
      nickname: '',
      email: '',
      password: '',
      role: '',
    };

    return {
      roles,
      user,
    };
  },
  validations: {
    user: {
      name: { required },
      nickname: { required },
      email: { required },
      password: {
        minLength: minLength(6),
      },
      // role: { required },
    },
  },
  computed: {
    ...mapGetters([
      'getUser',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchUser',
      'updateUser',
    ]),
    async loadUser(userId) {
      await this.fetchUser(userId);
      this.user = Object.assign({}, this.getUser);
    },
    isInvalid(field) {
      return (this.$v.user[field].$invalid && this.$v.user[field].$dirty);
    },
    validate() {
      if (this.$v.user.$invalid) {
        this.$v.user.$touch();
        return false;
      }
      return true;
    },
    async saveUser() {
      if (this.validate()) {
        const dataUser = Object.assign({}, this.user);
        try {
          await this.updateUser(dataUser);
          this.$toast.open({
            message: 'Usuário atualizado!',
            type: 'is-success',
          });
        } catch (error) {
          this.$toast.open({
            message: 'Ocorreu um erro ao atualizar o usuário.',
            type: 'is-danger',
          });
        }
      }
    },
  },
  mounted() {
    this.loadUser(this.$route.params.id);
  },
};
</script>

