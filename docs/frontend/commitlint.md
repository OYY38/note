
# commitlint

## 1. husky、lint-staged、commitlint

### 1.1 husky 配置

安装

```
pnpm add husky -D
```

在 package.json 中的 scripts 脚本里新加一行

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

使用 `pnpm prepare` 执行脚本, 会在根目录下有一个 `.husky` 的目录, 运行 `npx husky add .husky/pre-commit 'pnpm lint-staged'`, 这时会在这个 `.husky/pre-commit` 中有一条命令 `pnpm lint-staged`. 当 git commit 时候, 会先运行 lint-staged 的脚本校验整个项目, 通过后才可以提交成功

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint-staged
```

### 1.2 lint-staged 配置

安装

```
pnpm add lint-staged -D
```

在 package.json 中新增配置

```
// vite 配置
"lint-staged": {
  "src/**/*.{js,vue,ts}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ]
}
// webpack 配置
"lint-staged": {
  "src/**/*.{js,vue}": [
    "prettier --write",
    "vue-cli-service lint",
    "git add"
  ]
}
```

### 1.3 commitlint 配置

安装

```
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

在项目根目录的控制台运行命令 `npx husky add .husky/commit-msg 'pnpm commitlint --edit ${1}'`, 这时会自动在根目录 `.husky` 下新增文件 commit-msg, 其中内容如下:

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm commitlint --edit $1
```

然后在项目根目录下新增 `commitlint.config.js` 配置文件

```js
module.exports = {
  // 继承的规则
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型
  rules: {
    // type 类型定义, 表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "feat", // 增加新功能
        "fix", // 修复 bug
        "add", // 增加代码逻辑
        "del", // 删除功能
        "update", // 更新功能
        "docs", // 文档相关的改动
        "style", // 不影响代码逻辑的改动, 例如修改空格, 缩进等
        "build", // 构造工具或者相关依赖的改动
        "refactor", // 代码重构
        "revert", // 撤销, 版本回退
        "test", // 添加或修改测试
        "perf", // 提高性能的改动
        "chore", // 修改 src 或者 test 的其余修改, 例如构建过程或辅助工具的变动
        "ci", // CI 配置, 脚本文件等改动
        'workflow', // 工作流改动
        'types', // 类型定义文件改动
        'wip', // 开发中
        'release', // 发布新版本
      ]
    ],
    // subject 大小写不做校验
    "subject-case": [0]
  },
};
```
当我们 `commit` 提交信息时, 就不能再随意写了, 必须是 `git commit -m 'fix: xxx`' 符合类型的才可以, 需要注意的是类型的后面需要用英文的 `:`, 并且冒号后面是需要空一格的, 这个是不能省略的
