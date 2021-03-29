
const state = {
    daily: {},
    fu_ji: {},
    fu_wo_cheng: {},
    xiong_tui: {},
    jer_exercise_items: []
}

const mutations = {
    DAILY: (state, dailyData) => {
        state.daily = dailyData
    },
    FU_JI: (state, fu_jiData) => {
        state.fu_ji = fu_jiData
    },
    FU_WO_CHENG: (state, fu_wo_chengData) => {
        state.fu_wo_cheng = fu_wo_chengData
    },
    XIONG_TUI: (state, xiong_tuiData) => {
        state.xiong_tui = xiong_tuiData
    },
    JER_EXERCISE_ITEMS: (state, jer_exercise_items) =>{
        state.jer_exercise_items = jer_exercise_items
    }
}

const actions = {
    dailyAction({ commit }, dailyData) {
        commit('DAILY', dailyData)
    },
    fu_jiAction({ commit }, fu_jiData) {
        commit('FU_JI', fu_jiData)
    },
    fu_wo_chengAction({ commit }, fu_wo_chengData) {
        commit('FU_WO_CHENG', fu_wo_chengData)
    },
    xiong_tuiAction({ commit }, xiong_tuiData) {
        commit('XIONG_TUI', xiong_tuiData)
    },
    jer_exercise_itemsAction({ commit }, jer_exercise_items){
        commit('JER_EXERCISE_ITEMS', jer_exercise_items)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
