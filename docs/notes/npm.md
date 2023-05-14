# npm

## 1. 初始化一个新项目

```sh
npm init
```

## 2. 安装依赖包

```sh
npm i [package]
npm i [package]@[version]
```

## 3. 全局安装依赖

```sh
npm i -g [package]
```

## 4. 将依赖项添加到不同依赖项类别中

```sh
npm i [package]
npm i [package] -D
```

## 5. 移除依赖包

```sh
npm rm [package]
```

## 6. 安装项目的全部依赖

```sh
npm i
```

## 7. 登录 registry

```sh
npm login
```

## 8. 退出 registry

```sh
npm logout
```

## 9. 发布包

```sh
npm publish
```

## 10. 使用淘宝源

```sh
npm config set registry https://registry.npmmirror.com
npm get registry
```

## 11. 改回源

```sh
npm config set registry https://registry.npmjs.org
```


## 12. 查看全局包

```sh
npm list -g
```

## 13. 更新包

```sh
npm upgrade [package]
```

## 14. nvm 使用淘宝源

```sh
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

## 15. 依赖包版本号

版本号的格式为：主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号：主版本号的变化，代表的是功能大幅修改，一般不兼容老版本
- 次版本号：次版本号的变化，功能部分修改，兼容老版本
- 修订号：修补版本号的变化，不涉及功能，只是修复bug，兼容老版本

```json
"dependencies": {
  "aaa": "^2.5.16",
  "bbb": "~2.5.16",
  "ccc": "2.5.16"
}
```

- ^: 表示安装最新的次版本号，修订号
- ~: 表示安装最新的修订号
- 无符号：表示安装指定版本号

> 注意：目前 `npm` 和 `yarn` 默认安装依赖都采用 `^` 来修饰版本


## 16. package-lock.json

当 `package.json` 和 `package-lock.json` 里的版本号不一致时，实际安装的依赖是什么版本？

- 如果版号本前面无符号，则实际安装的版本就是 `package.json` 里的固定版本
- 如果版本号前面有符号:
  - 大版本（对于^来说，大版本就是版本号第1位；对于~来说，大版本就是第1位和第2位）不一致，实际安装的版本为版本号前面符号控制的最新版本
  - 大版本一致，比较小版本或补丁版本大小：
    - `package.json` > `package-lock.json`，实际安装的版本为版本号前面符号控制的最新版本
    - `package.json` < `package-lock.json`，实际安装的版本为当前版本
