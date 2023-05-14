import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><h2 id="_1-变量和作用域" tabindex="-1"><a class="header-anchor" href="#_1-变量和作用域" aria-hidden="true">#</a> 1. 变量和作用域</h2><h3 id="_1-1-变量" tabindex="-1"><a class="header-anchor" href="#_1-1-变量" aria-hidden="true">#</a> 1.1 变量</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-作用域" aria-hidden="true">#</a> 1.2 作用域</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>   <span class="token comment">// 只在 h1 里头有用, 局部作用域</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后, 双引号注释会被编译到 css 文件中 */</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-嵌套规则与属性" tabindex="-1"><a class="header-anchor" href="#_2-嵌套规则与属性" aria-hidden="true">#</a> 2. 嵌套规则与属性</h2><h3 id="_2-1-嵌套规则" tabindex="-1"><a class="header-anchor" href="#_2-1-嵌套规则" aria-hidden="true">#</a> 2.1 嵌套规则</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul </span><span class="token punctuation">{</span>
  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">ul li </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-嵌套属性" tabindex="-1"><a class="header-anchor" href="#_2-2-嵌套属性" aria-hidden="true">#</a> 2.2 嵌套属性</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-混合指令" tabindex="-1"><a class="header-anchor" href="#_3-混合指令" aria-hidden="true">#</a> 3. 混合指令</h2><h3 id="_3-1-定义混合指令" tabindex="-1"><a class="header-anchor" href="#_3-1-定义混合指令" aria-hidden="true">#</a> 3.1 定义混合指令</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token selector">important-text </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.danger </span><span class="token punctuation">{</span>
  <span class="token comment">// 引用混合样式</span>
  <span class="token keyword">@include</span> important-text<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">.danger </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-参数" tabindex="-1"><a class="header-anchor" href="#_3-2-参数" aria-hidden="true">#</a> 3.2 参数</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">bordered</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$width</span> solid <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.myArticle </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">bordered</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">.myArticle </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-继承" tabindex="-1"><a class="header-anchor" href="#_4-继承" aria-hidden="true">#</a> 4. 继承</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.button-basic  </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px 30px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-report  </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .button-basic<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">.button-basic, .button-report </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px 30px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-report  </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-父选择器" tabindex="-1"><a class="header-anchor" href="#_5-父选择器" aria-hidden="true">#</a> 5. 父选择器</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">a:hover </span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-插值语句" tabindex="-1"><a class="header-anchor" href="#_6-插值语句" aria-hidden="true">#</a> 6. 插值语句 <code>#{}</code></h2><p>通过 <code>#{}</code> 插值语句可以在选择器或属性名中使用变量</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>
<span class="token selector">p.<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">p.foo </span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[t];function i(l,o){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","scss.html.vue"]]);export{r as default};
