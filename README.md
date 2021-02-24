## SCSS

### 基本语法

### 0. sass和scss
.sass和.scss 这两种的区别在于.sass文件对代码的排版有着非常严格的要求，而且没有大括号，没有分号。

### 1. 变量
>定义变量

`$变量名:变量值;`

```CSS
/*$var_name:var_value*/
$btn-pramary-color: #fff !default; 
/* !default 是指默认值*/
$btn-width: 45px;
$fontSize: 12px;
$baseLineHeight:1.5 !default;
```
>调用变量

`attr:$变量名;`

```CSS
$btn-primary-color: #fff !default;
$btn-primary-bg : $brand-primary !default;
$btn-primary-border: darken($btn-primary-bg, 5%) !default;
```

>全部变量和全局变量

`定义：`在`选择器、函数、混合宏`内部定义的变量是**局部变量**，反之在`选择器、函数、混合宏`外部定义的变量成为**全局变量**

```CSS
$color: orange !default;/*定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)*/
.block {
  color: $color;/*调用全局变量*/
}
em {
  $color: red;/*定义局部变量*/
  a {
    color: $color;/*调用局部变量*/
  }
}
```
`经验：`类比块级作用域理解局部变量和全局变量的作用域。在`选择器、函数、混合宏`内，局部变量会覆盖同名的全局变量。

### 2. 嵌套

>选择器嵌套

可以像DOM结构那样书写样式
```CSS
body {
  p {
    font-size: 16px;
  }
}
```

>属性嵌套

例如font-size:14px; 可以写成font:{size: 14px;}
```CSS
.box {
  font: {
    size: 16px;
    color: #ccc;
    style: normal;
    weight: bold;
  }
}
```

>伪类嵌套

```CSS
/*经典的清除浮动*/
.clearfix{
    &:before,
    &:after {
        content:"";
        display: table;
    }
    &:after {
        clear:both;
        overflow: hidden;
    }
}
```

>嵌套跳出


### 3. 混合宏

>声明混合宏

1. 可以声明`不带参`,`带参没有默认值`,`带有默认值参数`的混合宏
2. `带参混合宏`调用不传参数，报错
3. 声明多个参数的混合宏时，可以使用可选参数的声明方法 `@mixin aa($color...){}`

```CSS
@mixin bgc($color:#f5f5f5){
  background-color: $color;
}
```

>调用混合宏

```CSS
.picker{
  @include mixinName(params... );
}
.trangle{
  @include trangle(top,5px,#f5f5f5); 
}
```

### 4. 继承

继承可以复用一个选择器里的样式,但是也会额外定义的这个选择器包含的样式会打包进打包文件里去。
```CSS
.fl{
  float: left;
}
.demo{
  @extend .fl;
}
```
不适用占位符%的打包结果
```CSS
.fl{
  float: left;
}
.demo{
  float: left;
}
```

在使用了占位符%以后可以解决这个问题
```CSS
%clearfix {
  &:after,
  &:before {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0; 
  }
}

.container {
  width： 100px;
  height: 100px;
  @extend %clearfix; /*调用占位符声明的样式*/
}

```

使用占位符%的打包结果
```CSS
.container {
  width： 100px;
  height: 100px;
  &:after,
  &:before {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0; 
  }
}
```

### 5. 字符串插值#{$XXX}

这和es6的字符串模板插值${XXX}非常相似，主要有两个作用

- 字符串差值

- 避免运算

>字符串差值
```CSS
$imgDirPath: '../assets/images/';
.content{
  background:url(#{$imgDirPath}10010.jpg) left top no-repeat;
}
```

>避免运算


### 6. 运算符

运算符前后都要有空格。


### 7. 数据结构
  1. 数字 : 1、 2、 13、 10px;
  2. 字符串：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz;
  3. 颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5);
  4. 布尔型：如，true、 false;
  5. 空值：如，null;
  6. 值列表：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif
  

### 8. 函数
>语法
```CSS
@function fun($param) {

  /*some code*/

  @return  result;      
}
```

像素转成rem，以75为标准
```CSS
@function p2r($size) {
  @retunr  ($size / 75) * 1rem;
}
```

### 灵光一现
---
>scss引入别的文件

```CSS
@import '../styles/globa.scss';
```

>编码设置

```CSS
@charset "utf-8";
```

>
