# Emir Otomotiv — Kurumsal Web Sitesi

Çorum'da Renault, Citroën ve Ford araçlara hizmet veren **Emir Otomotiv** için
hazırlanmış, tek sayfalık (SPA) kurumsal tanıtım sitesi.

- **Stack:** React 19 + Vite 8 + Tailwind CSS 4 + Lucide React
- **Yayın:** GitHub Pages (tamamen statik, sunucu gerekmez)
- **Canlı adres:** https://nonick19.github.io/emirotomotiv/
- **Depo:** https://github.com/nonick19/emirotomotiv
- **Tasarım:** Mobil öncelikli, koyu antrasit zemin, metalik tipografi,
  marka renklerine gönderme yapan sarı / kırmızı / mavi vurgular

---

## 1. Kurulum

```bash
npm install
npm run dev      # http://localhost:5173
```

## 2. Üretim derlemesi

```bash
npm run build    # dist/ klasörü oluşur + 404.html kopyalanır
npm run preview  # derlemeyi yerel olarak test et
```

## 3. GitHub Pages'e dağıtım

Site **https://nonick19.github.io/emirotomotiv/** adresinde yayında.
Kaynak dal: `gh-pages` (GitHub Pages → Deploy from a branch → `gh-pages` / root).

### Kod değişikliğini canlıya alma

```bash
git add .
git commit -m "değişiklik açıklaması"
git push                      # kaynak kod: main dalı

npm run deploy                # dist/ -> gh-pages dalı (build + publish)
```

`npm run deploy`, `predeploy` ile önce `npm run build` çalıştırır, ardından
`scripts/deploy.mjs` ile `dist/` içeriğini **temiz** bir `gh-pages` commit'i
olarak force-push eder. Yayına girmesi ~1 dakika sürer.

Bu betiğin `gh-pages` paketi yerine kullanılma nedenleri:

- `.nojekyll` dosyası garanti şekilde kök dizine kopyalanır (Jekyll devre dışı)
- proje kökündeki `.gitignore`, `public/` gibi dosyalar yayına sızmaz
- yayınlanan içerik birebir `dist/` ile aynıdır

### Sıfırdan yeni depo kurulumu

```bash
git init
git add .
git commit -m "Emir Otomotiv web sitesi"
git branch -M main
gh repo create <repo-adi> --public --source=. --remote=origin --push
npm run deploy
gh api --method POST repos/<kullanici>/<repo-adi>/pages \
  -f "source[branch]=gh-pages" -f "source[path]=/"
```

> `vite.config.js` içinde `base: './'` kullanıldığı için alt dizin
> (`/repo-adi/`) veya özel alan adı fark etmeksizin varlık yolları doğru çalışır.

### B) GitHub Actions ile otomatik dağıtım (opsiyonel)

Her `main` push'unda otomatik yayın almak isterseniz `.github/workflows/deploy.yml`
ekleyin. Not: bu yöntem, depo token'ında `workflow` yetkisi ve Pages kaynağının
**GitHub Actions** olarak değiştirilmesini gerektirir.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Ardından **Settings → Pages → Source** olarak **GitHub Actions** seçin.

### Özel alan adı (opsiyonel)

`public/CNAME` dosyası oluşturup içine alan adını yazın (ör. `emirotomotiv.com`),
DNS tarafında `A` kayıtlarını GitHub Pages IP'lerine yönlendirin.

---

## 4. İçerik güncelleme

Tüm kurumsal bilgiler, telefon, adres, çalışma saatleri, marka ve hizmet
listeleri **tek dosyada** toplanmıştır:

```
src/data/site.js
```

- Telefonu değiştirmek için: `site.phone` (hem `display` hem `href`)
- WhatsApp numarası: `site.whatsappNumber` (`90...` formatında, başında `+` yok)
- Harita: `site.maps.embed` ve `site.maps.directions`
- Hizmet / marka / güven bloğu eklemek: ilgili dizilere yeni nesne ekleyin
- Sıkça sorulan sorular: `faqs` dizisi. **Önemli:** `index.html` içindeki
  `FAQPage` JSON-LD'si arama motorlarında zengin sonuç için bu diziyle birebir
  aynı metni içermelidir. Uyumu `npm run check:jsonld` ile doğrulayabilirsiniz.

## 5. Proje yapısı

```
emirotomotiv/
├─ index.html                 # meta, Open Graph, JSON-LD (AutoRepair + FAQPage)
├─ vite.config.js             # base: './', Tailwind eklentisi
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ .nojekyll               # GitHub Pages alt çizgili dosyaları yok saymasın
├─ scripts/postbuild.mjs      # dist/404.html üretimi (SPA fallback)
├─ scripts/deploy.mjs         # dist/ -> gh-pages dalına temiz yayın
├─ scripts/check-jsonld.mjs   # JSON-LD yapılandırılmış veri doğrulaması
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css               # @theme tokenları + bileşen sınıfları + animasyonlar
   ├─ data/site.js            # tüm içerik & iletişim bilgileri
   ├─ hooks/useReveal.js      # scroll animasyonu, aktif bölüm, sticky header
   └─ components/
      ├─ Navbar.jsx           # sticky header + mobil menü + alt hızlı erişim çubuğu
      ├─ Logo.jsx             # SVG kurumsal logo
      ├─ Hero.jsx             # slogan, CTA'lar, diagnostik panel görseli
      ├─ Brands.jsx           # Renault / Citroën / Ford uzmanlık kartları
      ├─ Services.jsx         # 5 hizmet, öne çıkan bakım kartı
      ├─ WhyUs.jsx            # güven blokları + Mert Akburu kartı
      ├─ Process.jsx          # 4 adımlı çalışma süreci
      ├─ Faq.jsx              # S.S.S. akordeon + iletişim kutusu
      ├─ Contact.jsx          # adres, telefon, saatler, harita, WhatsApp
      └─ Footer.jsx           # yasal bilgilendirme + hızlı iletişim
```

## 6. Yayın öncesi kontrol listesi

- [ ] `src/data/site.js` içindeki telefon ve WhatsApp numarası doğru mu?
- [ ] Google Haritalar konumu gerçek adresi gösteriyor mu?
- [ ] `index.html` içindeki `<title>` ve `description` güncel mi?
- [ ] S.S.S. cevapları (çalışma saatleri, garanti, ödeme) işletmenin gerçek
      uygulamasıyla örtüşüyor mu? Metin değişirse `FAQPage` JSON-LD'sini de
      güncelleyip `npm run check:jsonld` çalıştırın.
- [ ] Gerçek atölye fotoğrafları eklenecekse `public/` altına koyup Hero'da
      arka plan katmanı olarak kullanın (mevcut sürüm harici görsel
      kullanmadığı için çok hızlı yüklenir).
- [ ] Alan adı bağlanacaksa `public/CNAME` ekleyin.

## 7. Sosyal paylaşım görseli

`public/og-cover.jpg`, WhatsApp / Facebook / LinkedIn paylaşımlarında görünen
karttır. Yeniden üretmek için `scripts/og-card.html` dosyasını düzenleyin,
tarayıcıda 1440×900 boyutunda açıp ekran görüntüsü alın ve
`public/og-cover.jpg` olarak kaydedin. `index.html` içindeki `og:image` mutlak
URL'si bu dosyayı gösterir.
