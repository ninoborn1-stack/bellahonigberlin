import { Link } from 'react-router-dom'
import { Reveal } from './Reveal.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="honeycomb-bg" style={{ opacity: 0.12 }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <Reveal>
          <div className="eyebrow honey">Handgemacht in Berlin · seit 2024</div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="footer-big">
            Bella<em>Honig</em>
            <br />
            Berlin
          </div>
        </Reveal>

        <div className="footer-cols">
          <div>
            <h5>Newsletter</h5>
            <p style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>
              Neue Farben, freie Kursplätze und kleine Atelier-Geschichten — etwa einmal im Monat.
            </p>
            <form className="footer-news" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="deine@email.de" aria-label="E-Mail" required />
              <button type="submit">Los</button>
            </form>
          </div>
          <div>
            <h5>Shop</h5>
            <ul>
              <li><Link to="/shop">Alle Taschen</Link></li>
              <li><Link to="/produkt/milly">Milly · die Helle</Link></li>
              <li><Link to="/produkt/otto">Otto · der Dunkle</Link></li>
              <li><Link to="/kontakt?anfrage=bestellung">Bestellanfrage</Link></li>
            </ul>
          </div>
          <div>
            <h5>Haus</h5>
            <ul>
              <li><Link to="/geschichte">Geschichte</Link></li>
              <li><Link to="/haekelkurs">Häkelkurs</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h5>Atelier</h5>
            <ul>
              <li>Teltower Damm 00</li>
              <li>14163 Berlin-Zehlendorf</li>
              <li><a href="mailto:hallo@bellahonigberlin.de">hallo@bellahonigberlin.de</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BellaHonigBerlin — mit Nadel, Garn & Liebe.</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
