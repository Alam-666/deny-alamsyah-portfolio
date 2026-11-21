# Portofolio — Deny Alamsyah

Website portofolio pribadi untuk **Deny Alamsyah**, IT Staff & Web Developer. Dibangun dengan pendekatan modular, responsif, mendukung dark mode, dan animasi halus yang tetap menghormati preferensi `prefers-reduced-motion`.

## Stack

- **Vite** — dev server & build
- **React 19** — antarmuka berbasis komponen
- **Tailwind CSS v4** — design system via `@theme` dan CSS variables
- **Framer Motion** — reveal on scroll, parallax, tilt foto, marquee, transisi menu
- **Font self-hosted** — Plus Jakarta Sans, Instrument Serif, JetBrains Mono (via Fontsource)

## Menjalankan proyek

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Struktur

```
src/
├── App.jsx                     # komposisi halaman + MotionConfig
├── main.jsx                    # entry point, import font & CSS
├── data/
│   └── profile.js              # SEMUA konten & data kontak
├── hooks/
│   ├── useTheme.jsx            # dark mode + persistensi localStorage
│   └── useActiveSection.js     # scroll-spy navigasi
├── styles/
│   └── index.css               # token warna, tipografi, utilitas
└── components/
    ├── layout/
    │   ├── Navbar.jsx          # navbar glass, menu seluler, theme toggle
    │   └── Footer.jsx
    ├── sections/
    │   ├── Hero.jsx            # nama, peran, CTA, foto profil
    │   ├── Marquee.jsx         # pita keahlian bergerak
    │   ├── About.jsx           # ringkasan, pendidikan, keahlian
    │   ├── Experience.jsx      # kartu pengalaman + mock UI parallax
    │   ├── Leadership.jsx      # panel Karang Taruna
    │   └── Contact.jsx         # kontak + formulir pesan
    ├── ui/
    │   ├── Button.jsx
    │   ├── CopyButton.jsx
    │   ├── Icons.jsx
    │   ├── Reveal.jsx
    │   ├── SectionHeading.jsx
    │   └── ThemeToggle.jsx
    └── visuals/
        ├── PortraitPlaceholder.jsx  # placeholder foto animasi
        └── ProjectMock.jsx          # ilustrasi UI per pengalaman
```

## Kustomisasi

### 1. Konten

Semua teks, pengalaman, keahlian, dan kontak ada di `src/data/profile.js`. Setelah mengubah data, tampilan section ikut menyesuaikan tanpa mengubah komponen.

### 2. Foto profil

Foto profil aktif tersimpan di `public/profile.jpg` dan terhubung lewat `photo` di `src/data/profile.js` (menggunakan `import.meta.env.BASE_URL` agar path tetap benar saat deploy ke subfolder GitHub Pages).

Efek yang aktif pada foto:

- **Tilt 3D** mengikuti gerakan kursor (`useMotionValue` + `useSpring`)
- **Parallax** saat halaman digulir (`useScroll` + `useTransform`)
- **Floating** halus dengan loop vertikal lembut
- **Hover** memperbesar foto dan memunculkan sorotan (spotlight) yang mengikuti kursor

Untuk mengganti foto, timpa `public/profile.jpg` (rasio ideal 4:5, minimal 800×1000 px). Untuk kembali ke placeholder animasi, set `photo: null`.

### 3. Logo perusahaan di pengalaman

Logo tampil sebagai badge di samping nama perusahaan pada tiap kartu pengalaman. Siapkan file di folder `public/logos/` dengan nama berikut:

| Perusahaan | File |
|---|---|
| SJ.OFFICIAL | `public/logos/sj-official.png` |
| Badan Narkotika Nasional | `public/logos/bnn.jpg` |
| Yudi Butcher E-Commerce | `public/logos/yudi-butcher.png` |

Format yang didukung: PNG, SVG, WebP, atau JPG — sebaiknya transparan dan berbentuk square (rasio 1:1, minimal 256×256 px). Jika ingin nama file lain atau format berbeda, ubah field `logo` pada entitas experience di `src/data/profile.js`. Untuk logo melebar seperti SJ.OFFICIAL, tambahkan `logoFit: 'wide'` agar area gambarnya diperlebar; default-nya `square`.

Badge mengikuti pola kartu: border adaptif, glow radial, dot aksen, dan efek hover. Logo ditampilkan abu-abu secara default lalu kembali ke warna aslinya saat kartu di-hover. Komponen `src/components/ui/CompanyLogo.jsx` otomatis menampilkan monogram inisial (`SJ`, `BNN`, `YB`) sebagai fallback saat file belum ada atau gagal dimuat, jadi tampilan tetap rapi. Logo bersifat dekoratif karena nama perusahaan sudah tertulis sebagai teks — tidak diumumkan dua kali oleh screen reader.

### 4. Formulir kontak

Formulir bekerja tanpa backend: saat dikirim, form membuka aplikasi email pengunjung dengan subjek dan isi yang sudah terisi, ditujukan ke `dennyalamsyah80@gmail.com`. Jika ingin pengiriman langsung dari website, hubungkan ke layanan seperti Formspree, Resend, atau API sendiri di `handleSubmit` (`src/components/sections/Contact.jsx`).

### 4. Warna & tema

Token warna ada di `src/styles/index.css`:

- `:root` — mode terang
- `.dark` — mode gelap
- `--accent` — warna aksen (hijau zaitun di mode terang, lime di mode gelap)

Mode awal mengikuti preferensi sistem, lalu disimpan di `localStorage` (`da-theme`). Script kecil di `index.html` mencegah flash tema yang salah.

## Catatan implementasi

- **Parallax** memakai `useScroll` + `useTransform` pada foto, mock proyek, dan panel kepemimpinan.
- **Tilt 3D** foto memakai `useMotionValue` + `useSpring`.
- **Reduced motion** ditangani global lewat `<MotionConfig reducedMotion="user">`, ditambah media query CSS untuk animasi marquee/orbit.
- **Aksesibilitas**: skip link, label form, `aria-current` pada navigasi, fokus terlihat, menu seluler dengan `aria-modal` dan dukungan tombol Escape.
- **Navigasi** memakai scroll-spy (`useActiveSection`) untuk indikator section aktif.

## Deploy

Live site: **https://alam-666.github.io/deny-alamsyah-portfolio/**

Deployment otomatis ke GitHub Pages lewat `.github/workflows/deploy.yml` setiap ada push ke `main`. Workflow menyetel `VITE_BASE_PATH=/deny-alamsyah-portfolio/` agar path aset (foto, favicon, JS, CSS) tetap benar di URL subfolder.

Untuk platform lain (Vercel, Netlify, Cloudflare Pages):

- Build command: `npm run build`
- Output directory: `dist`
- Biarkan `VITE_BASE_PATH` kosong jika site di-root domain.
