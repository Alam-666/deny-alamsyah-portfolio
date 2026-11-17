import profile from '../../data/profile'
import Button from '../ui/Button'
import { ArrowUpRight } from '../ui/Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line pt-16 pb-8">
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="eyebrow">Kolaborasi</p>
            <h2 className="mt-4 max-w-lg text-balance text-3xl leading-[1.1] font-semibold tracking-[-0.04em] sm:text-4xl">
              Mari bikin sesuatu yang <span className="font-display font-normal text-accent italic">berdampak.</span>
            </h2>
            <Button
              href={`mailto:${profile.contact.email}`}
              className="mt-6"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Mulai Percakapan
            </Button>
          </div>

          <a
            href="#home"
            aria-label="Kembali ke atas"
            className="group flex items-center gap-3 self-start font-mono text-[10px] tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
          >
            Kembali ke atas
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors group-hover:border-accent">
              <ArrowUpRight className="h-4 w-4 -rotate-45" />
            </span>
          </a>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-stroke pointer-events-none text-[clamp(3.2rem,13vw,10rem)] leading-[0.85] font-semibold tracking-[-0.06em] whitespace-nowrap select-none" aria-hidden="true">
            Deny Alamsyah
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-[11px] text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {profile.name}. Dibangun dengan React, Tailwind CSS &amp; Framer Motion.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {profile.navigation.slice(1).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block py-1 transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
