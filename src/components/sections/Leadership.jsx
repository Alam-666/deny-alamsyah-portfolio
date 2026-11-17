import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profile from '../../data/profile'
import Reveal from '../ui/Reveal'
import { Check } from '../ui/Icons'

export default function Leadership() {
  const { leadership } = profile
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section id="leadership" className="relative py-6 sm:py-10">
      <div className="container-page">
        <div
          ref={ref}
          className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d100e] text-[#f1f1e8]"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <motion.div
              style={{ y: drift }}
              className="absolute -top-24 right-[8%] h-[26rem] w-[26rem] rounded-full bg-[#c6f36a]/10 blur-[90px]"
            />
            <motion.div
              style={{ y: drift }}
              className="absolute -bottom-32 -left-20 h-[22rem] w-[22rem] rounded-full bg-[#a8d8ff]/10 blur-[90px]"
            />
            <div className="grid-pattern absolute inset-0 opacity-[0.35]" />
          </div>

          <div className="relative grid gap-12 p-7 sm:p-10 md:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c6f36a]" aria-hidden="true" />
                  <p className="font-mono text-[10px] tracking-[0.18em] text-[#c6f36a] uppercase">03 — Kepemimpinan</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.045em] sm:text-5xl">
                  Ketua
                  <br />
                  <span className="font-display font-normal text-[#c6f36a] italic">Karang Taruna</span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.1em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c6f36a]" aria-hidden="true" />
                  {leadership.period} · {leadership.organization}
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">{leadership.description}</p>
              </Reveal>

              <ul className="mt-7 space-y-3">
                {leadership.points.map((point, index) => (
                  <Reveal
                    key={point}
                    as="li"
                    delay={0.2 + index * 0.06}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#c6f36a]/30 text-[#c6f36a]">
                      <Check className="h-3 w-3" />
                    </span>
                    {point}
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <Reveal delay={0.15}>
                <figure className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
                  <span className="font-display text-5xl leading-none text-[#c6f36a]" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="mt-2 font-display text-xl leading-snug italic text-white/85 sm:text-2xl">
                    {leadership.quote}
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-[9px] tracking-[0.16em] text-white/40 uppercase">
                    Prinsip kepemimpinan
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-3xl font-semibold tracking-tight">5</p>
                    <p className="mt-1 text-[10px] tracking-wide text-white/45 uppercase">Tahun memimpin</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-3xl font-semibold tracking-tight">01</p>
                    <p className="mt-1 text-[10px] tracking-wide text-white/45 uppercase">Organisasi</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
