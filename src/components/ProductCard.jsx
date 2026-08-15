import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const euro = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

export default function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <article className="prod-card">
      <Link to={`/produkt/${p.slug}`} className="prod-media" aria-label={p.name}>
        <span className={`prod-tag ${p.tagStyle === 'honey' ? 'honey' : ''}`}>{p.tag}</span>
        <img src={p.images[0]} alt={`${p.name} — handgehäkelte Tasche`} loading="lazy" />
        <div className="prod-quick">
          <span className="btn btn-fill" style={{ flex: 1, justifyContent: 'center' }}>
            Ansehen
          </span>
          <button
            className="btn btn-magenta btn-fill"
            onClick={(e) => {
              e.preventDefault()
              add({ slug: p.slug, name: p.name, variant: p.color, price: p.price, image: p.images[0], qty: 1 })
            }}
          >
            +
          </button>
        </div>
      </Link>
      <Link to={`/produkt/${p.slug}`} className="prod-info">
        <div>
          <h3>{p.name}</h3>
          <div className="name-sub">{p.tagline} · {p.color}</div>
        </div>
        <div className="prod-price">{euro(p.price)}</div>
      </Link>
    </article>
  )
}
