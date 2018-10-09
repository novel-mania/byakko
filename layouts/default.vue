<template>
  <div>
    <the-heading />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeading from '~/components/app/TheHeading';
import TheFooter from '~/components/app/TheFooter';

export default {
  name: 'Default',
  components: {
    TheHeading,
    TheFooter,
  },
};
</script>

<style lang="scss">
$radius: 10px;

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$table-background-color: #fafafa;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~bulma-badge/src/sass/index";
</style>
