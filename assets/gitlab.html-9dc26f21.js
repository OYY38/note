import{_ as a,p as s,q as n,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> gitlab</h1><h2 id="_1-gitlab镜像" tabindex="-1"><a class="header-anchor" href="#_1-gitlab镜像" aria-hidden="true">#</a> 1. gitlab镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找Gitlab镜像</span>
<span class="token function">docker</span> search gitlab

<span class="token comment"># 拉取Gitlab镜像</span>
<span class="token function">docker</span> pull gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-启动gitlab容器" tabindex="-1"><a class="header-anchor" href="#_2-启动gitlab容器" aria-hidden="true">#</a> 2. 启动gitlab容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
 <span class="token parameter variable">-itd</span>  <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9980</span>:80 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9922</span>:22 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/gitlab/etc:/etc/gitlab  <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/gitlab/log:/var/log/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/gitlab/opt:/var/opt/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
 gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>-i</td><td>以交互模式运行容器通, 常与 -t 同时使用命令解释</td></tr><tr><td>-t</td><td>为容器重新分配一个伪输入终端,通常与 -i 同时使用</td></tr><tr><td>-d</td><td>后台运行容器,并返回容器ID</td></tr><tr><td>-p 9980:80</td><td>将容器内80端口映射至宿主机9980端口,这是访问gitlab的端口</td></tr><tr><td>-p 9922:22</td><td>将容器内22端口映射至宿主机9922端口,这是访问ssh的端口</td></tr><tr><td>-v /home/gitlab/etc:/etc/gitlab</td><td>将容器/etc/gitlab目录挂载到宿主机/home/gitlab/etc目录下，若宿主机内此目录不存在将会自动创建</td></tr><tr><td>--restart always</td><td>容器自启动</td></tr><tr><td>--privileged=true</td><td>让容器获取宿主机root权限</td></tr><tr><td>--name gitlab</td><td>设置容器名称为gitlab</td></tr><tr><td>gitlab/gitlab-ce</td><td>镜像的名称</td></tr></tbody></table><h2 id="_3-修改root密码" tabindex="-1"><a class="header-anchor" href="#_3-修改root密码" aria-hidden="true">#</a> 3. 修改root密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 进入容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
 
<span class="token comment"># 进入控制台</span>
gitlab-rails console <span class="token parameter variable">-e</span> production
 
<span class="token comment"># 查询id为1的用户,id为1的用户是超级管理员</span>
user <span class="token operator">=</span> User.where<span class="token punctuation">(</span>id:1<span class="token punctuation">)</span>.first
<span class="token comment"># 修改密码</span>
<span class="token assign-left variable">user.password</span><span class="token operator">=</span><span class="token string">&#39;zzyyo038&#39;</span>
<span class="token comment"># 保存</span>
user.save<span class="token operator">!</span>
<span class="token comment"># 退出</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-内存过高解决" tabindex="-1"><a class="header-anchor" href="#_4-内存过高解决" aria-hidden="true">#</a> 4. 内存过高解决</h2><h3 id="_4-1-进入容器" tabindex="-1"><a class="header-anchor" href="#_4-1-进入容器" aria-hidden="true">#</a> 4.1 进入容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-找到配置文件" tabindex="-1"><a class="header-anchor" href="#_4-2-找到配置文件" aria-hidden="true">#</a> 4.2 找到配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/gitlab/gitlab.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-用编辑器去掉下面的注释" tabindex="-1"><a class="header-anchor" href="#_4-3-用编辑器去掉下面的注释" aria-hidden="true">#</a> 4.3 用编辑器去掉下面的注释</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>puma<span class="token punctuation">[</span><span class="token string">&#39;worker_processes&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-重载配置" tabindex="-1"><a class="header-anchor" href="#_4-4-重载配置" aria-hidden="true">#</a> 4.4 重载配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-5-重启" tabindex="-1"><a class="header-anchor" href="#_4-5-重启" aria-hidden="true">#</a> 4.5 重启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-6-查看内存" tabindex="-1"><a class="header-anchor" href="#_4-6-查看内存" aria-hidden="true">#</a> 4.6 查看内存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-7-也可以重启容器" tabindex="-1"><a class="header-anchor" href="#_4-7-也可以重启容器" aria-hidden="true">#</a> 4.7 也可以重启容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止</span>
<span class="token function">docker</span> stop xxx
<span class="token comment"># 启动</span>
<span class="token function">docker</span> start xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-修改配置" tabindex="-1"><a class="header-anchor" href="#_5-修改配置" aria-hidden="true">#</a> 5. 修改配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#进容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
 
<span class="token comment">#修改gitlab.rb</span>
<span class="token function">vi</span> /etc/gitlab/gitlab.rb
 
<span class="token comment">#gitlab访问地址,可以写域名.如果端口不写的话默认为80端口</span>
external_url <span class="token string">&#39;http://192.168.124.194&#39;</span>
<span class="token comment">#ssh主机ip</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_ssh_host&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;192.168.124.194&#39;</span>
<span class="token comment">#ssh连接端口</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_shell_ssh_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9922</span>
 
<span class="token comment"># 让配置生效</span>
gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[t];function d(r,c){return s(),n("div",null,l)}const o=a(i,[["render",d],["__file","gitlab.html.vue"]]);export{o as default};
