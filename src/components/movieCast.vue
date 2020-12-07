<template>
  <div>
    <div class="flex flex-wrap mt-3">
      <div
        class="w-20 mb-6 mr-2 text-center md:mr-6"
        v-for="cast in casts"
        :key="cast.id"
      >
        <div class="relative w-16 h-16 mx-auto rounded-full bg-dark-300 " v-if="cast.profile_path">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + cast.profile_path"
            class="absolute object-cover w-full h-full rounded-full"
          />
        </div>
                <div class="relative w-16 h-16 mx-auto rounded-full bg-gray-300" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="absolute object-cover w-full h-full rounded-full text-gray-400 font-light py-4"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>


        <div class="mt-3 text-xs leading-tight text-center ">
          {{ cast.original_name }}
        </div>
      </div>
    </div>
    <div class="mt-6 text-dark-100"><span>Crew</span></div>
    <div class="flex flex-wrap mt-3">
      <template  v-for="crews in crew">
      <div
        class="w-20 mb-6 mr-2 text-center md:mr-6"
        :key="crews.id"
        v-if="crews.job == 'Director'"
      >
        <div
          class="relative w-16 h-16 mx-auto rounded-full bg-dark-300"
          v-if="crews.profile_path"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + crews.profile_path"
            class="absolute object-cover w-full h-full rounded-full"
          />
        </div>
        <div class="relative w-16 h-16 mx-auto rounded-full bg-gray-300" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="absolute object-cover w-full h-full rounded-full text-gray-400 font-light py-4 "
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="mt-3 text-xs leading-tight text-center ">
          {{ crews.original_name }}
        </div>
        <div class="mt-3 text-xs leading-tight text-center ">
          {{ crews.job }}
        </div>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movieId"],
  data() {
    return {
      casts: [],
      crew: []
    };
  },
  methods: {
    getCast() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=9099d4a456925cc52c8aed25ab61ba4e`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);

          this.casts = data.cast;
          this.crew = data.crew;
        });
    }
  },
  mounted() {
    this.getCast();
  }
};
</script>