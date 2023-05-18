# vue

## 1. 说说你对vue的理解？

**数据驱动(`MVVM`)**

`MVVM` 表示的是 `Model-View-ViewModel`

- `Model`：模型层，负责业务数据相关
- `View`：视图层，负责 UI 呈现
- `ViewModel`：连接层，负责监听 `Model` 中数据的改变并实时更新到 `View` 层，同时也监听 `View` 层的操作并同步更新到 `Model` 层

**组件化**

- 降低整个系统的耦合度
- 调试方便
- 提高可维护性

**指令系统**

- 条件渲染指令 `v-if`
- 列表渲染指令 `v-for`
- 属性绑定指令 `v-bind`
- 事件绑定指令 `v-on`
- 双向数据绑定指令 `v-model`

## 2. 说说你对 SPA(单页应用)的理解？

**`SPA` 和 `MPA` 的区别**

||单页面应用(SPA)|多页面应用(MPA)|
|:---:|:---:|:---:|
|组成|一个主页面和多个页面片段|多个主页面|
|刷新方式|局部刷新|整页刷新|
|url模式|哈希模式|历史模式|
|SEO搜索引擎优化|难实现，可使用SSR方式改善|容易实现|
|数据传递|容易|通过url、cookie、localStorage等传递|
|页面切换|速度快，用户体验良好|切换加载资源，速度慢，用户体验差|
|维护成本|相对容易|相对复杂|

**`hash`模式**

实现 hash

```js
class Router {
  constructor() {
    this.routes = {}
    this.currentUrl = ''
    window.addEventListener('load', this.refresh, false)
    window.addEventListener('hashchange', this.refresh, false)
  }

  route(path, callback) {
    this.routes[path] = callback || function() {}
  }

  push(path) {  
    this.routes[path] && this.routes[path]()  
  }  
}

// 使用 router  
window.miniRouter = new Router()
miniRouter.route('/', () => console.log('page1'))  
miniRouter.route('/page2', () => console.log('page2'))  
  
miniRouter.push('/') // page1  
miniRouter.push('/page2') // page2  
```

**`history`模式**

实现 history

```js
// 定义 Router  
class Router {  
  constructor () {  
    this.routes = {};  
    this.listerPopState()  
  }  
      
  init(path) {  
    history.replaceState({path: path}, null, path);  
    this.routes[path] && this.routes[path]();  
  }  
      
  route(path, callback){  
      this.routes[path] = callback;  
  }  
      
  push(path) {  
    history.pushState({path: path}, null, path);  
    this.routes[path] && this.routes[path]();  
  }  
      
  listerPopState () {  
    window.addEventListener('popstate' , e => {  
        const path = e.state && e.state.path;  
        this.routers[path] && this.routers[path]()  
    })  
  }  
}  
  
// 使用 Router  
window.miniRouter = new Router();  
miniRouter.route('/', ()=> console.log('page1'))  
miniRouter.route('/page2', ()=> console.log('page2'))  
  
// 跳转  
miniRouter.push('/page2')  // page2 
```

## 3. Vue 中的 v-show 和 v-if 怎么理解？

**v-show**

- 通过修改元素的 `display` 样式来控制元素的显示和隐藏
- `v-show` 会在页面渲染时就被渲染出来，只是通过修改 `display` 样式来控制元素的显示和隐藏

**v-if**

- 通过控制元素的 `DOM` 结构来控制元素的显示和隐藏
- `v-if` 会在页面渲染时根据条件来决定是否渲染该元素

**使用场景**

- 如果需要频繁切换元素的显示和隐藏，使用 `v-show` 会更加方便一些
- 如果在页面初始化时需要根据条件来决定元素是否显示，使用 `v-if` 会更加方便一些

## 4. 请说说你对 Vue 生命周期的理解？

**生命周期钩子**

beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed
- created: 组件初始化完毕，各种数据可以使用，常用于异步数据获取
- mounted: 组件挂载到页面上，一般可以进行 DOM 操作
- beforeDestroy: 组件销毁前，一般用于清除定时器、解绑事件等操作

## 5. 为什么 Vue 中的 v-if 和 v-for 不建议一起用？

`v-for` 的优先级比 `v-if` 高，`v-for` 会优先执行，如果一起使用，每次都会先执行 `v-for`，然后再执行 `v-if`，这样会降低性能

**解决方案**

```js
<template v-if="isShow">
    <p v-for="item in items">
</template>

// 如果条件出现在循环内部，可以使用计算属性
computed: {
  filterList() {
    return this.list.filter(item => item.show)
  }
}
```

## 6. SPA 首屏加载速度慢的问题怎么解决？

**什么是首屏加载**

首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容


**首屏加载慢的原因**

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了

**如何解决**

- 减小入口文件积
- 静态资源本地缓存
- UI框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启GZip压缩
- 使用SSR

## 7. 为什么data属性是一个函数而不是一个对象？

- 组件实例对象 `data` 必须为函数，目的是为了防止多个组件实例对象之间共用一个 `data` 对象，产生数据污染
- 根实例对象 `data` 可以是对象也可以是函数（根实例是单例），不会产生数据污染情况

## 8. Vue 中给对象添加新属性界面不刷新？

- 使用 `Vue.set` 或者 `this.$set` 方法
- 使用 `Object.assign` 方法
- 使用 `vm.$forceUpdate()` 方法，强制组件重新渲染，但是不推荐使用

## 9. Vue 中组件和插件的区别？

**组件**

- 组件是可复用的 Vue 实例，且带有一个名字

```vue
// 定义组件
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 使用组件
<my-component></my-component>
```


**插件**

- 插件通常用来为 Vue 添加全局功能

```js
// 定义插件
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}

// 使用插件
Vue.use(MyPlugin, { someOption: true })
```

## 10. Vue组件之间的通信方式都有哪些？

**父子组件通信**

- 父组件通过 `props` 向子组件传递数据
- 子组件通过 `$emit` 向父组件发送消息
- 父组件通过 `ref` 获取子组件实例对象，从而调用子组件的方法

**兄弟组件通信**

- EventBus

```js
// 创建一个中央时间总线类  
class Bus {  
  constructor() {  
    this.callbacks = {};   // 存放事件的名字  
  }  
  $on(name, fn) {  
    this.callbacks[name] = this.callbacks[name] || [];  
    this.callbacks[name].push(fn);  
  }  
  $emit(name, args) {  
    if (this.callbacks[name]) {  
      this.callbacks[name].forEach((cb) => cb(args));  
    }  
  }  
}  
  
// main.js  
Vue.prototype.$bus = new Bus() // 将$bus挂载到vue实例的原型上  
// 另一种方式  
Vue.prototype.$bus = new Vue() // Vue已经实现了Bus的功能  
```

**祖先组件和后代组件通信**

- `$attrs` 和 `$listeners`

```js
- `provide` 与 `inject`

```js
// 祖先组件
provide() {
  return {
    foo: 'foo'
  }
}

// 后代组件
inject: ['foo']
```

**复杂关系的组件通信**

- `Vuex`
  - `state` 用来存放共享变量的地方
  - `getter`，可以增加一个 `getter` 派生状态(相当于 `store` 中的计算属性)，用来获得共享变量的值
  - `mutations` 用来存放修改 `state` 的方法
  - `actions` 也是用来存放修改 `state` 的方法，不过 `action` 是在 `mutations` 的基础上进行. 常用来做一些异步操作
  - `modules` 用来存放模块化的 `store`，可以将 `store` 分成多个模块，每个模块有自己的 state，mutation，action，getter

## 11. 说说你对双向绑定的理解？

**实现双向绑定**

- `new Vue()` 首先执行初始化，对 `data` 执行响应化处理，这个过程发生 `Observe` 中
- 同时对模板执行编译，找到其中动态绑定的数据，从 `data` 中获取并初始化视图，这个过程发生在 `Compile` 中
- 同时定义⼀个更新函数和 `Watcher`，将来对应数据变化时 `Watcher` 会调用更新函数
- 由于 `data` 的某个 `key` 在⼀个视图中可能出现多次，所以每个 `key` 都需要⼀个管家 `Dep` 来管理多个 `Watcher`
- 将来 `data` 中数据⼀旦发生变化，会首先找到对应的 `Dep`，通知所有 `Watcher` 执行更新函数

流程图如下:

![](../\.vuepress\public\images\v-model.png)

## 12. 说说你对vue的mixin的理解？有什么应用场景？

`mixin`（混入），提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能(Vue3 不推荐使用 `mixin`)

```js
const myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

Vue.component('componentA',{
  mixins: [myMixin]
})
```

## 13. 你知道vue中key的原理吗？说说你对它的理解？

`key` 是给每一个 `vnode` 的唯一 `id`，也是 `diff` 的一种优化策略，可以根据 `key`，更准确，更快的找到对应的 `vnode` 节点

## 14. 说说你对虚拟DOM的理解？

**虚拟 DOM**

- 本质是用 `JavaScript` 对象来描述 `DOM` 节点对象
- 通过 `createElement` 方法创建虚拟节点
- 通过 `render` 方法将虚拟节点渲染成真实节点


**虚拟 DOM 的优点**

- 性能优化
- 跨平台( `React Native`、`Weex` 等)

## 15. 你了解vue的diff算法吗？说说看？

**diff 算法**

`diff` 算法是一种通过同层的树节点进行比较的高效算法

- `diff` 整体策略为: 深度优先，同层比较


## 16. 说说你对 keep-alive 的理解？

`keep-alive` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染

```js
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

`keep-alive` 可以设置以下 `props` 属性:

- `include`: 字符串或正则表达式，只有匹配的组件会被缓存
- `exclude`: 字符串或正则表达式，任何匹配的组件都不会被缓存
- `max`: 数字，最多可以缓存多少组件实例

设置了 `keep-alive` 缓存的组件，会多出两个生命周期钩子函数(`activated` 和 `deactivated`)):

- 首次进入组件时: beforeRouteEnter > beforeCreate > created> mounted > activated > ... > beforeRouteLeave > deactivated
- 再次进入组件时: beforeRouteEnter >activated > ... > beforeRouteLeave > deactivated

**缓存后如何获取数据**

- beforeRouteEnter

```js
beforeRouteEnter(to, from, next) {
  next(vm => {
    console.log(vm)
      // 每次进入路由执行
      vm.getData()  // 获取数据
  })
}
```

- activated

```js
activated() {
  this.getData()
}
```

## 17. Vue 常用的修饰符有哪些？有什么场景？

**表单修饰符**

- `.lazy`: 在 `change` 事件之后进行同步
- `.number`: 将用户的输入值转为有效的数字
- `.trim`: 自动过滤用户输入的首尾空格

**事件修饰符**

- `.stop`: 阻止事件冒泡
- `.prevent`: 阻止默认事件
- `.capture`: 使用事件捕获模式
- `.self`: 只当事件在该元素本身触发时触发回调
- `.once`: 事件只触发一次
- `.passive`: 滚动事件的默认行为(即使 `preventDefault` 被调用也会被忽略)
- `.native`: 监听组件根元素的原生事件

**按键修饰符**

- `.enter`
- `.tab`
- `.delete`(捕获 "删除" 和 "退格" 键)
- `.esc`
- `.space`

**鼠标修饰符**

- `.left`
- `.right`
- `.middle`

**系统修饰符**

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`


## 18. 你有写过自定义指令吗？自定义指令的应用场景有哪些？

**自定义指令**

- 全局指令

```js
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
```

- 局部指令

```js
directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
```

**自定义指令的应用场景**

- `v-focus`: 自动获取焦点
- `v-copy`: 一键复制内容
- `v-permission`: 权限控制

## 19. 你有写过自定义过滤器吗？自定义过滤器的应用场景有哪些？

**自定义过滤器**

```js
// 局部过滤器
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

// 全局过滤器
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// 使用, message 为第一个参数
{{ message | capitalize }}
```

**应用场景**

- 格式化时间
- 格式化金额
- 格式化数字

## 20. SSR 解决了什么问题？

**SSR**

`SSR` 是 `Server Side Render` 的缩写，指的是服务端渲染，即在服务端将组件渲染成 `HTML` 字符串，将字符串直接发送给浏览器进行解析渲染

**SSR 解决了什么问题**

- 首屏渲染慢
- 不利于 SEO

## 21. 说说你对 nextTick 的理解？

**nextTick**

在下次 DOM 更新循环结束之后执行延迟回调. 在修改数据之后立即使用这个方法，获取更新后的 DOM

```js
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})
```


## 22. vue 要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？

**权限管理**

- 接口权限
- 路由权限
- 按钮权限
- 菜单权限

## 23. Vue项目中你是如何解决跨域的呢？

跨域本质是浏览器基于 `同源策略` 的一种安全手段，所谓同源（即指在同一个域）具有以下三个相同点:

- 协议相同
- 主机相同
- 端口相同

**解决跨域**

- JSONP
- CORS
- Nginx 反向代理
- Webpack 代理
