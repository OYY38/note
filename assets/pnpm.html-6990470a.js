import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h1><h2 id="_1-全局下载安装最新-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-全局下载安装最新-pnpm" aria-hidden="true">#</a> 1. 全局下载安装最新 pnpm</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖包" aria-hidden="true">#</a> 2. 安装依赖包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-将依赖项添加到不同依赖项类别中" tabindex="-1"><a class="header-anchor" href="#_3-将依赖项添加到不同依赖项类别中" aria-hidden="true">#</a> 3. 将依赖项添加到不同依赖项类别中</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-移除依赖包" tabindex="-1"><a class="header-anchor" href="#_4-移除依赖包" aria-hidden="true">#</a> 4. 移除依赖包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> remove <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-安装项目的全部依赖" tabindex="-1"><a class="header-anchor" href="#_5-安装项目的全部依赖" aria-hidden="true">#</a> 5. 安装项目的全部依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-登录-npm-registry" tabindex="-1"><a class="header-anchor" href="#_6-登录-npm-registry" aria-hidden="true">#</a> 6. 登录 npm registry</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-退出-npm-registry" tabindex="-1"><a class="header-anchor" href="#_7-退出-npm-registry" aria-hidden="true">#</a> 7. 退出 npm registry</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-发布-npm-包" tabindex="-1"><a class="header-anchor" href="#_8-发布-npm-包" aria-hidden="true">#</a> 8. 发布 npm 包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-使用淘宝源" tabindex="-1"><a class="header-anchor" href="#_9-使用淘宝源" aria-hidden="true">#</a> 9. 使用淘宝源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
<span class="token function">pnpm</span> get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-改回-npm-源" tabindex="-1"><a class="header-anchor" href="#_10-改回-npm-源" aria-hidden="true">#</a> 10. 改回 npm 源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-更新包" tabindex="-1"><a class="header-anchor" href="#_11-更新包" aria-hidden="true">#</a> 11. 更新包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),c=[d];function p(r,t){return n(),s("div",null,c)}const o=a(i,[["render",p],["__file","pnpm.html.vue"]]);export{o as default};