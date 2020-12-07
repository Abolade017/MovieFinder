<template>
     <main
      class="flex flex-col items-center flex-1 w-full max-w-screen-lg mx-auto"
    >
      <movie-finder class="relative"></movie-finder>
   

      <div class="flex flex-wrap w-full mt-6 px-auto">
        <movie-poster
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        ></movie-poster>
       <!-- <movie-info v-if="selectedComponent==='movie-info'"></movie-info> -->
      </div>
     
    </main>
</template>

<script>
export default {
 
  data() {
    return {
      key: "9099d4a456925cc52c8aed25ab61ba4e",
      base_url:
        "https://api.themoviedb.org/3/movie/popular?api_key=9099d4a456925cc52c8aed25ab61ba4e",
      movies: [],
  
    };
  },
  mounted() {
    this.getPopularMovies();
  },
  methods: {
    getPopularMovies() {
      fetch(this.base_url)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          this.movies = data.results;
        });
    },
  }
};
</script>