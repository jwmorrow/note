import { defineConfig } from 'vitepress'
// import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  title: "知识宝库",
  description: "一个vitepress文档",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    outlineTitle: "文章目录",
    outline: [2, 6],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'markdown', link: '/docs/markdown' }
    ],
    // sidebar:{"/front": set_sidebar("front")},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the Morrow License.',
      copyright: 'Copyright © 2024-present Evan You'
    }
  }
})
