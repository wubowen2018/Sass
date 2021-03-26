import { sortArrOrArrLikeObj } from './tools'

const getters = {
    daily: state => {
        let dailyArr = state.jer_exercise.daily
        return sortArrOrArrLikeObj(dailyArr,"date","date")
    },
    fu_ji: state => state.jer_exercise.fu_ji,
    fu_wo_cheng: state => state.jer_exercise.fu_wo_cheng,
    xiong_tui: state => state.jer_exercise.xiong_tui,
}
export default getters