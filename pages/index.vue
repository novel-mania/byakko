<template>
  <main class="home">
    <new-comers />
    <base-advertinsing class="container has-text-centered" type="90" />
    <recommended />
    <ranking />
    <base-advertinsing class="container has-text-centered" type="90" />
  </main>
</template>

<script>
import BaseAdvertinsing from '~/components/base/BaseAdvertinsing';
import NewComers from '~/components/sections/NewComers';
import Recommended from '~/components/sections/Recommended';
import Ranking from '~/components/sections/Ranking';

export default {
  name: 'Home',
  components: {
    BaseAdvertinsing,
    NewComers,
    Recommended,
    Ranking,
  },
};
</script>

