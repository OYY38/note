import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h2 id="_1-nginx-是什么" tabindex="-1"><a class="header-anchor" href="#_1-nginx-是什么" aria-hidden="true">#</a> 1. nginx 是什么？</h2><p>nginx 是一个高性能的 HTTP 和反向代理服务器，同时也提供了 IMAP/POP3/SMTP 服务</p><h2 id="_2-正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#_2-正向代理和反向代理" aria-hidden="true">#</a> 2. 正向代理和反向代理？</h2><ul><li>正向代理：正向代理 &quot;代理&quot; 的是客户端，而且客端是知道目标的，而目标是不知道客户端是通过 &quot;代理&quot; 来访问的，例如：通过 <code>VPN</code> 访问谷歌（中介）</li><li>反向代理：当我们在外网访问百度的时候，其实会进行一个转发，代理到内网去，这就是所谓的方向代理，即反向代理 &quot;代理&quot; 的是服务器端，而且这一个过程对于客户端而言是透明的（二手房东）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx
<span class="token comment"># 检查配置文件</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 运行</span>
<span class="token function">sudo</span> nginx
<span class="token comment"># 关闭</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 重启</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function c(o,d){return s(),a("div",null,l)}const p=n(i,[["render",c],["__file","nginx.html.vue"]]);export{p as default};
