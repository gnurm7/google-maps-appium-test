# 📍 Google Maps Appium Test Otomasyonu

Google Maps uygulaması üzerinden belirlenen lokasyona navigasyon başlatma senaryosunun mobil test otomasyonu.

---

## ⚙️ Kurulum ve Çalıştırma

### 🔧 Aşağıdaki adımları sırasıyla terminale yapıştır:

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Android cihazı veya emülatörü başlat
# (Cihazı manuel olarak açın veya emülatörü başlatın)

# 3. Testi çalıştır
npx wdio run wdio.conf.js

# 4. Allure raporunu oluştur ve aç
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
