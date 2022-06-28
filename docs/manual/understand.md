# 基本知识
# 理解 Frp 的基本内容
Frp 是一个高性能的内网穿透应用，我们可以通过 Frp 映射网站，游戏服务器.......
# ME Frp 启动器选择的说明

1.ME Frp 对于 Windows 用户开发了一款基于 Bat 的启动器叫做 ME Frp Bat 启动器。</br>
2.对于 Linux 用户我们暂时推荐您使用公版 Frp。

# 对于ME Frp 文档中一些关键名词的解释
# 1.用户密钥/Token
![2022/06/27/6DxEWxVG.png](https://alpha-q3.sourcegcdn.com/2022/06/27/6DxEWxVG.png)
啊对对对，就是上图中的位置，复制下来，你就得到了你的 Token 。
::: danger 警告
不要将任何还有 token 的页面截图亦或是 token 发送给别人，不过即使泄露，您也可以通过重置密码来重置token
:::
# 2.配置文件
对于Frp用户来说，配置文件一般指的是公版 Frp 解压之后一个叫做 "frpc.ini" 的文件在该文件中存储了节点信息、隧道信息等。在 ME Frp 中您看到的配置文件会是这样的。
![2022/06/27/j1BubQ2L.jpeg](https://alpha-q3.sourcegcdn.com/2022/06/27/j1BubQ2L.jpeg)
当然这是没有创建隧道的状态，如果创建了隧道则会变得长一些。</br>
那么此时有小伙伴会说了啊，我显示 Array 怎么办啊?</br>
这个问题主要有两个原因:</br>
1.是您没有选择节点(因为 Sakura 面板配置文件是默认获取1号节点的数据，可是你看看 ME Frp 有#1节点吗?没有
2.浏览器Bug或者是网站因为某些原因加载过慢:只需要在访问链接后面加上 &server=节点序号 即可节点序号这四个字需要替换为创建隧道时#后面的数字
# 报告问题
[QQ群](https://qm.qq.com/cgi-bin/qm/qr?k=5P6R7Ua2m-kL0ZHdqJdk8ko9_JnzWHhn&authKey=CBs1P+euvOr4aAgdBYM3fBgxtfTvWYKXB7r1TOMfM1OVybBdG0zfmYqVTw9I6ETR&noverify=0)
</br>
::: danger 最后一点
向管理员报告 Bug 时请一定带上</br>
节点名称: 例如北京阿里云</br>
什么启动器:例如bat启动器/公版启动器</br>
是否实名认证</br>
否则管理员也不知道问题在哪里这种情况管理员一般 拒绝 回答你的问题! 
:::