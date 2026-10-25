---
title: Hello World
date: 2026-10-25 12:00:00
tags:
  - 随笔
---

这是你的第一篇博客，用来确认站点能正常构建和发布。

## 怎么写新文章

在项目目录里执行：

```bash
pnpm run new "我的第二篇文章"
```

Hexo 会在 `source/_posts/` 生成一个 Markdown 文件，用任意编辑器（VS Code / Typora / Obsidian）打开，改 `title`、`date`、`tags`，正文照常写 Markdown 即可。

## 本地预览

```bash
pnpm install   # 第一次才需要
pnpm run dev   # 打开 http://localhost:4000 预览
```

## 发布

- 如果仓库接了 GitHub Actions：`git push` 之后自动构建发布，不用管 `public/`。
- 如果是手动上传静态文件：`pnpm run build` 之后把 `public/` 里的内容覆盖到仓库根目录。

写完后记得把这篇示例文章删掉（`source/_posts/hello-world.md`），或者直接改写成自己的内容。

> 这个站点的标题、作者、网址都在根目录 `_config.yml` 里改。
