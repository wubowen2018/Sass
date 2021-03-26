import Mock from 'mockjs'
var Random = Mock.Random;
let {  SUCCESS } = require('./common')

function generateDate(){
    let dayRandom = (Math.random() * 30).toFixed(0)
    let dateStr = "2021-03-"
    let timeValue = dateStr + dayRandom
    return timeValue
}

let dailyList = {
    ...SUCCESS,
    "data|30": [
    {   
        date: generateDate,
        "id|+1":0,
        run:{
            "miles|3-10": 3,
            "timeAverage|4-6.2": 4,
        },
        "shen_dun|1": [30, 60, 90],
        "bobi_jump|1": [20, 30, 40, 50, 60],
        "emotion": Random.csentence()
    }]
}

let fuJiData = {
    ...SUCCESS,
    "data|30": [
        {
            "id|+1": 0,
            date: generateDate,
            run: {
                "miles|3-10": 3,
                "timeAverage|4-6.2": 4,
            },
            "juanFu|1": [30, 60, 90],
            "bobi_jump|1": [20, 30, 40, 50, 60],
            "emotion": Random.csentence()
        }]
}

export default {
    'get|http://localhost:40036/daily': dailyList,
    'get|http://localhost:40036/fu_ji': fuJiData
}