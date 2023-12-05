<script>
export default {
    name: "AppMovieCard",
    props: ["movieInfo"],

    data() {
        return {
            flagIcon: `./${this.movieInfo.original_language}.png`,
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="card">
            <h3>{{ movieInfo.title }}</h3>
            <p>{{ movieInfo.original_title }}</p>
            <img :src="flagIcon" alt="">
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
    width: 15em;
    margin-left: 1em;
}

img {
    width: 30px;
}
</style>