<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Novels</h1></div>
      </div>
      <div class="level-right"></div>
    </div>
    <div class="content">
      <b-table :data="novels">
        <template slot-scope="props">
          <b-table-column label="id">
            {{ props.row.id }}
          </b-table-column>

          <b-table-column label="name">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column label="categories">
            {{ props.row.categories.join(',') }}
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminNovels',
  layout: 'admin',
  computed: {
    ...mapGetters({
      novels: 'getNovels',
      chapters: 'getChapters'
    }),
  },
  methods: {
    ...mapActions([
      'fetchNovels',
      'fetchChapters'
    ]),
    async loadNovels() {
      await this.fetchNovels();
    },
    async loadChapters() {
      await this.fetchChapters();
    },
  },
  mounted() {
    this.loadNovels();
    this.loadChapters();
  },
};
</script>

<style lang="scss">

</style>


