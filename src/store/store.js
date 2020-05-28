import Vue from 'vue';
import Vuex from 'vuex';

import cars from './modules/cars';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cars,
        portfolio
    }
})