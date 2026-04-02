# 📖 BacaQuran 


Sebuah platform _Web Application_ baca Al-Quran Murottal 30 Juz secara daring (_online_) dengan fitur-fitur premium yang berfokus kepada kemudahan pengguna dan desain UI modern bernafaskan perpaduan hijau Zamrud (Emerald Green) ala ekosistem antarmuka islami terkini. Proyek ini dibangun sepenuhnya menggunakan arsitektur **[Astro](https://astro.build/)** dengan render statis (SSG).

---

## ✨ Fitur Unggulan

- **💯 Ringan & Cepat:** Dibangun secara statis dan mengutilisasi *View Transitions* dari Astro, memberikan pengalaman navigasi SPA super mulus tanpa *loading* ulang halaman sepenuhnya.
- **🎧 Audio Murottal Dinamis:** Terintegrasi dengan audio tajwid untuk tiap-tiap ayat, didukung dengan bar pemutar audio Global bergaya *floating* layaknya pemutar musik premium Spotify, serta sanggup memutar audio terus menerus antar ayat.
- **📚 Tafsir Ayat Mendalam:** Termasuk dengan routing per-ayat untuk mengetahui tafsir Tahlili maupun Wajiz secara spesifik.
- **🔖 Bookmark Cerdas & 'Terakhir Dibaca':** Anda bisa menandai target tabungan surat yang ingin Anda baca nantinya dan sistem secara *silent-track* lewat Sensor Gulir (*Scroll*) menanam penanda posisi bacaan terakhir. Semua disimpan di `localStorage` tanpa perlu daftar Akun!
- **🌓 Mode Gelap/Terang (Dark/Light Mode):** Sistem pergantian tema responsif yang membaur dengan referensi sistem perangkat Anda dan bisa diganti manual kapan saja tanpa berkedip.
- **📱 Layar Mobile Optimal:** Tersedia bottom-nav responsif demi kemudahan perpindahan halaman (Surat, Juz, dan Bookmark) pada layar ponsel.

## 🚀 Instalasi Lokal

Ingin menjalankan atau mengedit repositori ini secara di perangkat komputer Anda sendiri?
Pastikan Anda sudah menginstall `Node.js` dari versi `18+` terlebih dulu. 

1. **Jalankan Bash Clone**
   ```bash
   git clone https://github.com/cabrata/bacaquran.git
   cd bacaquran
   ```

2. **Install Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan *Development Server***
   ```bash
   npm run dev
   ```

Tinggal buka terminal lalu kunjungi `http://localhost:4321`.

## 🛠️ Tech Stack & Ekosistem Data

Proyek ini dirancang sederhana tanpa manipulasi kompleks dengan Stack berikut:
- **Framework Utama:** [Astro](https://astro.build/)
- **UI / CSS CSS:** Vanilla Custom Properties tanpa perlu CSS Library eksternal
- **Dataset Sumber API:** Referensi dataset mentah ditarik dan diparsing dari repositori publik JSON Kemenag (`web-api.qurankemenag.net`).

## 📜 Lisensi Pemanfaatan

Proyek ini terbuka untuk diaplikasikan ke skenario publik atas niat jariyah berbagi bacaan Kitab Suci Al-Quran dengan desain modern dan responsif. Feel free untuk `Fork` repo ini! Tentu Anda diharapkan tidak mengutilisasi *data endpoint*-nya bagi perbuatan merugikan.
