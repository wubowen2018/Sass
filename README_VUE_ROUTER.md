# vue-router

>vue先天对路由支持不足，官方补充了vue-router插件。在SPA(single page application单页应用)中，不再跳页，而是通过路由设定路径，并且将路径和组件映射起来。通俗一点讲，路由就是路径管理器。

使用`vue-router`必须明确地使用`Vue.use()`进行安装。下面是一个vue-cli初始化项目的router核心文件`src/router/index.js`:

```js
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }，{
      path:'/hi',
      component:Hi,
      children:[        //子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    }
  ]
})
```

