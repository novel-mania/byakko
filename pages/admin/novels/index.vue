<template>
  <section>
    <h1>Novels</h1>
    <base-table :data="novels">
      <template slot-scope="props">
        <base-table-column label="id">
          {{ props.row.id }}
        </base-table-column>

        <base-table-column label="name">
          {{ props.row.name }}
        </base-table-column>

        <base-table-column label="Categoria">
          {{ props.row.categories.join(',') }}
        </base-table-column>

        <base-table-column label="Sinopse">
          {{ props.row.sinopse }}
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
    }),
  },
  methods: {
    ...mapActions([
      'fetchNovels',
    ]),
    async loadNovels() {
      await this.fetchNovels();
    },
  },
  mounted() {
    this.loadNovels();
  },
};
</script>

<style lang="scss">

</style>


