# nginx

## 1. nginx 是什么？

nginx 是一个高性能的 HTTP 和反向代理服务器，同时也提供了 IMAP/POP3/SMTP 服务

## 2. 正向代理和反向代理？

- 正向代理：正向代理 "代理" 的是客户端，而且客端是知道目标的，而目标是不知道客户端是通过 "代理" 来访问的，例如：通过 `VPN` 访问谷歌（中介）
- 反向代理：当我们在外网访问百度的时候，其实会进行一个转发，代理到内网去，这就是所谓的方向代理，即反向代理 "代理" 的是服务器端，而且这一个过程对于客户端而言是透明的（二手房东）

```sh
# 安装
sudo apt-get install nginx
# 检查配置文件
sudo nginx -t

# 运行
sudo nginx
# 关闭
sudo nginx -s stop
# 重启
sudo nginx -s reload
```
