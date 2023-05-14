# charles

## 1. 电脑端抓包

电脑charles客户端下载ssl证书 `Help -> SSL Proxying -> Install Charles Root Certificate`

![](../\.vuepress\public\images\ssl.png)

安装证书

![](../\.vuepress\public\images\install.png)

选择本地计算机

![](../\.vuepress\public\images\select.png)

选择将所有的证书放入下列储存,点击浏览,然后选择受信用的根证书颁发机构

![](../\.vuepress\public\images\storage.png)

勾选 Windows Proxy

![](../\.vuepress\public\images\proxy.png)

## 2. 手机端抓包

下载手机端证书

![](../\.vuepress\public\images\phone_pem.png)

手机端安装证书

![](../\.vuepress\public\images\phone_install.png)

查看ip

![](../\.vuepress\public\images\ip.png)

设置代理

![](../\.vuepress\public\images\phone_proxy.png)

## 3. 域名端口设置

在 `Proxy->SSL Proxying Settings` 中添加所需要的主机和端口, 如下图

![ ](../\.vuepress\public\images\setting.png)

在 `Tools->Allow List` 配置白名单

![](../\.vuepress\public\images\list.png)

捕获特定域名

![](../\.vuepress\public\images\record.png)

![](../\.vuepress\public\images\record_setting.png)