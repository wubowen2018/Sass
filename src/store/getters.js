
const getters = {
    daily: state => {
        let dailyArr = state.jer_exercise.daily
        dailyArr = Array.from(dailyArr);
        let dailyArrnew = dailyArr.sort(
            function(item1, item2){
                let num1 = +(item1.date.replace(/-/g, ''))
                let num2 = +(item2.date.replace(/-/g, ''))
                return num1 - num2
            }
        )
        return dailyArrnew
    },
    fu_ji: state => state.jer_exercise.fu_ji,
    fu_wo_cheng: state => state.jer_exercise.fu_wo_cheng,
    xiong_tui: state => state.jer_exercise.xiong_tui,
}
export default getters