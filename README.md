# BellaHonigBerlin

Website für **BellaHonigBerlin** — eine edle, handgemachte Modemarke aus Berlin.
Verkauft werden aktuell handgehäkelte Taschen (**Milly** · die Helle, **Otto** · der Dunkle)
plus Anmeldung zum **Häkelkurs** (alle zwei Wochen, 10–50 Plätze je nach Standort).

Gebaut mit **Vite + React**, mit Smooth-Scroll (Lenis) und Scroll-Animationen (Framer Motion).

## Starten

```bash
npm install
npm run dev
```

Dann im Browser öffnen: http://localhost:5173

## Build für Produktion

```bash
npm run build      # erzeugt den Ordner dist/
npm run preview    # baut & zeigt die Produktionsversion lokal
```

Der Inhalt von `dist/` lässt sich auf jedem Static-Host veröffentlichen
(Netlify, Vercel, eigener Webspace …).

## Struktur

```
public/
  brand/          Logo (logo.png) + freigestelltes Icon (mark.png)
  images/         Stock-Fotos (Platzhalter — später durch eigene Produktfotos ersetzen)
src/
  pages/          Home · Shop · Product · Course (Häkelkurs) · Story · Contact
  components/     Nav, Footer, CartDrawer, ProductCard, Reveal, Marquee, Parallax …
  context/        CartContext (Warenkorb, in localStorage gespeichert)
  lib/            products.js (Produkt- & Kursdaten), useLenis.js (Smooth-Scroll)
  index.css       Design-System (Farben aus dem Logo, Schriften Fraunces + Quicksand)
```

## Anpassen

- **Produkte & Preise:** `src/lib/products.js`
- **Kurstermine & freie Plätze:** `courseDates` in `src/lib/products.js`
- **Bilder:** Dateien in `public/images/` ersetzen (gleiche Namen behalten)
- **Farben & Schriften:** CSS-Variablen oben in `src/index.css`
- **Kontakt-E-Mail:** aktuell `hallo@bellahonigberlin.de` (in Footer, Course, Contact)

## Shop-Hinweis

Der Shop ist als **Showcase mit Warenkorb** umgesetzt: Produkte in den Warenkorb legen,
dann **Bestellanfrage per E-Mail** senden (kein Live-Bezahlsystem). Für echten Checkout
kann später Stripe oder Shopify angebunden werden.

## Bilder / Lizenz

Alle Fotos in `public/images/` stammen von [Unsplash](https://unsplash.com) und dienen als
Platzhalter. Für den echten Launch am besten durch eigene Produkt- und Atelierfotos ersetzen.
