import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const indexHtml = join(dist, 'index.html')
const spaShell = join(dist, '.spa-shell.html')

if (!existsSync(indexHtml)) {
  console.error('save-spa-shell: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

copyFileSync(indexHtml, spaShell)
console.log('Saved SPA shell → dist/.spa-shell.html')
