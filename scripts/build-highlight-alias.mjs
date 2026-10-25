// 生成 hexo-util 需要的 highlight_alias.json。
// 上游 hexo-util 用 postinstall 做这件事，但 pnpm 10+ 默认会拦掉依赖的构建脚本，
// 所以这里在自己的 postinstall 里显式生成一次，避免装完直接构建失败。
import { createRequire } from 'node:module'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)

const utilDir = dirname(require.resolve('hexo-util/package.json'))
const hljs = createRequire(join(utilDir, 'index.js'))('highlight.js')

const result = { languages: hljs.listLanguages(), aliases: {} }
for (const lang of result.languages) {
  result.aliases[lang] = lang
  const aliases = hljs.getLanguage(lang).aliases
  if (aliases) for (const alias of aliases) result.aliases[alias] = lang
}

const target = join(utilDir, 'highlight_alias.json')
writeFileSync(target, JSON.stringify(result))
console.log(`postinstall: wrote ${target} (${result.languages.length} languages)`)
