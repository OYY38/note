# yarn

## 1. 初始化一个新项目

```sh
yarn init
```

## 2. 添加依赖包

```sh
yarn add [package]
yarn add [package]@[version]
```

## 3. 将依赖项添加到不同依赖项类别中

```sh
yarn add [package]
yarn add [package] --dev
```

## 4. 更换为淘宝源

```sh
yarn config set registry https://registry.npmmirror.com
yarn config get registry
```

## 5. 移除依赖包

```sh
yarn remove [package]
```

## 6. 安装项目的全部依赖

```sh
yarn
```

## 7. 登录 registry

```sh
yarn login
```

## 8. 退出 registry

```sh
yarn logout
```

## 9. 发布包

```sh
yarn publish
```

## 10. 更新包

```sh
yarn upgrade [package]
```
