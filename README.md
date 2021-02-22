## SCSS

### 基本语法

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
`经验：`类比块级作用域理解局部变量和全局变量的作用域

### 2. 嵌套

>选择器嵌套

>属性嵌套

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

### 3. 混合宏



