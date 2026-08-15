import { useEffect } from 'react'
import Lenis from 'lenis'

// Global smooth-scroll instance so anchor links + framer scroll stay in sync.
export let lenis = null

export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}
