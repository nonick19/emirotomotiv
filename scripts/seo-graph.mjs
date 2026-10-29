import { readFileSync, writeFileSync } from 'node:fs'

const file = 'index.html'
const html = readFileSync(file, 'utf8')

const SITE = 'https://nonick19.github.io/emirotomotiv/'
const BUSINESS_ID = `${SITE}#business`

const faqs = [
  [
    'Randevu almadan servise gelebilir miyim?',
    'Gelebilirsiniz; ancak randevulu araçlar öncelikli işleme alınır. Telefon veya WhatsApp ile bir gün önceden haber vermeniz, aracınızın aynı gün içinde teslim edilme ihtimalini belirgin şekilde artırır.',
  ],
  [
    'Hangi markalara hizmet veriyorsunuz?',
    'Uzmanlık alanımız Renault, Citroën ve Ford. Bu üç markada orijinal diagnostik cihazlar (CLIP, DiagBox, IDS/FDRS) ve marka bakım standartlarıyla çalışıyoruz. Diğer markalar için de temel bakım ve mekanik işlemlerde destek oluyoruz.',
  ],
  [
    "Çorum'un hangi bölgelerine hizmet veriyorsunuz?",
    "Çorum merkez ve tüm ilçelerden gelen araçlara hizmet veriyoruz. Atölyemiz Mimarsinan Mahallesi'ndeki Çorum Sanayi Sitesi'nde, Sanayi Sitesi Caddesi No: 136 adresinde. Osmancık, Sungurlu, Alaca, İskilip, Bayat, Mecitözü, Ortaköy, Kargı ve diğer ilçelerden gelen müşterilerimiz için randevu saatini önceden planlıyoruz.",
  ],
  [
    'Kullanılan yedek parçalar orijinal mi?',
    'Parça seçeneklerini (orijinal, OEM veya muadil) ve aralarındaki fiyat farkını işlem öncesinde size sunuyoruz. Hangi parçanın kullanılacağına onayınızla birlikte karar veriyoruz; onayınız olmadan parça değişimi yapılmaz.',
  ],
  [
    'Fiyatı önceden öğrenebilir miyim?',
    'Evet. Önce arızayı teşhis ediyor, ardından yapılacak işlemleri ve toplam maliyeti kalem kalem paylaşıyoruz. Teşhis sonrası verilen fiyat, siz onaylamadıkça değişmez.',
  ],
  [
    'İşçilik garantisi veriyor musunuz?',
    'Yapılan işçilik ve tedarik ettiğimiz parçalar için yazılı garanti veriyoruz. Garanti süresi işlemin türüne göre değişir ve servis formunda açıkça belirtilir.',
  ],
  [
    'Aracımı aynı gün teslim alabilir miyim?',
    'Periyodik bakım, fren, klima ve diagnostik işlemleri genellikle aynı gün tamamlanır. Motor veya şanzıman revizyonu gibi kapsamlı onarımlarda teslim süresini işlem öncesinde net olarak bildiririz.',
  ],
  [
    'Ödeme seçenekleri neler?',
    'Nakit, kredi kartı ve havale/EFT ile ödeme yapabilirsiniz. Ödeme detaylarını işlem öncesinde konuşup netleştiriyoruz.',
  ],
  [
    'Yetkili servis yerine özel servisi neden tercih etmeliyim?',
    'Garanti süresi devam eden araçlarda önce üretici garanti şartlarını kontrol etmenizi öneririz. Garanti kapsamı dışındaki bakım ve onarımlarda, markaya özel orijinal diagnostik cihazlarla ve üretici bakım standartlarıyla çalışan özel servis; aynı teknik yaklaşımı daha uygun işçilik maliyetiyle sunar.',
  ],
]

const services = [
  {
    name: 'Periyodik Bakım ve Yağ / Filtre Değişimi',
    description:
      'Üretici bakım planına uygun motor yağı, yağ, hava ve polen filtresi değişimi; çok noktalı kontrol ve dijital bakım kaydı.',
  },
  {
    name: 'Bilgisayarlı Arıza Tespiti (Diagnostik)',
    description:
      'Renault CLIP, Citroën DiagBox ve Ford IDS/FDRS cihazlarıyla hata kodu okuma, canlı veri analizi ve parça değiştirmeden doğru teşhis.',
  },
  {
    name: 'Mekanik Onarım, Motor ve Alt Takım',
    description:
      'Motor, şanzıman, süspansiyon ve alt takım onarımlarında ölçüm bazlı, garantili işçilik.',
  },
  {
    name: 'Fren ve Güvenlik Sistemleri',
    description:
      'Balata, disk, fren hidroliği ve ABS kontrolleri; durma mesafesi ve yol tutuşu için tam güvenlik.',
  },
  {
    name: 'Klima, Elektrik ve Elektronik',
    description:
      'Klima gaz dolumu ve kaçak kontrolü, marş-şarj sistemleri, sensör ve elektronik modül arızalarında noktasal çözüm.',
  },
]

const districts = [
  'Çorum Merkez',
  'Osmancık',
  'Sungurlu',
  'Alaca',
  'İskilip',
  'Bayat',
  'Mecitözü',
  'Ortaköy',
  'Kargı',
  'Dodurga',
  'Laçin',
  'Oğuzlar',
  'Boğazkale',
  'Uğurludağ',
]

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AutoRepair', 'LocalBusiness'],
      '@id': BUSINESS_ID,
      name: 'Emir Otomotiv',
      alternateName: 'Emir Otomotiv Çorum Özel Servis',
      description:
        "Çorum'da Renault, Citroën ve Ford araçlarına özel periyodik bakım, bilgisayarlı arıza tespiti, mekanik onarım, fren ve klima hizmetleri sunan bağımsız özel servis.",
      slogan: "Çorum'da markaya özel, garantili oto servis.",
      url: SITE,
      image: [`${SITE}og-cover.jpg`],
      logo: `${SITE}favicon.svg`,
      telephone: '+905317731205',
      priceRange: '₺₺',
      currenciesAccepted: 'TRY',
      paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Mimarsinan Mahallesi Çorum Sanayi Sitesi Caddesi No: 136',
        addressLocality: 'Çorum',
        addressRegion: 'Çorum',
        postalCode: '19000',
        addressCountry: 'TR',
      },
      hasMap:
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(
          'Mimarsinan Mahallesi Çorum Sanayi Sitesi Caddesi No: 136 Çorum',
        ),
      areaServed: districts.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      founder: {
        '@type': 'Person',
        name: 'Mert Akburu',
        jobTitle: 'İşletme Sahibi · Usta',
      },
      knowsAbout: [
        'Renault',
        'Citroën',
        'Ford',
        'Periyodik Bakım',
        'Bilgisayarlı Arıza Tespiti',
        'Mekanik Onarım',
        'Fren Sistemleri',
        'Klima Bakımı',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '08:30',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:30',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Oto Servis Hizmetleri',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': BUSINESS_ID },
            areaServed: { '@type': 'City', name: 'Çorum' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}#website`,
      url: SITE,
      name: 'Emir Otomotiv',
      inLanguage: 'tr-TR',
      publisher: { '@id': BUSINESS_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE}#webpage`,
      url: SITE,
      name: 'Çorum Oto Servis | Emir Otomotiv — Renault, Citroën, Ford',
      description:
        "Çorum Sanayi Sitesi'nde Renault, Citroën ve Ford araçlar için periyodik bakım, arıza tespiti ve mekanik onarım.",
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': BUSINESS_ID },
      inLanguage: 'tr-TR',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE}og-cover.jpg`,
        width: 1440,
        height: 900,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}#faq`,
      isPartOf: { '@id': `${SITE}#webpage` },
      about: { '@id': BUSINESS_ID },
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

const json = JSON.stringify(graph, null, 2)
  .replaceAll('<', '\\u003c')
  .replaceAll('>', '\\u003e')
const block = `    <script type="application/ld+json">\n${json.replace(/^/gm, '      ').trimStart()}\n    </script>`

const startTag = '    <script type="application/ld+json">'
const first = html.indexOf(startTag)
const headEnd = html.indexOf('</head>')
const lastScriptEnd = html.lastIndexOf('</script>', headEnd)

if (first === -1 || lastScriptEnd === -1) {
  throw new Error('JSON-LD blokları bulunamadı')
}

const next = html.slice(0, first) + block + html.slice(lastScriptEnd + '</script>'.length)
writeFileSync(file, next, 'utf8')
console.log('JSON-LD @graph yazıldı:', graph['@graph'].map((n) => n['@type']).join(', '))
