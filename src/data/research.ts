// Research areas, split into current and previous so the site reflects the
// actual trajectory rather than presenting everything as active work.

export type Area = {
  id: string;
  title: string;
  /** One or two sentences, used on the homepage. Leave empty to omit. */
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
    // TODO: one or two sentences; shown on the homepage and above the
    // description on /research/. Left blank for now.
    summary: '',
    // TODO: write this. Each string below becomes one paragraph on /research/.
    body: [],
  },
];

export const previous: Area[] = [
  {
    id: 'strong-field',
    title: 'Ultrafast and strong-field quantum optics',
    summary:
      'Photon statistics and non-classical correlations of the light emitted in high-harmonic generation from solids.',
    // TODO: write this. Each string below becomes one paragraph on /research/.
    body: [],
  },
];

export const areas: Area[] = [...current, ...previous];
