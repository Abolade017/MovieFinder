<template>
  <main
    class="flex flex-col items-center flex-1 w-full relative max-w-screen-lg mx-auto"
  >
    <div class="self-stretch px-4 pt-40  text-center md:mt-24 md:px-20">
      <h1 class="text-center text-4xl font-medium dark:text-gray-50">
        MovieFinder
      </h1>
      <p class="text-center text-gray-700 dark:text-gray-100">
        Want to find out about a movie? We've got you!
      </p>
    </div>
   <input-search class="relative"></input-search>
    <div class="mt-48 mb-4">
      <h2 class=" ml-2 text-xl text-left md:text-4xl md:text-center dark:text-white">
        New Releases
      </h2>
    </div>
  </main>
</template>

<script>
import inputSearch from "./inputSearch.vue";
export default {
  components: {
    "input-search": inputSearch
  },
  data() {
    return {
     
    };
  },
 
};
</script>