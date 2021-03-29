let { SUCCESS, generateDate } = require('./common')

let xiongTuiData = {
    ...SUCCESS,
    url: 'jer_exercise/xiong_tui',
    "data|30": [
        {
            "id|+1": 0,
            date: generateDate,
            'kg_10|1': [20,30,40,50,60],
            'kg_15|1': [20,30,40,50,60],
            'kg_20|1': [20,30,40,50,60],
            'kg_25|1': [20,30,40,50,60],
            'kg_30|1': [20,30,40,50,60],
            'kg_35|1': [20,30,40,50,60],
            'kg_40|1': [20,30,40,50,60],
            'kg_45|1': [20,30,40,50,60],
            'kg_50|1': [20,30,40,50,60],
            'kg_55|1': [20,30,40,50,60],
            'kg_60|1': [20,30,40,50,60]
        }
    ]
}


export default {
    'get|http://localhost:40036/jer_exercise/xiong_tui': xiongTuiData
}