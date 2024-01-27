# Me Frp 快捷启动器

## 下载
Me Frp 启动器下载地址：[点这下载](https://www.mefrp.com/console/download)<br/>
打开后您会看到客户端下载页面（如图所示）![mefrp_client](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_20.png)<br/>
选择对应您系统架构的客户端<br/>
::: tip
系统架构说明：<br/>
`amd64` 为64位的系统，`386` 为32位的系统，`arm64` 为ARM 64位的系统。<br/>
![mefrp_any_client](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_21.png)
:::
## Windows 系统的使用
下载并解压对应系统架构的``Windows MEFrp``快捷启动客户端并解压。
![001](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_22.png)<br/>
![001](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_23.png)<br/>
双击打开文件夹，点击右上方的文件地址栏，输入`powershell`/`cmd`，然后回车。(Windows 10/11 有PowerShell。)
PowerShell：
![002](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_25.png)<br/>
CMD：![cmd](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_26.png)
<br/>
回到`镜缘映射控制台`，找到自己创建的隧道。
![003](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_7.png)
<br/>
点击`详细信息`，复制`Windows 用户请使用`后面的启动命令。（例：.\frpc -t 39bfa3c22801b6cb730db4b8xxxxxxxx -i 16400）
![004](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_27.png)
<br/>
回到``PowerShell``/`cmd`页面，粘贴启动命令并回车。
![005](https://pub-85e6735d6fa64ced86e5fdeca790a982.r2.dev/MEFrp_28.png)
<br/>
