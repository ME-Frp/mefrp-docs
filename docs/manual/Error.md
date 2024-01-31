# Frpc 启动各种报错

## 问题汇总大纲
1. 启动的时候提示 404 Not Found.
2. 启动的时候提示 403.
3. 启动的时候提示 i/o deadline.
4. 启动的时候提示 message EOF.
5. 启动的时候提示"nslookup xxx.mefrp.com / xxx.mcserverx.com failed".
6. 启动的时候提示"start error: port already used".
7. 启动的时候提示"frp start error: router config conflict".
8. 启动的时候提示"Get 'https://api.mefrp.com/api/v3/start?action=checktoken&apitoken=MEFrptoken%7C14&timestamp=xxxxxxx&token=xxxxxxxxxxx&user=xxxxxxxxx':dial tcp:lookup api.mefrp.com on xxx.xxx.xxx.xxx:53: dial udp xxx.xxx.xxx.xxx:53: socket: too many open files"

## 注：4xx 开头报错一般都是用户配置问题，请自查。5xx 开头一般都是服务问题，请联系管理员
### 1. 启动的时候提示 404 Not Found.

1. 请登录``控制台`` -> ``隧道列表``查看您当前启动的隧道是否已经添加，若已经添加了但启动的时候还是提示``404 Not Found``请联系管理员为您辅助解决。

### 2. 启动的时候提示 403.

1. 请检查自己是否有权限使用该节点，即你有没有完成实名认证并找管理审核。

### 3. 启动的时候提示 i/o deadline.

出现这个报错的问题不在于用户，可能是服务器遭受到恶意攻击所致！

1. 这种情况出现的时候问题不出于用户，请用浏览器打开网址：https://www.mefrp.com 检查是否能够访问，若能访问，请检查数据库服务器和主站服务器是否宕机，若发现服务器掉线（DOWN），请及时联系管理员重启服务器，服务器可能遭到恶意攻击而导致宕机，若该网站无法访问，说明服务器已经全部宕机，请等待大约一天时间机房恢复，映射已经启动的不受影响。

### 4. 启动的时候提示 message EOF.

1. 这种问题的出现请进入聊天群查看是否有记录表示在当前时间点要对服务器进行维护，出现这个报错的时候说明服务器没有返回数据，也就是传统意义上的掉线了。
2. 如果过了一段时间仍旧报错，请前往网站 https://www.mefrp.com 查看当前映射服务器是否在线。
3. 也有可能是你自身网络或者机房网络波动导致的掉线，这种情况下过一会就会自动重连。

### 5. 启动的时候提示"nslookup api.mefrp.com / xxx.mcserverx.com failed".
1. 更换自己的DNS服务器为 223.6.6.6 / 223.5.5.5.
2. 也有可能是服务器找不到DNS的原因，请联系管理员处理.
3. 更换方式自行百度.

### 6. 启动的时候提示"start error: port already used".
1. 更换自己的远程端口，该远程端口已被系统服务或被其他用户占用.
2. 当然也有可能是你自己开了两个客户端.

### 7. 启动的时候提示"frp start error: router config conflict".
1. 这个报错是因为服务端有一个绑定域名一模一样的隧道已经被启动并且运行正常而返回的报错，可以更换自己的绑定域名，或者检查自己有没有在本地同时开启两个客户端.

### 8. 启动的时候提示"Get 'https://api.mefrp.com/api/v3/start?action=checktoken&apitoken=MEFrptoken%7C14&timestamp=xxxxxxx&token=xxxxxxxxxxx&user=xxxxxxxxx': dial tcp:lookup api.mefrp.com on xxx.xxx.xxx.xxx:53: dial udp xxx.xxx.xxx.xxx:53: socket: too many open files"
1. 节点 Frps too many open files，导致无法启动，请在群内按照 “@管理员 [节点 too many open files] 节点：xxx节点” 的消息形式通告管理员修复。