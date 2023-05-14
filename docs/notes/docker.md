# docker

## 1. 容器和Docker

### 1.1 什么是容器化?

容器化是将应用程序或服务、其依赖项及其配置(抽象化为部署清单文件)一起打包为容器映像的一种软件开发方法. 容器化应用程序在容器主机上运行, 而容器主机在 OS (Linux 或 Windows) 上运行. 因此, 容器的占用比虚拟机(VM)映像小得多

**容器化的特点**:

- 一致的运行环境
- 可伸缩性
- 更方便的移植
- 隔离性

## 2. 什么是Docker?

`Docker`是用GO语言开发的应用容器引擎, 基于容器化, 沙箱机制的应用部署技术

**Docker中的三个重要概念:**

- 镜像(image): 分片的(只读)文件系统, 由Dockerfile创建. 独立、易扩展、更效率
- 容器(container): 由Docker进程创建和管理的: 文件系统+系统资源+网络配置+日志管理. docker是docker镜像的运行环境, 所以容器的概念及比较好理解了
- 仓库(registry): 用来远端存储docker镜像. 版本控制、变更管理、为持续集成与快速部署提供便利

## 3. Docker的工作原理

使用基于java的tomcat镜像->docker run->指定端口/挂载webapp目录->服务启动

1. Docker会自己拉取镜像,若本地已经存在该镜像,则不用到网上去领取
2. 创建新的容器
3. 分配文件系统并且挂着一个可读写的层,任何修改容器的操作都会被记录在这个读写层上,你可以保存这些修改成新的镜像,也可以选择不保存,那么下次运行改镜像的时候所有修改操作都会被消除
4. 分配网络\桥接接口,创建一个允许容器与本地主机通信的网络接口
5. 设置ip地址,从池中寻找一个可用的ip地址附加到容器上,换句话说,localhost并不能访问到容器 
6. 运行你指定的程序
7. 捕获并且提供应用输出,包括输入、输出、报错信息

## 4. 安装 Docker

### 4.1 执行 get-docker.sh 脚本:

```sh
sudo sh get-docker.sh --mirror Aliyun
```

### 4.2 配置daemon.json

```sh
mkdir -p /ect/docker
cd /etc/docker

# daemon.json
{
  "registry-mirrors": ["https://sfm3m2vn.mirror.aliyuncs.com"]
}

# 重启docker
sudo service docker restart 
# 查看docker镜像
sudo docker info|grep Mirrors -A 1
```

## 5. Docker 常用命令

### 5.1 image 镜像

- 下载镜像 `docker pull <image-name>:<tag>`
- 查看所有镜像 `docker images`
- 删除镜像 `docker rmi <image-id>`
- 上传镜像 `docker push <username>/<repository>:<tag>`, 需要先注册 hub.docker.com

> 注意: 如果 `docker images` 出现 REPOSITO RY 是 `<none>` 的情况, 可以运行 `docker image prune` 删除

### 5.2 container 容器

- 启动容器 `docker run -p xxxx:xxxx -v=hostPath:containerPath --name <container-name> <image-name>`
  - `-p` 端口映射
  - `-v` 数据卷，文件映射
  - `-d` 后台运行
  - `--name` 容器名称
- 查看所有容器 `docker ps`, 加 `-a` 显示隐藏的容器
- 停止容器 `docker stop <container-id>`
- 删除容器 `docker rm <container-id>`, 加 `-f` 是强制删除
- 查看容器信息, 如 IP 地址 `docker inspect <container-id>`
- 查看容器日志 `docker logs <container-id>`
- 进入容器控制台 `docker exec -it <container-id> /bin/sh`

## 6. nginx

### 6.1 安装 nginx

```sh
docker pull nginx

sudo docker run -p 9999:80 -d -v /home/oyy/html:/usr/share/nginx/html --name nginx nginx
```

## 7. Dockerfile

一个简单的配置文件, 描述如何构建一个新的 image 镜像

> 注意: 必须是 `Dockerfile` 这个文件名, 必须在项目的根目录

### 7.1 语法

```sh
FROM nginx:alpine

COPY dist /www
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

```sh
user  root;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
  worker_connections  1024;
}

http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
  access_log  /var/log/nginx/access.log  main;
  sendfile        on;
  keepalive_timeout  65;

  server {
    listen       80;
    server_name  localhost;

    location / {
      # 不缓存html，防止程序更新后缓存继续生效
      if ($request_filename ~* .*\.(?:htm|html)$) {
        add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
        access_log on;
      }
      root   /www/;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
    }

    #     # 后台接口地址
    #     proxy_pass http://192.168.1.99:30597/v1;
    #     proxy_redirect default;
    #     add_header Access-Control-Allow-Origin *;
    #     add_header Access-Control-Allow-Headers X-Requested-With;
    #     add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    # }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
  }
}
```

### 7.2 构建

```sh
# -f: 指定 Dockerfile 目录
docker build -f docker/Dockerfile -t symbian-admin:1.0.0 .
docker build -f docker/Dockerfile -t <name> .
docker images
```



