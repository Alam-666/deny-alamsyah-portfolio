import { motion } from 'framer-motion'

function CommerceMock() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 rounded-full bg-fg/25" />
        <div className="h-4 w-14 rounded-full bg-accent/80" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((item) => (
          <div key={item} className="space-y-1.5">
            <div
              className="h-10 rounded-md"
              style={{ background: `linear-gradient(135deg, var(--accent-soft), var(--grid))` }}
            />
            <div className="h-1 w-3/4 rounded-full bg-fg/20" />
            <div className="h-1 w-1/2 rounded-full bg-accent/70" />
          </div>
        ))}
      </div>
    </div>
  )
}

function CmsMock() {
  return (
    <div className="flex gap-2">
      <div className="w-1/4 space-y-1.5">
        <div className="h-2 w-full rounded-full bg-accent/70" />
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-1.5 w-4/5 rounded-full bg-fg/15" />
        ))}
      </div>
      <div className="flex-1 space-y-1.5 rounded-md border border-line p-2">
        <div className="flex justify-between">
          <div className="h-1.5 w-12 rounded-full bg-fg/25" />
          <div className="h-1.5 w-8 rounded-full bg-accent/70" />
        </div>
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item * 0.12 }}
            className="h-1.5 rounded-full bg-fg/12"
            style={{ width: `${90 - item * 18}%`, transformOrigin: 'left' }}
          />
        ))}
      </div>
    </div>
  )
}

function OperationsMock() {
  const bars = [45, 70, 38, 88, 62, 96]
  return (
    <div className="space-y-2.5">
      <div className="flex gap-2">
        <div className="flex-1 rounded-md border border-line p-2">
          <div className="h-1 w-8 rounded-full bg-fg/20" />
          <div className="mt-1.5 h-2.5 w-12 rounded-full bg-accent/70" />
        </div>
        <div className="flex-1 rounded-md border border-line p-2">
          <div className="h-1 w-8 rounded-full bg-fg/20" />
          <div className="mt-1.5 h-2.5 w-10 rounded-full bg-fg/25" />
        </div>
      </div>
      <div className="flex h-12 items-end gap-1.5">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            style={{ height: `${height}%`, transformOrigin: 'bottom' }}
            className="flex-1 rounded-t-sm bg-accent/60"
          />
        ))}
      </div>
    </div>
  )
}

const variants = {
  commerce: CommerceMock,
  cms: CmsMock,
  operations: OperationsMock,
}

/** Ilustrasi UI mini sebagai pengganti screenshot proyek. */
export default function ProjectMock({ variant = 'commerce', label }) {
  const Content = variants[variant] ?? CommerceMock

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-elevated p-3 shadow-[var(--shadow)]">
      <div className="mb-3 flex items-center gap-1.5 border-b border-line pb-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/20" />
        <span className="ml-2 font-mono text-[8px] tracking-widest text-muted uppercase">{label}</span>
      </div>
      <div className="h-28">
        <Content />
      </div>
    </div>
  )
}
