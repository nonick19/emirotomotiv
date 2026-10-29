const url = 'https://nonick19.github.io/emirotomotiv/?cb=' + Date.now()
const html = await (await fetch(url)).text()

const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
console.log('blocks:', blocks.length)

const data = JSON.parse(blocks[0][1])
console.log('context:', data['@context'])
console.log('nodes:', data['@graph'].length)
for (const node of data['@graph']) {
  console.log('-', [].concat(node['@type']).join('+'), '|', node.name ?? node.url ?? '', '| id:', node['@id'])
}

const business = data['@graph'].find((n) => [].concat(n['@type']).includes('AutoRepair'))
console.log('name:', business.name)
console.log('phone:', business.telephone)
console.log('street:', business.address.streetAddress)
console.log('locality:', business.address.addressLocality)
console.log('services:', business.hasOfferCatalog.itemListElement.length)
console.log('areas:', business.areaServed.length, '->', business.areaServed.slice(0, 3).map((a) => a.name).join(', '))
console.log('hours groups:', business.openingHoursSpecification.length)
console.log('map:', business.hasMap ? 'yes' : 'no')

const faq = data['@graph'].find((n) => n['@type'] === 'FAQPage')
console.log('faq questions:', faq.mainEntity.length)

// Sayfadaki tek h1 kontrolü
const h1 = [...html.matchAll(/<h1[\s>]/g)].length
console.log('h1 in raw html:', h1, '(React bileşeni JS ile render edilir)')
console.log('title:', html.match(/<title>(.*?)<\/title>/)[1])
console.log('description length:', html.match(/name="description"[\s\S]*?content="([^"]*)"/)[1].length)
