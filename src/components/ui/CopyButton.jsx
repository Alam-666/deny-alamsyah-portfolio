import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from './Icons'

function fallbackCopy(value) {
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const succeeded = document.execCommand('copy')
  document.body.removeChild(textarea)
  if (!succeeded) throw new Error('Gagal menyalin ke clipboard')
}

export default function CopyButton({ value, label = 'Salin', className = '' }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        fallbackCopy(value)
      }
    } catch {
      try {
        fallbackCopy(value)
      } catch {
        return
      }
    }

    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} berhasil` : `${label} ${value}`}
      title={copied ? 'Tersalin!' : label}
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}
