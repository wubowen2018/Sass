
const state = {
    daily: {},
    fu_ji: {},
    fu_wo_cheng: {},
    xiong_tui: {},
    jer_exercise_items: []
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
    },
    JER_EXERCISE_ITEMS: (state, jer_exercise_items) =>{
        state.jer_exercise_items = jer_exercise_items
    }
}

const actions = {
    dailyAction({ commit }, dailyData) {
        commit('DAILY_EXERCISE', dailyData)
    },
    fu_jiAction({ commit }, fu_jiData) {
        commit('FU_JI_EXERCISE', fu_jiData)
    },
    fu_wo_chengAction({ commit }, fu_wo_chengData) {
        commit('FU_WO_CHENG_EXERCISE', fu_wo_chengData)
    },
    xiong_tuiAction({ commit }, xiong_tuiData) {
        commit('XIONGTUI_EXERCISE', xiong_tuiData)
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
