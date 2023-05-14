# gitlab

## 1. gitlab镜像

```sh
# 查找Gitlab镜像
docker search gitlab

# 拉取Gitlab镜像
docker pull gitlab/gitlab-ce:latest
```

## 2. 启动gitlab容器

```sh
# 启动容器
docker run \
 -itd  \
 -p 9980:80 \
 -p 9922:22 \
 -v /home/gitlab/etc:/etc/gitlab  \
 -v /home/gitlab/log:/var/log/gitlab \
 -v /home/gitlab/opt:/var/opt/gitlab \
 --restart always \
 --privileged=true \
 --name gitlab \
 gitlab/gitlab-ce
```

| 命令                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| -i                              | 以交互模式运行容器通, 常与 -t 同时使用命令解释               |
| -t                              | 为容器重新分配一个伪输入终端,通常与 -i 同时使用              |
| -d                              | 后台运行容器,并返回容器ID                                    |
| -p 9980:80                      | 将容器内80端口映射至宿主机9980端口,这是访问gitlab的端口      |
| -p 9922:22                      | 将容器内22端口映射至宿主机9922端口,这是访问ssh的端口         |
| -v /home/gitlab/etc:/etc/gitlab | 将容器/etc/gitlab目录挂载到宿主机/home/gitlab/etc目录下，若宿主机内此目录不存在将会自动创建 |
| --restart always                | 容器自启动                                                   |
| --privileged=true               | 让容器获取宿主机root权限                                     |
| --name gitlab                   | 设置容器名称为gitlab                                         |
| gitlab/gitlab-ce                | 镜像的名称                                                   |

## 3. 修改root密码

```sh

# 进入容器内部
docker exec -it gitlab /bin/bash
 
# 进入控制台
gitlab-rails console -e production
 
# 查询id为1的用户,id为1的用户是超级管理员
user = User.where(id:1).first
# 修改密码
user.password='zzyyo038'
# 保存
user.save!
# 退出
exit

```

## 4. 内存过高解决

### 4.1 进入容器

```sh
docker exec -it gitlab /bin/bash
```

### 4.2 找到配置文件

```sh
vi /etc/gitlab/gitlab.rb
```

### 4.3 用编辑器去掉下面的注释

```sh
puma['worker_processes'] = 2
```

### 4.4 重载配置

```sh
docker exec -it gitlab gitlab-ctl reconfigure
```

### 4.5 重启

```sh
docker exec -it gitlab gitlab-ctl restart
```

### 4.6 查看内存

```sh
docker stats
```

### 4.7 也可以重启容器

```sh
# 停止
docker stop xxx
# 启动
docker start xxx
```

## 5. 修改配置

```sh

#进容器内部
docker exec -it gitlab /bin/bash
 
#修改gitlab.rb
vi /etc/gitlab/gitlab.rb
 
#gitlab访问地址,可以写域名.如果端口不写的话默认为80端口
external_url 'http://192.168.124.194'
#ssh主机ip
gitlab_rails['gitlab_ssh_host'] = '192.168.124.194'
#ssh连接端口
gitlab_rails['gitlab_shell_ssh_port'] = 9922
 
# 让配置生效
gitlab-ctl reconfigure
```

