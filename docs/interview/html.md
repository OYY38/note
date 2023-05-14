# html

## 1. HTML 文件中的 DOCTYPE 是什么作用?

DOCTYPE 即 Document Type(网页文件的文档类型标准), 主要作用是告诉浏览器的解析器要使用哪种 HTML 规范 或 XHTML 规范来解析页面

## 2. 前缀为 data- 开头的元素属性是什么?

data- 是 HTML5 中新增的自定义属性, 可以在该属性上存储数据, 以便 JS 脚本进行访问

```html
<div id="myDiv" data-name="test" data-age="18"></div>
<script>
  var div = document.getElementById('myDiv')
  console.log(div.dataset.name) // test
  console.log(div.dataset.age) // 18
</script>
```

## 3. 谈谈你对 HTML 语义化的理解?

有利于 `SEO`, 可阅读性更好(main、header、footer、nav、aside、section)

## 4. meta 标签有哪些常用用法?

- 设置网页关键词(SEO)

```html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

- 设置网页视口(viewport)控制视口的大小、缩放和比例等(移动端开发)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
```

- 设置 http 响应头: Content-Type 网页内容类型(字符集)

```html 
<meta charset="UTF-8">
```

## 5. 在 script 标签中 async 和 defer 的区别是什么?

- async: 异步加载, 下载完后立即执行, 但是不保证执行顺序
- defer: 异步加载, 下载完后等待 DOM 解析完成后再执行, 保证执行顺序

## 6. 介绍一下你对浏览器内核的理解?

浏览器内核主要分为两部分: 渲染引擎和 JS 引擎

- 渲染引擎: 负责取得网页的内容(html、xml、图像等), 解析和渲染(绘制)页面内容
- JS 引擎: 解析和执行 JS 代码
- 常见的浏览器内核: Trident(IE)、Gecko(Firefox)、Blink(Chrome、Opera)、Webkit(Safari)

## 7. iframe 的作用?

`Iframe` 是用来在网页中插入第三方页面，早期的页面使用 `iframe` 主要是用于导航栏
这种很多页面都相同的部分，这样可以在切换页面的时候避免重复下载

**优点**

- 便于修改，模块分离

**缺点**

- `iframe` 标签会阻塞页面的加载，如果页面的 `onload` 事件不能及时触发
- `iframe` 对于 SEO 不友好