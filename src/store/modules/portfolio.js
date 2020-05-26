const state = {
    funds: 10000,
    cars: []
};

const mutations = {
    'BUY_CAR'(state, {carId, quantity, stockPrice}) {
        const record = state.cars.find(element => element.id == carId);
        if(record) {
            record.quantity += quantity;
        } else {
            state.cars.push({
                id: carId,
                quantity: quantity
            })
            console.log('done')
        }
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.cars = portfolio.carPortfolio ? portfolio.carPortfolio : []
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_CAR', order);
    }
};

const getters = {
    carPortfolio(state, getters) {
        return state.cars.map(car => {
            const record = getters.cars.find(element => element.id == car.id);
            return {
                id: car.id,
                quantity: car.quantity,
                brand: record.brand,
                price: record.price
            }
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}