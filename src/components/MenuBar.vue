<template>
  <div class="menu">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-active">
          <img
            @click="home"
            src="../assets/avonale.png"
            width="112"
            height="28"
          />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a @click="home" class="navbar-item"> Home </a>
          <!--
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Categorias </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
          -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    home: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar-start .navbar-item:hover {
  background-color: #f0f0f0;
}

#navbarBasicExample .navbar-start a:hover {
  color: #9c4b4b;
}
#navbarBasicExample .navbar-start .navbar-item .navbar-link:hover,
#navbarBasicExample .navbar-start .navbar-dropdown .navbar-item:hover {
  background-color: #f0f0f0;
}

.navbar-item a:hover {
  color: #9c4b4b;
}
</style>