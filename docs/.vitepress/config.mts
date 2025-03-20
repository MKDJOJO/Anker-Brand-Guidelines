import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Anker-Brand-Guidelines/',
  title: "Anker Brand Guidelines",
  description: "Anker 品牌规范库",

  themeConfig: { 
    //左上角logo
    //logo: '/image/logo.png',
    // https://vitepress.dev/reference/default-theme-config
   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },

    nav: [
      { text: '主页', link: '/' },
      { text: '规范指南', link: '/markdown-examples' },
      { text: '进阶规范', link: '/api-examples' },
      { text: '品牌指南', link: '/api-examples' },
      { text: '外包指南', link: '/api-examples' },
      { text: 'Youtube', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '1.基础规范指南',
        items: [
          { text: '制作要求(Production Requirements)', link: '/Doc/01/01.md' },
          { text: '字体规范(Font Specifications)', link: '/Doc/01/02.md' },
          { text: '音乐规范(Music Specifications)', link: '/Doc/01/03.md' },
          { text: '片尾规范(End - credits Specifications)', link: '/Doc/01/04.md' },
          { text: '交付指南(Delivery Guide)', link: '/Doc/01/05.md' },  
        ]
      },
      {
        text: '2.进阶规范指南',
        items: [
          { text: '品牌标识(Brand Identity)', link: '/Doc/02/01.md' },
          { text: '品牌画像(Brand Portrait)', link: '/Doc/02/02.md' },
          { text: '品牌配色(Brand Color Scheme)', link: '/Doc/02/03.md' },
          { text: '品牌动画(Brand Animation)', link: '/Doc/02/04.md' },
          { text: '品牌音效(Brand Sound Effect)', link: '/Doc/02/05.md' }
        ]
      },
      {
        text: '3.品牌指南',
        items: [
          { text: 'Anker(安克)', link: '/Doc/03/01.md' },
          { text: 'Eufy(优菲)', link: '/Doc/03/02.md' },
          { text: 'Nebula(星云)', link: '/Doc/03/03.md' },
          { text: 'Soundcore(声阔)', link: '/Doc/03/04.md' },
          { text: '安克创新(Anker Innovations)', link: '/Doc/03/05.md' }
        ]
      },
      {
        text: '4.关于视频团队',
        items: [
          { text: '关于视频团队(About the Video Team))', link: '/Doc/04/01.md' },
          { text: '关于我们(About Us)', link: '/Doc/04/02.md' },
          { text: '外包流程(Outsourcing Process)', link: '/Doc/04/03.md' },
          { text: '对接流程(Docking Process)', link: '/Doc/04/04.md' },
          { text: 'How to 项目组(How to Project Team)', link: '/Doc/04/05.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
