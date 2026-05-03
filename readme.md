# SPPG Sindang - Monitoring Gizi

Aplikasi front-end untuk memonitor distribusi makanan dan kualitas hidangan di sekolah-sekolah Sindang.

## Deskripsi

SPPG Sindang adalah sistem pemantauan gizi yang dibuat dengan React dan Firebase. Aplikasi ini memungkinkan pengguna untuk:
- mencatat distribusi porsi makanan ke sekolah-sekolah terdaftar
- melakukan penilaian kualitas makanan berdasarkan rasa, suhu, dan kebersihan
- melihat data real-time dari Firebase Firestore

## Fitur Utama

- Input distribusi makanan (`Distribusi`) untuk mencatat menu dan jumlah porsi
- Input kualitas makanan (`Kualitas`) untuk menangkap nilai rasa, suhu, kebersihan, dan catatan
- Pencarian sekolah cepat
- Sinkronisasi data real-time dengan Firestore
- Otentikasi pengguna otomatis (anonymous atau custom token)

## Sekolah yang Didukung

- SDN Dermayu
- TK Gandasari
- Al Maadi
- Al Wasliyah
- MTS Al-Wasliyah
- SMP Al-Irsyad
- KB Ushafa
- TK Ushafa
- SD Al-Khoir
- SDN 1 Sindang
- SDN 2 Sindang
- SD Al-Irsyad
- SMA PGRI 2 Sindang

## Teknologi

- React
- Firebase (Authentication dan Firestore)
- Tailwind CSS
- lucide-react untuk ikon

## Struktur Data Firebase

Data disimpan dalam koleksi Firestore sebagai:
- `artifacts/{appId}/public/data/nutrition`
- `artifacts/{appId}/public/data/quality`

Setiap entri berisi informasi sekolah, rincian input, timestamp, dan `userId`.

## Instalasi

1. Pastikan Node.js dan npm sudah terpasang.
2. Jalankan:
   ```bash
   npm install
   ```
3. Siapkan konfigurasi Firebase.

## Konfigurasi

Aplikasi ini menggunakan variabel global berikut:
- `__firebase_config` — konfigurasi Firebase JSON
- `__initial_auth_token` — token custom auth (opsional)
- `__app_id` — ID aplikasi Firebase (misalnya `monitoring-gizi-vercel`)

## Cara Menjalankan

Jalankan perintah berikut di folder proyek:

```bash
npm run dev
```

atau sesuai setup framework yang digunakan.

## Catatan

File saat ini berisi komponen React utama untuk antarmuka monitoring gizi. Jika Anda ingin mengembangkan lebih lanjut:
- tambahkan halaman atau rute baru
- perbaiki validasi form
- optimalkan query Firestore

## Lisensi

Silakan gunakan dan modifikasi sesuai kebutuhan.

## Deployment

Untuk mendeploy aplikasi ini, gunakan layanan hosting front-end seperti Vercel, Netlify, atau Firebase Hosting.

1. Pastikan environment variable Firebase sudah disiapkan.
2. Hubungkan repository ke layanan hosting pilihan.
3. Konfigurasi build command:
   ```bash
   npm run build
   ```
4. Konfigurasi output folder sesuai framework; biasanya `dist/` atau `.next/`.

Jika menggunakan Vercel, cukup pilih repository, atur build command, dan deploy. Pastikan `__firebase_config` dan `__app_id` tersedia di environment.
