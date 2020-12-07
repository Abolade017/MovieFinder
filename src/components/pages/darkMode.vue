<template>
<div class="bg-dark-500">
    <movie-navbar></movie-navbar>
    <movie-foot></movie-foot>
    <movie-poster></movie-poster>
</div>
</template>

<script>
import movieHeader from './components/navbar.vue';
import movieFooter from './components/movieFooter.vue';
import moviePoster from './components/moviePoster.vue';

export default {
    components: {
        'movie-navbar' : movieHeader,
        'movie-foot': movieFooter,
        'movie-poster': moviePoster
    },
    mounted(){
        console.log(this.$route);
    }
}
</script>