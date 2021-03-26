let { SUCCESS, generateDate, times_4_15, times_4_30,times_3_18, times_5_1} = require('./common')

let fuJiData = {
    ...SUCCESS,
    url: 'fu_ji',
    "data|10": [
        {
            "id|+1": 0,
            date: generateDate,
            juan_fu: times_4_15,
            yang_wo_tai_tui: times_3_18,
            ping_ban_cheng: times_5_1,
            yang_wo_mo_huai: times_4_30
        }
    ]
}

export default {
    'get|http://localhost:40036/fu_ji': fuJiData
}