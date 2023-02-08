import { markdownConfig } from './plugins/code-plugin';
import guide from './utils/guide.js';
import general from './utils/general.js';
import layout from './utils/layout.js';
import feedback from './utils/feedback.js';
import dataEntry from './utils/dataEntry.js';
import dataDisplay from './utils/dataDisplay.js';

module.exports = {
  base: "/",
  lastUpdated: '上次更新时间',
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
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '组件', link: '/examples/button/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }],
    sidebar: {
      '/guide/': guide,
      '/examples/': [general, layout, feedback, dataEntry, dataDisplay]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Seven'
    }
  }
};
