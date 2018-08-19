<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Capítulos</h1></div>
      </div>
      <div class="level-right"></div>
    </div>
    <div class="content">
      <b-table :data="chapters">
        <template slot-scope="props">
          <b-table-column label="id">
            {{ props.row.id }}
          </b-table-column>

          <b-table-column label="Nome">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column label="Novel">
            {{ props.row.novel.name }}
          </b-table-column>

          <b-table-column label="Tradutores">
            {{ props.row.translators.join(',') }}
          </b-table-column>

          <b-table-column label="Opções">
            <b-field>
              <p class="control">
                <button class="button">
                  <b-icon icon="pencil"></b-icon>
                </button>
              </p>
              <p class="control">
                <button class="button">
                  <b-icon icon="delete" type="is-danger"></b-icon>
                </button>
              </p>
            </b-field>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminChapters',
  layout: 'admin',
  computed: {
    ...mapGetters({
      chapters: 'getChapters',
      filters: 'getChaptersFilters',
    }),
  },
  methods: {
    ...mapActions([
      'fetchChapters'
    ]),
    async loadChapters() {
      await this.fetchChapters(this.filters);
    },
  },
  mounted() {
    this.loadChapters();
  },
};
</script>
