// Product catalogue — currently one handmade bag design in two colourways.
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
      'Milly ist unsere hellste Seele. In vielen Stunden aus einem weichen, recycelten Baumwollgarn gehäkelt, schwingt sie in einer runden Hobo-Form, die sich weich an die Schulter legt und viel fasst. Ihr warmer Beigeton schimmert wie Honig im Morgenlicht. Jede Masche wird in unserem Atelier in Berlin-Neukölln von Hand gesetzt.',
    images: ['/images/milly-std.png', '/images/milly-2.jpg', '/images/milly-hang.png'],
    details: [
      ['Material', '100 % recycelte Baumwolle, naturbeige & honigwarm'],
      ['Form', 'Runde Hobo-Tasche mit geflochtenem Schulterhenkel'],
      ['Maße', 'ca. 40 × 46 cm, Henkel für die Schulter'],
      ['Herkunft', 'Von Hand gehäkelt in Berlin'],
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
    images: ['/images/otto-std.png', '/images/otto-2.jpg', '/images/otto-hang.png'],
    details: [
      ['Material', '100 % recycelte Baumwolle, tief olivgrün gefärbt'],
      ['Form', 'Runde Hobo-Tasche mit geflochtenem Schulterhenkel'],
      ['Maße', 'ca. 40 × 46 cm, Henkel für die Schulter'],
      ['Herkunft', 'Von Hand gehäkelt in Berlin'],
    ],
    care: 'Handwäsche kalt, liegend trocknen. Kein Trockner, kein Bügeln über der Häkelstruktur.',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

// Häkelkurs — every two weeks, 10–50 spots depending on location.
export const courseDates = [
  { date: 'Sa · 30. Aug 2026', time: '11–15 Uhr', location: 'Atelier Neukölln', spots: 8, capacity: 12 },
  { date: 'Sa · 13. Sep 2026', time: '11–15 Uhr', location: 'Prenzlauer Berg', spots: 22, capacity: 30 },
  { date: 'Sa · 27. Sep 2026', time: '12–16 Uhr', location: 'Kreuzberg Werkraum', spots: 3, capacity: 16 },
  { date: 'Sa · 11. Okt 2026', time: '11–15 Uhr', location: 'Atelier Neukölln', spots: 0, capacity: 12 },
  { date: 'Sa · 25. Okt 2026', time: '11–16 Uhr', location: 'Café Charlottenburg', spots: 40, capacity: 50 },
  { date: 'Sa · 08. Nov 2026', time: '11–15 Uhr', location: 'Prenzlauer Berg', spots: 18, capacity: 30 },
]
