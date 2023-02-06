import { markdownConfig } from './plugins/code-plugin';

module.exports = {
  markdown: {
    config: markdownConfig
  },
  head: [
    [
      'link', { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  base: "/seven-bi-docs/",
  themeConfig: {
    siteTitle: 'Seven-Bit-UI',
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/examples/button/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }],
    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          collapsible: true, //是不是可以动态展开
          items: [
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '快速开始',
              link: '/guide/start'
            }
          ]
        }
      ],
      '/examples/': [
        {
          text: '基础组件',
          collapsible: true, //是不是可以动态展开
          items: [
            {
              text: 'Button 按钮',
              link: '/examples/button/'
            },
            {
              text: 'Link 按钮',
              link: '/examples/link/'
            }
          ]
        },
        {
          text: '反馈组件',
          collapsible: true,
          items: [
            {
              text: '对话框 Modal',
              link: '/examples/modal/'
            },
            {
              text: '结果页 Result',
              link: '/examples/result/'
            },
            {
              text: '加载中 Spin',
              link: '/examples/spin/'
            },
            {
              text: '进度条 Progress',
              link: '/examples/progress/'
            }
          ]
        }
      ]
    }
  }
};
