import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import profile from '../../data/profile'
import Button from '../ui/Button'
import CopyButton from '../ui/CopyButton'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { ArrowUpRight, Check, Mail, Phone } from '../ui/Icons'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Kolaborasi dari ${form.name || 'portofolio'}`
    const body = [
      `Halo Deny,`,
      '',
      form.message,
      '',
      '—',
      form.name,
      form.email,
    ].join('\n')

    window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative border-t border-line py-24 sm:py-32">
      <div className="glow-blob pointer-events-none absolute -top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-70" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="04 — Kontak"
            title={
              <>
                Punya ide?
                <br />
                Mari kita <span className="font-display font-normal text-accent italic">wujudkan.</span>
              </>
            }
            description="Terbuka untuk peluang kerja, proyek website, atau sekadar berdiskusi soal teknologi dan desain."
          />

          <Reveal delay={0.12}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">{profile.availability}</span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-3">
            <Reveal>
              <div className="surface group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Mail />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">Email</p>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="mt-1 block text-[13px] font-medium break-all transition-colors hover:text-accent sm:text-sm"
                  >
                    {profile.contact.email}
                  </a>
                </div>
                <CopyButton value={profile.contact.email} label="Salin email" />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Phone />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">Telepon</p>
                  <a
                    href={profile.contact.phoneHref}
                    className="mt-1 block text-[13px] font-medium transition-colors hover:text-accent sm:text-sm"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
                <CopyButton value={profile.contact.phone} label="Salin nomor telepon" />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={profile.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-dashed border-line p-5 transition-colors hover:border-accent hover:bg-accent-soft"
              >
                <div>
                  <p className="text-sm font-semibold">Chat lewat WhatsApp</p>
                  <p className="mt-1 text-[11px] text-muted">Respons lebih cepat di jam kerja.</p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="pt-3 text-[11px] leading-relaxed text-muted">
                Berdomisili di {profile.location}. Siap berkolaborasi secara remote maupun on-site.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="surface relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">Kirim pesan</h3>
                  <p className="mt-1 text-[12px] text-muted">Isi detail singkat, lalu kirim lewat aplikasi email Anda.</p>
                </div>
                <span className="hidden rounded-full border border-line px-2.5 py-1 font-mono text-[9px] tracking-widest text-muted uppercase sm:block">
                  Form
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    className="mt-2 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="mt-2 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={1200}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ceritakan proyek atau peluang yang ingin Anda diskusikan..."
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  className="flex-1 sm:flex-none"
                  icon={<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                >
                  Kirim Pesan
                </Button>
                <p className="text-[10px] text-muted">Tidak ada data yang disimpan di server.</p>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    role="status"
                    className="mt-4 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent-soft p-3.5 text-[11px] leading-relaxed text-fg"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    Aplikasi email Anda akan terbuka dengan pesan yang sudah terisi. Jika tidak terbuka, hubungi saya
                    langsung melalui email.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
