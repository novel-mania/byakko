<template>
  <div></div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: String,
  },
  computed: {
    pathIcon() {
      return `~/assets/svg/${icon}.svg`;
    },
  },
};
</script>

