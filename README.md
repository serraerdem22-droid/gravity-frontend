# Gravity Frontend

Bu klasör, `frontend.docx`'ta anlatılan React uygulama mimarisini kullanır.

## 📂 Klasör Yapısı

```
frontend/
├── public/              ← Dış Kapı: favicon & index.html
└── src/
    ├── assets/          ← Depo: resimler, videolar, fontlar
    ├── components/      ← LEGO Parçaları: tekrar kullanılan UI bileşenleri
    │   ├── Navbar.js
    │   └── Card.js
    ├── pages/           ← Tam Ekranlar: bileşenlerden oluşur
    │   ├── HomePage.js
    │   └── AboutPage.js
    ├── services/        ← Kuryeler: backend ile iletişim
    │   └── api.js
    ├── styles/          ← Makyaj Odası: renkler, düzenler
    │   ├── global.css
    │   └── components.css
    ├── App.js           ← Rota yöneticisi
    └── index.js         ← React giriş noktası
```

## 🚀 Kurulum & Çalıştırma

```bash
cd frontend
npm install
npm start
```

Uygulama `http://localhost:3000` adresinde açılır.
