<template>
  <div id="app">
    <menu-bar />
    <cards-movies :moviesChunked="chunkedMovies" :urlBase="baseImg" />
  </div>
</template>
    

<script>
import MenuBar from "./MenuBar.vue";
import CardsMovies from "./CardsMovies.vue";
import axios from "axios";
import chunk from "chunk";

export default {
  components: {
    MenuBar,
    CardsMovies,
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a05753df84a5d116151e44fa402b53ba&language=pt-BR&page=1"
      )
      .then((res) => {
        //console.log("lista de filmes coletada");
        this.movies = res.data.results;
        //console.log(this.movies);
        this.title = this.movies.title;
        this.poster_path = this.movies.poster_path;
        this.overview = this.movies.overview;
        this.vote_average = this.movies.vote_average;
        this.vote_count = this.movies.vote_count;

        //console.log(this.movies);
      });
  },
  data() {
    return {
      baseImg: "https://image.tmdb.org/t/p/w220_and_h330_face",
      movies: {
        title: "",
        poster_path: "",
        overview: "",
        vote_average: "",
        vote_count: "",
        year: "",
      },
      moviechunked: Array,
    };
  },
  computed: {
    chunkedMovies() {
      return chunk(this.movies, 5);
    },
  },
  methods: {},
};
</script>

<style>
</style>