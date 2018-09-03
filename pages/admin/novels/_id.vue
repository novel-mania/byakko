<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Editar Novel</h1></div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-primary is-medium"
            @click.prevent.stop="saveNovel"
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
            <b-input v-model="novel.name" placeholder="Against the Gods"/>
          </b-field>
          <b-field
            label="Slug"
            :type="isInvalid('slug') ? 'is-danger' : ''"
            :message="isInvalid('slug')
              ? 'Slug é um campo obrigatório.' : ''"
          >
            <b-input v-model="novel.slug" placeholder="ATG" />
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            label="Sinopse"
            expanded
            :type="isInvalid('sinopse') ? 'is-danger' : ''"
            :message="isInvalid('sinopse')
              ? 'Sinopse é um campo obrigatório.' : ''"
          >
            <b-input v-model="novel.sinopse" />
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
    const novel = {
      name: '',
      slug: '',
      sinopse: '',
    };

    return {
      novel,
    };
  },
  validations: {
    novel: {
      name: { required },
      slug: { required },
      sinopse: { required },
    },
  },
  computed: {
    ...mapGetters([
      'getNovel',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchNovel',
      'updateNovel',
    ]),
    async loadNovel(novelId) {
      await this.fetchNovel(novelId);
      this.novel = Object.assign({}, this.getNovel);
    },
    isInvalid(field) {
      return (this.$v.novel[field].$invalid && this.$v.novel[field].$dirty);
    },
    validate() {
      if (this.$v.novel.$invalid) {
        this.$v.novel.$touch();
        return false;
      }
      return true;
    },
    async saveNovel() {
      if (this.validate()) {
        const dataNovel = Object.assign({}, this.novel);
        try {
          await this.updateNovel(dataNovel);
          this.$toast.open({
            message: 'Novel atualizada!',
            type: 'is-success',
          });
        } catch (error) {
          this.$toast.open({
            message: 'Ocorreu um erro ao atualizar a novel.',
            type: 'is-danger',
          });
        }
      }
    },
  },
  mounted() {
    this.loadNovel(this.$route.params.id);
  },
};
</script>

