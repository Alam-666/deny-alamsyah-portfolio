import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Logo perusahaan untuk kartu pengalaman.
 *
 * Jika file logo gagal dimuat (atau belum tersedia), otomatis fallback ke
 * monogram. Elemen ini dekoratif karena nama perusahaan sudah ditampilkan
 * sebagai teks di sampingnya, jadi tidak diumumkan ulang oleh screen reader.
 */
export default function CompanyLogo({ label, initials, logo, logoFit = 'square', className = '' }) {
  const [hasError, setHasError] = useState(false)
  const showImage = Boolean(logo) && !hasError
  // Logo melebar butuh area lebih lebar; logo kotak lebih baik memakai tinggi penuh.
  const imageFit = logoFit === 'wide' ? 'h-[56%] w-[90%]' : 'h-[68%] w-[68%]'

  return (
    <motion.span
      title={label}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-elevated shadow-[var(--shadow)] transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent-soft ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_70%)]"
        aria-hidden="true"
      />
      <span className="absolute top-2 right-2 z-10 h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
      {showImage ? (
        <img
          src={logo}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className={`relative z-10 object-contain opacity-90 grayscale transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 ${imageFit}`}
        />
      ) : (
        <span className="relative z-10 font-display text-lg italic tracking-tight text-accent sm:text-xl">
          {initials}
        </span>
      )}
    </motion.span>
  )
}
