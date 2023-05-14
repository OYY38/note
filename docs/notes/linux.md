# linux

## 1. 终端命令格式

```sh
command [-options] [parameter]
```

说明:

- command: 命令名, 相应功能的英文单词或单词的缩写
- `[-options]`: 选项, 可用来对命令进行控制, 也可以省略
- `parameter`：传给命令的参数，可以是 **零个**、**一个** 或者 **多个**

> *代表可选*

## 2. 查阅命令帮助信息

### 2.1 --help

```sh
command --help
```

说明:

- 显示 `command` 命令的帮助信息

### 2.2 man(manual)

```sh
man command
```

说明:

- 查阅 `command` 命令的使用手册

## 3. 查看目录内容

### 3.1 ls 命令说明

- `ls` 是英文单词 **list** 的简写, 其功能为列出目录的内容, 是用户最常用的命令之一, 类似于 **DOS** 下的 `dir` 命令

### 3.2 ls 常用选项

| 参数 | 含义                                         |
| ---- | -------------------------------------------- |
| -a   | 显示指定目录下所有子目录与文件, 包括隐藏文件 |
| -l   | 以列表方式显示文件的详细信息                 |
| -h   | 配合 -l 以人性化的方式显示文件大小           |

## 4. 切换目录

### 4.1 cd 命令说明

- `cd` 是英文单词 **change directory** 的简写, 其功能为更改当前的工作目录，也是用户最常用的命令之一

> 注意: Linux 所有的 **目录** *和* **文件名** *都是大小写敏感的*

| 命令  | 含义                                   |
| ----- | -------------------------------------- |
| cd    | 切换到当前用户的主目录(/home/用户目录) |
| cd ~  | 切换到当前用户的主目录(/home/用户目录) |
| cd .  | 保持在当前目录不变                     |
| cd .. | 切换到上级目录                         |
| cd -  | 可以在最近两次工作目录之间来回切换     |

### 4.2 相对路径和绝对路径

- **相对路径** 在输入路径时, 最前面不是 **/** 或者 **~**, 表示相对 **当前目录** 所在的目录位置
- **绝对路径** 在输入路径时, 最前面是 **/** 或者 **~**, 表示从 **根目录/家目录** 开始的具体目录位置

## 5. 创建和删除操作

### 5.1 touch

- 如果文件 **不存在**, 可以创建一个空白文件
- 如果文件 **已经存在**, 可以修改文件的末次修改日期

### 5.2 mkdir

- 创建一个新的目录

| 选项 | 含义             |
| ---- | ---------------- |
| -p   | 可以递归创建目录 |

> **新建目录的名称** *不能与当前目录中* **已有的目录或文件** *同名*

### 5.3 rm

- 删除文件或目录

> *使用* `rm` *命令要小心, 因为文件删除后不能恢复*

| 选项 | 含义                                                  |
| ---- | ----------------------------------------------------- |
| -f   | 强制删除, 忽略不存在的文件, 无需提示                  |
| -r   | 递归地删除目录下的内容, **删除文件夹** 时必须加此参数 |

## 6. 拷贝和移动文件

| 命令               | 对应英文 | 作用                                 |
| :----------------- | :------- | :----------------------------------- |
| tree [目录名]      | tree     | 以树状图列出文件目录结构             |
| cp 源文件 目标文件 | copy     | 复制文件或者目录                     |
| mv 源文件 目标文件 | move     | 移动文件或者目录／文件或者目录重命名 |

### 6.1 tree

- `tree` 命令可以以树状图列出文件目录结构

| 选项 | 含义       |
| :--- | :--------- |
| -d   | 只显示目录 |

### 6.2 cp

- `cp` 命令的功能是将给出的 **文件** 或 **目录** 复制到另一个 **文件** 或 **目录** 中, 相当于 **DOS** 下的 `copy` 命令

| 选项 | 含义                                                         |
| :--- | :----------------------------------------------------------- |
| -i   | 覆盖文件前提示                                               |
| -r   | 若给出的源文件是目录文件, 则 cp 将递归复制该目录下的所有子目录和文件,目标文件必须为一个目录名 |

### 6.3 mv

- `mv` 命令可以用来 **移动** **文件** 或 **目录**, 也可以给 **文件或目录重命名**

| 选项 | 含义           |
| :--- | :------------- |
| -i   | 覆盖文件前提示 |

## 7. 查看文件内容

| 命令                 | 对应英文    | 作用                                                 |
| :------------------- | :---------- | :--------------------------------------------------- |
| cat 文件名           | concatenate | 查看文件内容、创建文件、文件合并、追加文件内容等功能 |
| more 文件名          | more        | 分屏显示文件内容                                     |
| grep 搜索文本 文件名 | grep        | 搜索文本文件内容                                     |

### 7.1 cat

- `cat` 命令可以用来 **查看文件内容**、**创建文件**、**文件合并**、**追加文件内容** 等功能
- `cat` 会一次显示所有的内容, 适合 **查看内容较少** 的文本文件

| 选项 | 含义               |
| :--- | :----------------- |
| -b   | 对非空输出行编号   |
| -n   | 对输出的所有行编号 |

### 7.2 more

- `more` 命令可以用于分屏显示文件内容, 每次只显示一页内容
- 适合于 **查看内容较多**的文本文件

使用 `more` 的操作键:

| 操作键   | 功能                 |
| :------- | :------------------- |
| 空格键   | 显示手册页的下一屏   |
| Enter 键 | 一次滚动手册页的一行 |
| b        | 回滚一屏             |
| f        | 前滚一屏             |
| q        | 退出                 |
| /word    | 搜索 **word** 字符串 |

### 7.3 grep

- linux 系统中 `grep` 命令是一种强大的文本搜索工具
- `grep`允许对文本文件进行 **模式**查找

| 选项 | 含义                       |
| :--- | :------------------------- |
| -n   | 显示匹配行及行号           |
| -v   | 显示不包含匹配文本的所有行 |
| -i   | 忽略大小写                 |

- 常用的两种模式查找

| 参数 | 含义                         |
| :--- | :--------------------------- |
| ^a   | 行首，搜寻以 **a** 开头的行  |
| ke$  | 行尾，搜寻以 **ke** 结束的行 |

## 8. 其他

### 8.1 echo 文字内容

- `echo` 会在终端中显示参数指定的文字, 通常会和 **重定向** 联合使用

### 8.2 重定向 `>` 和 `>>`

- linux 允许将命令执行结果 **重定向** 到一个 **文件**
- 将本应显示在**终端上的内容** **输出／追加** 到**指定文件中**

其中

- `>` 表示输出, 会覆盖文件原有的内容

- `>>` 表示追加, 会将内容追加到已有文件的末尾

### 8.3 管道 |

- linux 允许将 **一个命令的输出** 可以 **通过管道** 做为 **另一个命令的输入**
- 可以理解现实生活中的管子, 管子的一头塞东西进去, 另一头取出来, 这里 `|` 的左右分为两端, 左端塞东西(写), 右端取东西(读)

常用的管道命令有:

- `more`: 分屏显示内容
- `grep`: 在命令执行结果的基础上查询指定的文本

### 8.4 pwd

- pwd 命令是 print work directory 的缩写, 打印当前工作目录

## 9. 关机/重启

| 命令               | 对应英文 | 作用           |
| :----------------- | :------- | :------------- |
| shutdown 选项 时间 | shutdown | 关机／重新启动 |

### 9.1 shutdown

- `shutdown` 命令可以 **安全** **关闭** 或者 **重新启动系统**

| 选项 | 含义     |
| :--- | :------- |
| -r   | 重新启动 |

> *提示:*
>
> - **不指定选项和参数**, 默认表示 **1 分钟**之后 **关闭电脑**
> - 远程维护服务器时, 最好不要关闭系统, 而应该重新启动系统

- 常用命令实例

```sh
# 重新启动操作系统, 其中 now 表示现在
shutdown -r now

# 立刻关机, 其中 now 表示现在
shutdown now

# 系统在今天的 20:25 会关机
shutdown 20:25

# 系统再过十分钟后自动关机
shutdown +10

# 取消之前指定的关机计划
shutdown -c
```

## 10. 查看或配置网卡信息

| 对应英文    | 作用                          |                                   |
| :---------- | :---------------------------- | --------------------------------- |
| ifconfig    | configure a network interface | 查看/配置计算机当前的网卡配置信息 |
| ping ip地址 | ping                          | 检测到目标 ip地址 的连接是否正常  |

### 10.1 ifconfig

- `ifconfig` 可以查看/配置计算机当前的网卡配置信息

```sh
# 查看网卡配置信息
ifconfig

# 查看网卡对应的 IP 地址
ifconfig | grep inet
```

### 10.2 ping

```sh
# 检测到目标主机是否连接正常
ping IP地址

# 检测本地网卡工作正常
ping 127.0.0.1
```

## 11. 远程登录

### 11.1 Xshell 密码登录

```sh
# 安装ssh-server服务器
sudo apt-get install openssh-server
sudo vim /etc/ssh/sshd_config

# 端口
Port 22
# 允许 root 用户登录
PermitRootLogin yes
# 密码登录
PasswordAuthentication yes

# 生成ssh密钥
ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key

# 重启 ssh 服务
sudo service ssh --full-restart
```

### 11.2 Xshell 密钥登录

```sh
# 查看 ssh 服务是否启动
ps -e | grep ssh

# 生成密钥
ssh-keygen

# 在服务器上安装公钥
cd .ssh
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
chmod 700 /root/.ssh

sudo vim /etc/ssh/sshd_config

# 密钥登录 
PubkeyAuthentication yes

# 重启 ssh 服务
sudo service ssh --full-restart
```

> 注意: 将私钥  `id_rsa` 下载到客户端, 使用 xshell 连接时导入


## 12. apt 卸载

```sh
# 该命令将移除与`packagename`相关联的所有二进制文件
apt-get remove packagename
# 移除与包packagename相关联的所有文件, 这些文件包括二进制文件和全局配置文件
apt-get remove --purge packagename
# 卸载当前系统中的不被任何包依赖了的包
apt-get autoremove 
```

## 13. 配置环境变量

```sh
vim /etc/profile
# 在文件最后一行添加: 
export JAVA_HOME=/opt/jdk-17.0.6
export PATH=$JAVA_HOME/bin:$PATH

source /etc/profile
```

## 14. 软件源更换

```sh
# 备份
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 修改
sudo vim /etc/apt/sources.list

deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse

# 更新镜像源
sudo apt-get update
```

## 15. 用户权限

### 15.1 基本概念

- **用户** 是 Linux 系统工作中重要的一环, 用户管理包括 **用户** 与 **组** 管理
- 在 Linux 中, 可以指定 **每一个用户** 针对 **不同的文件或者目录** 的 **不同权限**
- 在 **文件/目录** 的权限包括

|序号|权限|英文|缩写| 数字代号 |
|---|---|---|---|------|
|01|读|read|r| 4    |
|02|写|write|w| 2    |
|03|执行|excute|x| 1    |

### 15.2 组

- 为了方便用户管理, 提出了 **组** 的概念, 如下图所示

![](../\.vuepress\public\images\developmentGroup.png)

- 在实际应用中, 可以预先针对 **组** 设置好权限, 然后 **将不同的用户添加到对应的组中**, 从而 **不用依次为每一个用户设置权限**

### 15.3 ls -l 扩展

- `ls l` 可以查看文件夹下文件的详细信息, 如下图所示

![](../\.vuepress\public\images\authority.png)

### 15.4 chmod

- chmod 可以修改 **用户/组** 对 **文件/目录** 的权限
- 命令格式如下:

```
chmod +/-rwx 文件名|目录名
```

> 注意: 以上方式会一次性修改 **拥有者/组** 权限

### 15.5 组管理

**创建组/删除组** 的终端命令都需要通过 `sudo` 执行

|序号|命令| 作用             |
|---|---|----------------|
|01|groupadd组名| 添加组            |
|02|groupdel组名| 删除组            |
|03|cat /etc/group| 确认组信息          |
|04|chgrp -R 组名 文件/目录名| 递归修改文件/目录的所属组  |

> 提示:
> - 组信息保存在 `/etc/group` 文件中
> - `/etc` 目录是专门用来保存 **系统配置信息** 的目录

- 在实际应用中, 可以预先针对 **组** 设置好权限, 然后 **将不同的用户添加到对应的组中**, 从而**不用依次为每一个用户设置权限**

### 15.6 用户管理

> 注意: **创建用户/删除用户/修改其他用户密码** 的终端命令都需要通过 `sudo` 执行

**创建用户/设置密码/删除用户**

|序号| 命令                | 作用             | 说明                                     |
|---|-------------------|----------------|----------------------------------------|
|01| useradd -m -g 组 新建用户名 |添加新用户| -m 自动建立用户家目录, -g 指定用户所在的组，否则会建立一个和同名的组 |
|02| passwd 用户名        |设置用户密码| 如果是普通用户,直接用 passwd 可以修改自己的账户密码         |
|03| userdel -r 用户名    |删除用户| -r 选项会自动删除用户家目录                        |
|04| cat \/etc\/passwd &#124; grep 用户名| 确认用户信息                         | 新建用户后，用户信息会保存在 /etc/passwd 文件中         |

> 提示:
> - 创建用户时, 如果忘记添加 `-m` 选项指定新用户的家目录 —— 最简单的方法就是 **删除用户, 重新创建**
> - 创建用户时, 默认会创建一个和**用户名**同名的**组名**
> - 用户信息保存在 `/etc/passwd` 文件中

**查看用户信息**

| 序号  |命令| 作用  |
|-----|----|-----|
| 01  |id [用户名]|查看用户 UID 和 GID 信息|
| 02  |who|查看当前所有登录的用户列表|
| 03  |whoami|查看当前登录用户的账户名|

**passwd文件**

`/etc/passwd` 文件存放的是用户的信息, 由 6 个分号组成的 7 个信息, 分别是

- 用户名
- 密码(x, 表示加密的密码)
- UID(用户标识)
- GID(组标识)
- 用户全名或本地帐号
- 家目录
- 登录使用的 Shell, 就是登录之后, 使用的终端命令, `ubuntu` 默认是 `dash`


**usermod**

> 提示: 设置了用户的附加组之后, 需要重新登录才能生效

```sh
# 修改用户的主组(passwd 中的 GID)
usermod -g 组 用户名

# 修改用户的附加组
usermod -G 组 用户名
```

> 注意: 默认使用 `useradd` 添加的用户是没有权限使用 `sudo` 以 `root` 身份执行命令的, 可以使用以下命令, 将用户添加到 `sudo` 附加组中

```sh
usermod -G sudo 用户名
```

> 提示
> - `/etc/passwd` 是用于保存用户信息的文件
> - `/usr/bin/passwd` 是用于修改用户密码的程序

## 16. which


- `which` 命令可以查看执行命令所在位置, 例如:

```sh
which ls

# 输出
# /bin/ls

which useradd

# 输出
# /usr/sbin/useradd
```

## 17. bin和sbin

- 在 `Linux` 中, 绝大多数可执行文件都是保存在 `/bin`、`/sbin`、`/usr/bin`、`/usr/sbin`
- `/bin`(`binary`)是二进制执行文件目录, 主要用于具体应用
- `/sbin`(`system binary`)是系统管理员专用的二进制代码存放目录, 主要用于系统管理
- `/usr/bin`(`user commands for applications`)后期安装的一些软件
- `/usr/sbin`(`super user commands for applications`)超级用户的一些管理程序

> 注意:
>
> - `cd` 这个终端命令是内置在系统内核中的, 没有独立的文件, 因此用 `which` 无法找到 `cd` 命令的位置

## 18. 切换用户

|序号|命令|作用| 说明                      |
|------|----|----|-------------------------|
|01|su - 用户名|切换用户, 并且切换目录| - 可以切换到用户家目录,否则保持位置不变   |
|02|exit|切换用户, 并且切换目录| - 可以切换到用户家目录,否则保持位置不变   |

```sh
# 登录root用户
sudo -s

# 设置root用户密码
sudo passwd root

# 退出root
exit
```

> 注意:
> `su` 不接用户名, 可以切换到 `root`, 但是不推荐使用, 因为不安全

## 19. 修改文件权限

| 序号  | 命令    | 作用      |
|-----|-------|---------|
| 01  | chown | 修改拥有者   |
|02|chgrp| 修改组     |
|03|chmod| 修改权限    |

- 命令格式如下:

```sh
# 修改文件|目录的拥有者
chown 用户名 文件名|目录名

# 递归修改文件|目录的组
chgrp -R 组名 文件名|目录名

# 递归修改文件权限
chmod -R 755 文件名|目录名
```

- `chmod` 在设置权限时, 可以简单地使用三个数字分别对应 **拥有者**／**组** 和 **其他** 用户的权限

```sh
# 直接修改文件|目录的 读|写|执行 权限, 但是不能精确到 拥有者|组|其他
chmod +/-rwx 文件名|目录名
```

![](../\.vuepress\public\images\mod.png)

- 常见数字组合有(`u` 表示用户/`g`表示组/`o`表示其他)
    - `777` ===> `u=rwx,g=rwx,o=rwx`
    - `755` ===> `u=rwx,g=rx,o=rx`
    - `644` ===> `u=rw,g=r,o=r`

## 20. 查找文件

- `find` 命令功能非常强大, 通常用来在 `特定的目录下搜索` 符合条件的文件

|序号|命令|作用|
|01|find [路径] -name "*.py"|查找指定路径下扩展名是 .py 的文件,包括子目录|

- 如果省略路径, 表示在当前文件夹下查找
- 之前学习的通配符, 使用 find 命令时同时可用

## 21. 软链接

|序号|命令| 作用                                   |
|----|-----|--------------------------------------|
|01|ln -s 被链接的源文件 链接文件| 建立文件的软链接, 用通俗的方式讲类似于 Windows 下的快捷方式  |

> 注意:
> - 没有 `-s` 选项建立的是一个 **硬链接文件**
    >   - 两个文件占用相同大小的硬盘空间, **工作中几乎不会建立文件的硬链接**
> - `源文件要使用绝对路径`, 不能使用相对路径, 这样可以方便移动链接文件后, 仍然能够正常使用

**文件软硬链接的示意图**

![](../\.vuepress\public\images\link.png)

> 在 Linux 中, **文件名** 和 **文件的数据** 是分开存储的

- 提示:
    - 在 Linux 中，只有文件的 `硬链接数 == 0` 才会被删除
    - 使用 `ls -l` 可以查看一个文件的硬链接的数量
    - 在日常工作中, 几乎不会建立文件的硬链接, 知道即可

## 22. 打包压缩

### 22.1 打包／解包

- `tar` 是 Linux 中最常用的 `备份` 工具, 此命令可以 `把一系列文件` 打包到 `一个大文件中`, 也可以把一个 `打包的大文件恢复成一系列文件`
- `tar` 的命令格式如下:

```sh
# 打包文件
tar -cvf 打包文件.tar 被打包的文件/路径...

# 解包文件
tar -xvf 打包文件.tar
```

- `tar` 选项说明

|选项| 含义                                     |
|-----|----------------------------------------|
|c| 生成档案文件,创建打包文件                          |
|x| 解开档案文件                                 |
|v| 列出归档解档的详细过程, 显示进度                      |
|f| 指定档案文件名称, f 后面一定是 .tar 文件, 所以必须放选项最后   |

> 注意: f 选项必须放在最后, 其他选项顺序可以随意

### 22.1 压缩/解压缩

- `tar` 与 `gzip` 命令结合可以使用实现文件 **打包和压缩**
    - `tar` 只负责打包文件, 但不压缩
    - 用 `gzip` 压缩 `tar` 打包后的文件, 其扩展名一般用 `xxx.tar.gz`

> 在 `Linux` 中, 最常见的压缩文件格式就是 `xxx.tar.gz`

- 在 `tar` 命令中有一个选项 -z 可以调用 `gzip`, 从而可以方便的实现压缩和解压缩的功能
- 命令格式如下:

```sh
# 压缩文件
tar -zcvf 打包文件.tar.gz 被压缩的文件/路径...

# 解压缩文件
tar -zxvf 打包文件.tar.gz

# 解压缩到指定路径
tar -zxvf 打包文件.tar.gz -C 目标路径
```

|选项| 含义                          |
|----|-----------------------------|
|-C| 解压缩到指定目录, 注意: 要解压缩的目录必须存在   |\

## 23. 软件安装

- apt 是 `Advanced Packaging Tool`, 是 Linux 下的一款安装包管理工具
- 可以在终端中方便的 **安装／卸载／更新软件包**

```sh
# 安装软件
sudo apt install 软件包

# 卸载软件
sudo apt remove 软件名

# 更新已安装的包
sudo apt upgrade 
```

## 24. 防火墙

```sh
# 查看防火墙状态
sudo ufw status

# 开启防火墙
sudo ufw enable

# 关闭防火墙
sudo ufw disable

# 允许端口
sudo ufw allow 端口号

# 拒绝端口
sudo ufw deny 端口号

# 防火墙重启
sudo ufw reload
```
