import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1. 变量</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-混合" tabindex="-1"><a class="header-anchor" href="#_2-混合" aria-hidden="true">#</a> 2. 混合</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-嵌套" tabindex="-1"><a class="header-anchor" href="#_3-嵌套" aria-hidden="true">#</a> 3. 嵌套</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-作用域" tabindex="-1"><a class="header-anchor" href="#_4-作用域" aria-hidden="true">#</a> 4. 作用域</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token selector">#page</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
  
  <span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后, 单行注释不会编译到 css 中</span>
<span class="token selector">#page #header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function l(c,o){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","less.html.vue"]]);export{u as default};
