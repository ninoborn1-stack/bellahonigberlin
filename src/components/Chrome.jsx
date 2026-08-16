import { motion, useScroll, useSpring } from 'framer-motion'

// Scroll progress bar at the very top.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return <motion.div className="scroll-prog" style={{ scaleX, width: '100%' }} />
}

export function Grain() {
  return <div className="grain" aria-hidden />
}
