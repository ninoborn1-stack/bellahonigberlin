import { asset } from '../lib/asset.js'
import { useMemo, useState } from 'react'
import { courseDates } from '../lib/products.js'
import { Reveal, RevealLines } from '../components/Reveal.jsx'
import { ParallaxImage } from '../components/Parallax.jsx'

function spotsLabel(d) {
  if (d.spots === 0) return 'Ausgebucht'
  if (d.spots <= 5) return `Nur noch ${d.spots} Plätze`
  return `${d.spots} von ${d.capacity} Plätzen frei`
}

export default function Course() {
  const openDates = useMemo(() => courseDates.filter((d) => d.spots > 0), [])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: openDates[0]?.date || '',
    people: '1',
    level: 'Anfänger:in',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const body = [
      `Häkelkurs-Anfrage`,
      ``,
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone || '—'}`,
      `Wunschtermin: ${form.date}`,
      `Personen: ${form.people}`,
      `Level: ${form.level}`,
      ``,
      `Nachricht:`,
      form.message || '—',
    ].join('\n')
    const href = `mailto:hallo@bellahonigberlin.de?subject=${encodeURIComponent(
      'Häkelkurs-Anfrage · ' + form.date
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  return (
    <>
      {/* hero */}
      <section className="pageband wrap">
        <div className="course-hero" style={{ minHeight: 420 }}>
          <ParallaxImage src={asset('/images/tex-beige.jpg')} alt="Häkeln im Kurs" amount={70} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(22,35,47,0.86), rgba(22,35,47,0.35))', zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Reveal immediate><div className="eyebrow honey" style={{ color: 'var(--honey-glow)' }}>Häkelkurs · alle 2 Wochen</div></Reveal>
            <RevealLines immediate tag="h1" className="display" lines={['Häkeln', <span className="italic" style={{ color: 'var(--honey-glow)' }}>lernen</span>]} />
            <Reveal delay={0.15} immediate>
              <p className="lead" style={{ color: '#e7e2d8', maxWidth: '50ch', marginTop: 18 }}>
                Setz dich zu uns. In entspannten Runden von 10 bis 50 Plätzen — je nach Standort — häkelst du
                unter Anleitung deine erste eigene Tasche. Garn, Nadeln, Kaffee &amp; Kuchen inklusive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section-pad" style={{ paddingBottom: 'clamp(40px,6vw,70px)' }}>
        <div className="wrap">
          <div className="pillars">
            {[
              ['①', 'Termin wählen', 'Alle zwei Wochen, samstags. Such dir Datum und Standort aus — von Zehlendorf bis Charlottenburg.'],
              ['②', 'Platz anfragen', 'Sag uns, mit wie vielen du kommst. Wir bestätigen deinen Platz per Mail. Zahlung vor Ort.'],
              ['③', 'Loslegen', 'Ohne Vorkenntnisse. Am Ende gehst du mit deiner selbstgehäkelten Tasche und neuem Lieblingshobby.'],
            ].map(([n, h, p], i) => (
              <Reveal key={h} delay={i * 0.08}>
                <div className="pillar">
                  <span className="num" style={{ fontSize: '1.6rem', fontStyle: 'normal' }}>{n}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* dates + form */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap course-book">
          <div>
            <Reveal><div className="eyebrow">Kommende Termine</div></Reveal>
            <RevealLines tag="h2" className="h-lg" lines={['Wann passt es dir?']} />
            <div className="course-dates" style={{ marginTop: 28 }}>
              {courseDates.map((d, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <button
                    type="button"
                    className={`date-card ${d.spots === 0 ? 'full' : d.spots <= 5 ? 'low' : ''}`}
                    disabled={d.spots === 0}
                    onClick={() => setForm((f) => ({ ...f, date: d.date }))}
                    style={{ textAlign: 'left', cursor: d.spots === 0 ? 'default' : 'pointer', width: '100%', outline: form.date === d.date ? '2px solid var(--honey)' : 'none' }}
                  >
                    <span className="d">{d.date}</span>
                    <span className="loc">{d.location}</span>
                    <span className="loc" style={{ fontWeight: 500, fontSize: '0.86rem' }}>{d.time}</span>
                    <span className="spots">{spotsLabel(d)}</span>
                  </button>
                </Reveal>
              ))}
            </div>
            <p className="form-note" style={{ marginTop: 18 }}>
              Plätze variieren je nach Standort (10–50). Kein passender Termin dabei? Schreib uns trotzdem —
              wir setzen dich auf die Warteliste.
            </p>
          </div>

          {/* form */}
          <div className="form-card" id="anfrage">
            {sent ? (
              <div>
                <div className="form-success">
                  <span style={{ fontSize: '1.6rem' }}>🍯</span>
                  <div>
                    <h3 className="h-md" style={{ marginBottom: 6 }}>Fast geschafft!</h3>
                    <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
                      Dein E-Mail-Programm hat sich mit der fertigen Anfrage geöffnet. Schick sie ab — wir
                      melden uns innerhalb von 2 Tagen mit deiner Platzbestätigung.
                    </p>
                  </div>
                </div>
                <button className="btn btn-lg" style={{ marginTop: 20 }} onClick={() => setSent(false)}>
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="eyebrow honey" style={{ marginBottom: 14 }}>Platz anfragen</div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" required value={form.name} onChange={set('name')} placeholder="Vor- & Nachname" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">E-Mail</label>
                    <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="deine@email.de" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Telefon (optional)</label>
                    <input id="phone" value={form.phone} onChange={set('phone')} placeholder="+49 …" />
                  </div>
                  <div className="field">
                    <label htmlFor="people">Personen</label>
                    <select id="people" value={form.people} onChange={set('people')}>
                      {['1', '2', '3', '4', '5+'].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="date">Wunschtermin</label>
                    <select id="date" value={form.date} onChange={set('date')}>
                      {courseDates.map((d) => (
                        <option key={d.date} value={d.date} disabled={d.spots === 0}>
                          {d.date} · {d.location} {d.spots === 0 ? '(ausgebucht)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="level">Erfahrung</label>
                    <select id="level" value={form.level} onChange={set('level')}>
                      {['Anfänger:in', 'Etwas Übung', 'Fortgeschritten'].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Nachricht (optional)</label>
                  <textarea id="message" value={form.message} onChange={set('message')} placeholder="Allergien, Wünsche, Fragen …" />
                </div>
                <button type="submit" className="btn btn-fill btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Anfrage senden →
                </button>
                <p className="form-note" style={{ marginTop: 12 }}>
                  Unverbindlich. Wir bestätigen deinen Platz per Mail, Bezahlung erfolgt vor Ort.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}