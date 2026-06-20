import { useEffect, useRef } from 'react'

// Animated background: aurora blobs + grid overlay + a cursor-following glow.
export default function Background() {
  const glowRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <div className="aurora" />
      <div className="grid-overlay" />
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
        }}
      />
    </>
  )
}
