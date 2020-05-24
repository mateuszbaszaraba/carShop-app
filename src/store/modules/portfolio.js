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
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_CAR', order);
    }
};

const getters = {
    
}

export default {
    state,
    mutations,
    actions
}