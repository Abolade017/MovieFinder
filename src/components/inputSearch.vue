<template>
  <div class=" pt-24 px-32 w-full">
    <div class="relative">
      <form
        @submit.prevent="searchMovie"
        class=" text-center flex items-center w-full justify-between border-b-2 border-gray-500"
        autocomplete="off"
      >
        <input
          v-model="searchTerm"
          class="w-full py-3 text-xl leading-none  bg-transparent md:text-4xl focus:outline-none placeholder-dark-200"
          type="search"
          placeholder="Search by title..."
          id="inputValue"
          name="search"
          @focus="isShow = true"
        />
        <button type="submit" name="search" id="button">
          <svg
            class="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <movie-dropdown
        v-show="isShow"
        :searchTerm="searchTerm"
        class="absolute z-20"
      />
      <div
        @click="isShow = false"
        v-show="isShow"
        class="fixed w-screen h-screen  z-10  inset-0"
      ></div>
    </div>
  </div>
</template>

<script>
import MovieDropDown from "@/components/pages/movieDropdown.vue";
export default {
  components: {
    "movie-dropdown": MovieDropDown
  },
  data() {
    return {
      movies: [],
      searchTerm: "",
      isShow: false
    };
  },
  computed: {
    showDropdown() {
      if (this.searchTerm.length > 0) {
        return true;
      }

      return false;
    }
  },
  methods: {
    goToMoviePage(movie) {
      this.$router.push({ path: `/movie/${movie.id}` });
    },
    searchMovie() {
      this.gotoSearchPage();
    },
    gotoSearchPage() {
      this.$router.push({ path: `/movie/search/${this.searchTerm}` });
    }
  },

  mounted() {
    console.log(this.$route);
  }
  // methods: {
  //     searchMovie() {
  //         this.gotoSearchPage();
  //     },
  //     gotoSearchPage() {
  //         this.$router.push({path: `/movie/search/${this.searchTerm}`});
  //     }
  // }
};
</script>