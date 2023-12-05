<script>
export default {
    name: "AppSerieCard",
    props: ["serieInfo"],

    data() {
        return {
            flagIcon: `./${this.serieInfo.original_language}.png`,
            seriePoster: `https://image.tmdb.org/t/p/w342/${this.serieInfo.poster_path}`,
            voteInt: (Math.ceil(this.serieInfo.vote_average) / 2),
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="cardPoster">
            <img class="seriePoster" :src="seriePoster" alt="">
        </div>
        <div class="cardInfo">
            <h3 class="text-center">{{ serieInfo.name }}</h3>
            <p>{{ serieInfo.original_name }}</p>
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