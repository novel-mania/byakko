<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Editar Capítulo</h1></div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-primary is-medium"
            @click.prevent.stop="saveChapter"
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
            <b-input v-model="name" placeholder="Nome" />
          </b-field>
          <b-field
            label="Número do capítulo"
            :type="isInvalid('chapter_num') ? 'is-danger' : ''"
            :message="isInvalid('chapter_num')
              ? 'Número do capítulo é um campo obrigatório.' : ''"
          >
            <b-input v-model="chapter_num" placeholder="Exemplo: 123" />
          </b-field>
          <b-field
            label="Volume"
            :type="isInvalid('volume') ? 'is-danger' : ''"
            :message="isInvalid('volume')
              ? 'Volume é um campo obrigatório.' : ''"
          >
            <b-autocomplete
              keep-first
              open-on-focus
              :data="volumes"
              field="name"
              placeholder="Volume"
            >
              <template slot="header">
                <a>
                  <span>Novo volume...</span>
                </a>
              </template>
            </b-autocomplete>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            label="Tradutores"
            expanded
            :type="isInvalid('translators') ? 'is-danger' : ''"
            :message="isInvalid('translators')
              ? 'Tradutores é um campo obrigatório.' : ''"
          >
            <b-taginput
              autocomplete
              :allow-new="false"
              :data="dataTranslators"
              field="name"
              v-model="translators"
              icon="account"
              placeholder="Adicionar um tradutor"
              @typing="getFilteredTranslators"
            />
          </b-field>
          <b-field
            label="Revisores"
            expanded
            :type="isInvalid('editors') ? 'is-danger' : ''"
            :message="isInvalid('editors')
              ? 'Revisores é um campo obrigatório.' : ''"
          >
            <b-taginput
              autocomplete
              :allow-new="false"
              :data="dataEditors"
              field="name"
              v-model="editors"
              icon="account"
              placeholder="Adicionar um revisor"
              @typing="getFilteredEditors"
            />
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            label="Conteúdo"
            expanded
            :type="isInvalid('content') ? 'is-danger' : ''"
            :message="isInvalid('content')
              ? 'Conteúdo é um campo obrigatório.' : ''"
          >
            <div
            class="quill-editor"
            v-quill:myQuillEditor="editorOption"
            />
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
    const volumes = [
      { volume_num: 1, name: 'O início' },
      { volume_num: 2, name: 'O meio' },
      { volume_num: 3, name: 'O fim' },
    ];

    return {
      name: '',
      chapter_num: '',
      content: '',
      volume: {
        name: '',
        volume_num: '',
      },
      translators: [],
      editors: [],
      optionsTranslators: [],
      optionsEditors: [],
      volumes,
      editorOption: {},
      filterTranslators: '',
      filterEditors: '',
    };
  },
  validations: {
    name: { required },
    chapter_num: { required },
    content: { required },
    editors: { required },
    volume: {
      name: { required },
      volume_num: { required },
    },
    translators: { required },
  },
  computed: {
    ...mapGetters([
      'getChapter',
      'getRole',
    ]),
    dataTranslators() {
      if (this.filterTranslators) {
        return this.optionsTranslators.filter(user =>
          user.name.toLowerCase().indexOf(this.filterTranslators.toLowerCase()) > -1);
      }
      return this.optionsTranslators;
    },
    dataEditors() {
      if (this.filterEditors) {
        return this.optionsEditors.filter(user =>
          user.name.toLowerCase().indexOf(this.filterEditors.toLowerCase()) > -1);
      }
      return this.optionsEditors;
    },
  },
  watch: {
    getChapter(chapter) {
      if (chapter) {
        this.name = chapter.name;
        this.chapter_num = chapter.chapter_num;
        this.content = chapter.content;
        this.translators = [...chapter.translators];
        this.editors = [...chapter.editors];
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchChapter',
      'fetchRole',
      'updateChapter',
    ]),
    async loadChapter(chapterId) {
      await this.fetchChapter(chapterId);
      await this.fetchRole('5b909c8444593a02bfc2c624');
      this.optionsTranslators = this.getRole.users;
      await this.fetchRole('5b90af0e30220b07670d0839');
      this.optionsEditors = this.getRole.users;
    },
    isInvalid(field, volume) {
      const validate = volume ? this.$v[field][volume] : this.$v[field];
      return (validate.$invalid && validate.$dirty);
    },
    getFilteredTranslators(text) {
      this.filterTranslators = text;
    },
    getFilteredEditors(text) {
      this.filterEditors = text;
    },
    validate() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return false;
      }
      return true;
    },
    async saveChapter() {
      if (this.validate()) {
        const dataChapter = Object.assign({}, this.chapter);
        try {
          await this.updateChapter(dataChapter);
          this.$toast.open({
            message: 'Capítulo atualizado!',
            type: 'is-success',
          });
        } catch (error) {
          this.$toast.open({
            message: 'Ocorreu um erro ao atualizar o capítulo.',
            type: 'is-danger',
          });
        }
      }
    },
  },
  mounted() {
    this.loadChapter(this.$route.params.id);
  },
};
</script>

