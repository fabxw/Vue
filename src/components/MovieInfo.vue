<template>
  <div>
    <div class="box">
      <article class="media">
        <div id="box" class="media-left">
          <figure id="image" class="image">
            <img :src="baseImg + movie.poster_path" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div id="name" class="content">
            <h3>
              <strong>{{ this.movie.title }}</strong>
              <small> ({{ this.movie.year }}) </small>
            </h3>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
//import MenuBar from "./MenuBar";
//import CardMovies from "./CardsMovies";
//import VueRouter from "vue-router";
import axios from "axios";
export default {
  name: "MovieInfo",

  data() {
    return {
      baseImg: "https://image.tmdb.org/t/p/w220_and_h330_face",
      movie: {
        title: "",
        poster_path: "",
        overview: "",
        vote_average: "",
        vote_count: "",
        year: "",
      },

      info: {
        debug: false,
        id: 0,
      },
    };
  },

  created: function () {
    this.info.id = this.$route.params.id;

    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.info.id +
          "?api_key=a05753df84a5d116151e44fa402b53ba&language=pt-BR"
      )
      .then((res) => {
        console.log(res.data);

        this.movie.title = res.data.title;
        this.movie.poster_path = res.data.poster_path;
        this.movie.overview = res.data.overview;
        this.movie.vote_average = res.data.vote_average;
        this.movie.vote_count = res.data.vote_count;
        this.movie.year = res.data.release_date.substr(0, 4);
      });
  },

  components: {
    // MenuBar,
    // CardMovies,
  },
};
</script>

<style>
#box {
  padding: 5%;
  padding-right: 2%;
}

#image {
  height: 120% !important;
  widows: 120%;
}
#name {
  text-align: left !important;
  padding-top: 12%;
}
</style>