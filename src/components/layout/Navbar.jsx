import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import profile from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import { ArrowUpRight, Close, Menu, Pin } from '../ui/Icons'

const sectionIds = profile.navigation.map((item) => item.href.slice(1))
const EASE = [0.22, 1, 0.36, 1]

function Monogram() {
  return (
    <a href="#home" className="group flex shrink-0 items-center gap-3">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent font-display text-lg italic text-on-accent transition-transform duration-300 group-hover:-rotate-6"
      >
        {profile.initials}
      </span>
      <span className="hidden text-sm font-semibold tracking-tight whitespace-nowrap lg:block">
        Deny Alamsyah
        <span className="mt-0.5 block font-mono text-[9px] font-normal tracking-[0.15em] text-muted uppercase">
          IT Staff · Web Dev
        </span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="container-page">
          <nav
            aria-label="Navigasi utama"
            className={`flex items-center justify-between gap-4 rounded-full border border-line px-3 py-2.5 transition-all duration-500 md:px-4 ${
              isScrolled ? 'bg-bg/80 shadow-[var(--shadow)] backdrop-blur-xl' : 'bg-card backdrop-blur-md'
            }`}
          >
            <Monogram />

            <ul className="hidden items-center md:flex">
              {profile.navigation.map((item) => {
                const id = item.href.slice(1)
                const isActive = active === id
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                        isActive ? 'text-fg' : 'text-muted hover:text-fg'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="hidden lg:inline-flex">
                <Button href="#contact" size="sm" icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
                  Ajak Kerja Sama
                </Button>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Buka menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg md:hidden"
              >
                <Menu />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
          >
            <div className="grain absolute inset-0">
              <div className="glow-blob absolute -right-20 -top-20 h-72 w-72 rounded-full" />
            </div>

            <div className="container-page relative flex items-center justify-between py-6">
              <Monogram />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line"
              >
                <Close />
              </button>
            </div>

            <nav className="container-page relative flex flex-1 flex-col justify-center" aria-label="Navigasi seluler">
              <ul className="space-y-1">
                {profile.navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.5, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-line py-4"
                    >
                      <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                      <span className="text-4xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                      <ArrowUpRight className="ml-auto h-5 w-5 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="container-page relative space-y-3 pb-10"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <Pin className="h-4 w-4" />
                {profile.location}
              </div>
              <a href={`mailto:${profile.contact.email}`} className="block text-sm font-medium break-all hover:text-accent">
                {profile.contact.email}
              </a>
              <a href={profile.contact.phoneHref} className="block text-sm font-medium hover:text-accent">
                {profile.contact.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
