
export const sidebar = {
  '/notes/': [
    {
      text: 'Markdown',
      collapsible: true,
      children: [
        '/notes/markdown.md'
      ]
    },
    {
      text: 'Git',
      collapsible: true,
      children: [
        '/notes/git.md',
      ]
    },
    {
      text: 'Package',
      collapsible: true,
      children: [
        '/notes/npm.md',
        '/notes/yarn.md',
        '/notes/pnpm.md',
      ]
    },
    {
      text: 'Linux',
      collapsible: true,
      children: [
        '/notes/vim.md',
        '/notes/linux.md',
        '/notes/nginx.md',
        '/notes/docker.md',
        '/notes/gitlab.md',
      ]
    },
  ],
  '/frontend/': [
    {
      text: 'CSS预处理器',
      collapsible: true,
      children: [
        '/frontend/less.md',
        '/frontend/scss.md'
      ]
    },
    {
      text: 'Charles抓包',
      collapsible: true,
      children: [
        '/frontend/charles.md',
      ]
    },
    {
      text: '浏览器技巧',
      collapsible: true,
      children: [
        '/frontend/chrome.md',
      ]
    },
    {
      text: '打包工具',
      collapsible: true,
      children: [
        '/frontend/webpack.md',
      ]
    }
  ],
  '/interview/': [
    {
      text: 'HTML',
      collapsible: true,
      children: [
        '/interview/html.md',
      ]
    },
    {
      text: 'CSS',
      collapsible: true,
      children: [
        '/interview/css.md',
      ]
    },
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        '/interview/js.md',
      ]
    },
    {
      text: 'HTTP',
      collapsible: true,
      children: [
        '/interview/http.md',
      ]
    },
    {
      text: '框架',
      collapsible: true,
      children: [
        '/interview/vue.md',
      ]
    },
  ]
}
