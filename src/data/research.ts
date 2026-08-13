// Research areas, split into current and previous so the site reflects the
// actual trajectory rather than presenting everything as active work.

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
    title: 'Rydberg-assisted quantum engineering of light',
    summary:
      'Using strongly interacting Rydberg atoms as a non-linear medium to shape the quantum state of an optical field.',
    body: [
      'Atoms excited to Rydberg states interact strongly enough that a single excitation can suppress further excitation across an entire ensemble. The ensemble then responds to light collectively, as one object, rather than as a collection of independent scatterers.',
      'That collective response makes an atomic medium optically non-linear at the level of individual photons — a regime ordinary materials do not reach. It is a resource for engineering the quantum state of light directly: preparing non-classical states, mediating effective interactions between photons, and building the photon–photon gates that quantum information processing with light requires.',
      'I joined this work as a postdoctoral researcher in the Quantum Photonics team of Alexei Ourjoumtsev at the Collège de France in March 2026.',
    ],
  },
];

export const previous: Area[] = [
  {
    id: 'strong-field',
    title: 'Strong-field quantum optics',
    summary:
      'Photon statistics and non-classical correlations of the light emitted in high-harmonic generation from semiconductors.',
    body: [
      'High-harmonic generation is normally described as a classical emission process: a strong laser field drives a material, and the material radiates at multiples of the driving frequency. My doctoral research asked a different question — what quantum state the emitted light is actually in.',
      'Working with semiconductor high-harmonic sources, we measured the photon statistics of individual harmonic orders and the correlations between them. The measurements showed non-classical photon statistics, squeezing, and non-classical correlations between harmonic modes: evidence that the process is quantum optical in a way the classical description does not capture.',
      'Later work extended this to conditional state preparation, using heralded measurements between harmonic orders and witness operators to certify quantum non-Gaussianity. Taken together, the results establish semiconductor high-harmonic generation as a broadband source of non-classical light, rather than only as a route to attosecond pulses.',
      'This work was carried out at the Laboratoire d’Optique Appliquée, École polytechnique, in the group of Hamed Merdji.',
    ],
  },
];

export const areas: Area[] = [...current, ...previous];
