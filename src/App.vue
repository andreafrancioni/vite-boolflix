<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */
import AppHeader from './components/AppHeader.vue';
import AppMovieCard from './components/AppMovieCard.vue';
import AppSerieCard from './components/AppSerieCard.vue';


export default {
  components: {
    AppHeader,
    AppMovieCard,
    AppSerieCard
  },

  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
      movieSearch: {
        method: 'GET',
        url: null,
        params: {
          query: null,
          include_adult: 'false',
          language: 'en-US',
          page: '1',
          api_key: "01160397f1d3e95885205d135adf89c0"
        },

        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer 01160397f1d3e95885205d135adf89c0'
        },
      },
    }
  },
  mounted() {
    /* All'avvio dell'app lancia tali funzioni */

  },
  methods: {
    /* Interroga l'api richiedendo la lista dei film con i parametri descritti nell'oggetto e li scrive nella variabile all'interno dello store */
    queryMovies() {
      this.movieSearch.params.query = this.store.query;
      this.movieSearch.url = this.store.movieUrl
      console.log(this.movieSearch),
        axios.request(this.movieSearch).then(function (response) {
          store.catalogMovie = [];
          store.catalogMovie = response.data.results;
          console.log(response.data);
        })
          .catch(function (error) {
            console.error(error);
          });
    },

    /* Interroga l'api richiedendo la lista delle serie con i parametri descritti nell'oggetto e li scrive nella variabile all'interno dello store */
    querySeries() {
      this.movieSearch.params.query = this.store.query;
      this.movieSearch.url = this.store.seriesUrl
      console.log(this.movieSearch),
        axios.request(this.movieSearch).then(function (response) {
          store.catalogSeries = [];
          store.catalogSeries = response.data.results;
          console.log(response.data);
        })
          .catch(function (error) {
            console.error(error);
          });
    },
  }
}
</script>

<!-- HTML App -->
<template>
  <header>
    <!-- Richiama il componente header, e all'evento emit richiama le due funzioni. -->
    <AppHeader @filterMovie="queryMovies(), querySeries()" />
  </header>
  <main>
    <h1 class="text-center text-white">Movies</h1>
    <div class="cardContainer">
      <!-- Per ogni film nell'array genera una card -->
      <AppMovieCard v-for="movie in store.catalogMovie" :movieInfo="movie" />
    </div>
    <h1 class="text-center text-white">Series</h1>
    <div class="cardContainer">
      <!-- Per ogni serie nell'array genera una card -->
      <AppSerieCard v-for="serie in store.catalogSeries" :serieInfo="serie" />
    </div>
  </main>
  <footer>

  </footer>
</template>

<!-- CSS App -->
<style scoped>
header {
  background-color: black;
}

main {
  background-color: #303030;
  overflow-y: auto;
  height: 100vh;
}

.cardContainer {
  margin-left: 2rem;
  display: flex;
  overflow-x: scroll;
}
</style>
