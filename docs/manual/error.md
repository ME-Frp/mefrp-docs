# 错误指引
1. API 403 隧道信息错误/使用实名节点但未实名认证</br>
（一般是用户问题）
2. API 404 用户密钥错误</br>
（一般也是用户问题）
3. GET XXXXXXXX :EOF 节点无法连接至API 
（节点问题/CDN问题） 
4. dial tcp xxxxxxxx:xxx
这种错误有两种种情况</br>
一是</br>
dial tcp 0.0.0.0:7000 命令错误 你是不是打成 frpc(.exe) -c frps.ini 了</br>
dial tcp 127.0.0.1:7000 配置文件未保存或配置文件写到frps.ini或者打成了frpc(.exe)没有指定配置文件</br>
括号内内容为window内容 如果你是linux用户 请删去括号内的字段</br>
windows正确命令 frpc.exe -c frpc.ini</br>
linux正确命令 ./frpc -c frpc.ini</br>
二是dial tcp 实际ip:2333</br>
这种情况是节点崩溃亦或是ddns未刷新，可以先等待5-10分钟，如果还是没好，请按[错误报告](/manual/understand.html#%E6%8A%A5%E5%91%8A%E9%97%AE%E9%A2%98)在qq群中向管理员报告
5.Start frps success</br>
这个问题一般是你启动成frps了
参照正确命令修改即可
6.windows 公版启动器 bat 闪退怎麽办
首先在 bat 尾部 回车加上pause
就像这样
``` cmd
frpc.exe -c frpc.ini
```
修改为
``` cmd
frpc.exe -c frpc.ini
pause
```
