/**
 * Generates optimized WebP hero carousel assets for LCP.
 * Run before production build (see package.json "build" script).
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const OUT_DIR = 'public/images/hero'

/** @type {{ source: string; basename: string; widths: number[] }[]} */
const HERO_SOURCES = [
  { source: 'public/images/inferno-roll.png', basename: 'inferno-roll', widths: [640, 944] },
  { source: 'public/images/az.png', basename: 'az', widths: [640, 894] },
  {
    source: 'public/images/inferno-roll-winter.png',
    basename: 'inferno-roll-winter',
    widths: [640, 1024],
  },
]

const WEBP_QUALITY = 82

async function optimizeHeroImages() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  for (const { source, basename, widths } of HERO_SOURCES) {
    if (!fs.existsSync(source)) {
      console.warn(`  skip ${source} (missing)`)
      continue
    }

    const meta = await sharp(source).metadata()
    const maxWidth = meta.width ?? widths[widths.length - 1]

    for (const width of widths) {
      if (width > maxWidth) {
        continue
      }

      const suffix = width === maxWidth ? '' : `-${width}w`
      const outFile = path.join(OUT_DIR, `${basename}${suffix}.webp`)

      await sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(outFile)

      const { size } = fs.statSync(outFile)
      console.log(`  ✓ ${outFile} (${Math.round(size / 1024)} KB)`)
    }
  }

  console.log('Hero image optimization complete.')
}

optimizeHeroImages().catch((error) => {
  console.error('Hero image optimization failed:', error.message)
  process.exit(1)
})
