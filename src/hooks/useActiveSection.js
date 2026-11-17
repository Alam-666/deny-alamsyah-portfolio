import { useEffect, useState } from 'react'

/**
 * Melacak bagian yang sedang terlihat untuk menandai tautan navigasi aktif.
 */
export function useActiveSection(ids, offset = 140) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const update = () => {
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= offset) current = id
      }

      const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (reachedBottom) current = ids[ids.length - 1] ?? current

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return active
}
