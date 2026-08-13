// Research areas, split into current and previous so the site reflects the
// actual trajectory rather than presenting everything as active work.

export type Area = {
  id: string;
  title: string;
  /** One or two sentences. Homepage only, so it may restate the body. */
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
      'Creating interactions between optical photons by sending them through a laser-cooled gas of strongly interacting Rydberg atoms, with a current focus on quantum gates.',
    body: [
      'Optical photons are easy to manipulate individually and survive outside a vacuum chamber, but they do not interact with each other, which makes it difficult to assemble anything out of them. We create that interaction indirectly, by sending photons through a small laser-cooled gas and using a laser to convert them into atomic excitation waves that involve highly excited Rydberg states, where atoms interact very strongly. Placing the atoms in a cavity turns this into a controlled phase shift, which can be used to create non-classical light and to realise two-photon quantum gates.',
      'Within this programme I currently work on quantum gates.',
    ],
  },
];

export const previous: Area[] = [
  {
    id: 'strong-field',
    title: 'Ultrafast and strong-field quantum optics',
    summary:
      'Photon statistics and non-classical correlations of the light emitted in high-harmonic generation from solids.',
    body: [
      'High-harmonic generation is a light up-conversion process occurring in a strong laser field, producing coherent bursts of broadband, extremely short radiation. My doctoral work reported experimental evidence that this emission is non-classical in several semiconductors, measuring two-mode squeezing in the harmonic radiation and a violation of the Cauchy-Schwarz inequality that tests multipartite entanglement directly. A later Schmidt decomposition of a tripartite harmonic set showed an almost single-mode structure for each harmonic, in a source that operates at room temperature with standard semiconductors and a commercial fibre laser.',
    ],
  },
];
