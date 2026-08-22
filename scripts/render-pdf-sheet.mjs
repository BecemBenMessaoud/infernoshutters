import fs from 'node:fs'
import path from 'node:path'
import { pdf } from 'pdf-to-img'

const pdfPath = process.argv[2]
const outPath = process.argv[3]
const scale = Number(process.argv[4] ?? 3)

if (!pdfPath || !outPath) {
  console.error('Usage: node scripts/render-pdf-sheet.mjs <pdf> <out.png> [scale]')
  process.exit(1)
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })

const document = await pdf(pdfPath, { scale })
for await (const page of document) {
  fs.writeFileSync(outPath, page)
  console.log('saved', outPath, page.length, 'bytes')
  break
}
