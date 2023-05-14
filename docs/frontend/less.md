# less

## 1. 变量

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}

// 编译后
#header {
  width: 10px;
  height: 20px;
}
```

## 2. 混合

```less
.bordered {
  border-top: dotted 1px black;
}
a {
  color: #ccc;
  .bordered()
}

// 编译后
.bordered {
  border-top: dotted 1px black;
}
a {
  color: #ccc;
  border-top: dotted 1px black;
}
```

## 3. 嵌套

```less
#header {
  .logo {
    width: 300px;
  }
}

// 编译后
#header .logo {
  width: 300px;
}
```

## 4. 作用域

```less
@var: red;

#page {
  @var: white;
  
  #header {
    color: @var; 
  }
}

// 编译后, 单行注释不会编译到 css 中
#page #header {
  color: white;
}
```