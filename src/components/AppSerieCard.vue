<script>
export default {
    name: "AppSerieCard",
    props: ["serieInfo"],

    data() {
        return {
            flagIcon: `./${this.serieInfo.original_language}.png`,
            seriePoster: `https://image.tmdb.org/t/p/w342/${this.serieInfo.poster_path}`
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="card">
            <img class="seriePoster" :src="seriePoster" alt="">
            <h3>{{ serieInfo.name }}</h3>
            <p>{{ serieInfo.original_name }}</p>
            <img class="flag" :src="flagIcon" alt="">
            <p>{{ serieInfo.vote_average }}</p>
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