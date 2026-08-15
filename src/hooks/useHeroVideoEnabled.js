import { useEffect, useState } from 'react'

function shouldEnableHeroVideo() {
  if (typeof window === 'undefined') return false

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Returns true unless the user prefers reduced motion.
 * Hero video uses muted autoplay with playsInline for mobile compatibility.
 */
export default function useHeroVideoEnabled() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(shouldEnableHeroVideo())
    }

    update()
    motionQuery.addEventListener('change', update)

    return () => {
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  return enabled
}
