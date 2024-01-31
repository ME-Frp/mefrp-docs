module.exports = {
    title: 'ME Frp | 镜缘映射 文档',
    themeConfig: {
      nav: [
        { text: 'ME Frp | 镜缘映射 文档', link: '/' },
        { text: 'ME Frp | 镜缘映射 API 文档', link: 'https://apidoc.mefrp.com' },
        { text: 'ME Frp | 镜缘映射', link: 'https://www.mefrp.com' },
        { text: 'MirrorEdge Network', link: 'https://www.mcserverx.com' },
      ],
      sidebar:
      [ ['/manual/understand', '开始之前'],
          //目录1
          {
            title: '网站使用',
            children: [
              ['/manual/account', '账户相关'],
              ['/manual/tunnel', '隧道相关'],
            ]
          },
          {
            title: '客户端的使用',
            children: [
              ['/manual/mefrp', 'ME Frp 官方快捷启动 启动器'],
            ]
          },
          //{
          //    title: '不同系统下的使用',
          //    children: [
          //        ['/manual/Windows', 'Windows 系统下的使用'],
          //        ['/manual/Linux', 'Linux 系统下的使用'],
          //        ['/manual/Synology', 'Synology DSM 系统下的使用'],
          //    ]
          //},
          {
              title: '附录',
              children: [
                  ['/manual/QA', '如何优雅的提问'],
                  ['/manual/YiNanZaZheng', '各种疑难杂症'],
                  ['/manual/Error', 'Frpc 不同报错的解释'],
              ]
          }
      ]
  }
}
