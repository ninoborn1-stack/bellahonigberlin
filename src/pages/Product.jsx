import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProduct, products } from '../lib/products.js'
import { useCart } from '../context/CartContext.jsx'
import { Reveal } from '../components/Reveal.jsx'

const euro = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

export default function Product() {
  const { slug } = useParams()
  const p = getProduct(slug)
  const { add } = useCart()
  const [active, setActive] = useState(0)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setActive(0)
    setQty(1)
  }, [slug])

  if (!p) return <section className="pageband wrap"><h1 className="h-xl">Nicht gefunden</h1></section>

  const other = products.find((x) => x.slug !== p.slug)

  return (
    <>
      <section className="pageband wrap">
        <Reveal immediate>
          <div className="breadcrumb">
            <Link to="/">Start</Link> · <Link to="/shop">Shop</Link> · {p.name}
          </div>
        </Reveal>

        <div className="pdp" style={{ marginTop: 26 }}>
          <div className="pdp-gallery">
            <motion.div
              className="main"
              key={active}
              initial={{ opacity: 0.2, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={p.images[active]} alt={`${p.name} Ansicht ${active + 1}`} />
            </motion.div>
            <div className="pdp-thumbs">
              {p.images.map((img, i) => (
                <button key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
                  <img src={img} alt={`${p.name} Miniatur ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-info">
            <div className="eyebrow">{p.tagline}</div>
            <h1 className="h-xl" style={{ margin: '10px 0 6px' }}>{p.name}</h1>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem' }}>{euro(p.price)}</div>
            <p className="lead" style={{ marginTop: 18 }}>{p.short}</p>

            <div style={{ fontWeight: 600, fontSize: '0.86rem', marginTop: 26 }}>
              Farbe: <span style={{ color: 'var(--ink-soft)' }}>{p.color}</span>
            </div>
            <div className="pdp-swatches">
              {products.map((v) => (
                <Link key={v.slug} to={`/produkt/${v.slug}`} className={`swatch ${v.slug === p.slug ? 'active' : ''}`} aria-label={v.name} title={`${v.name} · ${v.color}`}>
                  <span style={{ background: v.swatch }} />
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="weniger">–</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="mehr">+</button>
              </div>
              <button
                className="btn btn-fill btn-lg"
                style={{ flex: 1, justifyContent: 'center', minWidth: 200 }}
                onClick={() => add({ slug: p.slug, name: p.name, variant: p.color, price: p.price, image: p.images[0], qty })}
              >
                In die Tasche · {euro(p.price * qty)}
              </button>
            </div>
            <p className="form-note" style={{ marginTop: 14 }}>
              ✦ Unikat — von Hand gehäkelt, kleine Abweichungen machen es besonders. Lieferzeit 1–2 Wochen.
            </p>

            <div className="pdp-meta">
              <details open>
                <summary>Beschreibung</summary>
                <p>{p.story}</p>
              </details>
              <details>
                <summary>Details &amp; Maße</summary>
                {p.details.map(([k, v]) => (
                  <p key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, borderBottom: '1px dotted var(--line)', paddingBottom: 6 }}>
                    <b style={{ fontFamily: 'var(--sans)', color: 'var(--ink)' }}>{k}</b>
                    <span style={{ textAlign: 'right' }}>{v}</span>
                  </p>
                ))}
              </details>
              <details>
                <summary>Pflege</summary>
                <p>{p.care}</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* the other one */}
      {other && (
        <section className="section-pad">
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: 24 }}>Vielleicht auch</div>
            <Link to={`/produkt/${other.slug}`} className="split" style={{ alignItems: 'stretch' }}>
              <div className="split-media" style={{ aspectRatio: '16/10' }}>
                <img src={other.images[0]} alt={other.name} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 className="h-lg">{other.name} — {other.tagline}</h2>
                <p className="lead" style={{ marginTop: 14 }}>{other.short}</p>
                <span className="link-underline" style={{ marginTop: 18, alignSelf: 'flex-start' }}>
                  {other.name} ansehen · {euro(other.price)} →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
