<template>
  <header>
    <nav class="navbar is-white has-shadow" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/"><img src="~/assets/img/logo.png" alt="Novel Mania"></nuxt-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field">
                <p class="control has-icons-right">
                  <input class="input is-rounded" type="text" placeholder="Pesquisar">
                  <span class="icon is-medium is-right">
                    <i class="mdi mdi-24px mdi-magnify"></i>
                  </span>
                </p>
              </div>
            </div>
            <div class="navbar-item">
              <span class="icon badge" data-badge="2">
                <i class="mdi mdi-24px mdi-comment-outline"></i>
              </span>
            </div>
            <div class="navbar-item has-dropdown">
              <a class="navbar-link">
                <figure class="image is-24x24">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
                <span>Rubens Pereira</span>
              </a>

              <div class="navbar-dropdown">
                <!-- Other navbar items -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AdminHeading',
};
</script>

