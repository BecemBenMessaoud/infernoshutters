import { existsSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

if (existsSync(dist)) {
  try {
    rmSync(dist, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 })
  } catch (error) {
    console.warn(`Warning: could not fully remove dist/ (${error.message}). Retrying vite emptyOutDir…`)
  }
}
