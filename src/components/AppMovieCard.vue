<script>
export default {
    name: "AppMovieCard",
    props: ["movieInfo"]
}
</script>

<template>
    <div class="cardWrapper">
        <div class="card">
            <h2>{{ movieInfo.title }}</h2>
            <p>{{ movieInfo.original_title }}</p>
            <p>{{ movieInfo.original_language }}</p>
            <p>{{ movieInfo.vote_average }}</p>
        </div>
    </div>
</template>

<style>
.cardWrapper {
    width: 200px;
    height: 300px;
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>