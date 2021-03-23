
const state = {
    daily: {},
    fu_ji: {},
    fu_wo_cheng: {},
    xiong_tui: {}
}

const mutations = {
    DAILY_EXERCISE: (state, dailyData) => {
        state.daily = dailyData
    },
    FU_JI_EXERCISE: (state, fu_jiData) => {
        state.fu_ji = fu_jiData
    },
    FU_WO_CHENG_EXERCISE: (state, fu_wo_chengData) => {
        state.fu_wo_cheng = fu_wo_chengData
    },
    XIONGTUI_EXERCISE: (state, xiong_tuiData) => {
        state.xiong_tui = xiong_tuiData
    }
}

const actions = {
    dailyAction({ commit }) {
        commit('DAILY_EXERCISE')
    },
    fu_jiAction({ commit }) {
        commit('FU_JI_EXERCISE')
    },
    fu_wo_chengAction({ commit }) {
        commit('FU_WO_CHENG_EXERCISE')
    },
    xiong_tuiAction({ commit }) {
        commit('XIONGTUI_EXERCISE')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
