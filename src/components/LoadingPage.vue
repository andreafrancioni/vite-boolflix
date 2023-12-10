<script>
export default {
    props: {
        loading: Boolean,
    },
};
</script>

<template>
    <div v-if="loading" class="loading-container">
        <div class="loading-logo">BOOLFLIX</div>
    </div>
</template>
  
<style scoped>
/* Stili CSS per la loading screen */
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
}

.loading-logo {
    font-size: 50px;
    color: #e74c3c;
    animation: scaleUp 2s forwards, fadeOut 0.5s 3s forwards;
}

@keyframes scaleUp {
    0% {
        transform: scale(5);
    }

    50% {
        transform: scale(6);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }


    100% {
        opacity: 0;
    }
}
</style>