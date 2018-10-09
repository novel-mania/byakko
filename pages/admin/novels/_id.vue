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
            label="Nomes Alternativos"
            expanded
          >
            <b-taginput
              autocomplete
              allow-new
              v-model="novel.alternatives_titles"
              placeholder="Adicione um nome alternativo"
            />
          </b-field>
          <b-field
            label="Tipo"
          >
            <b-select v-model="novel.type" placeholder="Selecione o tipo da novel">
              <option
                v-for="type in types"
                :key="type.id"
                :value="type.name"
              >
                {{ type.name }}
              </option>
            </b-select>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            expanded
            label="Autores"
            :type="isInvalid('authors') ? 'is-danger' : ''"
            :message="isInvalid('authors')
              ? 'Autores é um campo obrigatório.' : ''"
          >
            <b-taginput
              autocomplete
              allow-new
              v-model="novel.authors"
              placeholder="Adicione um autor"
            />
          </b-field>
          <b-field
            expanded
            label="Categorias"
            :type="isInvalid('categories') ? 'is-danger' : ''"
            :message="isInvalid('categories')
              ? 'Categorias é um campo obrigatório.' : ''"
          >
            <b-taginput
              autocomplete
              allow-new
              v-model="novel.categories"
              placeholder="Adicione uma categoria"
            />
          </b-field>
          <b-field
            label="Classificação"
            :type="isInvalid('advisory_rating') ? 'is-danger' : ''"
            :message="isInvalid('advisory_rating')
              ? 'Classificação é um campo obrigatório.' : ''"
          >
            <b-switch v-model="novel.advisory_rating" />
          </b-field>
        </b-field>
        <b-field label="Capa">
          <b-upload v-model="file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Escolher capa</span>
            </a>
          </b-upload>
        </b-field>
        <b-field label="Sinopse">
          <div
            class="quill-editor"
            v-quill:myQuillEditor="editorOption"
            :content="novel.sinopse"
            @change="onEditorChange($event)"
          />
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
    const types = [
      { id: 1, name: 'Chinesa' },
      { id: 2, name: 'Coreana' },
      { id: 3, name: 'Japonesa' },
      { id: 4, name: 'Original' },
    ];
    const novel = {
      name: '',
      slug: '',
      type: '',
      authors: [],
      categories: [],
      alternatives_titles: [],
      advisory_rating: false,
      sinopse: '',
    };

    return {
      types,
      novel,
      file: [],
      editorOption: {},
    };
  },
  validations: {
    novel: {
      name: { required },
      slug: { required },
      sinopse: { required },
      type: { required },
      authors: { required },
      categories: { required },
      advisory_rating: { required },
    },
  },
  computed: {
    ...mapGetters([
      'getNovel',
    ]),
  },
  watch: {
    getNovel(novel) {
      if (novel) {
        this.novel.name = novel.name;
        this.novel.slug = novel.slug;
        this.novel.sinopse = novel.sinopse;
        this.novel.type = novel.type;
        this.novel.advisory_rating = novel.advisory_rating;
        this.novel.authors = [...novel.authors];
        this.novel.categories = [...novel.categories];
        this.novel.alternatives_titles = [...novel.alternatives_titles];
      }
    },
  },
  methods: {
    ...mapActions([
      'clearNovel',
      'fetchNovel',
      'newNovel',
      'updateNovel',
    ]),
    async loadNovel(novelId) {
      await this.fetchNovel(novelId);
    },
    onEditorChange(event) {
      this.novel.sinopse = event.html;
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
          if (this.getNovel.id) {
            await this.updateNovel(dataNovel);
            this.$toast.open({
              message: 'Novel atualizada!',
              type: 'is-success',
            });
          } else {
            dataNovel.cover = this.file[0].name;
            await this.newNovel(dataNovel);
            this.$toast.open({
              message: 'Novel criada!',
              type: 'is-success',
            });
          }
        } catch (error) {
          window.console.log(error);
          this.$toast.open({
            message: 'Ocorreu um erro.',
            type: 'is-danger',
          });
        }
      }
    },
  },
  mounted() {
    if (this.$route.params.id === 'add') {
      this.clearNovel();
    } else {
      this.loadNovel(this.$route.params.id);
    }
  },
};
</script>

