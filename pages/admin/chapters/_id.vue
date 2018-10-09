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
            <b-input v-model="chapter.name" placeholder="Nome" />
          </b-field>
          <b-field
            label="Número do capítulo"
            :type="isInvalid('chapter_num') ? 'is-danger' : ''"
            :message="isInvalid('chapter_num')
              ? 'Número do capítulo é um campo obrigatório.' : ''"
          >
            <b-input v-model="chapter.chapter_num" placeholder="Exemplo: 123" />
          </b-field>
          <b-field
            label="Volume"
            :type="isInvalid('volume', 'name') ? 'is-danger' : ''"
            :message="isInvalid('volume', 'name')
              ? 'Volume é um campo obrigatório.' : ''"
          >
            <b-autocomplete
              keep-first
              open-on-focus
              field="name"
              placeholder="Volume"
              :data="volumes"
              :value="chapter.volume.name"
              @select="selectVolume"
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
              v-model="chapter.translators"
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
              v-model="chapter.editors"
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
              :content="chapter.content"
              @change="onEditorChange($event)"
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
  name: 'AdminChapter',
  layout: 'admin',
  data() {
    const volumes = [
      { number: 1, name: 'O início' },
      { number: 2, name: 'O meio' },
      { number: 3, name: 'O fim' },
    ];
    const chapter = {
      name: '',
      chapter_num: '',
      content: '',
      volume: {
        name: '',
        number: '',
      },
      translators: [],
      editors: [],
    };

    return {
      chapter,
      volumes,
      optionsTranslators: [],
      optionsEditors: [],
      editorOption: {},
      filterTranslators: '',
      filterEditors: '',
    };
  },
  validations: {
    chapter: {
      name: { required },
      chapter_num: { required },
      content: { required },
      editors: { required },
      volume: {
        name: { required },
        number: { required },
      },
      translators: { required },
    }
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
        this.chapter.name = chapter.name;
        this.chapter.chapter_num = chapter.chapter_num;
        this.chapter.content = chapter.content;
        this.chapter.translators = [...chapter.translators];
        this.chapter.editors = [...chapter.editors];
        this.chapter.volume.number = chapter.volume.number;
        this.chapter.volume.name = chapter.volume.name;
      }
    }
  },
  methods: {
    ...mapActions([
      'clearChapter',
      'fetchChapter',
      'fetchRole',
      'newChapter',
      'updateChapter',
    ]),
    async loadChapter(chapterId) {
      await this.fetchChapter(chapterId);
    },
    async setupView() {
      await this.fetchRole('5b909c8444593a02bfc2c624');
      this.optionsTranslators = this.getRole.users;
      await this.fetchRole('5b90af0e30220b07670d0839');
      this.optionsEditors = this.getRole.users;
    },
    isInvalid(field, volume) {
      const validate = volume ? this.$v.chapter[field][volume] : this.$v.chapter[field];
      return (validate.$invalid && validate.$dirty);
    },
    getFilteredTranslators(text) {
      this.filterTranslators = text;
    },
    getFilteredEditors(text) {
      this.filterEditors = text;
    },
    selectVolume(volume) {
      if (volume) {
        this.chapter.volume.name = volume.name;
        this.chapter.volume.number = volume.number;
      }
    },
    onEditorChange(event) {
      this.chapter.content = event.html;
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
        dataChapter.translators = dataChapter.translators.map(translator => translator.id);
        dataChapter.editors = dataChapter.editors.map(editor => editor.id);
        try {
          if (this.getChapter.id) {
            await this.updateChapter(dataChapter);
            this.$toast.open({
              message: 'Capítulo atualizado!',
              type: 'is-success',
            });
          } else {
            await this.newChapter(dataChapter);
            this.$toast.open({
              message: 'Capítulo criado!',
              type: 'is-success',
            });
          }
        } catch (error) {
          this.$toast.open({
            message: 'Ocorreu um erro.',
            type: 'is-danger',
          });
        }
      }
    },
  },
  mounted() {
    if (this.$route.params.id !== 'add') {
      this.loadChapter(this.$route.params.id);
    }
    this.setupView();
  },
};
</script>

