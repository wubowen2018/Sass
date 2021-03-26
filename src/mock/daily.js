import Mock from 'mockjs'
var Random = Mock.Random;
let { SUCCESS, generateDate } = require('./common')

let dailyList = {
    ...SUCCESS,
    url: 'daily',
    "data|3": [
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

export default {
    'get|http://localhost:40036/daily': dailyList
}