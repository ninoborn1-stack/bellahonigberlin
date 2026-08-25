import { asset } from '../lib/asset.js'
import { Link } from 'react-router-dom'
import { Reveal, RevealLines } from '../components/Reveal.jsx'
import Parallax, { ParallaxImage } from '../components/Parallax.jsx'
import Marquee from '../components/Marquee.jsx'

export default function Story() {
  return (
    <>
      <section className="pageband wrap">
        <Reveal immediate><div className="breadcrumb"><Link to="/">Start</Link> · Geschichte</div></Reveal>
        <RevealLines
          immediate
          tag="h1"
          className="display"
          lines={['Eine', <>Handvoll <span className="italic" style={{ color: 'var(--honey)' }}>Honig</span></>]}
        />
        <Reveal delay={0.15} immediate>
          <p className="lead" style={{ maxWidth: '52ch', marginTop: 20 }}>
            BellaHonigBerlin entstand 2024 an einem Küchentisch in Zehlendorf — zwischen zwei Kaffeetassen,
            einem Korb voller Garnreste und der Frage: Warum trägt eigentlich niemand mehr etwas, in dem
            echte Stunden stecken?
          </p>
        </Reveal>
      </section>

      {/* big image */}
      <section className="wrap" style={{ marginTop: 40 }}>
        <Reveal>
          <div style={{ position: 'relative', height: '62vh', minHeight: 380, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <ParallaxImage src={asset('/images/ed-milly.jpg')} alt="Berlin von oben" amount={80} />
          </div>
        </Reveal>
      </section>

      <Marquee items={['Zehlendorf', 'Nadel & Garn', 'Kleine Serien', 'Große Sorgfalt', 'Seit 2024']} baseSpeed={26} />

      {/* narrative split */}
      <section className="section-pad">
        <div className="wrap split">
          <div>
            <Reveal><div className="eyebrow honey">Die Gründerin</div></Reveal>
            <RevealLines tag="h2" className="h-lg" lines={['Bella häkelt,', 'seit sie denken kann.']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 20 }}>
                Aufgewachsen mit einer Großmutter, die nie ohne Handarbeit auf dem Sofa saß, wurde aus einem
                Kindheitshobby erst eine Leidenschaft und dann ein Beruf. Der Name verbindet drei Dinge, die
                Bella liebt: das Schöne (<em>Bella</em>), das Warme &amp; Goldene (<em>Honig</em>) und ihre
                Stadt (<em>Berlin</em>).
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginTop: 14 }}>
                Jede Tasche wird noch heute von ihr und einem kleinen Team aus der Nachbarschaft gehäkelt —
                niemals im Akkord, immer mit Blick fürs Detail.
              </p>
            </Reveal>
          </div>
          <Parallax amount={50}>
            <div className="split-media tall">
              <img src={asset('/images/tex-olive.jpg')} alt="Garnknäuel und Häkelnadeln" />
            </div>
          </Parallax>
        </div>
      </section>

      {/* values / timeline */}
      <section className="section-pad" style={{ background: 'var(--bg-deep)', paddingTop: 'clamp(60px,8vw,110px)' }}>
        <div className="honeycomb-bg" style={{ opacity: 0.08 }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <Reveal><div className="eyebrow">Wofür wir stehen</div></Reveal>
          <RevealLines tag="h2" className="h-xl" lines={['Langsam, ehrlich,', 'aus Berlin.']} />
          <div style={{ marginTop: 50, display: 'grid', gap: 0 }}>
            {[
              ['Slow Fashion', 'Wir produzieren nicht auf Vorrat für die Tonne. Kleine Serien, echte Nachfrage, kein Wegwerfen.'],
              ['Recycelte Materialien', 'Unser Garn besteht aus recycelter Baumwolle. Schön für die Hände, sanfter zur Erde.'],
              ['Faire Hände', 'Alle, die für uns häkeln, kommen aus der Nachbarschaft und werden fair bezahlt. Handwerk hat einen Wert.'],
              ['Wissen teilen', 'Im Häkelkurs geben wir weiter, was wir können. Kultur bewahrt man, indem man sie verschenkt.'],
            ].map(([h, p], i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24, padding: '28px 0', borderTop: '1px solid var(--line)', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--honey)', fontSize: '1.3rem' }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="h-md" style={{ marginBottom: 8 }}>{h}</h3>
                    <p className="lead" style={{ margin: 0 }}>{p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <RevealLines tag="h2" className="h-xl" lines={['Lust, ein Stück', <>davon zu <span className="italic" style={{ color: 'var(--honey)' }}>tragen?</span></>]} />
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
              <Link to="/shop" className="btn btn-fill btn-lg">Zum Shop</Link>
              <Link to="/haekelkurs" className="btn btn-lg">Häkelkurs entdecken</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}