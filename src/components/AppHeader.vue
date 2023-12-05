<script>
import { store } from "../store.js" //state management

export default {
    name: "AppHeader",

    data() {
        return {
            /* Richiama store per utilizzare il file store.js come state management */
            store,

        }
    },
    methods: {

        filterMovie() {
            this.$emit("filterMovie")
        },
    },
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img src="../assets/boolflix.gif" alt="">
            </div>
            <div class="col-8 d-flex align-items-center justify-content-end">
                <input type="text" v-model="store.query">
                <button @click="filterMovie()">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 10rem;
}
</style>