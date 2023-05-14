# pnpm

## 1. 全局下载安装最新 pnpm

```sh
npm i -g pnpm
```

## 2. 安装依赖包

```sh
pnpm add [package]
pnpm add [package]@[version]
```

## 3. 将依赖项添加到不同依赖项类别中

```sh
pnpm add [package]
pnpm add [package] -D
```

## 4. 移除依赖包

```sh
pnpm remove [package]
```

## 5. 安装项目的全部依赖

```sh
pnpm i
```

## 6. 登录 npm registry

```sh
pnpm login
```

## 7. 退出 npm registry

```sh
pnpm logout
```

## 8. 发布 npm 包

```sh
pnpm publish
```

## 9. 使用淘宝源

```sh
pnpm config set registry https://registry.npmmirror.com
pnpm get registry
```

## 10. 改回 npm 源

```sh
pnpm config set registry https://registry.npmjs.org
```

## 11. 更新包

```sh
pnpm upgrade [package]
```
