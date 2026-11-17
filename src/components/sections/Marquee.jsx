import { motion } from 'framer-motion'
import { Sparkle } from '../ui/Icons'

const items = [
  'WordPress',
  'Web Development',
  'Figma',
  'E-Commerce',
  'UI Design',
  'Custom CMS',
  'Analisis Kebutuhan',
  'Jaringan Komputer',
  'Kepemimpinan',
  'Problem Solving',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <div key={item} className="flex items-center">
          <span className="px-6 font-mono text-[11px] tracking-[0.18em] whitespace-nowrap text-muted uppercase sm:px-8">
            {item}
          </span>
          <Sparkle className="h-3.5 w-3.5 shrink-0 text-accent" />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-elevated/50 py-4">
      <p className="sr-only">Keahlian: {items.join(', ')}</p>
      <div
        aria-hidden="true"
        className="[mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex w-max"
        >
          <Row />
          <Row />
        </motion.div>
      </div>
    </div>
  )
}
