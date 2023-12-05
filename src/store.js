import { reactive } from 'vue'

export const store = reactive({
    catalogMovie: [],

    movieSearch: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: '', include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTE2MDM5N2YxZDNlOTU4ODUyMDVkMTM1YWRmODljMCIsInN1YiI6IjY1NmRjMDc2M2RjMzEzMDBjNGZhNzQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO3dECGxjLJPv28d-H-YWMp8MKmJikz3yhUFjggf9Fo'
        },
    },

});
