import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// GitHub Pages, bilinmeyen yollar için 404.html arar.
// SPA tek sayfa olduğu için index.html'i kopyalamak yeterli.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

await copyFile(resolve(dist, 'index.html'), resolve(dist, '404.html'))
console.log('✓ dist/404.html oluşturuldu (GitHub Pages SPA fallback)')
