import cars from '../../data/cars';

const state = {
    cars: []
};

const mutations = {
    'SET_CARS' (state, cars) {
        state.cars = cars;
    }
};

const actions = {
    initCars: ({commit}) => {
        commit('SET_CARS', cars)
    }
};

const getters = {
    cars: state => {
        return state.cars;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}