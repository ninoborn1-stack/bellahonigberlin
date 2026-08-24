import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { Reveal, RevealLines } from '../components/Reveal.jsx'

const euro = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

const topics = {
  bestellung: { label: 'Bestellanfrage', eyebrow: 'Deine Taschen sind bereit' },
  sonderfarbe: { label: 'Wunschfarbe', eyebrow: 'Deine eigene Farbe' },
  allgemein: { label: 'Allgemeine Frage', eyebrow: 'Sag Hallo' },
}

export default function Contact() {
  const [params] = useSearchParams()
  const { lines, total, clear } = useCart()
  const initialTopic = topics[params.get('anfrage')] ? params.get('anfrage') : 'allgemein'

  const [form, setForm] = useState({ name: '', email: '', topic: initialTopic, message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const cartText = useMemo(
    () => lines.map((l) => `• ${l.qty}× ${l.name} (${l.variant}) — ${euro(l.qty * l.price)}`).join('\n'),
    [lines]
  )

  const submit = (e) => {
    e.preventDefault()
    const isOrder = form.topic === 'bestellung' && lines.length > 0
    const parts = [
      `${topics[form.topic].label}`,
      ``,
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      ``,
    ]
    if (isOrder) {
      parts.push(`Warenkorb:`, cartText, ``, `Summe: ${euro(total)}`, ``)
    }
    parts.push(`Nachricht:`, form.message || '—')
    const href = `mailto:hallo@bellahonigberlin.de?subject=${encodeURIComponent(
      topics[form.topic].label + ' · BellaHonigBerlin'
    )}&body=${encodeURIComponent(parts.join('\n'))}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section className="pageband wrap" style={{ paddingBottom: 'clamp(80px,12vw,160px)' }}>
      <Reveal immediate><div className="breadcrumb"><Link to="/">Start</Link> · Kontakt</div></Reveal>
      <RevealLines
        immediate
        tag="h1"
        className="display"
        lines={['Schreib', <span className="italic" style={{ color: 'var(--honey)' }}>uns</span>]}
      />
      <Reveal delay={0.12} immediate>
        <p className="lead" style={{ maxWidth: '48ch', marginTop: 18 }}>
          Ob Bestellung, Wunschfarbe oder einfach ein Hallo — wir lesen jede Nachricht selbst und melden uns
          meist innerhalb von zwei Tagen.
        </p>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 'clamp(30px,5vw,70px)', marginTop: 50, alignItems: 'start' }}>
        {/* left info */}
        <div>
          <Reveal>
            <div style={{ display: 'grid', gap: 26 }}>
              <div>
                <div className="eyebrow ink" style={{ marginBottom: 8 }}>Atelier</div>
                <p style={{ margin: 0 }}>Weserstraße 00<br />12047 Berlin-Neukölln</p>
              </div>
              <div>
                <div className="eyebrow ink" style={{ marginBottom: 8 }}>E-Mail</div>
                <a className="link-underline" href="mailto:hallo@bellahonigberlin.de">hallo@bellahonigberlin.de</a>
              </div>
              <div>
                <div className="eyebrow ink" style={{ marginBottom: 8 }}>Sozial</div>
                <a className="link-underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
              </div>
              <div>
                <div className="eyebrow ink" style={{ marginBottom: 8 }}>Atelier-Zeiten</div>
                <p style={{ margin: 0 }}>Nach Vereinbarung &amp; an Kurstagen.<br />Komm gern zum Häkelkurs vorbei.</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={0.1}>
          <div className="form-card">
            {sent ? (
              <div className="form-success">
                <span style={{ fontSize: '1.6rem' }}>🍯</span>
                <div>
                  <h3 className="h-md" style={{ marginBottom: 6 }}>Danke dir!</h3>
                  <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
                    Deine Nachricht wartet in deinem E-Mail-Programm — einmal abschicken, dann sind wir dran.
                    {form.topic === 'bestellung' && lines.length > 0 && (
                      <>
                        {' '}
                        <button className="rm" onClick={clear} style={{ fontSize: '0.9rem' }}>Warenkorb leeren</button>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="eyebrow honey" style={{ marginBottom: 14 }}>{topics[form.topic].eyebrow}</div>

                {form.topic === 'bestellung' && (
                  <div style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 12, padding: 16, marginBottom: 20 }}>
                    <b style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.04em' }}>Dein Warenkorb</b>
                    {lines.length === 0 ? (
                      <p style={{ margin: '8px 0 0', color: 'var(--ink-faint)' }}>
                        Noch leer. <Link to="/shop" className="link-underline">Zum Shop →</Link>
                      </p>
                    ) : (
                      <>
                        {lines.map((l) => (
                          <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: '0.95rem' }}>
                            <span>{l.qty}× {l.name} · {l.variant}</span>
                            <span>{euro(l.qty * l.price)}</span>
                          </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line)', fontFamily: 'var(--serif)', fontSize: '1.15rem' }}>
                          <span>Summe</span><span>{euro(total)}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cname">Name</label>
                    <input id="cname" required value={form.name} onChange={set('name')} placeholder="Dein Name" />
                  </div>
                  <div className="field">
                    <label htmlFor="cemail">E-Mail</label>
                    <input id="cemail" type="email" required value={form.email} onChange={set('email')} placeholder="deine@email.de" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="topic">Anliegen</label>
                  <select id="topic" value={form.topic} onChange={set('topic')}>
                    <option value="allgemein">Allgemeine Frage</option>
                    <option value="bestellung">Bestellanfrage</option>
                    <option value="sonderfarbe">Wunschfarbe / Sonderanfertigung</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cmessage">Nachricht</label>
                  <textarea id="cmessage" required value={form.message} onChange={set('message')} placeholder="Erzähl uns, worum es geht …" />
                </div>
                <button type="submit" className="btn btn-magenta btn-fill btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Nachricht senden →
                </button>
                <p className="form-note" style={{ marginTop: 12 }}>
                  Deine Daten nutzen wir nur, um dir zu antworten. Kein Newsletter, kein Spam.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
