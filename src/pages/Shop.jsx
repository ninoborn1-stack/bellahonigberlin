import { Link } from 'react-router-dom'
import { products } from '../lib/products.js'
import { Reveal, RevealLines } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Parallax from '../components/Parallax.jsx'
import Marquee from '../components/Marquee.jsx'

export default function Shop() {
  return (
    <>
      <section className="pageband wrap">
        <Reveal immediate>
          <div className="breadcrumb"><Link to="/">Start</Link> · Shop</div>
        </Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginTop: 20 }}>
          <RevealLines immediate tag="h1" className="display" lines={['Der', <span className="italic" style={{ color: 'var(--magenta)' }}>Shop</span>]} />
          <Reveal delay={0.15} immediate>
            <p className="lead" style={{ maxWidth: '38ch' }}>
              Aktuell führen wir eine Taschenform in zwei Handschriften. Klein, aber jede von Hand — und jede
              anders. Neue Farben kommen mit den Jahreszeiten.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} immediate>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 30 }}>
            <span className="chip"><span className="dot" /> Handgehäkelt</span>
            <span className="chip"><span className="dot" /> Recycelte Baumwolle</span>
            <span className="chip"><span className="dot" /> Unikat · limitiert</span>
            <span className="chip"><span className="dot" /> Versand aus Berlin</span>
          </div>
        </Reveal>
      </section>

      <section className="section-pad" style={{ paddingTop: 'clamp(48px, 7vw, 90px)' }}>
        <div className="wrap">
          <div className="prod-grid">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={['Bald mehr Farben', 'Milly', 'Otto', 'Wunschfarbe? Frag uns', 'Handmade in Berlin']} baseSpeed={30} />

      {/* Made to order note */}
      <section className="section-pad">
        <div className="wrap split">
          <div>
            <Reveal><div className="eyebrow honey">Auf Wunsch</div></Reveal>
            <RevealLines tag="h2" className="h-lg" lines={['Deine Farbe,', 'deine Tasche.']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 20 }}>
                Du hättest Milly gern in Salbei oder Otto in Beere? Weil wir von Hand arbeiten, sind
                Sonderfarben und kleine Extras möglich. Schreib uns einfach — wir häkeln auf Anfrage.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link to="/kontakt?anfrage=sonderfarbe" className="btn btn-magenta btn-fill btn-lg" style={{ marginTop: 26 }}>
                Wunschfarbe anfragen →
              </Link>
            </Reveal>
          </div>
          <Parallax amount={50}>
            <div className="split-media tall">
              <img src="/images/yarn-honey.jpg" alt="Garn in verschiedenen Farben" />
            </div>
          </Parallax>
        </div>
      </section>
    </>
  )
}
