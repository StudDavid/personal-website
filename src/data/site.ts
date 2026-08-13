// Single source of truth for identity, contact links and navigation.

export const site = {
  name: 'David Theidel',
  role: 'Researcher in Quantum Optics',
  affiliation: 'Collège de France · Paris',
  location: 'Paris',
  description:
    'David Theidel is a postdoctoral researcher in quantum optics at the Collège de France in Paris, working on Rydberg-assisted quantum engineering of light.',
};

export const contact = {
  // Written out rather than linked, deliberately: a plain mailto: is the
  // easiest thing on the page for an address harvester to scrape.
  email: 'david.theidel at college-de-france.fr',
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
