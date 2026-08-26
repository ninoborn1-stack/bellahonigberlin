import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const euro = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

export default function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <article className="prod-card">
      <Link to={`/produkt/${p.slug}`} className="prod-media" aria-label={p.name}>
        <span className="prod-tag">{p.tag}</span>
        <img src={p.images[0]} alt={`${p.name} — handgehäkelte Tasche`} loading="lazy" />
        <button
          className="prod-add"
          aria-label={`${p.name} in die Tasche legen`}
          onClick={(e) => {
            e.preventDefault()
            add({ slug: p.slug, name: p.name, variant: p.color, price: p.price, image: p.images[0], qty: 1 })
          }}
        >
          +
        </button>
      </Link>
      <Link to={`/produkt/${p.slug}`} className="prod-info">
        <div className="prod-info-main">
          <h3>{p.name}</h3>
          <div className="name-sub">{p.tagline} · {p.color}</div>
        </div>
        <div className="prod-price">{euro(p.price)}</div>
      </Link>
    </article>
  )
}
