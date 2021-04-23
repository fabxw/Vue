<template>
  <div id="app">
    <menu-bar />
    <cards-movies />
  </div>
</template>
    

<script>
import MenuBar from "./MenuBar.vue";
import CardsMovies from "./CardsMovies.vue";

export default {
  components: {
    MenuBar,
    CardsMovies,
  },
};
</script>

<style>
</style>