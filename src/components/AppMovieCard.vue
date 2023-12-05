<script>
export default {
    name: "AppMovieCard",
    props: ["movieInfo"],

    data() {
        return {
            flagIcon: `./${this.movieInfo.original_language}.png`,
            moviePoster: `https://image.tmdb.org/t/p/w342/${this.movieInfo.poster_path}`
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="card">
            <img class="moviePoster" :src="moviePoster" alt="">
            <h3>{{ movieInfo.title }}</h3>
            <p>{{ movieInfo.original_title }}</p>
            <img class="flag" :src="flagIcon" alt="">
            <p>{{ movieInfo.vote_average }}</p>
        </div>
    </div>
</template>

<style>
.cardWrapper {
    height: 50vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 342px;
    margin-left: 1em;
}

.flag {
    width: 30px;
}

.moviePoster {
    width: 100%;
}
</style>