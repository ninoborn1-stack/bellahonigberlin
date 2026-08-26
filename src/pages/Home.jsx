import { asset } from '../lib/asset.js'
import { Link } from 'react-router-dom'
import { products } from '../lib/products.js'
import { Reveal, RevealLines } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Parallax, { ParallaxImage } from '../components/Parallax.jsx'

function Hero() {
  return (
    <section className="hero">
      <picture className="hero-bg">
        <source media="(max-width: 760px)" srcSet={asset('/images/hero-editorial.jpg')} />
        <img src={asset('/images/hero-full.jpg')} alt="Model mit der handgehäkelten Tasche Milly von BellaHonigBerlin" />
      </picture>
      <div className="hero-scrim" />

      <div className="hero-content">
        <div className="hero-left">
          <RevealLines
            immediate
            tag="h1"
            className="display hero-title"
            lines={[<>Von <span className="hero-honey-word">Hand</span>,</>, <>mit <span className="hero-accent-word">Liebe</span></>, 'gehäkelt']}
          />
          <Reveal delay={0.2} immediate>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-fill btn-lg btn-arrow">
                Taschen entdecken
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/haekelkurs" className="hero-textlink">
                Zum Häkelkurs →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-caption">Milly · Honigbeige</div>
      <div className="hero-scroll"><span>Scroll</span><span className="line" /></div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Collection */}
      <section className="section-pad" style={{ background: 'var(--bg-deep)' }}>
        <div className="honeycomb-bg" style={{ opacity: 0.08 }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 54 }}>
            <div>
              <Reveal><div className="eyebrow">Die Kollektion</div></Reveal>
              <RevealLines tag="h2" className="h-xl" lines={['Drei Charaktere,', 'eine Handschrift.']} />
            </div>
            <Reveal delay={0.1}>
              <Link to="/shop" className="link-underline" style={{ paddingBottom: 8 }}>Alle ansehen →</Link>
            </Reveal>
          </div>
          <div className="prod-grid">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Idea / manifesto */}
      <section className="section-pad">
        <div className="wrap split">
          <div>
            <Reveal><div className="eyebrow honey">Die Idee</div></Reveal>
            <RevealLines
              tag="h2"
              className="h-xl"
              lines={['Süß im Namen,', <>ernst im <span className="italic" style={{ color: 'var(--honey)' }}>Handwerk</span>.</>]}
            />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 26 }}>
                BellaHonigBerlin ist keine Fabrik, sondern ein Atelier in Berlin-Zehlendorf — ein Korb voller
                recycelter Baumwolle und viele stille Abendstunden. Wir häkeln Taschen, die man weitergibt statt
                wegwirft: langsam gemacht, lange geliebt.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="stats">
                <div className="stat"><div className="n"><em>100</em>%</div><div className="l">Handarbeit</div></div>
                <div className="stat"><div className="n">3</div><div className="l">Modelle</div></div>
                <div className="stat"><div className="n"><em>1</em>/1</div><div className="l">Unikat</div></div>
              </div>
            </Reveal>
          </div>
          <Parallax amount={50}>
            <div className="split-media tall">
              <img src={asset('/images/tex-beige.jpg')} alt="Häkeltextur aus recycelter Baumwolle" />
            </div>
          </Parallax>
        </div>
      </section>

      {/* Full-bleed honey banner */}
      <section style={{ position: 'relative', height: '78vh', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <ParallaxImage src={asset('/images/ed-milly.jpg')} alt="Editorial — Milly von BellaHonigBerlin" amount={90} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(22,35,47,0.72), rgba(22,35,47,0.25))' }} />
        <div className="wrap" style={{ position: 'relative', color: 'var(--paper)' }}>
          <Reveal><div className="eyebrow honey" style={{ color: 'var(--honey-glow)' }}>Warum Honig?</div></Reveal>
          <RevealLines
            tag="h2"
            className="h-xl"
            lines={['„Gutes entsteht', <>langsam — Masche</>, <>für Masche.“</>]}
          />
          <Reveal delay={0.15}>
            <p className="lead" style={{ color: '#e7e2d8', maxWidth: '46ch', marginTop: 20 }}>
              Wie im Bienenstock zählt bei uns jede kleine Wabe. Deshalb der Honig im Namen — für Wärme,
              Geduld und diesen goldenen Ton, der sich durch alles zieht.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad">
        <div className="wrap">
          <Reveal><div className="eyebrow center" style={{ marginBottom: 18 }}>Unser Versprechen</div></Reveal>
          <div className="pillars">
            {[
              ['01', 'Wirklich handgemacht', 'Keine Maschine, keine Massenware. Jede Tasche wird von Hand gehäkelt — in Stunden, nicht Sekunden.'],
              ['02', 'Aus Berlin', 'Entworfen und gefertigt in Zehlendorf. Kurze Wege, faire Arbeit, echte Gesichter hinter jedem Stück.'],
              ['03', 'Für die Ewigkeit', 'Robuste, recycelte Baumwolle und Stiche, die halten. Eine Tasche zum Behalten und Weitergeben.'],
            ].map(([num, h, p], i) => (
              <Reveal key={num} delay={i * 0.08}>
                <div className="pillar">
                  <span className="num">{num}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course teaser */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="course-hero">
            <div className="bgimg"><img src={asset('/images/ed-frame-navy.jpg')} alt="Häkelkurs bei BellaHonigBerlin" /></div>
            <Reveal><div className="eyebrow honey" style={{ color: 'var(--honey-glow)' }}>Häkelkurs</div></Reveal>
            <RevealLines tag="h2" className="h-xl" lines={['Lern es selbst —', 'alle zwei Wochen.']} />
            <Reveal delay={0.12}>
              <p className="lead" style={{ color: '#e7e2d8', maxWidth: '48ch', marginTop: 18 }}>
                In kleinen Runden von 10–50 Plätzen (je nach Standort) zeigen wir dir, wie aus einem Faden
                deine eigene Tasche wird. Anfänger:innen willkommen — Garn, Nadeln und Kaffee gibt's von uns.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/haekelkurs" className="btn btn-magenta btn-fill btn-lg" style={{ marginTop: 28 }}>
                Platz anfragen →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap split reverse">
          <Parallax amount={50}>
            <div className="split-media tall">
              <img src={asset('/images/ed-frame-pin.jpg')} alt="Editorial — handgemacht in Berlin" />
            </div>
          </Parallax>
          <div>
            <Reveal><div className="eyebrow">Die Geschichte</div></Reveal>
            <RevealLines tag="h2" className="h-lg" lines={['Angefangen mit', 'einem Knäuel Garn', 'und viel zu viel Liebe.']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 22 }}>
                Was als Geschenk für eine Freundin begann, ist heute ein kleines Label mit großem Herzen.
                Lern die Menschen, das Atelier und die Idee dahinter kennen.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link to="/geschichte" className="btn btn-lg" style={{ marginTop: 24 }}>
                Unsere Geschichte lesen
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}