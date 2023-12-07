<script>
export default {
    name: "AppMovieCard",
    props: ["movieInfo"],

    data() {
        return {
            voteInt: (Math.ceil(this.movieInfo.vote_average) / 2),
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
                <img class="moviePoster" :src="`https://image.tmdb.org/t/p/w342/${this.movieInfo.poster_path}`" alt="">
            </div>
            <div class="cardInfo pt-3">
                <h3 class="text-center">{{ movieInfo.title }}</h3>
                <p>{{ movieInfo.original_title }}</p>
                <p>{{ movieInfo.overview }}</p>
                <img class="flag" :src="`./${this.movieInfo.original_language}.png`" alt="">
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


.cardInfo {
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: rgba(0, 0, 0, 0.665);
    height: 100%;
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