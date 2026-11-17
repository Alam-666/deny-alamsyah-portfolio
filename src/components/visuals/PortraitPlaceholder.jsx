import { useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import profile from '../../data/profile'

const floatChips = [
  { label: 'WordPress', className: 'left-2 top-[18%] sm:-left-3', delay: 0 },
  { label: 'Figma', className: 'bottom-[20%] right-2 sm:-right-3', delay: 1.4 },
  { label: 'React', className: 'right-4 top-[38%] hidden sm:flex', delay: 0.8 },
]

export default function PortraitPlaceholder() {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 20 })
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 20 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [42, -42])
  const photoY = useTransform(scrollYProgress, [0, 1], [22, -22])
  const glowY = useTransform(scrollYProgress, [0, 1], [-28, 28])

  // Sorotan lembut yang mengikuti kursor di atas foto.
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ['15%', '85%'])
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ['15%', '85%'])
  const spotlight = useMotionTemplate`radial-gradient(230px circle at ${spotlightX} ${spotlightY}, var(--glow), transparent 72%)`

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetTilt = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[430px]"
      style={{ perspective: 1100 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-elevated shadow-[var(--shadow)] transition-colors duration-500 hover:border-accent/40"
      >
        <motion.div style={{ y: parallaxY }} className="grid-pattern absolute -inset-20 opacity-90" aria-hidden="true" />

        <motion.div
          style={{ y: glowY }}
          className="glow-blob absolute -right-16 -top-16 h-72 w-72 rounded-full"
          aria-hidden="true"
        />

        {profile.photo ? (
          <>
            <motion.div style={{ y: photoY }} className="absolute inset-0">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-full"
              >
                <motion.img
                  src={profile.photo}
                  alt={`Foto profil ${profile.name}`}
                  initial={{ opacity: 0, scale: 1.22 }}
                  animate={{ opacity: 1, scale: isHovered ? 1.18 : 1.12 }}
                  transition={{
                    opacity: { duration: 0.9, ease: 'easeOut' },
                    scale: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </motion.div>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
              aria-hidden="true"
            />

            <motion.div
              style={{ background: spotlight }}
              className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />

            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-5 bottom-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-black/25 text-[#c6f36a] backdrop-blur-md"
              aria-hidden="true"
            >
              <span className="font-display text-lg italic">DA</span>
            </motion.span>
          </>
        ) : (
          <motion.div
            style={{ y: parallaxY }}
            role="img"
            aria-label={`Placeholder foto profil ${profile.name}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="select-none font-display text-[clamp(8rem,18vw,13rem)] leading-none italic"
              style={{ color: 'var(--fg)', opacity: 0.09 }}
            >
              {profile.initials}
            </span>
            <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 h-full w-full text-muted/60" aria-hidden="true">
              <defs>
                <path id="orbit-path" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <text className="fill-current font-mono text-[9px] tracking-[0.3em]">
                <textPath href="#orbit-path">
                  DENY ALAMSYAH • WEB DEVELOPER • DENY ALAMSYAH • WEB DEVELOPER •
                </textPath>
              </text>
            </svg>
            <div className="absolute h-[57%] w-[57%] rounded-full border border-line" aria-hidden="true" />
            <div className="absolute h-[74%] w-[74%] rounded-full border border-dashed border-line" aria-hidden="true" />
            <span className="absolute right-[13%] top-[13%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" aria-hidden="true" />
          </motion.div>
        )}

        <span className="absolute left-5 top-5 h-3 w-3 border-l border-t border-line" aria-hidden="true" />
        <span className="absolute right-5 top-5 h-3 w-3 border-r border-t border-line" aria-hidden="true" />
        <span className="absolute bottom-5 right-5 h-3 w-3 border-b border-r border-line" aria-hidden="true" />

        <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 rounded-full border border-line bg-elevated/80 px-3 py-1.5 text-fg backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase">
            {profile.photo ? profile.name : 'Foto profil · placeholder'}
          </span>
        </div>

      </motion.div>

      {!profile.photo &&
        floatChips.map((chip) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 + chip.delay * 0.2 }}
            className={`absolute z-20 ${chip.className}`}
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
              className="glass rounded-full px-3.5 py-2 text-[11px] font-semibold shadow-[var(--shadow)]"
            >
              {chip.label}
            </motion.div>
          </motion.div>
        ))}
    </div>
  )
}
