import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h1><h2 id="_1-husky、lint-staged、commitlint" tabindex="-1"><a class="header-anchor" href="#_1-husky、lint-staged、commitlint" aria-hidden="true">#</a> 1. husky、lint-staged、commitlint</h2><h3 id="_1-1-husky-配置" tabindex="-1"><a class="header-anchor" href="#_1-1-husky-配置" aria-hidden="true">#</a> 1.1 husky 配置</h3><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add husky -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 package.json 中的 scripts 脚本里新加一行</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>pnpm prepare</code> 执行脚本, 会在根目录下有一个 <code>.husky</code> 的目录, 运行 <code>npx husky add .husky/pre-commit &#39;pnpm lint-staged&#39;</code>, 这时会在这个 <code>.husky/pre-commit</code> 中有一条命令 <code>pnpm lint-staged</code>. 当 git commit 时候, 会先运行 lint-staged 的脚本校验整个项目, 通过后才可以提交成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

pnpm lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-lint-staged-配置" tabindex="-1"><a class="header-anchor" href="#_1-2-lint-staged-配置" aria-hidden="true">#</a> 1.2 lint-staged 配置</h3><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add lint-staged -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 package.json 中新增配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite 配置
&quot;lint-staged&quot;: {
  &quot;src/**/*.{js,vue,ts}&quot;: [
    &quot;prettier --write&quot;,
    &quot;eslint --fix&quot;,
    &quot;git add&quot;
  ]
}
// webpack 配置
&quot;lint-staged&quot;: {
  &quot;src/**/*.{js,vue}&quot;: [
    &quot;prettier --write&quot;,
    &quot;vue-cli-service lint&quot;,
    &quot;git add&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-commitlint-配置" tabindex="-1"><a class="header-anchor" href="#_1-3-commitlint-配置" aria-hidden="true">#</a> 1.3 commitlint 配置</h3><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add @commitlint/config-conventional @commitlint/cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目根目录的控制台运行命令 <code>npx husky add .husky/commit-msg &#39;pnpm commitlint --edit \${1}&#39;</code>, 这时会自动在根目录 <code>.husky</code> 下新增文件 commit-msg, 其中内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

pnpm commitlint --edit $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在项目根目录下新增 <code>commitlint.config.js</code> 配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承的规则</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 定义规则类型</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// type 类型定义, 表示 git 提交的 type 必须在以下类型范围内</span>
    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;feat&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 增加新功能</span>
        <span class="token string">&quot;fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 修复 bug</span>
        <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 增加代码逻辑</span>
        <span class="token string">&quot;del&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 删除功能</span>
        <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 更新功能</span>
        <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文档相关的改动</span>
        <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不影响代码逻辑的改动, 例如修改空格, 缩进等</span>
        <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 构造工具或者相关依赖的改动</span>
        <span class="token string">&quot;refactor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 代码重构</span>
        <span class="token string">&quot;revert&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 撤销, 版本回退</span>
        <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 添加或修改测试</span>
        <span class="token string">&quot;perf&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 提高性能的改动</span>
        <span class="token string">&quot;chore&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 修改 src 或者 test 的其余修改, 例如构建过程或辅助工具的变动</span>
        <span class="token string">&quot;ci&quot;</span><span class="token punctuation">,</span> <span class="token comment">// CI 配置, 脚本文件等改动</span>
        <span class="token string">&#39;workflow&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 工作流改动</span>
        <span class="token string">&#39;types&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 类型定义文件改动</span>
        <span class="token string">&#39;wip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 开发中</span>
        <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 发布新版本</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// subject 大小写不做校验</span>
    <span class="token string-property property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们 <code>commit</code> 提交信息时, 就不能再随意写了, 必须是 <code>git commit -m &#39;fix: xxx</code>&#39; 符合类型的才可以, 需要注意的是类型的后面需要用英文的 <code>:</code>, 并且冒号后面是需要空一格的, 这个是不能省略的</p>`,22),c=[i];function o(l,p){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","commitlint.html.vue"]]);export{u as default};
