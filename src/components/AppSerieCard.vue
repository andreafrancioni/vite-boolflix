<script>
export default {
    name: "AppSerieCard",
    props: ["serieInfo"],

    data() {
        return {
            flagIcon: `./${this.serieInfo.original_language}.png`,
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        <div class="card">
            <h3>{{ serieInfo.name }}</h3>
            <p>{{ serieInfo.original_name }}</p>
            <img :src="flagIcon" alt="">
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
    width: 15em;
    margin-left: 1em;
}

img {
    width: 30px;
}
</style>