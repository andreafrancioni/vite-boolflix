<script>
export default {
    name: "AppMovieCard",
    props: ["movieInfo"],

    data() {
        return {
            flagIcon: `./${this.movieInfo.original_language}.png`,
            moviePoster: `https://image.tmdb.org/t/p/w342/${this.movieInfo.poster_path}`,
            voteInt: (Math.ceil(this.movieInfo.vote_average) / 2),
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="cardPoster">
            <img class="moviePoster" :src="moviePoster" alt="">
        </div>
        <div class="cardInfo">
            <h3 class="text-center">{{ movieInfo.title }}</h3>
            <p>{{ movieInfo.original_title }}</p>
            <img class="flag" :src="flagIcon" alt="">
            <p>{{ voteInt }}</p>
            <i v-for="i in 5" :class="{ 'filled': i <= voteInt }" class="fas fa-star"></i>
        </div>
    </div>
</template>

<style scoped>
.cardWrapper {
    height: 50vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    flex-wrap: wrap;
    position: relative;
}

.cardInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
    flex-wrap: wrap;
    flex-direction: column;
    position: absolute;
    top: 50%;
}

.flag {
    width: 30px;
}

.filled {
    color: gold;
}
</style>