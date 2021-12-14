Vetur: show doctor info<template>
  <div>
    <div
      class="columns"
      v-for="(movies, index1) in moviesChunked"
      :key="index1"
    >
      <div class="column" v-for="(movie, index2) in movies" :key="index2">
        <div
          id="column-area"
          @click="info(moviesChunked[index1][index2].id)"
          class="box box-shadow"
        >
          <div>
            <p id="title" class="title">
              <router-link
                :to="{
                  name: 'info',
                  params: { id: moviesChunked[index1][index2].id },
                }"
              ></router-link>
              {{ movie.title }}
            </p>
          </div>
          <div>
            <img id="img" :src="urlBase + movie.poster_path" alt="imagem" />
          </div>
        </div>
      </div>
    </div>
    <div :infom="this.movie" />
  </div>
</template>

<script>
//import MovieInfo from "./MovieInfo";

import axios from "axios";
export default {
  name: "cards",
  components: {
    //   MovieInfo,
  },
  props: {
    moviesChunked: Array,
    urlBase: String,
  },

  data() {
    return {
      movie: Array,
    };
  },

  methods: {
    info: function (msg) {
      this.$router.push("/info/" + msg);

      console.log("dos cards");

      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            msg +
            "?api_key=a05753df84a5d116151e44fa402b53ba&language=pt-BR"
        )
        .then((res) => {
          console.log(res.data);
          this.movie = res.data;
        });

      //console.log(msg);
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