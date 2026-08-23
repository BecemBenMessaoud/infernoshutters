import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const WIDTH = 1200
const HEIGHT = 630
const NAVY = '#0b1d3d'
const INFERNO = '#e85d04'
const OUT_DIR = 'public/images/og'

const SPECS = [
  {
    file: 'home.jpg',
    photo: 'public/images/inferno-roll.png',
    headline: 'Home Defense Meets Wildfire Science',
    subline: 'Fire-Resistant • Hurricane • Security Shutters',
  },
  {
    file: 'fire-resistant.jpg',
    photo: 'public/images/products/overview-fire-resistant.png',
    headline: 'Fire-Resistant Roll Shutters',
    subline: 'Wildfire Ember & Heat Protection',
  },
  {
    file: 'hurricane-storm.jpg',
    photo: 'public/images/products/overview-hurricane-storm.png',
    headline: 'Hurricane / Storm Shutters',
    subline: 'High-Wind & Impact Protection',
  },
  {
    file: 'blog-wildfire-windows.jpg',
    photo: 'public/images/products/overview-fire-resistant.png',
    headline: 'Why Windows Fail First in a Wildfire',
    subline: 'Inferno-Roll Blog • Wildfire Science',
  },
  {
    file: 'services.jpg',
    photo: 'public/images/shutter-installation.png',
    headline: 'Installation & Repair Services',
    subline: 'Certified Roll Shutter Technicians',
  },
]

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrapHeadline(text, maxChars = 28) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 3)
}

function textOverlay({ headline, subline, brand = 'INFERNO-ROLL SHUTTERS' }) {
  const lines = wrapHeadline(headline)
  const headlineSvg = lines
    .map(
      (line, index) =>
        `<tspan x="64" dy="${index === 0 ? 0 : 52}">${escapeXml(line)}</tspan>`,
    )
    .join('')

  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${NAVY}" stop-opacity="0.15"/>
          <stop offset="45%" stop-color="${NAVY}" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.92"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)"/>
      <rect x="64" y="468" width="120" height="6" fill="${INFERNO}" rx="2"/>
      <text x="64" y="420" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700">
        ${headlineSvg}
      </text>
      <text x="64" y="520" fill="#d1d5db" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600">
        ${escapeXml(subline)}
      </text>
      <text x="64" y="582" fill="${INFERNO}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="2">
        ${escapeXml(brand)}
      </text>
    </svg>
  `)
}

async function createOgImage({ file, photo, headline, subline }) {
  const photoBuffer = await sharp(photo)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 88 })
    .toBuffer()

  const output = path.join(OUT_DIR, file)
  await sharp(photoBuffer)
    .composite([{ input: textOverlay({ headline, subline }), top: 0, left: 0 }])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(output)

  const meta = await sharp(output).metadata()
  console.log(`  ✓ ${file} (${meta.width}x${meta.height})`)
}

fs.mkdirSync(OUT_DIR, { recursive: true })
console.log('Generating OG images…')
for (const spec of SPECS) {
  await createOgImage(spec)
}
console.log('Done.')
