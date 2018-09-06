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
            expanded
            :type="isInvalid('chapter_num') ? 'is-danger' : ''"
            :message="isInvalid('chapter_num')
              ? 'Número do capítulo é um campo obrigatório.' : ''"
          >
            <b-input v-model="chapter.chapter_num" placeholder="Exemplo: 123" />
          </b-field>
        </b-field>
        <!-- <b-field grouped>
          <b-field
            label="Nome do volume"
            expanded
            :type="isInvalid('volume.name') ? 'is-danger' : ''"
            :message="isInvalid('volume.name')
              ? 'Nome do capítulo é um campo obrigatório.' : ''"
          >
            <b-input v-model="chapter.volume.name" placeholder="Exemplo: 123" />
          </b-field>
            label="Número do volume"
            expanded
            :type="isInvalid('volume.volume_num') ? 'is-danger' : ''"
            :message="isInvalid('volume.volume_num')
              ? 'Número do volume é um campo obrigatório.' : ''"
          >
            <b-input v-model="chapter.volume.volume_num" placeholder="Exemplo: 123" />
          </b-field> -->
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
              allow-new
              v-model="chapter.translators"
              icon="account"
              placeholder="Adicionar um tradutor"
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
              expanded
              autocomplete
              allow-new
              v-model="chapter.editors"
              icon="account"
              placeholder="Adicionar um Revisor"
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
    const chapter = {
      name: '',
      chapter_num: '',
      content: '',
      translators: [],
      editors: [],
      volume: {
        name: '',
        volume_num: '',
      }
    };

    return {
      chapter,
        editorOption: {},
    };
  },
  validations: {
    chapter: {
      name: { required },
      chapter_num: { required },
      content: { required },
      translators: { required },
      editors: { required },
      volume: { 
        name: { required },
        volume_num: { required },
       }
    },
  },
  computed: {
    ...mapGetters([
      'getChapter',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchChapter',
      'updateChapter',
    ]),
    async loadChapter(chapterId) {
      await this.fetchChapter(chapterId);
      this.chapter = Object.assign({}, this.getChapter);
    },
    isInvalid(field) {
      return (this.$v.chapter[field].$invalid && this.$v.chapter[field].$dirty);
    },
    validate() {
      if (this.$v.chapter.$invalid) {
        this.$v.chapter.$touch();
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

