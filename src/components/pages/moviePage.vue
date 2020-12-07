<template>
  <div class="light-gray" v-if="movie">
    <!-- <main>Info component - {{ movieID }}</main>-->
    <main>
      <div class="absolute  w-full overflow-hidden  md:relative block bg-white">
        <img
          class="hidden object-cover  w-full md:block h-full"
          style="height: 500px;"
          :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
          alt="money plane movie"
        />
        <img
          class="object-cover  block mx-auto w-full md:hidden "
          style="height: 200px;"
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="money plane movie"
        />
        <div
          class="absolute inset-0 items-center justify-center hidden w-full h-full md:flex"
          style="height:500px;"
        >
          <div
            class="flex items-center justify-center h-20 w-20 rounded-full bg-red-600"
          >
            <svg
              class="h-8 w-8 items-center justify-center" @click="playMovie()"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 14.2679C28.3333 15.0377 28.3333 16.9623 27 17.7321L3 31.5885C1.66667 32.3583 -1.54721e-06 31.396 -1.47991e-06 29.8564L-2.68545e-07 2.14359C-2.01247e-07 0.603992 1.66667 -0.35826 3 0.411541L27 14.2679Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="relative flex flex-col items-center flex-1 w-full max-w-screen-lg mx-auto"
      >
        <div class="flex flex-col items-center justify-between w-full px-4 ">
          <div
            class="flex flex-wrap items-start sm:top-auto md:mx-10 md:flex-no-wrap"
          >
            <div class=" flex-shrink-0 w-full px-10  md:w-1/3 pt-10">
              <img
                :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                class="items-center justify-center rounded-sm md:-mt-48 sm:pt-10"
              />
            </div>
            <div class=" pt-8 md:px-0 md:w-2/3 pl-0">
              <h1 class="text-2xl leading-none  md:text-3xl dark:text-white">
                {{ movie.original_title }}
              </h1>
              <div class="flex mt-3">
                <div class="flex items-center">
                  <rate-star :rate="movie.vote_average"></rate-star>
                </div>
                <div class="mx-4">•</div>
                <div>2020</div>
              </div>
              <p class="mt-3 text-dark-100 s">{{ movie.overview }}</p>
             <div class="mt-6 text-dark-100">Casts</div>

             <movie-cast :movieId="movie.id"></movie-cast>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
import star from '@/components/ratingStar.vue';
import cast from '@/components/movieCast.vue';

export default {
  components: {
'rate-star': star,
'movie-cast': cast
  },
  data() {
    return {
      movie: null,
      movieID: null
    };
  },
  methods: {
    getMovie() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.movieID}?api_key=9099d4a456925cc52c8aed25ab61ba4e`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);

          this.movie = data;
        });
    },
   playMovie(){
     //this.$toasted.info("Sorry!, it's really just an image 😅");
     alert("Sorry!, it's really just an image 😅");
   }
  },
  mounted() {
    console.log(this.$route);
    const movieId = this.$route.params.id;

    this.movieID = movieId;

    this.getMovie();
  }
};
</script>