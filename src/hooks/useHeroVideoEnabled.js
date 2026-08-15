import { useEffect, useState } from 'react'

function shouldEnableHeroVideo() {
  if (typeof window === 'undefined') return false

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Returns true unless the user prefers reduced motion.
 * Initializes synchronously so the video element can mount on first paint,
 * which mobile Safari requires for muted autoplay to work reliably.
 */
export default function useHeroVideoEnabled() {
  const [enabled, setEnabled] = useState(() => shouldEnableHeroVideo())

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
