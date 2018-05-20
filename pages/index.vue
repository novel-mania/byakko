<template>
  <main class="home">
    <new-comers />
    <base-advertinsing class="advertinsing" type="90" />
    <recommended />
    <ranking />
    <base-advertinsing class="advertinsing" type="90" />
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

<style lang="scss">
.home {
  > .advertinsing {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>

