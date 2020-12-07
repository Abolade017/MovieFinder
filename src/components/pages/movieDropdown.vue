<template>
  <div class=" bg-gray-300  overflow-y-scroll h-80 w-full">
    <div class="flex flex-col" >
      <div class="justify-between items-center">
        <div 
          class="flex justify-between items-center px-6 py-6 hover:bg-white border-b cursor-pointer"
          v-for="movie in movies"
          :key="movie.id" @click="goToMoviePage(movie)"
        >
          <div class="flex items-center space-x-3">
            <div class="h-16 w-10 border">
              <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="" class="w-full h-full object-center object-cover rounded-sm"/>
            </div>
            <div class="px-2 font-bold text-lg">
              <div>{{movie.title}}</div>
              <div class=" items-center">
               <RatingStar  :rate="movie.vote_average"/>
              </div>
            </div>
          </div>
          <div >{{getMovieDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStar from "@/components/ratingStar.vue";
export default {
  props:['searchTerm'],
  components: {
     RatingStar
  },
  data() {
    return {
      movies: [],
      movieTitle: null,
    };
  },
  watch: {
    searchTerm(val){
      this.getMovieSearched(val);
    }
  },
  computed: {
getMovieDate(movie){
    let movieYear= new Date();
    return movieYear.getFullYear(movie.release_date);
  }
  },
  methods:{
    goToMoviePage(movie){
      this.$router.push({path:`/movie/${movie.id}`})
    },
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
  
  },

  //methods: {
   // getInputMovie(event) {
     // this.enteredValue = event.target.value;
      //fetch(
       // `https://api.themoviedb.org/3/search/movie/?api_key=9099d4a456925cc52c8aed25ab61ba4e&query=${this.enteredValue}`
      //)
      //.then(res=>res.json())
      //.then(data =>{
        //console.log(data);
        //this.movies=data.results;
      //})
    //},
    //getMovie() {
      //
    //}
  //}
  // methods: {
  //   getMovieTyped(searchTerm) {
  //     fetch(
  //       `https://api.themoviedb.org/3/search/movie/?api_key=9099d4a456925cc52c8aed25ab61ba4e&query=${searchTerm}`
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         this.movies = data.results;
  //       });
  //   }
  // },
  // mounted(){
  //   this.getMovieTyped();
  // }
};
</script>