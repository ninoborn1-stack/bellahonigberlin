import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion'

// Continuously scrolling marquee that also nudges with scroll velocity.
export default function Marquee({ items, baseSpeed = 40 }) {
  const x = useMotionValue(0)
  const ref = useRef(null)
  const dir = useRef(1)
  const { scrollY } = useScroll()
  const prev = useRef(0)

  useAnimationFrame((_, delta) => {
    const v = scrollY.get()
    const dv = v - prev.current
    prev.current = v
    let move = (baseSpeed * delta) / 1000
    move += dv * 0.15
    let next = x.get() - move
    const width = ref.current ? ref.current.offsetWidth / 2 : 1000
    if (next <= -width) next += width
    if (next > 0) next -= width
    x.set(next)
  })

  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <motion.div className="marquee-track" ref={ref} style={{ x }}>
        {loop.map((it, i) => (
          <span key={i}>
            {it} <span className="dot">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
