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
    methods: {
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
            <p>{{ serieInfo.overview }}</p>
            <img class="flag" :src="flagIcon" alt="">
            <div class="card-stars">
                <i v-for="i in 5" :class="{ 'filled': i <= voteInt }" class="fas fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardWrapper {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 1em;
    flex-wrap: wrap;
    position: relative;
}

.cardInfo {
    display: none;
}

.cardWrapper:hover .cardInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
    flex-wrap: wrap;
    flex-direction: column;
    position: absolute;
    top: 3rem;
}

.cardWrapper:hover .cardPoster img {
    filter: blur(5px) grayscale(80%);
}

.flag {
    width: 30px;
}

.filled {
    color: gold;
}
</style>