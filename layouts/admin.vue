<template>
  <div>
    <admin-heading />
    <main class="container is-fluid">
      <div class="columns">
        <div class="column is-narrow">
          <admin-aside class="column is-narrow" />
        </div>
        <section class="column section view">
          <nuxt />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import AdminHeading from '~/components/app/AdminHeading';
import AdminAside from '~/components/app/AdminAside';

export default {
  name: 'Admin',
  components: {
    AdminHeading,
    AdminAside,
  },
};
</script>

<style lang="scss">
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
@import "~buefy/src/scss/buefy";

.view {
  background-color: #fafafa;
  height: calc(100vh - 52px);
};

.quill-editor {
  max-height: 250px;
  overflow-y: auto;
}
</style>


