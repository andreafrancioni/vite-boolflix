import { reactive } from 'vue'

export const store = reactive({
    catalogMovie: [],
    catalogSeries: [],
    genreIDs: [],
    movieUrl: "https://api.themoviedb.org/3/search/movie",
    seriesUrl: "https://api.themoviedb.org/3/search/tv",
    genreUrl: "https://api.themoviedb.org/3/genre/tv/list",
    query: "",

});
