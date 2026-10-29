import { readFileSync } from 'node:fs'

const html = readFileSync('index.html', 'utf8')
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
let match
let index = 0
while ((match = re.exec(html))) {
  index += 1
  try {
    const data = JSON.parse(match[1])
    console.log(`block ${index}: OK (${data['@type']})`)
  } catch (error) {
    console.log(`block ${index}: FAIL — ${error.message}`)
  }
}
