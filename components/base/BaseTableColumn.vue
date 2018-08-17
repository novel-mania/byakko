<template>
  <td
    v-if="visible"
    :data-label="label"
  >
    <span><slot/></span>
  </td>
</template>

<script>
export default {
  name: 'BaseTableColumn',
  props: {
    label: String,
    customKey: [String, Number],
    field: String,
    meta: [String, Number, Boolean, Function, Object, Array, Symbol],
    width: [Number, String],
    numeric: Boolean,
    centered: Boolean,
    sortable: Boolean,
    visible: {
      type: Boolean,
      default: true
    },
    customSort: Function,
    internal: Boolean // Used internally by Table
  },
  data() {
    return {
      newKey: this.customKey || this.label,
    };
  },
  beforeMount() {
    if (!this.$parent.$data.isTable) {
      this.$destroy();
      throw new Error('You should wrap baseTableColumn on a baseTable')
    }
    if (this.internal) return;

    // Since we're using scoped prop the columns gonna be multiplied,
    // this finds when to stop based on the newKey property.
    const repeated = this.$parent.columns.some((column) => column.newKey === this.newKey);
    if (!repeated) this.$parent.columns.push(this);
  },
  beforeDestroy() {
    const index = this.$parent.columns.map((column) => column.newKey).indexOf(this.newKey);
    if (index >= 0) {
      this.$parent.columns.splice(index, 1);
    }
  },
};
</script>
