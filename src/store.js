import { reactive } from 'vue'

export const store = reactive({
    catalogMovie: [],
    catalogSeries: [],
    movieUrl: "https://api.themoviedb.org/3/search/movie",
    seriesUrl: "https://api.themoviedb.org/3/search/tv",
    query: "",

});
