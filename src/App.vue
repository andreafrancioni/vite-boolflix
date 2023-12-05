<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */
import AppHeader from './components/AppHeader.vue';
import AppMovieCard from './components/AppMovieCard.vue';


export default {
  components: {
    AppHeader,
    AppMovieCard
  },

  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
    }
  },
  mounted() {
    /* All'avvio dell'app lancia tali funzioni */
    this.queryMovies();
  },
  methods: {
    queryMovies() {
      axios
        .request(store.movieSearch)
        .then(function (response) {
          store.catalogMovie = response.data.results;
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
    <AppHeader @filterMovie="queryMovies()" />
  </header>
  <main>
    <h1 class="text-center text-white">Movies</h1>
    <div class="cardContainer">
      <AppMovieCard v-for="movie in store.catalogMovie" :movieInfo="movie" />
    </div>
  </main>
  <footer>

  </footer>
</template>

<!-- CSS App -->
<style scoped>
main {

  background-color: #303030;
}

.cardContainer {
  margin: 0 auto;
  width: 80%;
  display: flex;
  overflow-x: scroll;
}
</style>
