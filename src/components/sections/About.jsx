import profile from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { ArrowUpRight, Sparkle } from '../ui/Icons'

export default function About() {
  const { education, summary, focus, skills } = profile

  return (
    <section id="about" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="01 — Tentang"
              title={
                <>
                  Teknologi itu alat,
                  <br />
                  <span className="font-display font-normal text-accent italic">dampaknya</span> yang penting.
                </>
              }
              description="Saya percaya pekerjaan yang baik lahir dari pemahaman kebutuhan, bukan sekadar menulis kode."
            />

            <Reveal delay={0.12} className="mt-10">
              <div className="relative overflow-hidden rounded-2xl bg-accent p-6 text-on-accent">
                <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full border border-on-accent/20" aria-hidden="true" />
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full border border-on-accent/20" aria-hidden="true" />

                <p className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-70">Pendidikan</p>
                <p className="mt-4 font-display text-2xl leading-tight italic">{education.degree}</p>
                <p className="mt-1 text-sm font-medium opacity-90">{education.university}</p>

                <div className="mt-7 flex items-end justify-between gap-4 border-t border-on-accent/20 pt-5">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.14em] uppercase opacity-70">IPK</p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight">
                      {education.gpa}
                      <span className="text-sm font-normal opacity-60"> / {education.scale}</span>
                    </p>
                  </div>
                  <span className="mb-1 rounded-full bg-on-accent/15 px-3 py-1.5 text-[10px] font-medium">
                    {education.note}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="space-y-5">
              {summary.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <p className="text-[15px] leading-relaxed text-muted sm:text-base">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focus.map((item, index) => (
                <Reveal key={item.title} delay={0.1 + index * 0.08}>
                  <div className="group surface h-full rounded-2xl p-5 transition-colors duration-300 hover:border-accent/50">
                    <div className="flex items-start justify-between gap-3">
                      <Sparkle className="h-5 w-5 text-accent" />
                      <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <h3 className="mt-5 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12">
              <Reveal>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="eyebrow text-fg">Keahlian teknis</h3>
                  <span className="font-mono text-[10px] text-muted">05 bidang</span>
                </div>
              </Reveal>

              <div className="mt-3">
                {skills.technical.map((skill, index) => (
                  <Reveal key={skill.name} delay={index * 0.05}>
                    <div className="group flex items-baseline justify-between gap-6 border-b border-line py-3.5 transition-colors hover:border-accent/50">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                        <span className="text-sm font-medium transition-colors group-hover:text-accent">{skill.name}</span>
                      </div>
                      <span className="max-w-[55%] text-right text-[11px] leading-snug text-muted">{skill.detail}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="eyebrow text-fg">Soft skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-3.5 py-1.5 text-[11px] font-medium text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
