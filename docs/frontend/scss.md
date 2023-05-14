# scss

## 1. 变量和作用域

### 1.1 变量

```scss
$myColor: red;

body {
  color: $myColor;
}

// 编译后
body {
  color: red;
}
```

### 1.2 作用域

```scss
$myColor: red;

h1 {
  $myColor: green;   // 只在 h1 里头有用, 局部作用域
  color: $myColor;
}

p {
  color: $myColor;
}

/* 编译后, 双引号注释会被编译到 css 文件中 */
h1 {
  color: green;
}

p {
  color: red;
}
```

## 2. 嵌套规则与属性

### 2.1 嵌套规则

```scss
ul {
  li {
    list-style: none; 
  }
}

// 编译后
ul li {
  list-style: none;
}
```

### 2.2 嵌套属性

```scss
div {
  font: {
    family: Helvetica, sans-serif;
    size: 18px;
    weight: bold;
  }
}

// 编译后
div {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
}
```

## 3. 混合指令

### 3.1 定义混合指令

```scss
// 定义混合指令
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}

.danger {
  // 引用混合样式
  @include important-text;
  background-color: green;
}

// 编译后
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```

### 3.2 参数

```scss
@mixin bordered($color, $width: 1px) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue);
}

// 编译后
.myArticle {
  border: 1px solid blue;
}
```

## 4. 继承

```scss
.button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}

// 编译后
.button-basic, .button-report {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  background-color: red;
}
```

## 5. 父选择器

```scss
a {
  &:hover {
    text-decoration: underline;
  }
}

// 编译后
a:hover {
  text-decoration: underline;
}
```

## 6. 插值语句 `#{}`

通过 `#{}` 插值语句可以在选择器或属性名中使用变量

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}

// 编译后
p.foo {
  border-color: blue;
}
```
