# 隧道相关教程
## 隧道创建
### 节点选择
您可先在右上部菜单的 状态 处查看 服务器在线状态</br>
![status](https://forum.laecloud.com/assets/files/2022-11-14/1668389831-408815-capture-20221113214756441.jpg)
从列表中选择 在线 且相对与您地理位置较近的节点
::: warning 不要盲从他人建议
一般的，对于我们的现有节点，网络条件都是十分良好的，且稳定性也是极高的</br>
节点相对于您的个人网络会有不同的情况</br>
因此，请不要询问譬如:"哪个节点好用啊~"，"哪个节点稳定"，“你们用的都是什么节点啊~”的问题
:::
### 隧道创建
点击 上栏的 ```镜缘映射``` 即可进入 ```隧道列表```.
随后点击下方的 ```创建隧道``` 即可
![create](https://forum.laecloud.com/assets/files/2022-11-14/1668389820-684008-capture-20221113214831401.jpg)
填写 ```隧道名称```  ```本地地址``` 
::: tip 本地地址格式
```本地IP地址:本地端口```.
本地IP 一般是 ```127.0.0.1```.
本地端口则取决于您运行的具体服务，例如:
- Minecraft Java 服务器为 25565
- 网站端口为80/443
:::
#### TCP/UDP 隧道
该类型隧道的特殊参数为 ```远程端口```.
一般的，该参数会自动生成，需要注意的是，有时该参数需要随意切换一个节点，再切换回来才会生成.
::: danger 严禁
国内节点严禁使用 TCP 协议穿透 text/html （即网页）类型服务！！！
:::
#### HTTP(S) 隧道
该类型隧道特殊参数 为 ```绑定域名```.
即您想进行访问的域名.
::: tip
需要将该域名 CNAME 解析到 节点域名上
:::
确认信息后，点击 ```创建``` 即可
## 隧道管理
点击隧道名称，即可进入隧道管理界面.
![dashboard](https://forum.laecloud.com/assets/files/2022-11-14/1668394756-54976-capture-20221114105646070.jpg)
::: tip
-您可直接点击隧道名来修改隧道名
-您可在此页查看隧道配置文件
-您也可在首页查看隧道配置文件
:::