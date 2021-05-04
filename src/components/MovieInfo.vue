<template>
  <div>
    <menu-bar />
    <div class="box">
      <article class="media">
        <div id="box" class="media-left">
          <figure id="image" class="image">
            <img :src="baseImg + movie.poster_path" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <div id="bar-progress">
              <progress
                id="bar"
                class="progress is-normal"
                :value="this.movie.vote_average * 10"
                max="100"
              ></progress>
              <small id="bar-info"
                >Avaliação dos usuários <strong> &#183; </strong>
                {{ this.movie.vote_average * 10 }}%
              </small>
            </div>
            <h1 id="name">
              <strong>{{ this.movie.title }}</strong>
              <small> ({{ this.movie.year }}) </small>
            </h1>
          </div>
          <div id="sub" class="content">
            <span>{{ new Date(this.movie.date).toLocaleDateString() }}</span>
            <strong> &#183; </strong>

            <span v-for="(genre, index) in this.movie.genres" :key="index">
              {{ genre.name }}
              <strong> &#183; </strong>
            </span>
            <span> {{ time(this.movie.runtime) }}</span>
          </div>
          <div id="overview">
            <strong> Sinopse</strong>
            <p>{{ this.movie.overview }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MenuBar from "./MenuBar.vue";
export default {
  components: {
    MenuBar,
  },
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
        date: "",
        genres: Array,
        runtime: Number,
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
        this.movie.date = res.data.release_date;
        this.movie.genres = res.data.genres;
        this.movie.runtime = res.data.runtime;

        console.log(this.movie.runtime);
      });
  },

  methods: {
    time: function (time) {
      var hours = Math.floor(time / 60);
      var minutes = time % 60;
      return hours + "h " + minutes + "m";
    },
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
  border-radius: 6px !important;
}
#name {
  text-align: left !important;
  padding-top: 0%;
  margin: 0;
}

#sub {
  text-align: left !important;
  padding-left: 1%;
  padding-top: 0%;
}

#overview {
  text-align: initial;
  margin-right: 25%;
  margin-top: 3%;
}

#overview > strong {
  font-size: 1.2rem !important;
}

.content {
  padding-top: 8%;
  margin-bottom: 0% !important;
}

#bar {
  margin-bottom: 0%;
}

#name > #bar-info {
  margin-bottom: 5%;
  font-size: 1rem;
  text-align: center;
  align-content: center;
  align-items: center;
  align-self: center;
}

#bar-progress {
  padding-bottom: 3%;
  width: 70%;
}

h1 {
  margin: 0 !important;
}
</style>