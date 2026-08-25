import { asset } from '../lib/asset.js'
import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/geschichte', label: 'Geschichte' },
  { to: '/haekelkurs', label: 'Häkelkurs' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const { count, setOpen } = useCart()
  const { pathname } = useLocation()
  // On the home page the nav floats over the dark full-bleed hero → light text.
  const overHero = pathname === '/' && !scrolled && !menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
  }, [menu])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menu ? 'menu-open' : ''} ${overHero ? 'over-hero' : ''}`}>
        <Link to="/" className="nav-brand" onClick={() => setMenu(false)}>
          <img className="mark" src={asset('/brand/mark.png')} alt="" />
          <b>
            Bella<span>Honig</span>Berlin
          </b>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Warenkorb öffnen">
            Tasche
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <button
            className="nav-burger"
            onClick={() => setMenu((m) => !m)}
            aria-label="Menü"
            style={{ display: undefined }}
          >
            <span style={{ transform: menu ? 'translateY(7px) rotate(45deg)' : '' }} />
            <span style={{ opacity: menu ? 0 : 1 }} />
            <span style={{ transform: menu ? 'translateY(-7px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <Link key={l.to} to={l.to} onClick={() => setMenu(false)}>
                {l.label} <span>0{i + 1}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}