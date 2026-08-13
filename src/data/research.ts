// Research areas, split into current and previous so the site reflects the
// actual trajectory rather than presenting everything as active work.

export type Area = {
  id: string;
  title: string;
  /** One or two sentences, used on the homepage. */
  summary: string;
  /**
   * Longer treatment, used on /research/. Each string is one paragraph.
   * Leave empty and the research page shows "Full description in
   * preparation." in its place.
   */
  body: string[];
};

export const current: Area[] = [
  {
    id: 'rydberg',
    title: 'Rydberg-assisted quantum engineering of light',
    summary:
      'Using strongly interacting Rydberg atoms as a medium to engineer the quantum state of an optical field. A new direction, begun in 2026; the experiment is currently being built.',
    // TODO: write this. Each string below becomes one paragraph on /research/.
    body: [],
  },
];

export const previous: Area[] = [
  {
    id: 'strong-field',
    title: 'Ultrafast and strong-field quantum optics',
    summary:
      'Photon statistics and non-classical correlations of the light emitted in high-harmonic generation from solids — the subject of my PhD.',
    // TODO: write this. Each string below becomes one paragraph on /research/.
    body: [],
  },
];

export const areas: Area[] = [...current, ...previous];
