# http

## 1. 什么是 HTTP？HTTP 和 HTTPS 的区别？

`HTTP` (HyperText Transfer Protocol)，即超文本运输协议，是实现网络通信的一种规范。它是一种`无状态`的、`应用层`的协议，常基于TCP的连接方式

**区别**

- `HTTP`明文传输，`HTTPS`加密传输
- `HTTPS`端口是443，`HTTP`端口是80
- `HTTPS`需要`SSL`证书，而`HTTP`不需要

## 2. 如何理解 CDN？说说实现原理？

`CDN` (Content Delivery Network)，即内容分发网络

- 负载均衡
- 缓存

## 3. 说说 HTTP 常见的状态码？

- 2xx：成功，如200
- 3xx：重定向，如304
- 4xx：客户端错误，如401，403，404
- 5xx：服务端错误，如500

## 4. 说一下 GET 和 POST 的区别？

- `GET` 参数通过`URL`传递，`POST` 参数通过`Request body`传递
- `GET` 请求会被浏览器主动缓存，`POST` 不会，除非手动设置
- `GET` 请求参数会被完整保留在浏览器历史记录里，`POST` 中的参数不会被保留
- `GET` 请求在 URL 中传送的参数是有长度限制的，`POST` 没有限制
- `GET` 比 `POST` 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息
- `GET` 请求只能进行 `url` 编码，而 `POST` 支持多种编码方式
- `GET` 参数只接受 `ASCII` 字符，而 `POST` 没有限制

## 5. 说一下 HTTP 缓存?

- 强缓存：`Expires`、`Cache-Control`，优先级高于协商缓存，不会向服务器发送请求，直接从缓存中读取，如果命中则返回`200`
  - `Expires`：绝对时间，GMT 格式，如果客户端时间和服务器时间不一致，可能会有问题
  - `Cache-Control`：相对时间，单位秒，优先级高于`Expires`
- 协商缓存：`Last-Modified`、`If-Modified-Since`、`ETag`、`If-None-Match`，如果命中则返回`304`，否则返回`200`
  - `Last-Modified`：文件最后修改时间，如果文件被修改，但内容没变，会导致缓存失效
  - 当再次请求该资源时，请求头中会带有 `if-modified-since` 字段，值是之前返回的 `last-modified` 的值，如果文件没有修改，则命中缓存，返回`304`
  - `ETag`：文件内容标识，优先级高于`Last-Modified`
  - 当再次请求该资源时，请求头会带有 `if-none-match` 字段，值是之前返回的 `etag` 值，如果`etag`值相同，则命中缓存，返回`304`

## 6. 说说地址栏输入 URL 敲下回车后发生了什么？

- DNS 解析，获取 IP 地址
- TCP 连接
- 发送 HTTP 请求
- 响应请求
- 页面渲染
  - 解析 HTML，构建 DOM 树
  - 解析 CSS，构建 CSS 规则树
  - 合并 DOM 树和 CSS 规则树，构建渲染树
  - 布局渲染树，计算每个节点的位置
  - 绘制渲染树，绘制页面像素信息
  - GPU 绘制，合成图层，显示在屏幕上

## 7. 说说 TCP 为什么需要三次握手和四次挥手？

- 三次握手:
  - 张三: 你好，我是张三，我要和你通信了
  - 李四: 好的，我知道了
  - 李四: 你好，我是李四，我要和你通信了
  - 张三: 好的，我知道了

- 四次挥手:
  - 张三: 你好，我是张三，我要下线了
  - 李四: 好的，我知道了
  - 李四: 你好，我是李四，我要下线了
  - 张三: 好的，我知道了


## 8. 什么是 RESTful API?

`RESTful API` 就是 `REST` 风格的 `API`，即 `rest` 是一种架构风格，跟编程语言无关，跟平台无关，采用 `HTTP` 做传输协议

- 可以用一个URI（统一资源定位符）指向资源，即每个URI都对应一个特定的资源
- 资源通过 HTTP 动词进行操作，即 `GET`、`POST`、`PUT`、`DELETE`，对应 `CRUD` 操作
- URI 中只能使用名词，不能使用动词，动作应该使用 HTTP 动词表示
- 接口版本号应该放在 URI 中，如 `api/v1/users`

## 9. jwt 是什么？说说 jwt 的优缺点？

`jwt` (JSON Web Token)，即 `JSON` 格式的 `Web` 令牌，是一种用于身份验证的令牌，由三部分组成，分别是 `header`、`payload`、`signature`，用 `.` 连接
