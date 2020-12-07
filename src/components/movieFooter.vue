<template>
    <footer class="w-full pt-10 pb-20 bg-gray-800 border-t shadow-md border-dark-300 mt-20 ">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto md:flex-no-wrap">
                <div class="w-full text-center md:text-left md:w-1/3" @click="goToHome()">
                    <a href="#" class="inline-block ml-auto">
                        <img class="h-24 " src="@/assets/images/logo-white.png" alt="MovieFinder logo">
                    </a>
                </div>
                <div class="w-full mt-8 text-center md:text-right md:mt-0 md:w-1/3">
                    <p class="text-gray-100 pr-10">Developed by Raymond Ativie</p>
                    <p class="text-gray-100 pr-10">For LoveToKnowMedia</p>
                    <p class="text-sm text-gray-100 pr-10">Aug 2020</p>
                </div>
            </div>
            <div class="mt-10 text-xs text-center text-gray-100 md:text-right ">
                <p class="text-xs  justify-items-end pr-10">The Movie Database API</p>
                <div class="text-center pr-10 md:text-right">
                    <a href="https://www.themoviedb.org/" target="_blank" class="inline-block text-center md:text-right">
                        <img class="h-10 mt-1" src="@/assets/images/api-logo.svg" alt="API logo">
                    </a>
                </div>
            </div>


        </footer>

</template>
<script>
export default {
    data(){

    },
    methods:{
         goToHome(){
     this.$router.push({path: `/`});
   }
    }
}
</script>