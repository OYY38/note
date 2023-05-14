export const navbar = [
  {
    text: '笔记',
    children: [
      {
        text: 'Markdown',
        children: [
          '/notes/markdown.md'
        ]
      },
      {
        text: 'Git',
        children: [
          '/notes/git.md',
        ]
      },
      {
        text: 'Package',
        children: [
          '/notes/npm.md',
          '/notes/yarn.md',
          '/notes/pnpm.md',
        ]
      },
      {
        text: 'Linux',
        children: [
          '/notes/vim.md',
          '/notes/linux.md',
          '/notes/nginx.md',
          '/notes/docker.md',
          '/notes/gitlab.md',
        ]
      },
    ]
  },
  {
    text: '前端',
    children: [
      {
        text: 'CSS预处理器',
        children: [
          '/frontend/less.md',
          '/frontend/scss.md'
        ]
      },
      {
        text: 'Git提交规范',
        children: [
          '/frontend/commitlint.md',
        ]
      },
      {
        text: 'Charles抓包',
        children: [
          '/frontend/charles.md',
        ]
      },
      {
        text: '浏览器技巧',
        children: [
          '/frontend/chrome.md',
        ]
      }
    ]
  },
  {
    text: '面试',
    children: [
      {
        text: 'HTML',
        children: [
          '/interview/html.md',
        ]
      },
      {
        text: 'CSS',
        children: [
          '/interview/css.md',
        ]
      },
      {
        text: 'JavaScript',
        children: [
          '/interview/js.md',
        ]
      },
    ]
  },
]
