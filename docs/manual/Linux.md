# Linux 系统下的使用
:::tip
Demo 环境：Debian 11 <br>
Demo 机器来源：Google Cloud Platform <br>
Demo 机器地区：新加坡 <br>
客户端下载请前往[MEFrp客户端下载站](https://www.mefrp.com/console/download)，客户端系统架构类型请前往[点这下载](https://docs.mefrp.com/manual/mefrp.html)查看。
:::

## 连接方式
1. 使用 `CMD` / `PowerShell` 或` VNC` 连接服务器。
`CMD` / `PowerShell` 连接：`Win`+`R`打开`运行`，输入 `CMD` / `PowerShell` 即可打开。
<br>
CMD：
![001](https://mefrp.docs.pic.iuos.asia/MEFrp_30.png)
PowerShell：
![001](https://mefrp.docs.pic.iuos.asia/MEFrp_31.png)
VNC：
![001](https://mefrp.docs.pic.iuos.asia/MEFrp_32.png)

::: tip
此处仅用 PowerShell 进行 SSH 连接作为演示，CMD 连接方式与 PowerShell 连接命令相同，此处不演示 CMD 连接。<br>
因此处使用 Google Cloud Platform Computer Engine作为演示，此处才出现 VNC 连接，在本地 Linux 环境没有 VNC 环境，且每个云厂商的 VNC 页面不同，此处不再演示，也不再赘述 VNC 连接。
:::

2. 第三方 SSH 客户端 (FinalShell XShell等)。
此处不进行演示，选择适合您的连接方式即可。

## 连接 Liunx 机器。
Powershell 中输入 `ssh xxxx@114.51.141.91` 如果默认是`root`用户，请把`xxxx`改为`root` （`ssh root@114.51.141.91`），如果 SSH 端口不是 22 端口，请在命令末端加入`-p`参数 （`ssh root@114.51.141.91 -p xxx`），如果连接端口没有改变则不加`-p`参数。<br>
非 Root 用户：
![0001](https://mefrp.docs.pic.iuos.asia/MEFrp_33.png)
Root 用户：
![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_34.png)
如果您默认连接的用户名不是`root`，请输入 `sudo -i` 切换成 `root` 用户，部分系统切换成 `root` 用户需要再次确认用户密码。
![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_35.png)

## 安装必要程序
纯净Linux系统中，默认不会自带 `wget` 和 ，我们需要安装 `wget`。<br>
CentOS 类：`yum -y install wget` <br>
Ubuntu / Debian 类：`apt-get -y install wget`
![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_36.png)
[此系统已安装 `wget`。]

## 下载客户端到Linux 系统中
1. 前往[MEFrp客户端下载站](https://www.mefrp.com/console/download)中选择自己系统对应系统架构的客户端。客户端系统架构类型请前往[点这下载](https://docs.mefrp.com/manual/mefrp.html)查看。
2. 进入 MEFrp客户端下载站 后选择适合您系统架构的客户端，在最右侧的`点击这里下载`，右键选择复制链接。然后使用`wget`命令下载并使用`tar`解压。<br>
   `wget https://download.mefrp.com:8123/MirrorEdgeFrp_0.51.3_linux_xxx.tar.gz`<br>
   ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_41.png)
    `tar -zxvf MirrorEdgeFrp_0.51.3_linux_xxx.tar.gz`
   ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_42.png)

## 进入 MEFrpc 目录并启动 MEFrpc
1. 进入 MEFrpc 目录。 <br> `cd MirrorEdgeFrp_0.51.3_linux_xxx` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_43.png)
2. 给予 MEFrpc 文件755权限。 <br> `chmod 755 frpc frpc.ini` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_44.png)
3. 执行启动命令。（在 `镜缘映射|隧道列表`中点击需要启动的隧道右侧的`详细信息`进行查看）。 `./frpc -t 39bfa3c22801b6cb730db4bxxxxxxxxx -i 164xx` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_45.png)

## 安装 Screen 并将 MEFrpc 挂载到后台进行运行
纯净Linux系统中，默认不会自带 `screen` 和 ，我们需要安装 `screen`。<br>
CentOS 类：`yum -y install screen` <br>
Ubuntu / Debian 类：`apt-get -y install screen`
![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_46.png)
[此系统已安装 `screen`。] <br>

将 MEFrpc 挂载到后台进行运行：
1. 创建 Screen 窗口。 `screen -S MEFrpc` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_47.png)
2. 进入 MEFrpc 目录。 `cd MirrorEdgeFrp_0.51.3_linux_xxx` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_43.png)
3. 执行启动命令。（在 `镜缘映射|隧道列表`中点击需要启动的隧道右侧的`详细信息`进行查看）。 `./frpc -t 39bfa3c22801b6cb730db4bxxxxxxxxx -i 164xx` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_45.png)
4. 退出 Screen 窗口。 `Ctrl`+`A`+`D` ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_48.png)

如何回到 MEFrpc Screen 窗口：输入 `screen -r MEFrpc`。 ![0002](https://mefrp.docs.pic.iuos.asia/MEFrp_49.png)







