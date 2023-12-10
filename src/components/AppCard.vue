<script>
export default {
    name: "AppCard",
    props: ["cardInfo"],

    data() {
        return {
            voteInt: (Math.ceil(this.cardInfo.vote_average) / 2),
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="cardContent">
            <div class="cardPoster">
                <img class="moviePoster" :src="`https://image.tmdb.org/t/p/w342/${this.cardInfo.poster_path}`" alt="">
            </div>
            <div class="cardInfo">
                <h3 v-if="cardInfo.title" class="text-center">{{ cardInfo.title }}</h3>
                <h3 v-else class="text-center">{{ cardInfo.name }}</h3>
                <p>{{ cardInfo.original_title }}</p>
                <p>{{ cardInfo.overview }}</p>
                <img class="flag" :src="`./${this.cardInfo.original_language}.png`" alt="">
                <div class="card-stars">
                    <i v-for="i in 5" :class="{ 'filled': i <= voteInt }" class="fas fa-star"></i>
                </div>
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
    background-color: transparent;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
    width: 342px;
}

.cardContent {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.cardWrapper:hover .cardContent {
    transform: rotateY(180deg);
}

.cardPoster {
    width: 342px;
    height: 513px;
}

.cardPoster img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}


.cardInfo {
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: rgba(0, 0, 0, 0.665);
    height: 100%;
    width: 100%;
    overflow-y: auto;
}

.cardWrapper:hover .cardPoster img {
    filter: blur(5px);
    height: 100%;

}

.flag {
    width: 30px;
}

.filled {
    color: gold;
}
</style>