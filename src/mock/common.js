const SUCCESS = {
    code: '000000',
    message: 'SUCCESS'
}

const ERROR = {
    code: 'JER_001',
    message: 'FAILED'
}

const BASE_URL = "http://localhost:40036"

/**
 * @returns 2021-03-dd
 */
function generateDate() {
    let dayRandom = ((Math.random() * 30) + 1).toFixed(0)
    let dateStr = "2021-03-"
    let timeValue = dateStr + dayRandom
    return timeValue
}

/**
 * @param {Number} num
 * @param {Number} times
 * @returns {Number} [0, times] * num
 */
function _numTimes(num, times) {
    num = +num
    times = +times
    let dayRandom = +(Math.random() * times).toFixed(0)
    let finalNum = dayRandom * num
    return finalNum
}

function times_3_15(){
    return _numTimes(15,3)
}
function times_3_18() {
    return _numTimes(18, 3)
}
function times_4_15(){
    return _numTimes(15, 4)
}
function times_4_30() {
    return _numTimes(4, 30)
}
function times_5_1(){
    return _numTimes(1, 5)
}


module.exports = {
    SUCCESS,
    ERROR,
    BASE_URL,
    generateDate,
    times_3_15,
    times_3_18,
    times_4_15,
    times_4_30,
    times_5_1
}
