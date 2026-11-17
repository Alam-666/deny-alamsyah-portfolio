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

Foto profil aktif tersimpan di `public/profile.jpg` dan terhubung lewat `photo: '/profile.jpg'` di `src/data/profile.js`.

Efek yang aktif pada foto:

- **Tilt 3D** mengikuti gerakan kursor (`useMotionValue` + `useSpring`)
- **Parallax** saat halaman digulir (`useScroll` + `useTransform`)
- **Floating** halus dengan loop vertikal lembut
- **Hover** memperbesar foto dan memunculkan sorotan (spotlight) yang mengikuti kursor

Untuk mengganti foto, timpa `public/profile.jpg` (rasio ideal 4:5, minimal 800×1000 px). Untuk kembali ke placeholder animasi, set `photo: null`.

### 3. Formulir kontak

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

Proyek ini statis dan bisa langsung di-deploy ke Vercel, Netlify, atau Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
