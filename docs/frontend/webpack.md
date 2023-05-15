# webpack

## 1. 安装 webpack、webpack-cli

```sh
yarn add webpack --dev
yarn add webpack-cli --dev
```

`注意:` 使用 webpack 命令必须安装 webpack-cli

## 2. webpack 命令选项

- --entry: 入口文件
- --output-path: 输出文件路径
- --output-filename: 输出文件名
- --config: 配置文件路径, 如: --config webpack.config.js

```json
// package.json
"scripts": {
  "build": "webpack --entry ./src/main.js --mode development --output-path ./dist --output-filename app.js",
}
```

## 3. webpack 配置文件

```javascript
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 打包配置
module.exports = {
  // 入口文件
  entry: resolve('src/main.js'),
  
  // 输出选项
  output: {
    // 输出路径
    path: resolve('dist'),
    filename: 'app.js'
  },
  // 必选
  mode: 'development' // 开发模式
}
```

直接使用 webpack 命令, 默认会使用 webpack.config.js 文件中的配置

## 4. webpack-dev-server 实时打包

### 4.1 安装 webpack-dev-server

```sh
yarn add webpack-dev-server --dev
```

### 4.2 配置 package.json

```json
"scripts": {
  "serve": "webpack serve --static public"
}
```

使用 --static 选项配置服务器静态文件目录(默认public), 修改 index.html 导入

```html
<div id="app"></div>
<!--手动导入-->
<!--<script src="../dist/app.js"></script>-->
<script src="app.js"></script>
```

`注意:` webpack-dev-serve 打包生成的文件以虚拟的形式(位于内存中)托管到了服务器静态文件目录

## 5. 配置 devServer 节点

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    static: {
      directory: resolve('public'),
    },
    hot: true, // 热更新(默认开启)
    port: 8080, // 端口
    open: true, // 自动打开浏览器
    client: {
      // 只显示错误信息
      overlay: {
        errors: true,
        warnings: false,
      }
    }
  }
}
```

## 6. 跨域处理

```javascript
module.exports = {
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        },
        secure: true, // https
        changeOrigin: true
      }
    }
  }
}
```

## 7. html-webpack-plugin

### 7.1 安装 html-webpack-plugin

```sh
yarn add html-webpack-plugin --dev
```

### 7.2 添加 plugins 节点

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 添加 plugins 节点
  plugins: [
    // 创建一个在内存中生成 HTML 页面的插件(使用 webpack 打包时会生成一个实际的 HTML 文件)
    new HtmlWebpackPlugin({
      title: '自定义标题',
      // 指定模板页面, 将来会根据指定的页面路径, 去生成内存中的页面
      template: resolve(__dirname, 'public/index.html'),
      filename: 'index.html' // 指定生成页面的名称
    }),
  ]
}
```

在 index.html 模板渲染

```html
<title><%= htmlWebpackPlugin.options.title %></title>
```

将 index.html 中 script 导入删除, 因为 webpack 打包时, html-webpack-plugin 插件会自动把打包文件 `app.js` 注入到 index.html 页面中

`注意:` 直接使用 webpack 打包时, 如果没有配置 html-webpack-plugin 插件, 打包不会生成 HTML 文件

## 8. DefinePlugin

`DefinePlugin` 允许在编译时将你代码中的变量替换为其他值或表达式

```javascript
// webpack.config.js
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('')
    })
  ]
}
```

在 index.html 模板中使用 BASE_URL

```html
// index.html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

## 9. clean-webpack-plugin

### 9.1 安装 clean-webpack-plugin

```sh
yarn add clean-webpack-plugin --dev
```

### 9.2 配置

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin() // 清除打包文件夹
  ]
}
```

## 10. 使用 loader 处理 css 文件

### 10.1 安装 style-loader、css-loader

```sh
yarn add style-loader css-loader --dev
```

`style-loader` 将 css 插入到 DOM 中

### 10.2 新增配置节点

```javascript
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }
  ]
}
```

webpack 处理第三方文件类型的过程:

- 如果发现要处理的文件不是 js 文件, 然后就去配置文件中, 查找有没有对应的第三方 loader 规则
- 如果能找到对应的规则, 就会调用对应的 loader 处理这种文件类型
- 在调用 loader 的时候, 是从后往前调用的
- 当最后一个 loader 调用完毕, 会把处理的结果, 直接交给 webpack 进行打包合并, 最终输出到打包文件中去

## 11. 使用 loader 处理 scss 文件

### 11.1 安装 sass-loader、dart-sass(建议使用)或node-sass、sass

```sh
yarn add sass-loader dart-sass sass --dev
```

### 11.2 配置 loader

```javascript
 module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommmonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      }
    ]
}
```

`注意:` 如果安装 node-sass, 需在项目目录下添加 .npmrc 文件, 配置 saas 源, 防止下载失败


## 12. 使用 postcss-loader 处理 css 文件

## 12.1 安装 postcss-loader

```sh
yarn add autoprefixer postcss-loader --dev
```

## 12.2 配置 loader

```javascript
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ]
}
```

## 12.3 新增 postcss.config.js 文件, 添加如下配置

```javascript
module.exports = {
  plugins: [
    require('autoprefixer') // 自动添加样式前缀
  ]
}
```

## 12.4 配置 browserslist

作用: 根据提供的目标浏览器的环境来, 智能添加 css 前缀, js 的 polyfill 垫片, 来兼容旧版本浏览器, 而不是一股脑的添加. 避免不必要的兼容代码, 以提高代码的编译质量

共享使用 browserslist 的组件们:

|组件名|功能|
|!---|!---|
|autoprefixer|postcss添加css前缀组件|
|bable-preset-env|编译预设环境智能添加polyfill垫片代码|

在 package.json 文件中配置 browserslist 对象

```json
{
  "browserslist": [
    "defaults",
    "Android 4.1",
    "iOS 7.1",
    "Chrome>31",
    "ff>31",
    "ie>=8",
    "last 2 versions",
    ">1%"
  ]
}
```

## 13. 使用 `asset module` 处理资源文件

### 13.1 资源模块

资源模块类型(asset module type), 通过添加新的模块类型, 来替换所有这些 loader:

- asset/resource 发送一个单独的文件并导出 URL. 之前通过使用 file-loader 实现
- asset/inline 导出一个资源的 data URI. 之前通过使用 url-loader 实现
- asset 在导出一个 data URI 和发送一个单独的文件之间自动选择. 之前通过使用 url-loader, 并且配置资源体积限制实现

```javascript
module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      type: 'asset',
      parser: {
        // 小于 8kb 的文件, 将会视为 inline 模块类型, 否则会被视为 resource 模块类型
        dataUrlCondition: {
          maxSize: 8 * 1024 // 8kb
        }
      },
      generator: {
        filename: 'static/[name]_[hash:8][ext]'
      }
    }
  ]
}
```

### 13.2 使用 url-loader 和 file-loader 打包图片

安装 url-loader 和 file-loader

```sh
yarn add url-loader file-loader --dev
```

配置 webpack.config.js

```javascript
module: {
  rules: [
    // 配置处理图片与路径的第三方 loader 规则
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          // url-loader 将图片转化成 base64 编码字符串
          loader: 'url-loader',
          options: {
            // 小于指定字节 (byte) 的图片才会进行 base64 编码, 若大于则使用 file-loader
            limit: 8192,

            // file-loader 配置 
            name: '[name]_[hash:8].[ext]', // 设置打包后的文件名, 防止打包后的图片重名(默认会自动生成哈希值)
            outputPath: 'images' // 图片打包输出路径
          }
        }
      ]
    }
  ]
}
```

## 14. terser-webpack-plugin

`webpack5` 开箱即带有最新版本的 terser-webpack-plugin, 如果自定义配置, 仍需要安装 terser-webpack-plugin

```sh
yarn add terser-webpack-plugin --dev
```

添加 optimization 节点

```javascript
optimization: {
  minimizer: [
    // 生产环境生效
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'] // 移除 console
        }
      }
    })
  ]
}
```

## 15. 通过 devtool 配置 SourceMap

**开发环境**

`eval-cheap-module-source-map` 每个模块使用 `eval` 执行. 这是 "cheap(低开销)" 的 source map, 因为它没有生成列映射(column mapping), 只
是映射行数. loader source map  会被简化为每行一个映射(mapping)

**生产环境**

`source-map` 整个 source map 作为一个单独的文件生成, 它为 bundle 添加了一个引用注释, 以便开发工具知道在哪里可以找到它

`注意:` 不要把 source map 文件部署到 web 服务器, 而是只将其用于错误报告工具

原因如下:

- 使用 cheap 模式可以大幅提高 souremap 生成的效率. 大部分情况我们调试并不关心列信息, 而且就算 sourcemap 没有列, 有些浏览器引擎(例如 v8) 也会给出列信息
- 使用 eval 方式可大幅提高持续构建效率. 参考官方文档提供的速度对比表格可以看到 eval 模式的编译速度很快
- 使用 module 可支持 babel 这种预编译工具(在 webpack 里做为 loader 使用)
- 使用 eval-source-map 模式可以减少网络请求. 这种模式开启 DataUrl 本身包含完整 sourcemap 信息, 并不需要像 sourceURL 那样, 浏览器需要发送一个完整请求去获取 sourcemap 文件, 这会略微提高点效率. 而生产环境中则不宜用 eval, 这样会让文件变得极大

## 16. 解决 favicon.ico 没有打包问题

```javascript
new HtmlWebpackPlugin({
  favicon: resolve('public/favicon.ico')
})
```

## 17. Babel 的使用

### 17.1 安装 babel-loader, @babel/core, @babel/preset-env

```sh
yarn add babel-loader @babel/core @babel/preset-env --dev
```

```javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
```

### 17.2 Babel 的作用

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性(通过引入第三方 polyfill 模块, 例如 core-js)
- 源码转换(codemods)

### 17.3 预设

通过使用或创建一个 `preset` 即可轻松使用一组插件

**@babel/preset-env**

@babel/preset-env 这是一个预设的插件集合, 包含了一组相关的插件, Bable 中是通过各种插件来指导如何进行代码转换. 该插件包含所有 es6 转化为 es5 的翻译规则

**@babel/core**

@babel/core 是 babel 的核心库, 所有的核心 api 都在这个库里, 这些 api 供 babel-loader 调用

`注意`: 需要说明的是, @babel/preset-env 会根据你配置的目标环境, 生成插件列表来编译. 默认情况下, 如果你没有在 Babel 配置文件中(如babel.config.js)设置 targets, @babel/preset-env 会使用 browserslist 配置源

如果你不是要兼容所有的浏览器和环境, 推荐你指定目标环境, 这样你的编译代码能够保持最小

添加 `babel.config.js` 文件, 并配置

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ]
}
```

**polyfill**

`注意:` V7.4.0 版本开始, `@babel/polyfill` 已经被废弃, 需单独安装 core-js 和 regenerator-runtime 模块

安装 core-js, regenerator-runtime

```sh
yarn add core-js regenerator-runtime --dev
```

配置 `babel.config.js` 文件

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        useBuiltIns: 'usage',
        corejs: '3.19'
      }
    ]
  ]
}
```

`注意:` 如果 useBuiltIns: 'usage', 不需要手动导入 core-js 和 regenerator-runtime

## 18. @babel/plugin-transform-runtime

首先安装依赖, @babel/plugin-transform-runtime 通常仅在开发时使用, 但是运行时最终代码需要依赖 @babel/runtime, 所以 @babel/runtime 必须要作为生产依赖被安装, 如下:

```sh
yarn add @babel/plugin-transform-runtime --dev
yarn add @babel/runtime
```

`注意`: @babel/plugin-transform-runtime 可以为代码创建一个沙盒环内置程序(例如 Promise, Set 和 Map), 则它们将污染全局范围(core-js@3 现在已经支持原型方法, 同时不污染原型). 虽然这对于应用程序或命令行工具可能是可以的, 但是如果你的代码是要发布供他人使用的库, 或者无法完全控制代码运行的环境, 则将成为一个问题

如果我们希望 @babel/plugin-transform-runtime 不仅仅处理帮助函数, 同时也能加载 polyfill 的话, 我们需要给 @babel/plugin-transform-runtime 增加配置信息. 首先新增依赖 @babel/runtime-corejs3:

```sh
yarn add @babel/runtime-corejs3
```

修改 babel.config.js 文件, 如下

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime', {
        corejs: 3
      }
    ]
  ]
}
```

## 19. Tree Shaking

tree shaking 是一个术语, 通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code). 它依赖于 ES2015 模块语法的静态结构特性, 例如 import 和 export

### 19.1 添加一个通用模块

在我们的项目添加一个新的通用模块文件 src/math.js, 并导出两个函数

```javascript
export function square(x) {
  return x * x
}

export function cube(x) {
  return x * x * x
}
```

需要将 mode 配置设置成 development, 以确定 bundle 不会被压缩, 并在 optimization 下添加 usedExports. 正式环境无需配置, 默认会开启 tree shaking

```javascript
module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: 'source-map'
}
```

配置完这些后, 修改 main.js 文件, 使用其中一个新方法

```javascript
import { cube } from './math'

console.log(cube(5))
```

我们没有从 src/main.js 模块中 import 另外一个 square 方法. 这个函数就是所谓的 "未引用代码(dead code)", 也就是说, 应该删除未被引用或使用的 export, 现在运行 webpack, 并查看输出的 bundle:

```javascript
/***/ (function (module, __webpack_exports__, __webpack_require__) {
  'use strict';
  /* unused harmony export square */
  /* harmony export (immutable) */ __webpack_exports__['a'] = cube;
  function square(x) {
    return x * x;
  }

  function cube(x) {
    return x * x * x;
  }
});
```

注意: 上面的 unused harmony export square 注释. 如果你观察它下面的代码, 你会注意到虽然我们没有引用 square, 但它仍然被包含在 bundle 中, 在正式环境将被删除

### 19.2 将文件标记为 side-effect-free(无副作用)

在一个纯粹的 ESM 模块世界中, 很容易识别出哪些文件有副作用. 然而, 我们的项目无法达到这种纯度. 所以, 此时有必要提示 webpack compiler 哪些代码是 "纯粹部分"

通过 package.json 的 "sideEffects" 属性, 来实现这种方式

```json
{
  "sideEffects": false
}
```

如果所有代码都不包含副作用, 我们就可以简单地将该属性标记为 false, 来告知 webpack 它可以安全地删除未用到的 export

注意: 所有导入文件都会受到 tree shaking 的影响. 这意味着, 如果在项目中使用类似 css-loader 并 import 一个 CSS 文件, 则需要将其添加到 side effect 列表中, 以免在生产模式中无意中将它删除

```json
{
  "sideEffects": ["*.css", "*.scss"]
}
```

### 19.3 压缩输出结果

通过 import 和 export 语法, 我们已经找出需要删除的 "未引用代码(dead code)". 然而, 不仅仅是要找出, 还要在 bundle 中删除它们. 为此, 我们需要将 mode 配置选项设置为 production

## 20. Code Splitting

作用:

- 分离业务代码和第三方库
- 按需加载(利用 import 语法)
- 防止业务代码修改时重新加载

默认情况下, 它只会影响到按需加载的 chunks, 因为修改 initial chunks 会影响到项目的 HTML 文件中的脚本标签

webpack 将根据以下条件自动拆分 chunks:

- 新的 chunk 可以被共享, 或者模块来自于 node_modules 文件夹
- 新的 chunk 体积大于 20kb(在进行 min+gz 之前的体积)
- 当按需加载 chunks 时, 并行请求的最大数量小于或等于 30
- 加载初始化页面时, 并发请求的最大数量小于或等于 30

**chunks**

- async(默认值): 默认只对异步导入模块进行分割, 同步代码不分割
- all: 对异步和同步导入(import())的模块都进行代码分割
- initial: 对初始化代码模块进行代码分割

```javascript
module.exports = {
  output: {
    path: resolve('dist'),
    filename: pathData => {
      return pathData.chunk.name === 'main' ? 'app.[contenthash].js' : '[name].[contenthash].js'
    },
    chunkFilename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 数值越大, 权重越大
          chunks: 'initial' // 仅仅拆分初始化模块
        },
        lodash: {
          name: 'chunk-lodash', // 将lodash拆分为单独的包
          priority: 20, // 权重应该高于 lib 和 app, 防止被打包进 lib 和 app
          test: /[\\/]node_modules[\\/]lodash/
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 3, // 拆分前必须共享模块的最小 chunks 数
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  }
} 
```

## 21. 预获取/预加载模块(prefetch/preload module)

在声明 import 时, 使用下面这些内置指令, 可以让 webpack 输出 "resource hint(资源提示)", 来告知浏览器:

- prefetch(预获取): 将来某些导航下可能需要的资源
- preload(预加载): 当前导航下可能需要资源

`注意:` 只要父 chunk 完成加载, webpack 就会添加 prefetch hint(预取提示)

- preload chunk 会在父 chunk 加载时, 以并行方式开始加载. prefetch chunk 会在父 chunk 加载结束后开始加载
- preload chunk 具有中等优先级, 并立即下载. prefetch chunk 在浏览器闲置时下载
- preload chunk 会在父 chunk 中立即请求, 用于当选时刻. prefetch chunk 会用于未来的某个时刻
- 浏览器支持程度不同

`注意:` 不正确地使用 webpackPreload 会有损性能, 请谨慎使用

```javascript
// main.js
document.addEventListener('click', () => {
  import(/* webpackPreload: true */ /* webpackChunkName: 'preload'  */ './preload')
  import(/* webpackPrefetch: true */ /* webpackChunkName: 'prefetch'  */ './prefetch')
})
```

## 22. CSS 文件的代码分割与压缩

```sh
yarn add css-minimizer-webpack-plugin mini-css-extract-plugin
```

在 webpack.config.js 配置

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true, // 在开发环境开启压缩
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}
```

`注意:` 默认情况下, 仅在生产环境开启压缩优化, 如果还想在开发环境启用 CSS 优化, 将 optimization.minimize 设置为 true

## 23. 配置 optimization.runtimeChunk

设置 runtimeChunk 将 chunk 文件的映射关系独立出来, 防止业务代码修改后, 影响第三方库的打包文件 hash 值, 导致浏览器缓存失效

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    runtimeChunk: {
      name: 'single'
    }
  },
  // 关掉性能提示
  performance: false
}
```

## 24. development和productin模式区分打包

### 24.1 新建 build 目录, 新建配置文件

- webpack.common.js
- webpack.dev.js
- webpack.prod.js

### 24.2 配置 package.json

```json
"scripts": {
  "dev": "webpack serve --config ./build/webpack.common.js",
  "build:dev": "webpack --config ./build/webpack.common.js",
  "build:prod": "webpack --env production --config ./build/webpack.common.js"
}
```

## 25. 环境变量的使用

当 webpack 配置导出一个函数时, 一个 "environment" 可以传递给它

```javascript
module.exports = env => {
  // { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true }
  if (env && env.production) {
    return merge(commonConfig, proConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}
```

**env**

```sh
webpack --env production  # env.production = true
```

**node-env**

```sh
webpack --node-env production  # process.env.NODE_ENV = 'production'
```

`注意`: 如果不显示设置 mode 选项, 将采用 --node-env 选项, 例如: --node-env production 会设置 process.env.NODE_ENV 和 mode 的值为 'production'

## 26. output.publicPath

对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说, output.publicPath 是很重要的选项. 如果指定了一个错误的值, 则在加载这些资源时会收到 404 错误

```javascript
module.exports = {
  output: {
    publicPath: '/'
  }
}
```
