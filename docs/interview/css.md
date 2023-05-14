# css

## 1. CSS 选择器的优先级是怎么样的?

权重计算规则如下：

- 通配符 `*`：0000
- 标签选择器: 0001
- 类选择器: 0010
- id 选择器: 0100
- 内联样式: 1000
- !important: 无穷大

权重相同时, 后面的样式会覆盖前面的样式. 优先级顺序: 内联样式 > id 选择器 > 类选择器 > 标签选择器

## 2. 隐藏元素的方法有哪些?

- `display: none;` 不占据空间, 不能进行交互
- `visibility: hidden;` 占据空间, 不可以进行交互
- `opacity: 0;` 占据空间, 可以进行交互
- `position: absolute; left: -9999px;`, 占据空间, 可以进行交互

## 3. px, em, rem, vh, vw 的区别?

- px: 像素, 绝对单位, 无法调整
- em: 相对单位, 相对于父元素的 font-size
- rem: 相对单位, 相对于根元素(html)的 font-size
- vw: 根据窗口的宽度, 分成 100 等份, 100vw 就表示满宽, 50vw 就表示一半宽
- vh: 根据窗口的高度

rem 布局的原理:

- 使用 rem 为单位
- 动态的设置 html font-size(js 设置)

## 4. 元素水平垂直居中的方法有哪些?

- 利用定位 + margin: auto

```html
<div class="parent">
  <div class="child">Demo</div>
</div>

<style>
  .parent {
    position: relative;
    width: 300px;
    height: 300px;
    background: #ccc;
  }
  .child {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: #f00;
    margin: auto;
  }
</style>
```

- 利用定位 + margin: 赋值, 需要知道元素的宽高

```html
<div class="parent">
  <div class="child">Demo</div>
</div>

<style>
  .parent {
    position: relative;
    width: 300px;
    height: 300px;
    background: #ccc;
  }
  .child {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    background: #f00;
    margin-left: -50px;
    margin-top: -50px;
  }
</style>
```

- 利用定位 + transform: 不需要知道元素的宽高

```html
<div class="parent">
  <div class="child">Demo</div>
</div>

<style>
  .parent {
    position: relative;
    width: 300px;
    height: 300px;
    background: #ccc;
  }
  .child {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    background: #f00;
    transform: translate(-50%, -50%);
  }
</style>
```

- flex + justify-content + align-items

```html
<div class="parent">
  <div class="child">Demo</div>
</div>

<style>
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background: #ccc;
  }
  .child {
    width: 100px;
    height: 100px;
    background: #f00;
  }
</style>
```

## 5. CSS 有哪些定位方式?

- static: 默认值, 元素在文档流中的位置
- relative: 相对定位, 相对于自身的位置
- absolute: 绝对定位, 相对于最近的非 static 定位的父元素
- fixed: 固定定位, 相对于浏览器窗口
- sticky: 粘性定位, 相对于最近的滚动祖先元素和 viewport

## 6. 如何理解 z-index?

- z-index 只能在定位元素上生效
- 如果父元素有定位, 且有 z-index, 优先按父元素进行比较

```html
<style>
  .parent {
    position: relative;
    width: 100px;
    height: 100px;
    z-index: 1;
    background: #ccc;
  }
  .child {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 3;
    background: pink;
  }
  .dv {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    z-index: 2;
    background: #000;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
<div class="dv"></div>
```

## 7. 清除浮动的方法有哪些?

- 使用伪元素清除浮动

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

- 使用双伪元素清除浮动

```css
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
```

## 8. BFC 是什么?

BFC: 块级格式化上下文, 是一个独立的渲染区域, 内部元素的布局不会影响到外部元素

BFC 的特性:

- 内部的 Box 会在垂直方向上一个接一个的放置
- Box 垂直方向的距离由 margin 决定, 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- 每个元素的 margin box 的左边, 与包含块 border box 的左边相接触(对于从左往右的格式化, 否则相反), 即使存在浮动也是如此
- BFC 的区域不会与 float box 重叠
- BFC 是页面上一个隔离的独立容器, 外面的元素不会影响里面的元素, 里面的元素也不会影响外面的元素
- 计算 BFC 的高度时, 浮动元素也参与计算

BFC 的触发条件:

- HTML 根元素
- float 不为 none
- position 为 absolute 或 fixed
- display 为 inline-block, table-cell, table-caption, flex, inline-flex
- overflow 不为 visible

BFC 的应用:

- 阻止 margin 重叠
- 清除浮动
- 阻止元素被浮动元素覆盖

## 9. CSS Sprites 是什么?

CSS Sprites: 通过合并图片减少 HTTP 请求, 通过 background-position 来显示不同的图片

## 10. 你对媒体查询的理解是什么?

媒体查询: 通过媒体类型或媒体特性来限制样式表的范围, 从而为不同的媒体类型定义不同的样式

```css
@media screen and (max-width: 600px) {
  body {
    background-color: red;
  }
}

@media screen and (min-width: 600px) and (max-width: 900px) {
  body {
    background-color: green;
  }
}

@media screen and (min-width: 900px) {
  body {
    background-color: blue;
  }
}
```

## 11. 你对盒模型的理解是什么?

盒模型: 用于描述元素占据的空间, 由 content, padding, border, margin 组成

- 标准盒模型: width = content, 通过 box-sizing: content-box 来设置, 这是默认值
- IE 盒模型(怪异盒子模型): width = content + padding + border, 通过 box-sizing: border-box 来设置

## 12. 说说伪类和伪元素的区别?

- 伪类: 用于当已有元素处于某种状态时, 为其添加对应的样式, 如:hover, :active
- 伪元素: 用于创建一些不在文档树中的元素, 如::before, ::after

## 13. 谈谈你对 flex 的理解?

Flexible Box 简称 flex, 意为 "弹性布局", 可以简便、完整、响应式地实现各种页面布局

- 容器属性
  - flex-direction, 决定主轴的方向
  - flex-wrap, 容器内项目是否可换行
  - justify-content, 定义了项目在主轴上的对齐方式
  - align-items, 定义项目在交叉轴上如何对齐
- 容器成员属性
  - flex: flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写, 默认值为 0 1 auto

## 14. 说说逻辑像素、物理像素、dpr 之间的区别?

- 逻辑像素: CSS 像素, 也叫设备独立像素, 与设备无关, 用于浏览器渲染
- 物理像素: 设备像素, 与设备相关, 用于设备显示
- dpr: 设备像素比, 物理像素与逻辑像素的比值

## 15. 怎么理解回流和重绘?

- 回流: 布局引擎会根据各种样式计算每个盒子在页面上的大小与位置
- 重绘: 当计算好盒模型的位置、大小及其他属性后, 浏览器根据每个盒子特性进行绘制

## 16. 如何实现当行/多行文本溢出时显示省略号?

- 单行文本溢出

```css
.single-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}
```

- 多行文本溢出

```css
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
```

## 17. CSS如何画一个三角形？原理是什么？

```css
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 50px;
  border-color: transparent transparent #d9534f;
}
```

## 18. 让 Chrome 支持小于 12px 的文字方式有哪些？

- 使用 transform: scale(0.5)


## 19. 你对 CSS 预处理器的理解是什么？

CSS 预处理器: 它扩展了 CSS 语言，增加了 变量、Mixin、继承、嵌套 等特性，使 CSS 更易维护和扩展

- scss: 变量使用 $
- less: 变量使用 @

## 20. src 与 href 的区别是什么？

- src(source): 指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置，阻塞页面渲染
- href(hypertext reference): 指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，并行下载资源并且不会停止对当前文档的处理
