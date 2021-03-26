let { SUCCESS, generateDate, times_3_15 } = require('./common')

let fuWoChengData = {
    ...SUCCESS,
    url: 'fu_wo_cheng',
    "data|20": [
        {
            "id|+1": 0,
            date: generateDate,
            hald_body: times_3_15,
            daimond: times_3_15,
            common: times_3_15
        }
    ]
}


export default {
    'get|http://localhost:40036/fu_wo_cheng': fuWoChengData
}