module.exports = {
  themeConfig: {
    siteTitle: false,
    logo: '/icon.png',
    nav: [
      { text: '指南', link: '/guild/install' },
      { text: '组件', link: '/examples/button/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          collapsible: true, //是不是可以动态展开
          collapsed: true, //默认是不是展开
          items: [
            {
              text: '安装',
              link: '/guild/install'
            },
            {
              text: '快速开始',
              link: '/guild/start'
            }
          ]
        }
      ],
      '/examples/': [
        {
          text: '组件',
          collapsible: true, //是不是可以动态展开
          collapsed: true, //默认是不是展开
          items: [
            {
              text: 'Button按钮',
              link: '/examples/button/'
            } ,{
              text: 'Link按钮',
              link: '/examples/link/'
            }
          ]
        }
      ]
    }
  }
};
