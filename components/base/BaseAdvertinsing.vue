<template>
  <div class="advertising">
    <img :src="`img/${image}`" alt="Propaganda">
  </div>
</template>

<script>
export default {
  name: 'BaseAdvertinsing',
  props: {
    type: String,
  },
  computed: {
    image() {
      switch (this.type) {
        case 'square':
          return 'ad1.png'
          break;

        case '90':
          return 'ad2.png'
          break;

        default:
          return 'ad1.png'
          break;
      };
    },
  },
};
</script>

