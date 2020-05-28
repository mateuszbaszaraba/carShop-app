const state = {
    funds: 10000,
    cars: []
};

const mutations = {
    'BUY_CAR'(state, {carId, quantity, carPrice}) {
        const record = state.cars.find(element => element.id == carId);
        if(record) {
            record.quantity += quantity;
        } else {
            state.cars.push({
                id: carId,
                quantity: quantity
            })
        }
        state.funds -= carPrice * quantity
    },
    'SELL_CAR'(state, {carId, quantity, carPrice}) {
        const record = state.cars.find(element => element.id == carId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.cars.splice(state.cars.indexOf(record), 1);
        }
        state.funds += carPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.cars = portfolio.carPortfolio ? portfolio.carPortfolio : []
    }
};

const actions = {
    buyCar: ({commit}, order) => {
        commit('BUY_CAR', order);
    },
    sellCar: ({commit}, order) => {
        commit('SELL_CAR', order)
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
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}