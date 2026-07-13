import fs from 'fs'
import path from 'path'
import os from 'os'
import { execSync } from 'child_process'

const docx = 'C:/Users/LENOVO/Downloads/blog.docx'
const temp = path.join(os.tmpdir(), 'blog_extract2')
fs.rmSync(temp, { recursive: true, force: true })
fs.mkdirSync(temp, { recursive: true })
execSync('tar -xf "' + docx + '" -C "' + temp + '"')
const xml = fs.readFileSync(path.join(temp, 'word/document.xml'), 'utf8')

function getParaInfo(chunk) {
  const styleMatch = chunk.match(/<w:pStyle w:val="([^"]+)"/)
  const style = styleMatch ? styleMatch[1] : ''
  const isBold = /<w:b\b/.test(chunk) && !/<w:b w:val="0"/.test(chunk)
  const sizeMatch = chunk.match(/<w:sz w:val="(\d+)"/)
  const size = sizeMatch ? Number(sizeMatch[1]) / 2 : null
  const texts = [...chunk.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1])
  const line = texts.join('').trim()
  const numMatch = chunk.match(/<w:numPr>[\s\S]*?<w:ilvl w:val="(\d+)"/)
  const listLevel = numMatch ? Number(numMatch[1]) : null
  return { style, isBold, size, line, listLevel, hasNum: !!numMatch }
}

const paras = xml.split(/<w:p[ >]/).slice(1)
paras.forEach((chunk, i) => {
  const info = getParaInfo(chunk)
  if (!info.line) return
  console.log(JSON.stringify({ i, ...info }))
})