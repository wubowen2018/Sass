const state = {
    count: 1
}

const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state, n) {
        state.count -= n;
    }
}

const getters = {
    count: state => {
        switch (state.count) {
            case 1:
                return "一";
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 5:
                return "五";
            default:
                return state.count
        }
    }
}

const actions = {
    addAction(context) {
        context.commit('add', 1)
    },
    reduceAction({ commit }) {
        commit('reduce', 1)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}