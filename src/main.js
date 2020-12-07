import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/css/tailwind.css';
import movieHeader from './components/navbar.vue';
import movieFinder from './components/movieFinder.vue';
import moviePoster from './components/moviePoster.vue';
import movieFooter from './components/movieFooter.vue';
import MovieInfo from './components/pages/moviePage.vue';
import movieDropDown from './components/pages/movieDropdown.vue';
import routes from "./routes.js";
import Toasted from 'vue-toastification';

 

//import routes from "./"

const app = createApp(App);
console.log(app);

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

app.use(router);
app.component('movie-finder', movieFinder);
app.component('movie-navbar', movieHeader);
app.component('movie-poster', moviePoster);
app.component('movie-foot', movieFooter);
app.component('movie-info', MovieInfo);
app.component('movie-dropdown', movieDropDown);
app.use(Toasted);
//app.component('movie-year', year);
app.mount('#app');
