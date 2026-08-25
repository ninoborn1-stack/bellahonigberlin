// Product catalogue — currently one handmade bag design in two colourways.
import { asset } from './asset.js'

export const products = [
  {
    slug: 'milly',
    name: 'Milly',
    tagline: 'Die Helle',
    color: 'Honigbeige',
    swatch: '#d8c6a2',
    price: 189,
    tag: 'Bestseller',
    tagStyle: 'honey',
    short:
      'Weich gehäkelte Hobo-Tasche in warmem Honigbeige — leicht wie ein Sommertag, gemacht für Markt, Strand und Boulevard.',
    story:
      'Milly ist unsere hellste Seele. In vielen Stunden aus einem weichen, recycelten Baumwollgarn gehäkelt, schwingt sie in einer runden Hobo-Form, die sich weich an die Schulter legt und viel fasst. Ihr warmer Beigeton schimmert wie Honig im Morgenlicht. Jede Masche wird in unserem Atelier in Berlin-Zehlendorf von Hand gesetzt.',
    edition: 15,
    images: ['/images/p-milly-front.jpg', '/images/ed-milly.jpg', '/images/p-milly-side.jpg'].map(asset),
    details: [
      ['Auflage', 'Limitiert auf 15 Stück — jede von Hand, jede ein Unikat'],
      ['Material', '100 % recycelte Baumwolle, naturbeige & honigwarm'],
      ['Form', 'Runde Hobo-Tasche mit geflochtenem Schulterhenkel'],
      ['Maße', 'ca. 40 × 46 cm, Henkel für die Schulter'],
      ['Herkunft', 'Von Hand gehäkelt in Berlin-Zehlendorf'],
    ],
    care: 'Handwäsche kalt, liegend trocknen. Kein Trockner, kein Bügeln über der Häkelstruktur.',
  },
  {
    slug: 'otto',
    name: 'Otto',
    tagline: 'Der Dunkle',
    color: 'Olivgrün',
    swatch: '#5e5d3e',
    price: 199,
    tag: 'Neu',
    tagStyle: 'ink',
    short:
      'Ruhig, erdig, urban — Otto trägt ein tief olivgrünes Garn und einen satten Stich für alles, was der Tag so mitbringt.',
    story:
      'Otto ist Millys Gegenstück für die dunkleren Stunden. Ein satter, fester Stich und ein tiefes Olivgrün machen ihn zum verlässlichen Begleiter durch Berlin — von der Morgenschicht im Café bis zur letzten U-Bahn. Dieselbe weiche Hobo-Form, genauso von Hand gehäkelt, genauso ein Unikat.',
    edition: 20,
    images: ['/images/p-otto-front.jpg', '/images/p-otto-side.jpg', '/images/p-otto-detail.jpg'].map(asset),
    details: [
      ['Auflage', 'Limitiert auf 20 Stück — jede von Hand, jede ein Unikat'],
      ['Material', '100 % recycelte Baumwolle, tief olivgrün gefärbt'],
      ['Form', 'Runde Hobo-Tasche mit geflochtenem Schulterhenkel'],
      ['Maße', 'ca. 40 × 46 cm, Henkel für die Schulter'],
      ['Herkunft', 'Von Hand gehäkelt in Berlin-Zehlendorf'],
    ],
    care: 'Handwäsche kalt, liegend trocknen. Kein Trockner, kein Bügeln über der Häkelstruktur.',
  },
  {
    slug: 'lucy',
    name: 'Lucy',
    tagline: 'Die Zarte',
    color: 'Altrosé',
    swatch: '#c88e8d',
    price: 209,
    tag: 'Neu',
    tagStyle: 'rose',
    short:
      'Zart gehäkelte Hobo in Altrosé — mit einer Perlenbrosche in Gold als Herzstück. Verspielt, feminin, ein Liebling für Frühling und Sommer.',
    story:
      'Lucy ist die romantischste im Bunde. Aus weichem, altrosa Baumwollgarn in einer offenen Masche gehäkelt und veredelt mit einer handbesetzten Perlen-Brosche in Gold, die dem Beutel seinen Halt und seinen Charakter gibt. Klein, rund, verspielt — und wie alle unsere Taschen von Hand in Berlin gefertigt.',
    edition: 15,
    images: ['/images/p-lucy-front.jpg', '/images/ed-lucy.jpg', '/images/p-lucy-detail.jpg'].map(asset),
    details: [
      ['Auflage', 'Limitiert auf 15 Stück — jede von Hand, jede ein Unikat'],
      ['Material', '100 % recycelte Baumwolle, altrosé'],
      ['Detail', 'Handbesetzte Perlen-Brosche in Gold'],
      ['Form', 'Runde Hobo-Tasche mit Schulterhenkel'],
      ['Maße', 'ca. 38 × 42 cm'],
      ['Herkunft', 'Von Hand gehäkelt in Berlin-Zehlendorf'],
    ],
    care: 'Handwäsche kalt, liegend trocknen. Brosche vor dem Waschen abnehmen.',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

// Häkelkurs — every two weeks, 10–50 spots depending on location.
export const courseDates = [
  { date: 'Sa · 30. Aug 2026', time: '11–15 Uhr', location: 'Atelier Zehlendorf', spots: 8, capacity: 12 },
  { date: 'Sa · 13. Sep 2026', time: '11–15 Uhr', location: 'Prenzlauer Berg', spots: 22, capacity: 30 },
  { date: 'Sa · 27. Sep 2026', time: '12–16 Uhr', location: 'Kreuzberg Werkraum', spots: 3, capacity: 16 },
  { date: 'Sa · 11. Okt 2026', time: '11–15 Uhr', location: 'Atelier Zehlendorf', spots: 0, capacity: 12 },
  { date: 'Sa · 25. Okt 2026', time: '11–16 Uhr', location: 'Café Charlottenburg', spots: 40, capacity: 50 },
  { date: 'Sa · 08. Nov 2026', time: '11–15 Uhr', location: 'Prenzlauer Berg', spots: 18, capacity: 30 },
]
