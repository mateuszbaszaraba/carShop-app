import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import CarGrid from './components/cars/CarGrid.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio},
    { path: '/cars', component: CarGrid}
]