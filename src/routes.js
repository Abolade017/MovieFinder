import HomePage from './components/pages/HomePage.vue';
import MoviePage from './components/pages/moviePage.vue';
import MovieSearch from './components/pages/movieSearch.vue';
import MovieDropDown from './components/pages/movieDropdown.vue';
// import DarkMode from './components/pages/darkMode.vue';

const routes = [
    { path: '/', component: HomePage},
    { path: '/movie/:id', component: MoviePage},
    {path: '/movie/search/:search', component: MovieSearch},
    {path:'/movie/search/:input', component:MovieDropDown}
    // { path: '/HomePage', component: DarkMode }
    // { path: '', component: }
];

export default routes;