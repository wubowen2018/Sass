//默认标题
//let defaultTitle = this.$route.name || "J.E.R" 

//是否使用Mock数据
let whetherUseMock = true
const PORT = "40036"
let requestConfig = {
    baseURL: `http://localhost:${PORT}`,
    timeout: 500
}


module.exports = {
    //defaultTitle,
    whetherUseMock,
    requestConfig
}

