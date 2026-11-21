import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Logo perusahaan untuk kartu pengalaman.
 *
 * Jika file logo gagal dimuat (atau belum tersedia), otomatis fallback ke
 * monogram. Elemen ini dekoratif karena nama perusahaan sudah ditampilkan
 * sebagai teks di sampingnya, jadi tidak diumumkan ulang oleh screen reader.
 */
export default function CompanyLogo({ label, initials, logo, className = '' }) {
  const [hasError, setHasError] = useState(false)
  const showImage = Boolean(logo) && !hasError

  return (
    <motion.span
      title={label}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-elevated shadow-[var(--shadow)] ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_70%)]"
        aria-hidden="true"
      />
      {showImage ? (
        <img
          src={logo}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="relative z-10 h-[76%] w-[76%] object-contain transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <span className="relative z-10 font-display text-lg italic tracking-tight text-accent sm:text-xl">
          {initials}
        </span>
      )}
    </motion.span>
  )
}
