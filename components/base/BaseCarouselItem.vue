<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCarouselItem',
};
</script>

<style lang="scss" scoped>
.carousel-item {
  min-height: 317px;
}
</style>

