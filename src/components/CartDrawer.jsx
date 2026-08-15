import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const euro = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

export default function CartDrawer() {
  const { open, setOpen, lines, total, setQty, remove } = useCart()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cart-head">
              <h3>Deine Tasche{lines.length > 0 && ` · ${lines.length}`}</h3>
              <button className="cart-close" onClick={() => setOpen(false)} aria-label="Schließen">
                ✕
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="cart-empty">
                <img className="mark" src="/brand/mark.png" alt="" />
                <p>Noch ganz leicht — hier wartet noch keine Tasche.</p>
                <Link className="btn btn-magenta btn-fill" to="/shop" onClick={() => setOpen(false)} style={{ marginTop: 12 }}>
                  Zum Shop
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {lines.map((l) => (
                    <div className="cart-item" key={l.id}>
                      <img src={l.image} alt={l.name} />
                      <div>
                        <h4>{l.name}</h4>
                        <div className="v">{l.variant}</div>
                        <div className="qty" style={{ marginTop: 10, transform: 'scale(0.85)', transformOrigin: 'left' }}>
                          <button onClick={() => setQty(l.id, l.qty - 1)} aria-label="weniger">–</button>
                          <span>{l.qty}</span>
                          <button onClick={() => setQty(l.id, l.qty + 1)} aria-label="mehr">+</button>
                        </div>
                        <button className="rm" onClick={() => remove(l.id)}>
                          entfernen
                        </button>
                      </div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>{euro(l.qty * l.price)}</div>
                    </div>
                  ))}
                </div>
                <div className="cart-foot">
                  <div className="cart-total">
                    <span>Summe</span>
                    <span>{euro(total)}</span>
                  </div>
                  <p className="form-note" style={{ marginTop: 0 }}>
                    Versand & individuelle Wünsche klären wir persönlich per Bestellanfrage.
                  </p>
                  <Link
                    to="/kontakt?anfrage=bestellung"
                    className="btn btn-fill btn-lg"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
                    onClick={() => setOpen(false)}
                  >
                    Bestellanfrage senden
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
