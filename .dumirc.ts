import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'KeyUI',
  },
  favicons: [
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/favicon.png'
  ]
});
