<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */


export default {
  components: {

  },

  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
    }
  },
  mounted() {
    /* All'avvio dell'app lancia tali funzioni */

  },
  methods: {

  }
}
</script>

<!-- HTML App -->
<template>
  <header>

  </header>
  <main>

  </main>
  <footer>

  </footer>
</template>

<!-- CSS App -->
<style scoped></style>
