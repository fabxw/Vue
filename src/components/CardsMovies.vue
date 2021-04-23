<template>
  <div>
    <div class="columns" v-for="(movies, index) in chunkedMovies" :key="index">
      <div class="column" v-for="(movie, index) in movies" :key="index">
        <div
          id="column-area"
          @click="info"
          :movies="movies"
          class="box box-shadow"
        >
          <div>
            <p id="title" class="title">{{ movie.title }}</p>
          </div>
          <div>
            <img id="img" :src="baseImg + movie.poster_path" alt="imagem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import chunk from "chunk";

export default {
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
    };
  },
  created: function (count) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a05753df84a5d116151e44fa402b53ba&language=pt-BR&page=1"
      )
      .then((res) => {
        console.log("lista de filmes coletada");
        this.movies = res.data.results;
        console.log(this.movies);
        this.title = this.movies[count].title;
        this.poster_path = this.movies[count].poster_path;
        this.overview = this.movies[count].overview;
        this.vote_average = this.movies[count].vote_average;
        this.vote_count = this.movies[count].vote_count;

        console.log(this.movies);
      });
  },
  computed: {
    chunkedMovies() {
      return chunk(this.movies, 5);
    },
  },
  methods: {
    info: function () {
      this.$router.push("/info");
      //this.$emit("movies-info", this.movies);
    },
  },
};
</script>

<style>
#title {
  font-size: 1rem;
  text-align: center;
  height: 60px;
}

#column-area:hover {
  text-decoration-color: #9c4b4b;
}

.box {
  text-align: center !important;
}

.columns {
  padding-left: 0.5%;
  padding-right: 0.5%;

  margin: 0 !important;
  border: 0 !important;
}
</style>