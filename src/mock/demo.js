let demoList = {
    code: "000000",
    message: 'success',
    data: [{
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

export default {
    'get|http://localhost:40036/demo': demoList
}
