import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Scroll progress bar at the very top.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return <motion.div className="scroll-prog" style={{ scaleX, width: '100%' }} />
}

// Custom honey-dot cursor with a trailing ring (desktop only).
export function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 900) return
    setEnabled(true)
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`
    }
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    const hoverables = 'a, button, .prod-card, input, textarea, select, summary, [data-hover]'
    const enter = () => document.body.classList.add('cur-hover')
    const leave = () => document.body.classList.remove('cur-hover')
    const bind = () => {
      document.querySelectorAll(hoverables).forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    bind()
    const mo = new MutationObserver(bind)
    mo.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      mo.disconnect()
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div className="cursor-ring" ref={ring} />
      <div className="cursor-dot" ref={dot} />
    </>
  )
}

export function Grain() {
  return <div className="grain" aria-hidden />
}
