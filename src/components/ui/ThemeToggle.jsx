import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { Moon, Sun } from './Icons'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      title={isDark ? 'Mode terang' : 'Mode gelap'}
      whileHover={{ rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.22 }}
          className="absolute"
        >
          {isDark ? <Moon /> : <Sun />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
