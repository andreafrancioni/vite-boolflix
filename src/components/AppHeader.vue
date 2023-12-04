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
                <h1>BoolFlix</h1>
            </div>
            <div class="col-8">
                <input type="text" v-model="this.store.options.params.query">
                <button @click="filterMovie()">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style></style>