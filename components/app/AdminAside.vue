<template>
  <aside class="menu">
    <p class="menu-label">Geral</p>
    <ul class="menu-list">
      <li><nuxt-link to="/admin">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/admin/novels">Novels</nuxt-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AdminAside',
};
</script>


