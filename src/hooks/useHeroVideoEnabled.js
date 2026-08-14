import { useEffect, useState } from 'react'

const MOBILE_MAX_WIDTH = 768

function shouldEnableHeroVideo() {
  if (typeof window === 'undefined') return false

  const isDesktop = window.matchMedia(`(min-width: ${MOBILE_MAX_WIDTH + 1}px)`).matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return isDesktop && !prefersReducedMotion
}

/**
 * Returns true only on desktop viewports without reduced-motion preference.
 * Video elements should be rendered only when this hook returns true so mobile
 * browsers never request hero video files.
 */
export default function useHeroVideoEnabled() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(shouldEnableHeroVideo())
    }

    update()
    mobileQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)

    return () => {
      mobileQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  return enabled
}

export { MOBILE_MAX_WIDTH }
