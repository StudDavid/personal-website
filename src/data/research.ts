// Research areas, split into current and previous so the site reflects the
// actual career trajectory rather than presenting everything as active work.

export type Area = {
  id: string;
  title: string;
  /** One or two sentences, used on the homepage. */
  summary: string;
  /** Longer treatment, used on /research/. Each string is a paragraph. */
  body: string[];
};

export const current: Area[] = [
  {
    id: 'rydberg',
    title: 'Quantum optics with Rydberg atoms',
    summary:
      'Collective light–matter interaction in strongly interacting atomic ensembles, and the non-classical optical response it produces.',
    body: [
      // TODO: revise this so it describes your actual current work at the
      // Collège de France, and only makes claims you want publicly attached
      // to your name.
      'Atoms excited to Rydberg states interact strongly enough that a single excitation can block its neighbours across an entire ensemble. The ensemble then responds to light as one collective object — a superatom — rather than as a collection of independent scatterers.',
      'My current work uses this collective response as a resource for quantum optics: mapping photons onto collective atomic states, reading out the resulting phase-sensitive optical response, and studying how strong interactions turn a linear medium into a non-linear one at the single-photon level.',
      'This connects directly to quantum information: the same blockade that produces the collective response is the mechanism behind Rydberg-mediated quantum gates.',
    ],
  },
];

export const previous: Area[] = [
  {
    id: 'ultrafast',
    title: 'Ultrafast quantum optics',
    summary:
      'Photon statistics and higher-order correlations of light produced by strong-field and high-harmonic processes.',
    body: [
      // TODO: revise against your actual PhD work and publications.
      'My doctoral research concerned the quantum optical description of strong-field processes — in particular high-harmonic generation, which is normally treated as an entirely classical emission problem.',
      'The question is what the light itself carries: whether the harmonic field and the driving field retain non-classical photon statistics, what higher-order correlations survive the process, and how the resulting states are structured across modes.',
      'Solid-state high-harmonic generation makes this concrete, since the emission is governed by the band structure of the material rather than by a single-atom response.',
    ],
  },
];

export const areas: Area[] = [...current, ...previous];
