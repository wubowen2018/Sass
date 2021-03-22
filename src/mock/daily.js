

let dailyList = {
    code: "000000",
    message: 'success',
    data: 
    {
        run:{
            miles: "3",
            'isReal|2-8':false,
            "timeAverage|4-5.2": 4

        },
        list:[{
            id: 1,
            name: 'zs',
            age: '23',
            job: '前端工程师'
        }, {
            id: 2,
            name: 'ww',
            age: '24',
            job: '后端工程师'
        }]
    }
}

export default {
    'get|http://localhost:40036/daily': dailyList
}