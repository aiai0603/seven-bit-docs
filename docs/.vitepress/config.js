import { markdownConfig } from './plugins/code-plugin';
import guide from './utils/guide.js';
import general from './utils/general.js';
import layout from './utils/layout.js';
import feedback from './utils/feedback.js';
import dataEntry from './utils/dataEntry.js';
import dataDisplay from './utils/dataDisplay.js';
import router from './utils/router.js';

module.exports = {
  base: "/",
  lastUpdated: true,
  markdown: {
    config: markdownConfig
  },
  head: [
    [
      'link', { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    siteTitle: 'Seven-Bit-UI',
    logo: '/logo.svg',
    lastUpdatedText: '最近更新',
    outlineTitle: '页面目录',
    nav: [
      { text: '开发指南', link: '/guide/start' },
      { text: '组件使用', link: '/examples/button/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }],
    sidebar: {
      '/guide/': guide,
      '/examples/': [general, layout, feedback, dataEntry, dataDisplay, router]
    },
    footer: {
      message: '在第五届青训营的契机下，本组件库由 Seven 团队协作完成开发并遵守 <a href="https://github.com/ox4f5da2/seven-bit-docs/blob/master/LICENSE">MIT 许可证</a>',
      copyright: 'Copyright © 2023-现在 Seven'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    editLink: {
      pattern: 'https://github.com/ox4f5da2/seven-bit-docs/tree/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    }
  }
};
