# SiPorto : https://landing-page-siporto.vercel.app

SiPorto adalah website landing page yang dapat membantu bisnis jasa pembuatan portofolio digital untuk memperkenalkan perusahaan mereka kepada pelanggan dan meningkatkan pengalaman pengguna. Website ini dibangun menggunakan pendekatan modern dan responsif, dengan fokus pada kemudahan penggunaan dan kinerja yang optimal.

Website ini dibangun menggunakan [React](https://react.dev/), sebuah library JavaScript yang populer untuk membangun antarmuka pengguna. React memungkinkan pembangun untuk membangun antarmuka pengguna yang dinamis dan interaktif, dengan menggunakan komponen reaktif yang dapat di-render ulang secara efisien.

[Vite](https://vitejs.dev/), alat pembangunan web yang cepat dan canggih, digunakan untuk mengembangkan aplikasi React ini. Vite memberikan pengalaman pengembangan yang sangat cepat, dengan fitur seperti hot module replacement (HMR) dan pembuatan kode yang sangat cepat.

[Tailwind CSS](https://tailwindcss.com/), utility-first CSS framework, digunakan untuk mempercepat pembangunan antarmuka pengguna. Tailwind CSS menyediakan setelan yang umum dan fleksibel sehingga memudahkan pengembang untuk membangun antarmuka pengguna yang responsif dan konsisten.

Dengan menggunakan kombinasi antara React, Vite, dan Tailwind CSS, kita dapat membangun website landing page yang profesional, responsif, dan mudah digunakan.
## Fitur

- **Landing Page Modern**: Tampilan profesional, responsif, dan mudah digunakan.
- **Showcase Portofolio**: Contoh hasil portofolio digital yang pernah dibuat.
- **FAQs**: Daftar pertanyaan yang sering diajukan beserta jawabannya.
- **Form Kontak**: Pengunjung dapat mengirim pesan langsung ke WhatsApp.
- **Navigasi Mudah**: Navigasi antar bagian halaman dengan smooth scroll.
- **Mobile Friendly**: Desain responsif untuk berbagai ukuran layar.

## Struktur Proyek

```
├── public/
│   └── assets/
│       ├── img/         # Gambar showcase, fitur, about, dll
│       └── logo/        # Logo SiPorto
├── src/
│   ├── components/      # Komponen React (navbar, hero, about, feature, showcase, faqs, cta)
│   ├── index.css        # Konfigurasi Tailwind CSS
│   └── main.jsx         # Entry point aplikasi
├── .env                 # Konfigurasi nomor WhatsApp
├── .env.example         # Contoh konfigurasi environment
├── index.html           # HTML utama
├── package.json         # Dependensi dan script
└── vite.config.js       # Konfigurasi Vite
```

## Instalasi & Menjalankan

1. **Clone repository**
   ```sh
   git clone <repo-url>
   cd LandingPage-SiPorto
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Konfigurasi Environment**
   - Salin file `.env.example` menjadi `.env`
   - Isi `VITE_WHATSAPP_NUMBER` dengan nomor WhatsApp tujuan (format internasional, tanpa +)
     ```
     VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
     ```

4. **Jalankan aplikasi**
   ```sh
   npm run dev
   ```
   Website dapat diakses di [http://localhost:5173](http://localhost:5173) (default Vite).

## Build untuk Produksi

```sh
npm run build
```

## Penjelasan Komponen Utama

- [`src/components/navbar.jsx`](src/components/navbar.jsx): Navigasi utama & tombol back-to-top.
- [`src/components/hero.jsx`](src/components/hero.jsx): Hero section dengan headline utama.
- [`src/components/about.jsx`](src/components/about.jsx): Tentang SiPorto.
- [`src/components/feature.jsx`](src/components/feature.jsx): Fitur-fitur layanan.
- [`src/components/showcase.jsx`](src/components/showcase.jsx): Contoh portofolio digital.
- [`src/components/faqs.jsx`](src/components/faqs.jsx): Daftar pertanyaan umum.
- [`src/components/cta.jsx`](src/components/cta.jsx): Form kontak & informasi kontak.

## Lisensi

Proyek ini dibuat untuk keperluan bisnis SiPorto. Silakan hubungi pemilik untuk penggunaan lebih lanjut.

---

**SiPorto** - Jasa pembuatan portofolio digital modern