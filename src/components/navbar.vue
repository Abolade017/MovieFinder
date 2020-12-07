<template>
  <div class="flex flex-col justify-between root light-gray">
    <nav class="fixed z-50 w-full py-3 shadow-md light-gray  dark:bg-gray-900 bg-white">
      <div
        class="flex items-center justify-between max-w-screen-lg px-4 mx-auto"
      >
        <a @click="goToHome()">
          <img
            class="h-20 w-auto flex-shrink-0 cursor-pointer"
            src="@/assets/images/logo-white.png"
            alt="MovieFinder Logo"
          />
        </a>
        <div class>
          <button
            class=" flex flex-col items-center px-2  focus:outline-none dark:text-white"
            @click="darkMode()"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span class="text-sm">Dark Mode</span>
          </button>
        </div>
        <!--<router-link :to="{ path: '/movie/76' }">to movies</router-link>-->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //  this.goToHome();
  },
  methods: {
    goToHome() {
      this.$router.push({ path: `/` });
    },
    darkMode() {
      document.body.classList.toggle('dark');
    }
  }
};
</script>