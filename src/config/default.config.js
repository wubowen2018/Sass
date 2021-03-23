/**
 * 关于项目的一些默认配置
 */

// 是否使用Mock数据
let whetherUseMock = true

/**
 * axios baseURL 和 超时
 */
const PORT = "40036"
let requestConfig = {
    baseURL: `http://localhost:${PORT}`,
    timeout: 500
}

module.exports = {
    whetherUseMock,
    requestConfig
}

