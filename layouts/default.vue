<template>
  <div>
    <the-heading />
    <nuxt />
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

