import {
  Disc3,
  ScanLine,
  Settings2,
  Snowflake,
  Wrench,
} from 'lucide-react'

/* ------------------------------------------------------------------
   Tek noktadan düzenlenebilen kurumsal bilgiler
   ------------------------------------------------------------------ */
export const site = {
  name: 'Emir Otomotiv',
  tagline: 'Özel Servis · Çorum',
  owner: 'Mert Akburu',
  ownerTitle: 'İşletme Sahibi · Usta',
  phone: {
    display: '0531 773 12 05',
    href: 'tel:05317731205',
  },
  whatsappNumber: '905317731205',
  address: {
    neighborhood: 'Mimarsinan Mahallesi',
    street: 'Çorum Sanayi Sitesi Caddesi No: 136',
    city: 'Çorum Merkez / Çorum',
    full: 'Mimarsinan Mahallesi Çorum Sanayi Sitesi Caddesi No: 136, Çorum Merkez',
  },
  hours: [
    { days: 'Pazartesi – Cuma', time: '08:30 – 19:00' },
    { days: 'Cumartesi', time: '08:30 – 18:00' },
    { days: 'Pazar', time: 'Kapalı', closed: true },
  ],
  maps: {
    embed:
      'https://maps.google.com/maps?q=' +
      encodeURIComponent(
        'Mimarsinan Mahallesi Çorum Sanayi Sitesi Caddesi No: 136 Çorum',
      ) +
      '&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent(
        'Mimarsinan Mahallesi Çorum Sanayi Sitesi Caddesi No: 136 Çorum',
      ),
  },
}

export const defaultWhatsAppMessage =
  'Merhaba, web sitesi üzerinden servis randevusu almak istiyorum.'

export function whatsappLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/* ------------------------------------------------------------------
   Navigasyon
   ------------------------------------------------------------------ */
export const navLinks = [
  { label: 'Marka Uzmanlığı', href: '#markalar' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Neden Biz', href: '#neden-biz' },
  { label: 'Süreç', href: '#surec' },
  { label: 'S.S.S.', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

/* ------------------------------------------------------------------
   Marka uzmanlığı
   ------------------------------------------------------------------ */
export const brands = [
  {
    id: 'renault',
    name: 'Renault',
    tool: 'CLIP',
    color: '#ffcc33',
    description:
      'Renault modellerinde orijinal CLIP protokolüyle hata kodlarını okuyor, bakım aralıklarını marka standardında uyguluyoruz.',
    points: [
      'Renault CLIP ile orijinal hata kodu okuma',
      'Marka standardında periyodik bakım',
      'Orijinal / OEM yedek parça temini',
    ],
    message:
      'Merhaba, Renault aracım için Emir Otomotiv’den randevu almak istiyorum.',
  },
  {
    id: 'citroen',
    name: 'Citroën',
    tool: 'DiagBox',
    color: '#ef4a3d',
    description:
      'Citroën araçlarda DiagBox ile tam sistem teşhisi yapıyor; motor, elektronik ve süspansiyon kontrollerini birlikte yürütüyoruz.',
    points: [
      'DiagBox ile tam sistem teşhisi',
      'PureTech / HDi bakım deneyimi',
      'Elektronik ve süspansiyon kontrolü',
    ],
    message:
      'Merhaba, Citroën aracım için Emir Otomotiv’den randevu almak istiyorum.',
  },
  {
    id: 'ford',
    name: 'Ford',
    tool: 'IDS / FDRS',
    color: '#4b83f7',
    description:
      'Ford modellerinde IDS / FDRS altyapısıyla modül bazlı teşhis, doğru parça eşleşmesi ve güvenli onarım süreci sunuyoruz.',
    points: [
      'IDS / FDRS ile modül teşhisi',
      'EcoBoost / TDCi bakım standartları',
      'Şanzıman ve alt takım revizyonu',
    ],
    message:
      'Merhaba, Ford aracım için Emir Otomotiv’den randevu almak istiyorum.',
  },
]

/* ------------------------------------------------------------------
   Hizmetler
   ------------------------------------------------------------------ */
export const services = [
  {
    id: 'periyodik-bakim',
    title: 'Periyodik Bakım & Yağ / Filtre',
    description:
      'Üretici bakım planına uygun yağ ve filtre değişimi, çok noktalı kontrol ve dijital bakım kaydı. Aracınızın ömrünü uzatan en temel adım.',
    icon: Wrench,
    tags: ['Motor yağı', 'Yağ / hava / polen filtresi', 'Kontrol listesi'],
    featured: true,
  },
  {
    id: 'diagnostik',
    title: 'Bilgisayarlı Arıza Tespiti',
    description:
      'Markaya özel diagnostik cihazlarla hata kodu okuma, canlı veri analizi ve parça değiştirmeden önce doğru teşhis.',
    icon: ScanLine,
    tags: ['Orijinal cihaz', 'Canlı veri', 'Hata kodu analizi'],
  },
  {
    id: 'mekanik',
    title: 'Mekanik, Motor & Alt Takım',
    description:
      'Motor, şanzıman, süspansiyon ve alt takım onarımlarında ölçüm bazlı, garantili işçilik ve doğru parça kullanımı.',
    icon: Settings2,
    tags: ['Motor onarımı', 'Alt takım', 'Şanzıman'],
  },
  {
    id: 'fren',
    title: 'Fren & Güvenlik Sistemleri',
    description:
      'Balata, disk, hidrolik ve ABS kontrolleri; yol tutuşunu ve durma mesafesini doğrudan etkileyen sistemlerde tam güvenlik.',
    icon: Disc3,
    tags: ['Balata / disk', 'Fren hidroliği', 'ABS kontrolü'],
  },
  {
    id: 'klima-elektrik',
    title: 'Klima & Elektrik / Elektronik',
    description:
      'Klima gaz dolumu ve kaçak kontrolü, marş-şarj sistemleri, sensör ve elektronik modül arızalarında noktasal çözüm.',
    icon: Snowflake,
    tags: ['Klima gazı', 'Şarj / marş', 'Sensör & modül'],
  },
]

/* ------------------------------------------------------------------
   Neden Emir Otomotiv
   ------------------------------------------------------------------ */
export const trustPoints = [
  {
    id: 'fiyat',
    title: 'Şeffaf fiyatlandırma',
    description:
      'İşleme başlamadan önce net fiyat paylaşır, onayınız olmadan hiçbir işlem yapmayız.',
    icon: 'receipt',
  },
  {
    id: 'kadro',
    title: 'Tecrübeli usta kadrosu',
    description:
      'Mert Akburu liderliğinde, Renault, Citroën ve Ford araçlarda deneyimli bir ekip.',
    icon: 'users',
  },
  {
    id: 'garanti',
    title: 'Garantili işçilik',
    description:
      'Yapılan işçilik ve tedarik edilen parçalar için yazılı garanti güvencesi.',
    icon: 'shield',
  },
  {
    id: 'hiz',
    title: 'Hızlı teslimat',
    description:
      'Doğru teşhis ve planlı tedarik ile aracınızı gereksiz yere bekletmeyiz.',
    icon: 'timer',
  },
]

/* ------------------------------------------------------------------
   Çalışma süreci
   ------------------------------------------------------------------ */
export const processSteps = [
  {
    step: '01',
    title: 'Arayın veya yazın',
    description:
      'Telefon ya da WhatsApp ile aracınızı ve şikâyetinizi kısaca anlatın, uygun randevu saatini birlikte belirleyelim.',
    icon: 'phone',
  },
  {
    step: '02',
    title: 'Teşhis & kontrol',
    description:
      'Markaya özel cihazlarla arıza kaynağını tespit eder, gerekli kontrolleri eksiksiz yaparız.',
    icon: 'scan',
  },
  {
    step: '03',
    title: 'Onaylı fiyat',
    description:
      'Yapılacak işlemleri ve maliyeti net olarak paylaşırız. Onayınızı almadan işleme başlamayız.',
    icon: 'file',
  },
  {
    step: '04',
    title: 'Teslim & garanti',
    description:
      'İşlem sonrası kontrolü yapar, aracınızı test ederek garanti belgesiyle teslim ederiz.',
    icon: 'key',
  },
]

/* ------------------------------------------------------------------
   Sıkça sorulan sorular
   (index.html içindeki FAQPage JSON-LD ile birebir aynı olmalı)
   ------------------------------------------------------------------ */
export const faqs = [
  {
    question: 'Randevu almadan servise gelebilir miyim?',
    answer:
      'Gelebilirsiniz; ancak randevulu araçlar öncelikli işleme alınır. Telefon veya WhatsApp ile bir gün önceden haber vermeniz, aracınızın aynı gün içinde teslim edilme ihtimalini belirgin şekilde artırır.',
  },
  {
    question: 'Hangi markalara hizmet veriyorsunuz?',
    answer:
      'Uzmanlık alanımız Renault, Citroën ve Ford. Bu üç markada orijinal diagnostik cihazlar (CLIP, DiagBox, IDS/FDRS) ve marka bakım standartlarıyla çalışıyoruz. Diğer markalar için de temel bakım ve mekanik işlemlerde destek oluyoruz.',
  },
  {
    question: "Çorum'un hangi bölgelerine hizmet veriyorsunuz?",
    answer:
      "Çorum merkez ve tüm ilçelerden gelen araçlara hizmet veriyoruz. Atölyemiz Mimarsinan Mahallesi'ndeki Çorum Sanayi Sitesi'nde, Sanayi Sitesi Caddesi No: 136 adresinde. Osmancık, Sungurlu, Alaca, İskilip, Bayat, Mecitözü, Ortaköy, Kargı ve diğer ilçelerden gelen müşterilerimiz için randevu saatini önceden planlıyoruz.",
  },
  {
    question: 'Kullanılan yedek parçalar orijinal mi?',
    answer:
      'Parça seçeneklerini (orijinal, OEM veya muadil) ve aralarındaki fiyat farkını işlem öncesinde size sunuyoruz. Hangi parçanın kullanılacağına onayınızla birlikte karar veriyoruz; onayınız olmadan parça değişimi yapılmaz.',
  },
  {
    question: 'Fiyatı önceden öğrenebilir miyim?',
    answer:
      'Evet. Önce arızayı teşhis ediyor, ardından yapılacak işlemleri ve toplam maliyeti kalem kalem paylaşıyoruz. Teşhis sonrası verilen fiyat, siz onaylamadıkça değişmez.',
  },
  {
    question: 'İşçilik garantisi veriyor musunuz?',
    answer:
      'Yapılan işçilik ve tedarik ettiğimiz parçalar için yazılı garanti veriyoruz. Garanti süresi işlemin türüne göre değişir ve servis formunda açıkça belirtilir.',
  },
  {
    question: 'Aracımı aynı gün teslim alabilir miyim?',
    answer:
      'Periyodik bakım, fren, klima ve diagnostik işlemleri genellikle aynı gün tamamlanır. Motor veya şanzıman revizyonu gibi kapsamlı onarımlarda teslim süresini işlem öncesinde net olarak bildiririz.',
  },
  {
    question: 'Ödeme seçenekleri neler?',
    answer:
      'Nakit, kredi kartı ve havale/EFT ile ödeme yapabilirsiniz. Ödeme detaylarını işlem öncesinde konuşup netleştiriyoruz.',
  },
  {
    question: 'Yetkili servis yerine özel servisi neden tercih etmeliyim?',
    answer:
      'Garanti süresi devam eden araçlarda önce üretici garanti şartlarını kontrol etmenizi öneririz. Garanti kapsamı dışındaki bakım ve onarımlarda, markaya özel orijinal diagnostik cihazlarla ve üretici bakım standartlarıyla çalışan özel servis; aynı teknik yaklaşımı daha uygun işçilik maliyetiyle sunar.',
  },
]

/* ------------------------------------------------------------------
   Hizmet bölgesi (yerel SEO içeriği)
   ------------------------------------------------------------------ */
export const serviceAreas = {
  central: 'Çorum Merkez',
  districts: [
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
  ],
}
