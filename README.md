# 文档编写

## 组件文档编写
在 `./docs/examples/*` 下建立自己编写的组件说明文档，比如编写了 `button` 组件，就创建 `button/index.md` 文件

## 组件示例编写
展示组件相关效果方法如下：
- 首先在 `./docs/.vitepress/examples/*` 下创建文件夹，名称为组件名字
- 然后编写组件使用示例，每个示例一个 `.vue` 文件
- 然后在需要的地方导入：
```md
## 基础用法
这是组件的基础用法

:::code [vue 文件的路径，比如 modal/modal1.vue 即可]
:::

```

## 文档地址配置
在 `./docs/.vitepress/utils/*` 下有写好的文件，只要大家按自己组件的类型选择相应的文件填写即可：
- dataDisplay -> 数据展示组件
- dataEntry -> 数据录入组件
- feedback -> 反馈组件
- general -> 通用组件

比如 `button` 是通用型组件那么在 `general.js` 内填写，填写规则如下：
- 找到 `items` 字段
- 在该字段内按照如下规则填写：
```js
{
  text: 'Button 按钮',
  link: '/examples/button/'
},
```
其中：
- text: 侧边栏展示文字，以[组件英文名字 + 空格 + 组件中文名字]的规定，且英文名首字母大写
- link: 以 `/examples` 固定开头，后面跟上自己的组件名字，与自己建立的文件夹名字对应，比如创建了 `button` 文件夹，那么 `link`  就填写 `/examples/button/`


## 团队人员信息编写
在 `./docs/.vitepress/utils/member.js` 下有写好的文件，大家只要在里面按如下规则编写即可：
```js
{
  avatar: '', // 头像地址，比如 github 的头像地址
  name: '方哲伟 ✌️', // 名字，自己想叫啥叫啥
  title: '组员', // 职务，一般就是「队长」和「队员」，也可以是其他的，自己发挥
  org: '反馈组件', // 负责的部分，比如负责通用组件就填写「通用组件」
  orgLink: 'examples/modal/', // 文档内的链接，和上面「文档地址配置」中填写的 link 字段保持一致就行
  desc: '', // 自我介绍，可以写可以不写
  links: [ // 相关链接，可以写可以不写
    { icon: 'github', link: 'https://github.com/ox4f5da2' },
  ]
},
```