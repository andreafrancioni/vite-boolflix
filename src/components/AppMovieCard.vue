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
    top: 50%;
}

.cardWrapper:hover .cardPoster img {
    filter: blur(5px);
}

.flag {
    width: 30px;
}

.filled {
    color: gold;
}
</style>