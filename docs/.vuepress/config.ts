module.exports = {
    title: 'MirrorEdge Frp 镜缘映射文档',
    themeConfig: {
      nav: [
        { text: 'MirrorEdge Frp手册', link: '/' },
        { text: '莱云论坛', link: 'https://forum.laecloud.com' },
        { text: 'MirrorEdge 镜缘映射', link: 'https://www.mefrp.com' },
        { text: 'MirrorEdge Network', link: 'https://www.mcserverx.com' },
      ],
      sidebar:
      [ ['/manual/understand', '开始之前'],  //目录1
        {
        title: '基本操作',   // 目录2 子目录
        path: '/manual/things1',      // 应为绝对路径且必须存在
        children: [
          ['/manual/system', '选择和下载启动器'],
          ['/manual/Windows', 'Windows 系统'],
          ['/manual/Linux', 'Linux 系统'],
        ]
      },
        ['/manual/error', '错误指引']
      ]
  }
}