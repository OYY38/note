import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { head, navbar, sidebar } from './configs'

export default defineUserConfig({
  // set site base to default value
  base: '/note/',
  lang: 'zh-CN',
  title: 'VuePress',
  description: '前端笔记',

  // extra tags in `<head>`
  head,

  // configure default theme
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: '',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: navbar,
        // sidebar
        sidebar: sidebar,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '404 页面',
        ],
        backToHome: '返回首页',
      },
    },
  }),
})
