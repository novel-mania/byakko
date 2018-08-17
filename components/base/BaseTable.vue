<template>
  <table>
    <thead v-if="newColumns.length">
      <tr>
        <th
          v-for="(column, index) in newColumns"
          v-if="column.visible || column.visible === undefined"
          :key="index"
        >{{ column.label }}</th>
      </tr>
    </thead>
    <tbody v-if="visibleData.length">
      <template v-for="(row, index) in visibleData">
        <tr :key="index">
          <slot
            :row="row"
            :index="index"
          />
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newColumns: [...this.columns],
      newData: this.data,
      isTable: true, // Used by TableColumn
     };
  },
  computed: {
    visibleData() {
      return this.newData;
    },
  },
  watch: {
    data(value) {
      // Save newColumns before resetting
      const newColumns = this.newColumns;

      this.newColumns = [];
      this.newData = value;

      // Prevent table from being headless, data could change and created hook
      // on column might not trigger
      this.$nextTick(() => {
        if (!this.newColumns.length) this.newColumns = newColumns;
      });
    },
  },
};
</script>

<style lang="scss">

</style>


