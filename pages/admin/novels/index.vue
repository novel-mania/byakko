<template>
  <section>
    <h1>Novels</h1>
    <base-table :data="novels.chapters">
      <template slot-scope="props">
        <base-table-column label="id">
          {{ props.row.id }}
        </base-table-column>

        <base-table-column label="name">
          {{ props.row.name }}
        </base-table-column>

      </template>
    </base-table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseTable from '~/components/base/BaseTable';
import BaseTableColumn from '~/components/base/BaseTableColumn';

export default {
  name: 'AdminNovels',
  layout: 'admin',
  components: {
    BaseTable,
    BaseTableColumn,
  },
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


