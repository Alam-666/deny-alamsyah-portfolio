import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent text-on-accent border border-transparent hover:brightness-110',
  outline: 'border border-line text-fg hover:border-accent hover:text-accent',
  ghost: 'text-fg hover:text-accent',
}

const sizes = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-xs',
}

/** Tombol/tautan dengan animasi halus; reduced-motion ditangani MotionConfig. */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    className: classes,
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
    ...props,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
        {icon}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps}>
      {children}
      {icon}
    </motion.button>
  )
}
