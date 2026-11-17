import { motion } from 'framer-motion'
import profile from '../../data/profile'
import Button from '../ui/Button'
import PortraitPlaceholder from '../visuals/PortraitPlaceholder'
import { ArrowDown, ArrowUpRight, Pin } from '../ui/Icons'

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:pb-20">
      <div
        className="grid-pattern pointer-events-none absolute inset-0"
        style={{ maskImage: 'radial-gradient(ellipse 75% 65% at 62% 35%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 62% 35%, black, transparent)' }}
        aria-hidden="true"
      />
      <div className="glow-blob pointer-events-none absolute -top-32 right-[-12%] h-[32rem] w-[32rem] rounded-full" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted uppercase">
                  {profile.availability}
                </span>
              </span>
              <span className="hidden items-center gap-1 text-[11px] text-muted sm:flex">
                <Pin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </motion.div>

            <motion.p variants={item} className="eyebrow mt-8">
              Halo, saya
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 text-[clamp(3.6rem,8.7vw,6.2rem)] leading-[0.9] font-semibold tracking-[-0.055em]"
            >
              Deny{' '}
              <br />
              <span className="font-display font-normal text-accent italic">Alamsyah</span>
            </motion.h1>

            <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {profile.roles.map((role, index) => (
                <span key={role} className="flex items-center gap-3">
                  {index > 0 && <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />}
                  <span
                    className={`font-mono text-[10px] tracking-[0.16em] uppercase ${
                      index === 0 ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {role}
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-md text-balance text-xl leading-snug font-medium tracking-[-0.02em] sm:text-2xl">
              Membangun web yang rapi, cepat,
              <br className="hidden sm:block" /> dan <span className="font-display text-[1.15em] font-normal italic">berkarakter.</span>
            </motion.p>

            <motion.p variants={item} className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
              IT Staff &amp; Web Developer dengan latar belakang Teknik Informatika. Berpengalaman membangun website
              WordPress e-commerce, mengelola operasional digital, dan merancang antarmuka di Figma.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#experience" icon={<ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />}>
                Lihat Pengalaman
              </Button>
              <Button
                href="#contact"
                variant="outline"
                icon={<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-[-0.03em]">
                    {stat.value}
                    {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
                  </dd>
                  <dd className="mt-1 text-[11px] leading-snug text-muted">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft blur-2xl" aria-hidden="true" />
            <PortraitPlaceholder />

            <div className="mt-5 flex items-center justify-between px-1">
              <div>
                <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">Fokus saat ini</p>
                <p className="mt-1 text-xs font-medium">Web · E-Commerce · UI Design</p>
              </div>
              <a
                href="#about"
                aria-label="Gulir ke bagian tentang saya"
                className="group grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
