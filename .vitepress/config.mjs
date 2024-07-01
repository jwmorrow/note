import { defineConfig } from 'vitepress'
import { set_sidebar } from "./components/auto-gen-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  lang: "zh",
  title: "知识库",
  description: "一个vitepress文档",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
  },
  themeConfig: {
    prev: '上一页',
    // 更新时间的显示
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    //搜索
    search: {
      provider: 'local',
      options: {
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
    },
    outlineTitle: "文章目录",
    outline: [2, 6],
    // sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    //首页导航
    nav: [
      { text: '主页', link: '/' },
      { text: '前端', link: '/docs/前端' },
      { text: 'markdown', link: '/docs/markdown' }
    ],
    //左边导航
    sidebar: { "/docs": set_sidebar("/docs") },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the Morrow License.',
      copyright: 'Copyright © 2024-present Evan You'
    },
    docFooter: {
      prev: '上一页', // 上一页的中文文本  
      next: '下一页'  // 下一页的中文文本  
      // 其他页脚配置...  
    },
    notFound: { // 404页
      title: '未找到页面，迷路了~',
      quote: '请检查地址是否正确，或当前页面未开通，点击下方按钮返回首页',
      linkText: '返回首页'
    },
  }
})
