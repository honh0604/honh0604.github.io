// Hexo 插件脚本：生成 .nojekyll，让 GitHub Pages 跳过 Jekyll 处理
//（Hexo 会自动加载项目根目录 scripts/ 下的脚本）
hexo.extend.filter.register('after_generate', function () {
  hexo.route.set('.nojekyll', '')
})
