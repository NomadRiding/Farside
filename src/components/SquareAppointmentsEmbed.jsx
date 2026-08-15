import { useEffect, useRef, useState } from 'react'
import { SQUARE_APPOINTMENTS_SCRIPT } from '../data/squareAppointments'
import '../styles/SquareAppointments.css'

export default function SquareAppointmentsEmbed() {
  const containerRef = useRef(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    container.innerHTML = ''
    setLoadError(false)

    const script = document.createElement('script')
    script.src = SQUARE_APPOINTMENTS_SCRIPT
    script.async = true
    script.onerror = () => setLoadError(true)

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  if (loadError) {
    return (
      <div className="square-appointments square-appointments--error" role="alert">
        <p>Unable to load the booking widget right now.</p>
        <p className="form-hint">
          Please refresh the page or contact us directly to schedule your charter.
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="square-appointments"
      aria-label="Square appointment booking"
    />
  )
}
