import { existsSync, readFileSync } from 'node:fs'

/* ------------------------------------------------------------------
   index.html içindeki JSON-LD bloklarını doğrular.
   - Geçerli JSON mu?
   - AutoRepair / LocalBusiness zorunlu alanları dolu mu?
   - FAQPage soruları site.js ile birebir aynı mı?
   Hata varsa process.exit(1) ile CI'ı durdurur.
   ------------------------------------------------------------------ */

const html = readFileSync('index.html', 'utf8')
const source = readFileSync('src/data/site.js', 'utf8')

const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
const blocks = []
let match
while ((match = re.exec(html))) blocks.push(match[1])

const errors = []
const nodes = []

blocks.forEach((raw, i) => {
  let data
  try {
    data = JSON.parse(raw)
  } catch (error) {
    errors.push(`blok ${i + 1}: geçersiz JSON — ${error.message}`)
    return
  }
  if (Array.isArray(data['@graph'])) nodes.push(...data['@graph'])
  else nodes.push(data)
})

const byType = (...types) =>
  nodes.filter((node) => {
    const list = Array.isArray(node['@type']) ? node['@type'] : [node['@type']]
    return types.some((type) => list.includes(type))
  })

console.log(`JSON-LD blok: ${blocks.length}, düğüm: ${nodes.length}`)
console.log(
  'Düğüm tipleri: ' +
    nodes
      .map((node) =>
        Array.isArray(node['@type']) ? node['@type'].join('+') : node['@type'],
      )
      .join(', '),
)

/* --- İşletme düğümü --- */
const [business] = byType('AutoRepair', 'LocalBusiness')
if (!business) {
  errors.push('AutoRepair / LocalBusiness düğümü yok')
} else {
  for (const field of ['@id', 'name', 'url', 'telephone', 'address', 'image']) {
    if (!business[field]) errors.push(`işletme: "${field}" eksik`)
  }
  const required = ['streetAddress', 'addressLocality', 'postalCode', 'addressCountry']
  required.forEach((field) => {
    if (!business.address?.[field]) errors.push(`adres: "${field}" eksik`)
  })
  if (!/^\+90\d{10}$/.test(String(business.telephone))) {
    errors.push('telefon E.164 formatında değil (+90XXXXXXXXXX)')
  }
  if (!business.openingHoursSpecification?.length) {
    errors.push('openingHoursSpecification eksik')
  }
  if (!business.hasOfferCatalog?.itemListElement?.length) {
    errors.push('hasOfferCatalog boş')
  }
  if (!business.areaServed?.length) errors.push('areaServed boş')
}

/* --- FAQ düğümü --- */
const [faq] = byType('FAQPage')
if (!faq) {
  errors.push('FAQPage düğümü yok')
} else {
  const questions = (faq.mainEntity ?? []).map((item) => item.name)
  const unique = new Set(questions)
  if (questions.length < 5) errors.push('FAQPage 5 sorudan az')
  if (unique.size !== questions.length) {
    errors.push('FAQPage içinde tekrarlanan soru var')
  }

  // site.js içindeki sorular (tek veya çift tırnak)
  const sourceQuestions = [
    ...source.matchAll(/question:\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g),
  ].map((m) => m[2].replace(/\\'/g, "'").replace(/\\"/g, '"'))

  const normalize = (text) => text.replace(/\s+/g, ' ').trim()
  const missing = sourceQuestions.filter(
    (question) => !questions.map(normalize).includes(normalize(question)),
  )
  const extra = questions.filter(
    (question) => !sourceQuestions.map(normalize).includes(normalize(question)),
  )

  if (sourceQuestions.length !== questions.length) {
    errors.push(
      `soru sayısı uyuşmuyor: site.js ${sourceQuestions.length}, JSON-LD ${questions.length}`,
    )
  }
  missing.forEach((question) =>
    errors.push(`JSON-LD'de eksik soru: "${question}"`),
  )
  extra.forEach((question) =>
    errors.push(`site.js'te olmayan soru: "${question}"`),
  )
}

if (errors.length) {
  console.log('\n✗ SEO doğrulama hatası:')
  errors.forEach((error) => console.log('  - ' + error))
  process.exit(1)
}

/* --- Meta alanları --- */
const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? ''
const description =
  html.match(/name="description"[\s\S]*?content="([^"]*)"/)?.[1]?.trim() ?? ''

const meta = []
if (title.length < 30 || title.length > 60) {
  meta.push(`başlık ${title.length} karakter (30–60 önerilir)`)
}
if (description.length < 120 || description.length > 160) {
  meta.push(`açıklama ${description.length} karakter (120–160 önerilir)`)
}
if (!/rel="canonical"/.test(html)) meta.push('canonical eksik')
if (!/property="og:image"/.test(html)) meta.push('og:image eksik')
if (!/name="viewport"/.test(html)) meta.push('viewport eksik')

if (!existsSync('public/sitemap.xml')) meta.push('public/sitemap.xml yok')
if (!/Sitemap:/.test(readFileSync('public/robots.txt', 'utf8'))) {
  meta.push('robots.txt içinde Sitemap satırı yok')
}

console.log(`\nBaşlık (${title.length}): ${title}`)
console.log(`Açıklama (${description.length}): ${description}`)

if (meta.length) {
  console.log('\n⚠ Meta uyarısı:')
  meta.forEach((item) => console.log('  - ' + item))
  process.exitCode = 1
} else {
  console.log('✓ Meta alanları ve sitemap geçerli')
}

console.log('✓ JSON-LD ve FAQ senkronizasyonu geçerli')
