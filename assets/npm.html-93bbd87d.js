import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><h2 id="_1-初始化一个新项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化一个新项目" aria-hidden="true">#</a> 1. 初始化一个新项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖包" aria-hidden="true">#</a> 2. 安装依赖包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">npm</span> i <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-全局安装依赖" tabindex="-1"><a class="header-anchor" href="#_3-全局安装依赖" aria-hidden="true">#</a> 3. 全局安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-将依赖项添加到不同依赖项类别中" tabindex="-1"><a class="header-anchor" href="#_4-将依赖项添加到不同依赖项类别中" aria-hidden="true">#</a> 4. 将依赖项添加到不同依赖项类别中</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">npm</span> i <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-移除依赖包" tabindex="-1"><a class="header-anchor" href="#_5-移除依赖包" aria-hidden="true">#</a> 5. 移除依赖包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-安装项目的全部依赖" tabindex="-1"><a class="header-anchor" href="#_6-安装项目的全部依赖" aria-hidden="true">#</a> 6. 安装项目的全部依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-登录-registry" tabindex="-1"><a class="header-anchor" href="#_7-登录-registry" aria-hidden="true">#</a> 7. 登录 registry</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-退出-registry" tabindex="-1"><a class="header-anchor" href="#_8-退出-registry" aria-hidden="true">#</a> 8. 退出 registry</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-发布包" tabindex="-1"><a class="header-anchor" href="#_9-发布包" aria-hidden="true">#</a> 9. 发布包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-使用淘宝源" tabindex="-1"><a class="header-anchor" href="#_10-使用淘宝源" aria-hidden="true">#</a> 10. 使用淘宝源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
<span class="token function">npm</span> get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-改回源" tabindex="-1"><a class="header-anchor" href="#_11-改回源" aria-hidden="true">#</a> 11. 改回源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-查看全局包" tabindex="-1"><a class="header-anchor" href="#_12-查看全局包" aria-hidden="true">#</a> 12. 查看全局包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> list <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_13-更新包" tabindex="-1"><a class="header-anchor" href="#_13-更新包" aria-hidden="true">#</a> 13. 更新包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-nvm-使用淘宝源" tabindex="-1"><a class="header-anchor" href="#_14-nvm-使用淘宝源" aria-hidden="true">#</a> 14. nvm 使用淘宝源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-依赖包版本号" tabindex="-1"><a class="header-anchor" href="#_15-依赖包版本号" aria-hidden="true">#</a> 15. 依赖包版本号</h2><p>版本号的格式为：主版本号.次版本号.修订号，版本号递增规则如下：</p><ul><li>主版本号：主版本号的变化，代表的是功能大幅修改，一般不兼容老版本</li><li>次版本号：次版本号的变化，功能部分修改，兼容老版本</li><li>修订号：修补版本号的变化，不涉及功能，只是修复bug，兼容老版本</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;aaa&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.5.16&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bbb&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~2.5.16&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ccc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.5.16&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>^: 表示安装最新的次版本号，修订号</li><li>~: 表示安装最新的修订号</li><li>无符号：表示安装指定版本号</li></ul><blockquote><p>注意：目前 <code>npm</code> 和 <code>yarn</code> 默认安装依赖都采用 <code>^</code> 来修饰版本</p></blockquote><h2 id="_16-package-lock-json" tabindex="-1"><a class="header-anchor" href="#_16-package-lock-json" aria-hidden="true">#</a> 16. package-lock.json</h2><p>当 <code>package.json</code> 和 <code>package-lock.json</code> 里的版本号不一致时，实际安装的依赖是什么版本？</p><ul><li>如果版号本前面无符号，则实际安装的版本就是 <code>package.json</code> 里的固定版本</li><li>如果版本号前面有符号: <ul><li>大版本（对于^来说，大版本就是版本号第1位；对于~来说，大版本就是第1位和第2位）不一致，实际安装的版本为版本号前面符号控制的最新版本</li><li>大版本一致，比较小版本或补丁版本大小： <ul><li><code>package.json</code> &gt; <code>package-lock.json</code>，实际安装的版本为版本号前面符号控制的最新版本</li><li><code>package.json</code> &lt; <code>package-lock.json</code>，实际安装的版本为当前版本</li></ul></li></ul></li></ul>`,38),c=[d];function l(r,t){return n(),s("div",null,c)}const p=a(i,[["render",l],["__file","npm.html.vue"]]);export{p as default};
