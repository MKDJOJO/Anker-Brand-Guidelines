import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Anker-Brand-Guidelines/',
  title: "Anker Brand Guidelines",
  description: "Anker 品牌规范库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
        text: '基础规范',
        items: [
          { text: '视频基础规范', link: '/markdown-examples' },
          { text: '品牌标识（Brand Identity）', link: '/2025/Guidelines-01' },
          { text: '品牌声音（Brand Voice）', link: '/2025/Guidelines-02' },
          { text: '视觉风格（Visual Style）', link: '/2025/Guidelines-03' },
          { text: '应用规范（Application Guidelines）', link: '/2025/Guidelines-04' },
          { text: '品牌行为（Brand Behavior）', link: '/2025/Guidelines-05' },
          { text: '视频品牌规范', link: '/api-examples' }
        ]
      },
      {
        text: '进阶规范',
        items: [
          { text: '品牌标识（Brand Identity）', link: '/2025/Guidelines-01' },
          { text: '品牌声音（Brand Voice）', link: '/2025/Guidelines-02' },
          { text: '视觉风格（Visual Style）', link: '/2025/Guidelines-03' },
          { text: '应用规范（Application Guidelines）', link: '/2025/Guidelines-04' },
          { text: '品牌行为（Brand Behavior）', link: '/2025/Guidelines-05' }
        ]
      },
      {
        text: '品牌指南',
        items: [
          { text: '品牌标识（Brand Identity）', link: '/2025/Guidelines-01' },
          { text: '品牌声音（Brand Voice）', link: '/2025/Guidelines-02' },
          { text: '视觉风格（Visual Style）', link: '/2025/Guidelines-03' },
          { text: '应用规范（Application Guidelines）', link: '/2025/Guidelines-04' },
          { text: '品牌行为（Brand Behavior）', link: '/2025/Guidelines-05' }
        ]
      },
      {
        text: '外包指南',
        items: [
          { text: '品牌标识（Brand Identity）', link: '/2025/Guidelines-01' },
          { text: '品牌声音（Brand Voice）', link: '/2025/Guidelines-02' },
          { text: '视觉风格（Visual Style）', link: '/2025/Guidelines-03' },
          { text: '应用规范（Application Guidelines）', link: '/2025/Guidelines-04' },
          { text: '品牌行为（Brand Behavior）', link: '/2025/Guidelines-05' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
