import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Vertical parallax on an element as it passes through the viewport.
export default function Parallax({ children, amount = 80, className, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])
  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  )
}

// Parallax for a background image inside an overflow-hidden frame (zoom-safe).
export function ParallaxImage({ src, alt = '', amount = 120, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'absolute', inset: 0 }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, width: '100%', height: `calc(100% + ${amount * 2}px)`, objectFit: 'cover', position: 'absolute', top: -amount, left: 0 }}
      />
    </div>
  )
}
