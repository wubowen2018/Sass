# CommonJS和AMD

## 1．CommonJS

>CommonJS将每个文件都看作一个模块，模块内部定义的变量都是私有的，无法被其他模块使用，除非使用预定义的方法将内部的变量暴露出来（通过exports和require关键字来实现），CommonJS最为出名的实现就是Node.js。

CommonJS一个显著的特点就是模块的加载是`同步`的，就目前来说，受限于宽带速度，并不适用于浏览器中的JavaScript。



## 2．AMD

>AMD是`Asynchronous Module Definition`的缩写，意思就是“异步模块定义”。它采用`异步`方式加载模块，模块的加载不影响它后面语句的运行。依赖这个模块的代码定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。目前在前端流行的RequireJS就是AMD规范的一种实现。
