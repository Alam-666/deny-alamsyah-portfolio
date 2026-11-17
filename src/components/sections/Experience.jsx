import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profile from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ProjectMock from '../visuals/ProjectMock'

function ExperienceCard({ experience }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const mockY = useTransform(scrollYProgress, [0, 1], [26, -26])
  const glowY = useTransform(scrollYProgress, [0, 1], [-16, 16])

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-card p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 sm:p-8 lg:p-10"
    >
      <motion.div
        style={{ y: glowY }}
        className="glow-blob pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <span className="text-stroke pointer-events-none absolute top-4 right-6 hidden font-display text-[5.5rem] leading-none select-none sm:block sm:text-[7rem]" aria-hidden="true">
        {experience.number}
      </span>

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-muted">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {experience.period}
            </span>
            <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{experience.type}</span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-[1.7rem]">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{experience.company}</p>

          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted">{experience.description}</p>

          <ul className="mt-5 space-y-2">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-[13px] text-muted">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium text-fg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div style={{ y: mockY }}>
            <ProjectMock variant={experience.visual} label={experience.shortPeriod} />
          </motion.div>
          <p className="mt-3 text-center font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
            Cuplikan antarmuka · {experience.company}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="02 — Pengalaman"
            title={
              <>
                Jejak kerja yang
                <br />
                <span className="font-display font-normal text-accent italic">bisa diceritakan.</span>
              </>
            }
            description="Dari toko online hingga ruang humas institusi — setiap peran mengajarkan cara membuat teknologi bekerja untuk manusia."
          />
          <Reveal delay={0.15} className="shrink-0">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
              <span className="h-px w-10 bg-line" aria-hidden="true" />
              Terbaru lebih dulu
            </div>
          </Reveal>
        </div>

        <div className="mt-14 space-y-5">
          {profile.experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 0.05}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
