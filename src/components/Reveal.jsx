import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Directional reveal. Uses the useInView hook (reliable for both
// scrolled-into-view and already-in-view-at-mount cases). `immediate`
// forces the shown state right away for above-the-fold content.
export function Reveal({ children, y = 34, delay = 0, className, as = 'div', immediate = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const show = immediate || inView
  const M = motion[as] || motion.div
  return (
    <M
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </M>
  )
}

// Line-by-line masked headline reveal for editorial titles.
export function RevealLines({ lines, className, tag: Tag = 'h2', immediate = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const show = immediate || inView
  const MTag = motion[Tag] || motion.h2
  return (
    <MTag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            animate={show ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.85, delay: i * 0.08, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MTag>
  )
}
