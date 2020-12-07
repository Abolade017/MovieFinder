<!-- -->
<template>
  <div class="w-1/2 px-1 mb-10 md:w-1/4 md:px-3" @click="gotoMovie(movie)">
    <div class="cursor-pointer focus:scale-105 focus:outline-none">
      <div
        class="relative w-full transition-transform duration-300 transform rounded-md bg-dark-200 focus:scale-105 hover:scale-105"
        style="height:300px;"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt=""
          class="bottom-0 object-cover w-full h-full rounded-sm shadow-md"
        />
        <div
          class="absolute inline-flex items-center justify-center px-2 text-xs font-medium text-gray-200 rounded-md  bg-gray-500"
          style="bottom: 10px; right: 10px;"
        >
        {{movieYear}}
        </div>
      </div>
    </div>
    <div class="flex-1 text-base font-medium text-left  md:text-lg mt-4">
      <div>{{ movie.original_title }}</div>
    </div>
    <div class="flex items-center">
      <rate-star :rate="movie.vote_average"></rate-star>
    </div>
  </div>
</template>

<script>
import star from '@/components/ratingStar.vue';
export default {
  props: ["movie"],
  components: {
    'rate-star': star
  },
  data(){
    return {
      selectedComponent: 'movie-info'
    }
  },
  methods: {
    gotoMovie(movie) {
      this.$router.push({path: `/movie/${movie.id}`});
    }
  },
 // mounted(){
   // this.movieYear;
  //},
  method:{
  },
     computed: {
     movieYear(){
    let year = new Date();
       return year.getFullYear(this.movie.release_date);
       
     }
     
}
};

</script>