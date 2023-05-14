import{_ as n,p as a,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},c=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><h2 id="_1-容器和docker" tabindex="-1"><a class="header-anchor" href="#_1-容器和docker" aria-hidden="true">#</a> 1. 容器和Docker</h2><h3 id="_1-1-什么是容器化" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是容器化" aria-hidden="true">#</a> 1.1 什么是容器化?</h3><p>容器化是将应用程序或服务、其依赖项及其配置(抽象化为部署清单文件)一起打包为容器映像的一种软件开发方法. 容器化应用程序在容器主机上运行, 而容器主机在 OS (Linux 或 Windows) 上运行. 因此, 容器的占用比虚拟机(VM)映像小得多</p><p><strong>容器化的特点</strong>:</p><ul><li>一致的运行环境</li><li>可伸缩性</li><li>更方便的移植</li><li>隔离性</li></ul><h2 id="_2-什么是docker" tabindex="-1"><a class="header-anchor" href="#_2-什么是docker" aria-hidden="true">#</a> 2. 什么是Docker?</h2><p><code>Docker</code>是用GO语言开发的应用容器引擎, 基于容器化, 沙箱机制的应用部署技术</p><p><strong>Docker中的三个重要概念:</strong></p><ul><li>镜像(image): 分片的(只读)文件系统, 由Dockerfile创建. 独立、易扩展、更效率</li><li>容器(container): 由Docker进程创建和管理的: 文件系统+系统资源+网络配置+日志管理. docker是docker镜像的运行环境, 所以容器的概念及比较好理解了</li><li>仓库(registry): 用来远端存储docker镜像. 版本控制、变更管理、为持续集成与快速部署提供便利</li></ul><h2 id="_3-docker的工作原理" tabindex="-1"><a class="header-anchor" href="#_3-docker的工作原理" aria-hidden="true">#</a> 3. Docker的工作原理</h2><p>使用基于java的tomcat镜像-&gt;docker run-&gt;指定端口/挂载webapp目录-&gt;服务启动</p><ol><li>Docker会自己拉取镜像,若本地已经存在该镜像,则不用到网上去领取</li><li>创建新的容器</li><li>分配文件系统并且挂着一个可读写的层,任何修改容器的操作都会被记录在这个读写层上,你可以保存这些修改成新的镜像,也可以选择不保存,那么下次运行改镜像的时候所有修改操作都会被消除</li><li>分配网络\\桥接接口,创建一个允许容器与本地主机通信的网络接口</li><li>设置ip地址,从池中寻找一个可用的ip地址附加到容器上,换句话说,localhost并不能访问到容器</li><li>运行你指定的程序</li><li>捕获并且提供应用输出,包括输入、输出、报错信息</li></ol><h2 id="_4-安装-docker" tabindex="-1"><a class="header-anchor" href="#_4-安装-docker" aria-hidden="true">#</a> 4. 安装 Docker</h2><h3 id="_4-1-执行-get-docker-sh-脚本" tabindex="-1"><a class="header-anchor" href="#_4-1-执行-get-docker-sh-脚本" aria-hidden="true">#</a> 4.1 执行 get-docker.sh 脚本:</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-配置daemon-json" tabindex="-1"><a class="header-anchor" href="#_4-2-配置daemon-json" aria-hidden="true">#</a> 4.2 配置daemon.json</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /ect/docker
<span class="token builtin class-name">cd</span> /etc/docker

<span class="token comment"># daemon.json</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://sfm3m2vn.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重启docker</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart 
<span class="token comment"># 查看docker镜像</span>
<span class="token function">sudo</span> <span class="token function">docker</span> info<span class="token operator">|</span><span class="token function">grep</span> Mirrors <span class="token parameter variable">-A</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-docker-常用命令" tabindex="-1"><a class="header-anchor" href="#_5-docker-常用命令" aria-hidden="true">#</a> 5. Docker 常用命令</h2><h3 id="_5-1-image-镜像" tabindex="-1"><a class="header-anchor" href="#_5-1-image-镜像" aria-hidden="true">#</a> 5.1 image 镜像</h3><ul><li>下载镜像 <code>docker pull &lt;image-name&gt;:&lt;tag&gt;</code></li><li>查看所有镜像 <code>docker images</code></li><li>删除镜像 <code>docker rmi &lt;image-id&gt;</code></li><li>上传镜像 <code>docker push &lt;username&gt;/&lt;repository&gt;:&lt;tag&gt;</code>, 需要先注册 hub.docker.com</li></ul><blockquote><p>注意: 如果 <code>docker images</code> 出现 REPOSITO RY 是 <code>&lt;none&gt;</code> 的情况, 可以运行 <code>docker image prune</code> 删除</p></blockquote><h3 id="_5-2-container-容器" tabindex="-1"><a class="header-anchor" href="#_5-2-container-容器" aria-hidden="true">#</a> 5.2 container 容器</h3><ul><li>启动容器 <code>docker run -p xxxx:xxxx -v=hostPath:containerPath --name &lt;container-name&gt; &lt;image-name&gt;</code><ul><li><code>-p</code> 端口映射</li><li><code>-v</code> 数据卷，文件映射</li><li><code>-d</code> 后台运行</li><li><code>--name</code> 容器名称</li></ul></li><li>查看所有容器 <code>docker ps</code>, 加 <code>-a</code> 显示隐藏的容器</li><li>停止容器 <code>docker stop &lt;container-id&gt;</code></li><li>删除容器 <code>docker rm &lt;container-id&gt;</code>, 加 <code>-f</code> 是强制删除</li><li>查看容器信息, 如 IP 地址 <code>docker inspect &lt;container-id&gt;</code></li><li>查看容器日志 <code>docker logs &lt;container-id&gt;</code></li><li>进入容器控制台 <code>docker exec -it &lt;container-id&gt; /bin/sh</code></li></ul><h2 id="_6-nginx" tabindex="-1"><a class="header-anchor" href="#_6-nginx" aria-hidden="true">#</a> 6. nginx</h2><h3 id="_6-1-安装-nginx" tabindex="-1"><a class="header-anchor" href="#_6-1-安装-nginx" aria-hidden="true">#</a> 6.1 安装 nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx

<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9999</span>:80 <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /home/oyy/html:/usr/share/nginx/html <span class="token parameter variable">--name</span> nginx nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-dockerfile" tabindex="-1"><a class="header-anchor" href="#_7-dockerfile" aria-hidden="true">#</a> 7. Dockerfile</h2><p>一个简单的配置文件, 描述如何构建一个新的 image 镜像</p><blockquote><p>注意: 必须是 <code>Dockerfile</code> 这个文件名, 必须在项目的根目录</p></blockquote><h3 id="_7-1-语法" tabindex="-1"><a class="header-anchor" href="#_7-1-语法" aria-hidden="true">#</a> 7.1 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM nginx:alpine

COPY dist /www
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  root<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
  worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include       /etc/nginx/mime.types<span class="token punctuation">;</span>
  default_type  application/octet-stream<span class="token punctuation">;</span>
  access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>
  sendfile        on<span class="token punctuation">;</span>
  keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

  server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
      <span class="token comment"># 不缓存html，防止程序更新后缓存继续生效</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_filename</span> ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>?:htm<span class="token operator">|</span>html<span class="token punctuation">)</span>$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        add_header Cache-Control <span class="token string">&quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;</span><span class="token punctuation">;</span>
        access_log on<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      root   /www/<span class="token punctuation">;</span>
      index  index.html index.htm<span class="token punctuation">;</span>
      try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#     # 后台接口地址</span>
    <span class="token comment">#     proxy_pass http://192.168.1.99:30597/v1;</span>
    <span class="token comment">#     proxy_redirect default;</span>
    <span class="token comment">#     add_header Access-Control-Allow-Origin *;</span>
    <span class="token comment">#     add_header Access-Control-Allow-Headers X-Requested-With;</span>
    <span class="token comment">#     add_header Access-Control-Allow-Methods GET,POST,OPTIONS;</span>
    <span class="token comment"># }</span>

    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
      root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-构建" tabindex="-1"><a class="header-anchor" href="#_7-2-构建" aria-hidden="true">#</a> 7.2 构建</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -f: 指定 Dockerfile 目录</span>
<span class="token function">docker</span> build <span class="token parameter variable">-f</span> docker/Dockerfile <span class="token parameter variable">-t</span> symbian-admin:1.0.0 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> build <span class="token parameter variable">-f</span> docker/Dockerfile <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),l=[c];function o(t,d){return a(),e("div",null,l)}const p=n(i,[["render",o],["__file","docker.html.vue"]]);export{p as default};
