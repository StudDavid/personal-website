// Single source of truth for identity, contact links and navigation.

export const site = {
  name: 'David Theidel',
  role: 'Researcher in Quantum Optics',
  affiliation: 'Collège de France · Paris',
  /** Trails the name in the homepage <title>. */
  field: 'Quantum Optics',
  location: 'Paris',
  description:
    'David Theidel is a postdoctoral researcher in quantum optics at the Collège de France in Paris, working on Rydberg-assisted quantum engineering of light.',
};

export const contact = {
  // Never rendered raw — MailLink.astro encodes it and spells it out for
  // the no-JS fallback, so the plain address never appears in the markup.
  email: 'david.theidel@college-de-france.fr',
  scholar: 'https://scholar.google.com/citations?user=iEgUE1UAAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0001-8486-8509',
  linkedin: 'https://www.linkedin.com/in/david-theidel-6532861aa/',
  bluesky: 'https://bsky.app/profile/kittenstate.bsky.social',
};

export const nav = [
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'CV', href: '/cv/' },
  { label: 'About', href: '/about/' },
];
