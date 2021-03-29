import Mock from 'mockjs'
var Random = Mock.Random;
let { SUCCESS, generateDate } = require('./common')

let dailyList = {
    ...SUCCESS,
    url: 'jer_exercise/daily',
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

let jer_exercise_items = {
    ...SUCCESS,
    url: 'jer_exercise_items',
    data: 
        [
            {
                id: 0,
                "name": "daily",
                method:"get",
                "url": "jer_exercise/daily"
            },
            {
                id: 1,
                "name": "fu_ji",
                method:"get",
                "url": "jer_exercise/fu_ji"
            },
            {
                id: 2,
                "name": "fu_wo_cheng",
                method:"get",
                "url": "jer_exercise/fu_wo_cheng"
            },
            {
                id: 3,
                "name": "xiong_tui",
                method:"get",
                "url": "jer_exercise/xiong_tui"
            }
        ]
        
}

export default {
    'get|http://localhost:40036/jer_exercise/daily': dailyList,
    'get|http://localhost:40036/jer_exercise_items': jer_exercise_items
}