<template>
  <div class="">
  <input-search class="relative mt-24" @click="searchmovie"/>
    <div class="flex mt-24 px-20 flex-wrap">
      <div
        v-for="mov in newMovies"
        :key="mov.id"
        class="px-1 mb-10 md:w-1/4 md:px-3" @click="goToMoviePage(mov)"
      >
        <div class="cursor-pointer focus:scale-105 focus:outline-none">
          <div
            class="w-full transition-transform duration-300 transform rounded-md bg-dark-200 focus:scale-105 hover:scale-105"
            style="height:300px;"
          >
            <img
              :src="'https://image.tmdb.org/t/p/w500' + mov.poster_path"
              alt=""
              class="bottom-0 object-cover w-full h-full rounded-sm shadow-md"
            />
          </div>
        </div>
        <div class="flex-1 text-base font-medium text-left  md:text-lg mt-4">
          <div>{{ mov.original_title }}</div>
        </div>
        <div class="flex items-center">
          <RatingStar :rate="mov.vote_average"></RatingStar>
        </div>
        <div
          class="flex items-center justify-center px-4 text-xs font-medium text-gray-200 rounded-md bg-red-600 w-8"
        >
          {{mov.release_date }}
        </div>
      </div>
    </div>
    <!--<button
      class="absolute left-0 items-center justify-center hidden w-12 h-12 bg-red-700 rounded-full md:flex focus:outline-none"
    >
      <svg class="w-6 h-6 text-gray-100  chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      class="absolute right-0 items-center justify-center hidden w-12 h-12 bg-red-700 rounded-full md:flex focus:outline-none"
    >
      <svg
        class="w-6 h-6 text-gray-100 chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>-->
  </div>
</template>
<script>
import InputSearch from '@/components/inputSearch.vue';
import RatingStar from '@/components/ratingStar.vue';
export default {
  components: {
    InputSearch,
    RatingStar
  },
  //props:['movies'],
  data() {
    return {
      movies: [],
      movieTitle: null,
      searchTerm: ""
    };
  },
  watch: {
    '$route.params.search': function(newVal){
      this.getMovieSearched(newVal);
    },
  },
  methods: {
    getMovieSearched(searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=9099d4a456925cc52c8aed25ab61ba4e&query=${searchTerm}`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.movies = data.results;
        });
    },  
    goToMoviePage(movie){
      this.$router.push({path:`/movie/${movie.id}`})
    },
      searchMovie() {
            this.gotoSearchPage();
    },
      gotoSearchPage() {
           this.$router.push({path: `/movie/search/${this.searchTerm}`});
        }
  },
  computed: {
    newMovies(){
      let data = [];

      this.movies.forEach(movie => {
        data.push({
          ...movie,
          release_date: new Date(movie.release_date).getFullYear(),
        });
      });
      return data;
    },
  },

  mounted() {
    console.log(this.$route);
    const movieSearch = this.$route.params.search;
    this.movieTitle = movieSearch;
    this.getMovieSearched(movieSearch);
  }
};
</script>