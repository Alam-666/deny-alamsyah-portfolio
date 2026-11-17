/**
 * Sumber data tunggal untuk seluruh konten portofolio.
 * Edit file ini untuk memperbarui identitas, pengalaman, dan kontak.
 */
export const profile = {
  name: 'Deny Alamsyah',
  initials: 'DA',
  role: 'IT Staff & Web Developer',
  roles: ['IT Staff', 'Web Developer', 'E-Commerce Administrator'],
  tagline: 'Membangun web yang rapi, cepat, dan berkarakter.',
  location: 'Indonesia',
  availability: 'Tersedia untuk kolaborasi & peluang baru',

  // Foto profil aktif. BASE_URL menyesuaikan path saat deploy ke subfolder.
  // Set null untuk kembali memakai placeholder animasi.
  photo: `${import.meta.env.BASE_URL}profile.jpg`,

  contact: {
    email: 'dennyalamsyah80@gmail.com',
    phone: '0851-6196-4756',
    phoneHref: 'tel:+6285161964756',
    whatsapp: 'https://wa.me/6285161964756',
  },

  education: {
    degree: 'S1 Teknik Informatika',
    university: 'Universitas Budi Luhur',
    gpa: '3.05',
    scale: '4.00',
    note: 'Lulus tepat waktu',
  },

  stats: [
    { value: '3.05', label: 'IPK / 4.00', suffix: '' },
    { value: '4+', label: 'Tahun di e-commerce', suffix: '' },
    { value: '5', label: 'Tahun memimpin', suffix: '' },
  ],

  summary: [
    'Saya adalah lulusan Teknik Informatika yang bekerja di titik temu antara teknologi dan bisnis. Saya membantu tim menerjemahkan kebutuhan menjadi website dan sistem yang rapi, cepat, dan benar-benar terpakai.',
    'Perjalanan saya mencakup pengembangan website WordPress e-commerce, pengelolaan operasional online, hingga pengembangan CMS kustom. Sebelum menulis kode, saya terbiasa memetakan alur dan tampilan lewat Figma agar hasil akhirnya jelas sejak awal.',
  ],

  focus: [
    {
      title: 'Web & E-Commerce',
      description: 'Membangun dan mengelola website WordPress yang mendukung penjualan digital serta pengalaman pelanggan.',
    },
    {
      title: 'Desain & Kolaborasi',
      description: 'Memetakan alur, menyusun antarmuka di Figma, dan berkoordinasi dengan tim dari ide hingga implementasi.',
    },
  ],

  skills: {
    technical: [
      { name: 'Web Development', detail: 'Antarmuka responsif & terstruktur' },
      { name: 'WordPress', detail: 'Tema, konten, dan toko online' },
      { name: 'Figma', detail: 'Wireframe, UI design, prototype' },
      { name: 'Analisis Kebutuhan Aplikasi', detail: 'Memetakan masalah sebelum implementasi' },
      { name: 'Perancangan Jaringan Komputer', detail: 'Topologi dan infrastruktur dasar' },
    ],
    soft: ['Komunikasi', 'Kepemimpinan', 'Kerja Tim', 'Problem Solving', 'Manajemen Waktu', 'Adaptabilitas'],
  },

  experiences: [
    {
      id: 'sj-official',
      number: '01',
      company: 'SJ.OFFICIAL',
      role: 'Staff IT',
      period: 'Maret 2025 — April 2026',
      shortPeriod: '2025 — 2026',
      type: 'WordPress · E-Commerce',
      description:
        'Mengembangkan website WordPress e-commerce untuk meningkatkan penjualan digital dan pengalaman pelanggan.',
      highlights: [
        'Membangun dan memelihara website WordPress e-commerce',
        'Menyempurnakan pengalaman belanja bagi pelanggan',
        'Mendukung pertumbuhan kanal penjualan digital',
      ],
      tags: ['WordPress', 'E-Commerce', 'Web Development'],
      visual: 'commerce',
    },
    {
      id: 'bnn',
      number: '02',
      company: 'Badan Narkotika Nasional (BNN)',
      role: 'Magang Humas',
      period: 'November — Desember 2024',
      shortPeriod: 'Nov — Des 2024',
      type: 'CMS · Desain',
      description: 'Pengembangan CMS kustom dan pembuatan poster acara untuk kegiatan humas.',
      highlights: [
        'Mengembangkan CMS kustom sesuai kebutuhan internal',
        'Merancang poster acara untuk publikasi kegiatan',
        'Berkoordinasi dengan tim dalam proses produksi konten',
      ],
      tags: ['Custom CMS', 'Poster Design', 'Humas'],
      visual: 'cms',
    },
    {
      id: 'yudi-butcher',
      number: '03',
      company: 'Yudi Butcher E-Commerce',
      role: 'Administrasi Online',
      period: 'Juni 2021 — Juni 2024',
      shortPeriod: '2021 — 2024',
      type: 'Operasional · Inventory',
      description: 'Pengelolaan pesanan harian, sistem inventory, dan laporan penjualan.',
      highlights: [
        'Mengelola pesanan harian secara online',
        'Memantau dan merapikan sistem inventory produk',
        'Menyusun laporan penjualan secara berkala',
      ],
      tags: ['E-Commerce Ops', 'Inventory', 'Reporting'],
      visual: 'operations',
    },
  ],

  leadership: {
    organization: 'Karang Taruna',
    role: 'Ketua',
    period: '2020 — 2025',
    description:
      'Memimpin organisasi kepemudaan, merancang program kerja, dan mengoordinasikan kegiatan sosial di lingkungan sekitar.',
    points: [
      'Memimpin dan menggerakkan tim organisasi kepemudaan',
      'Merancang serta mengevaluasi program kerja',
      'Mengoordinasikan kegiatan dan kolaborasi sosial',
    ],
    quote: 'Memimpin berarti membuat orang lain merasa diajak, bukan sekadar diperintah.',
  },

  navigation: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kepemimpinan', href: '#leadership' },
    { label: 'Kontak', href: '#contact' },
  ],
}

export default profile
