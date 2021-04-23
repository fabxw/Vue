<template>
  <div>
    <menu-bar />
    <article class="message is-dark">
      Title {{ movies.title }}
      <br />
      Overview {{ movie.overview }}
    </article>
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";

export default {
  name: "MovieInfo",
  props: {
    title: String,
    poster_path: String,
    overview: String,
    vote_average: String,
    vote_count: String,
    year: String,
    movies: Object,
  },

  components: {
    MenuBar,
  },
  /*
  watch: {
    msg: function () {
      this.movieInfos.push(this.msg);
    },
  },
 
  */
};
</script>

<style>
</style>