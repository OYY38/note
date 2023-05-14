# javascript

## 1. 说说 JavaScript 中的数据类型？

- 基本数据类型: Undefined, Null, Boolean, Number, String, Symbol, BigInt
- 引用数据类型: Object, Array, Function, Date, RegExp 等

存储区别

- 基本数据类型: 存储在栈内存中, 通过值访问
- 引用数据类型: 存储在堆内存中, 通过引用访问

## 2. 数组的常用方法

- 增: push, unshift, splice, concat
- 删: pop, shift, splice, slice
- 查: indexOf, includes, find
- 排序: sort, reverse
- 转换: join
- 迭代: forEach, map, filter, reduce, some, every

## 3. 字符串的常用方法

- 增: concat, slice, substring, substr
- 改: trim, toUpperCase, toLowerCase
- 查: indexOf, includes, startsWith, endsWith
- 转换: split
- 正则: match, replace

## 4. 谈谈 JavaScript 中的类型转换

- 显示类型转换: Number, String, Boolean, ParseInt
- 隐式类型转换: ==, +, -, *, /, %, <, >, <=, >=, &&, ||, !, if, for, while 等

自动转换为布尔值

- 假值: false, 0, -0, '', null, undefined, NaN
- 真值: 除了假值的都是真值

自动转换为字符串

- 复合类型: 先转为基本类型, 再转为字符串
- 原始类型: 直接转为字符串

自动转换为数值

- 复合类型: 先转为基本类型, 再转为数值
- 原始类型: 直接转为数值

## 5. == 和 === 的区别, 分别在什么情况下使用?

- ==: 相等, 会自动转换类型
- ===: 严格相等, 不会自动转换类型

使用场景

- ==: 用于判断两个值是否相等
- ===: 用于判断两个值是否严格相等

## 6. 深拷贝和浅拷贝的区别? 如何实现一个深拷贝?

- 浅拷贝: 浅拷贝是拷贝一层, 属性为对象时, 浅拷贝是复制, 两个对象指向同一个地址
- 深拷贝: 深拷贝是递归拷贝深层次, 属性为对象时, 深拷贝是新开栈, 两个对象指向不同的地址

浅拷贝

- Object.assign(target, ...sources): 只能拷贝一层, 不能处理函数, undefined, Symbol, 循环引用等
- 扩展运算符: 只能拷贝一层, 不能处理函数, undefined, Symbol, 循环引用等

```js

实现深拷贝

- JSON.parse(JSON.stringify(obj)): 不能处理函数, undefined, Symbol, 循环引用等
- 递归: 可以处理函数, undefined, Symbol, 循环引用等

```js
function deepClone(obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  const cloneObj = new obj.constructor()
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}
```

## 7. 说说你对闭包的理解, 闭包的作用是什么?

- 闭包: 简单理解就是函数套函数, 内部函数可以访问外部函数的变量

作用

- 创建私有变量
- 延长变量的声明周期

## 8. 说说你对作用域链的理解

作用域, 即变量(变量作用域又称上下文)和函数生效(能被访问)的区域或集合

- 全局作用域: 全局变量和函数都在全局作用域中生效
- 函数作用域: 函数内部声明的变量和函数只在函数内部生效
- 块级作用域: 块级作用域内声明的变量和函数只在块级作用域内生效

## 9. JavaScript 原型, 原型链? 有什么特点?

- 原型: 每个函数都有一个 `prototype` 属性, 指向一个对象, 这个对象就是原型
- 原型链: 原型对象也可能拥有原型, 并从中继承方法和属性, 一层一层、以此类推. 这种关系常被称为原型链(prototype chain)
- 一切对象都是继承自 `Object` 对象, `Object` 对象直接继承根源对象 `null`
- 一切的函数对象(包括 `Object` 对象), 都是继承自 `Function` 对象
- `Object` 对象直接继承自 `Function` 对象
- `Function` 对象的 `__proto__` 会指向自己的原型对象, 最终还是继承自Object对象

## 10. Javascript 如何实现继承？

```js
class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    console.log('Person:', this.name)
  }
}
class Teacher extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
const t = new Teacher('Asuna', 20)
t.getName()
```

## 11. 谈谈 this 对象的理解

- 普通函数中的 this: window, 严格模式下是 undefined
- 对象方法中的 this: 对象本身, `this` 永远指向的是最后调用它的对象
- 构造函数中的 this: 实例对象
- 箭头函数中的 this: 箭头函数没有自己的 this, 它的 this 继承自上一层的上下文

## 12. 说说 JavaScript 中的事件模型

**事件与事件流**

由于DOM是一个树结构, 如果在父子节点绑定事件时候, 当触发子节点的时候, 就存在一个顺序问题, 这就涉及到了事件流的概念

事件流都会经历三个阶段:

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

**事件模型**

事件模型可以分为三种:

- 原始事件模型
- 标准事件模型
- IE事件模型(基本不用)

**原始事件模型**

```html
<input type="button" onclick="fun()">
```

```js
var btn = document.getElementById('.btn')
btn.onclick = fun

// 删除
btn.onclick = null
```

**特性**

- 只支持冒泡, 不支持捕获
- 同一个类型的事件只能绑定一次

**标准事件模型**

在该事件模型中, 一次事件共有三个过程:

- 事件捕获阶段
- 事件处理阶段
- 事件冒泡阶段

```js
addEventListener(eventType, handler, useCapture)

removeEventListener(eventType, handler, useCapture)
```

**特性**

- 支持冒泡和捕获
- 同一个类型的事件可以绑定多次

## 13. typeof 与 instanceof 的区别

- typeof: 用于判断基本数据类型, 不能判断引用数据类型, 除了函数
- instanceof: 用于判断引用数据类型, 不能判断基本数据类型

如果需要通用检测数据类型, 可以采用 `Object.prototype.toString`, 调用该方法, 统一返回格式 "[object Xxx]" 的字符串

```js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call(1)    // "[object Number]"
```

## 14. 解析下什么是事件代理？应用场景?

事件代理又称事件委托, 是指将事件绑定到目标元素的父元素上, 通过事件冒泡机制, 触发执行效果

**优点**

- 减少内存消耗, 减少事件注册, 提高性能
- 动态绑定事件

## 15. 说说 new 操作符具体干了什么呢?

- 创建一个空对象, 作为将要返回的对象实例
- 将这个空对象的原型, 指向构造函数的 `prototype` 属性
- 将构造函数的 `this` 指向该对象
- 执行构造函数
- 返回该对象

```js
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构造函数的 this 指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
```

## 16. ajax 原理是什么? 如何实现?

ajax: Asynchronous JavaScript and XML, 异步的 JavaScript 和 XML, 是一种在无需重新加载整个网页的情况下, 能够更新部分网页的技术

**实现过程**

- 创建 `Ajax` 的核心对象 `XMLHttpRequest` 对象
- 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端建立连接
- 构建请求所需的数据内容, 并通过 `XMLHttpRequest` 对象的 `send()` 方法发送给服务器端
- 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端你的通信状态
- 接受并处理服务端向客户端响应的数据结果
- 将处理结果更新到 `HTML` 页面中


```js
function ajax(url, method, data, success, fail) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText)
      } else {
        fail(xhr.status)
      }
    }
  }
  xhr.send(data)
}
```

## 17. bind、call、apply 的区别? 

`call`、`apply`、`bind` 作用是改变函数执行时的上下文, 简而言之就是改变函数运行时的 `this` 指向

**apply**

```js
function fn(...args) {
  console.log(this,args)
}
let obj = {
  myname: '张三'
}

// 第一个参数是 this, 第二个参数是数组, 会立即执行
fn.apply(obj, [1,2]) // this 会变成传入的 obj, 传入的参数必须是一个数组
fn(1,2) // this 指向 window
```

**call**

```js
function fn(...args) {
  console.log(this, args)
}
let obj = {
  myname: '张三'
}

// 第一个参数是 this, 第二个参数是参数列表, 会立即执行
fn.apply(obj, 1, 2) // this 会变成传入的 obj
fn(1,2) // this 指向 window
```

**bind**

```js
function fn(...args) {
  console.log(this,args)
}
let obj = {
  myname: '张三'
}

// 第一个参数是 this, 第二个参数是参数列表，可以分多次传入, 不会立即执行
const bindFn = fn.bind(obj)
bindFn(1, 2) // this 指向 obj
fn(1, 2) // this 指向 window
```

## 18. 说说你对事件循环的理解

事件循环是指浏览器或 Node 的一种解决 javaScript 单线程运行时不会阻塞的一种机制

**同步任务**

同步任务会在主线程上排队执行, 只有前一个任务执行完毕, 才能执行后一个任务

**异步任务**

异步任务进入任务队列, 主线程内的任务执行完毕为空, 会去任务队列读取对应的任务, 推入主线程执行

**任务队列**

任务队列是一个先进先出的数据结构, 主线程会不断从任务队列中读取任务, 并将任务放入主线程中执行

异步任务又分为宏任务和微任务

**宏任务**

- script(可以理解为外层同步代码)
- setTimeout/setInterval
- postMessage

**微任务**

- Promise.then

```js
console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

console.log('script end')

// script start
// script end
// promise1
// promise2
// setTimeout
```

## 19. 举例说明你对尾递归的理解, 并说说它的优缺点

尾递归是指函数的最后一步是调用自身, 且是函数的最后一步

```js
function factorial(n, start = 1, total = 1) {
    if(n <= 2){
        return total
    }
    return factorial(n -1, total, total + start)
}
```

**优点**

减少内存消耗, 减少函数调用栈的次数, 避免栈溢出(O(1)), 否则容易造成栈溢出(O(n))


## 20. JavaScript 本地存储的方式有哪些? 有什么区别?

**cookie**

`Cookie` 指某些网站为了辨别用户身份而储存在用户本地终端上的数据. 是为了解决 HTTP 无状态导致的问题

- 会自动携带在 HTTP 请求头中
- 有大小限制, 一般为 4K
- 可以设置过期时间
- 可以通过设置 `httponly` 防止 XSS 攻击

**localStorage**

`HTML5` 新方法, IE8 及以上浏览器都兼容

- 持久化的本地存储, 除非主动删除数据, 否则数据永远不会过期
- 一般为 5M
- 只能存储字符串类型, 可以通过 `JSON.stringify` 和 `JSON.parse` 转换
- 受同源策略的限制


## 21. 说说 JavaScript 数字精度丢失的原因, 以及解决方案

**原因**

`JavaScript` 存储方式是双精度浮点数, 64 位存储一个浮点数, 1 位符号位, 11 位指数位, 52 位小数位. 某些数无法用二进制精确表示, 会造成精度丢失

**解决方案**

```js
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length
  const num2Digits = (num2.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits))
  return (num1 * baseNum + num2 * baseNum) / baseNum
}
```

## 22. 什么是防抖和节流? 如何实现? 应用场景有哪些?

**防抖**

防抖是指在事件被触发 n 秒后再执行回调, 如果在 n 秒内又被触发, 则重新计时

```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
```

**节流**

节流是指连续触发事件但是在 n 秒中只执行一次回调函数

```js 
function throttle(fn, delay) {
  let timer = null
  return function() {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
```

**应用场景**

- 防抖: 搜索框搜索输入, 只需用户最后一次输入完, 再发送请求
- 节流: 滚动加载，加载更多或滚到底部监听

## 23. 说说 var、let、const 之间的区别

**var**

- 在 `ES5` 中, 顶层对象的属性和全局变量是等价的
- 可以重复声明, 会覆盖之前的值
- 不存在块级作用域, 只有函数作用域
- 会变量提升, 可以先使用后声明

**let**

- 声明的变量只在块级作用域内有效
- 不存在变量提升, 必须先声明后使用
- 不允许重复声明

**const**

- 声明的变量只在块级作用域内有效
- 不存在变量提升, 必须先声明后使用
- 不允许重复声明
- 声明的变量必须赋值, 且不能修改

## 24. ES6 中数组新增了哪些扩展?

**扩展运算符**

```js
const arr = [1, 2, 3]
const arr2 = [...arr]

// 定义了遍历器(Iterator)接口的对象, 都可以用扩展运算符转为真正的数组
const nodeList = document.querySelectorAll('div')
const array = [...nodeList]
```

**Array.from**

```js
// 将类数组对象和可遍历对象转为真正的数组
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
const arr = Array.from(arrayLike)
```

**数组解构**

```js
const arr = [1, 2, 3]
const [first, second, third] = arr
```

## 25. ES6 中对象新增了哪些扩展?

**属性简写**

```js
const name = '张三'
const age = 18

const obj = {
  name,
  age,
  sayName() {
    console.log(this.name)
  }
}
```

**属性名表达式**

```js
let lastWord = 'last word'

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
}
```

**扩展运算符**

```js
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const obj = { ...obj1, ...obj2 }
```

**Object.assign**

```js
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const obj = Object.assign(obj1, obj2)
```

**对象解构**

```js
const obj = { a: 1, b: 2 }
const { a, b } = obj
```


## 26. ES6 中函数新增了哪些扩展?

**参数**

```js
// 参数默认值
function fn(a = 1, b = 2) {
  console.log(a, b)
}

// 不定参数
function fn(a, b, ...args) {
  console.log(args)
}
```

**箭头函数**

```js
// 箭头函数没有自己的 this, 它的 this 是继承外层的 this
const fn = (a, b) => a + b
```

## 27. 你是怎么理解 ES6 中 Promise 的? 它解决了什么问题?

`Promise` 是异步编程的一种解决方案, 比传统的解决方案 `回调函数` 更合理和更强大

**状态**

- `pending`: 进行中
- `fulfilled`: 已成功
- `rejected`: 已失败

**用法**

`Promise` 对象是一个构造函数, 用来生成 `Promise` 实例

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
})

// then 方法接收两个参数, 第一个参数是 `resolve` 的回调, 第二个参数是 `reject` 的回调
// catch 方法用于指定发生错误时的回调
// finally 方法用于指定不管 Promise 对象最后状态如何, 都会执行的操作 
promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log('finally')
})
```

`Promise` 构造函数接受一个函数作为参数, 该函数的两个参数分别是 `resolve` 和 `reject`

- `resolve` 函数的作用是将 `Promise` 对象的状态从 `pending` 变为 `fulfilled`
- `reject` 函数的作用是将 `Promise` 对象的状态从 `pending` 变为 `rejected`

**构造函数方法**

- `Promise.allSettled`: 将多个 `Promise` 实例包装成一个新的 `Promise` 实例, 所有 `Promise` 实例都 `resolve` 或 `reject` 才会 `resolve`, 不管成功或失败, 都会返回结果
- `Promise.resolve`: 将现有对象转为 `Promise` 对象
- `Promise.reject`: 返回一个新的 `Promise` 实例, 该实例的状态为 `rejected`

## 28. 你是怎么理解 ES6 中 Generator 的?

**Generator函数**

执行 `Generator` 函数会返回一个遍历器对象(即具有 `Symbol.iterator` 属性), 可以依次遍历 `Generator` 函数内部的每一个状态

```js
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

let hw = helloWorldGenerator()

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

## 29. 你是怎么理解 ES6 中 async/await 的?

`async` 函数是 `Generator` 函数的语法糖, 相当于会自动执行 `Generator` 函数

```js
async function fn() {
  // await 后面跟着一个 Promise 对象, 如果不是, 会被转成一个立即 `resolve` 的 Promise 对象
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
    }, 1000)
  })
}
```

## 30. 你是怎么理解 `ES6` 中 `Module` 的？使用场景？

**CommonJs**

特点:

- 所有代码都运行在模块作用域,不会污染全局作用域
- 模块是同步加载的,即只有加载完成,才能执行后面的操作
- 模块在首次执行后就会缓存,再次加载只返回缓存结果,如果想要再次执行,可清除缓存
- 输出的是值的拷贝

```js
// 导出
module.exports = {
  a: 1
}
// 导入
const obj = require('./a')

// 导出
exports.a = 1 // exports 是 module.exports 的引用
// 导入
const obj = require('./a')
```

**ES6 Module**

特点:

- ES6 模块的设计思想是尽量的静态化, 使得编译时就能确定模块的依赖关系, 以及输入和输出的变量
- ES6 模块是异步加载模块
- ES6 模块输出的是值的引用, 不是值的拷贝

```js
// 导出
export const a = 1
export const b = 2
// 导入
import { a } from './a'
// 导入全部
import * as obj from './a'

// 导出
const a = 1
export default a
// 导入
import a from './a'

// 导出
export default {
  a: 1
}
// 导入
import obj from './a'
```

export 与 import 的复合写法:

```js
export { a, b } from './a'
// 整体输出
export * from './a'
export * as obj from './a'

// 默认导出
export { default } from './a'
// 默认接口改为具名接口
export { default as a } from './a'
// 具名接口改为默认接口
export { a as default } from './a'
```

## 31. 如何实现跨域？

跨域：浏览器的同源策略，限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互

**解决方案**

- CORS
- postMessage
- 反向代理

## 32. XSS 攻击是什么？如何防范？

XSS 攻击：XSS 是跨站脚本攻击(Cross Site Scripting)的简称, 是一种代码注入攻击, 攻击者通过在目标网站上注入恶意脚本, 使之在用户的浏览器上运行, 从而获取用户的敏感信息

**防范**

- 对用户输入的数据进行转义

## 33. 迭代器是什么？如何使用迭代器？

迭代器是一种特殊对象, 每一个迭代器对象都有一个 `next` 方法, 每次调用 `next` 方法都会返回一个结果对象, 该结果对象有两个属性, `value` 表示当前的值, `done` 表示是否迭代完成

```js
const arr = [1, 2, 3]
const iterator = arr[Symbol.iterator]()
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: undefined, done: true }

// 自定义迭代器
const obj = {
  data: ['hello', 'world'],
  [Symbol.iterator]() {
    const self = this
    let index = 0
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}
```
