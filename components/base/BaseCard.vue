<template>
  <div class="card">
    <img
      :src="`img/${info.image}`"
      alt="Imagem"
      v-if="hasImage()"
    >
    <h2 class="title">{{ info.title }}</h2>
    <p class="categorie"><i>{{ info.categorie }}</i></p>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    info: Object,
  },
  methods: {
    hasImage() {
      return {}.hasOwnProperty.call(this.info, 'image');
    },
  },
};
</script>

<style lang="scss">
.card {
  display: inline-block;
  position: relative;
  margin: 0 5px;

  > .title {
    font-size: 1.125rem;
    color: #333;
    margin-bottom: 0.1rem;
    width: 152px;
    white-space: initial;
  }

  > .categorie {
    font-size: 1.125rem;
    color: #999;
  }
}
</style>


