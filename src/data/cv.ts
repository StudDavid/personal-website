// Web CV — condensed from the full LaTeX CV to the essentials.
// The complete version belongs in the downloadable PDF.

export type Entry = {
  /** Left column, e.g. "2026–" or "2022–2025". */
  when: string;
  /** Bold first line. */
  what: string;
  /** Second line — institution, department, city. */
  where?: string;
  /** Optional third line for detail. */
  detail?: string;
};

export type Section = {
  label: string;
  entries: Entry[];
};

export const cv: Section[] = [
  {
    label: 'Current position',
    entries: [
      {
        when: '2026–',
        what: 'Postdoctoral Researcher',
        where: 'JEIP, Collège de France, Paris',
        detail:
          'Rydberg-assisted quantum engineering of light, Quantum Photonics team (A. Ourjoumtsev)',
      },
    ],
  },
  {
    label: 'Education',
    entries: [
      {
        when: '2022–2025',
        what: 'PhD in Physics',
        where: 'Institut Polytechnique de Paris, École polytechnique',
        detail:
          'Study of the Quantum Optical Properties of High-Harmonic Generation in Semiconductors. Defended December 2025.',
      },
      {
        when: '2019–2022',
        what: 'MSc in Physics',
        where: 'Leibniz University Hannover',
        detail:
          'Design and Characterization of a Soft X-Ray Diffraction Imaging Setup',
      },
      {
        when: '2015–2020',
        what: 'BSc in Physics',
        where: 'Leibniz University Hannover',
        detail:
          'Establishment of a Light-Sheet Microscope and Novel Algorithms for Image Enhancement',
      },
    ],
  },
  {
    label: 'Research experience',
    entries: [
      {
        when: '2025–2026',
        what: 'Researcher',
        where: 'Laboratoire d’Optique Appliquée, École polytechnique',
        detail: 'Strong-field quantum optics, Quantum group (H. Merdji)',
      },
      {
        when: '2022–2025',
        what: 'PhD Researcher',
        where: 'Laboratoire d’Optique Appliquée, École polytechnique',
        detail:
          'Photon statistics of semiconductor high-harmonic generation; quantum metrology of non-classical light from broadband sources. Co-supervised two M2 research projects.',
      },
      {
        when: '2022',
        what: 'Student Research Assistant',
        where: 'Institute of Quantum Optics, Leibniz University Hannover',
        detail: 'Ultrafast Laser Laboratory (U. Morgner)',
      },
      {
        when: '2020–2021',
        what: 'Student Research Assistant',
        where: 'Fraunhofer ITEM, Hannover',
        detail: 'Bioinformatics group (L. Wiese)',
      },
      {
        when: '2019–2022',
        what: 'Student Research Assistant',
        where: 'Institute of Quantum Optics, Leibniz University Hannover',
        detail: 'Biophotonics group (A. Heisterkamp)',
      },
      {
        when: '2017–2018',
        what: 'Student Research Assistant',
        where: 'Institute of Quantum Optics, Leibniz University Hannover',
        detail: 'Quantum Sensing group (E. Rasel)',
      },
    ],
  },
  {
    label: 'Invited talks',
    entries: [
      {
        when: '2025',
        what:
          'Probing the Non-Classicality of High-Harmonic Generation in Semiconductors',
        where: 'Max Planck Institute for the Science of Light, Erlangen',
      },
      {
        when: '2024',
        what: 'Non-Classical Signatures in a Bipartite, High-Harmonic Based System',
        where: 'Extreme Quantum Optics Workshop, ICFO, Barcelona',
      },
      {
        when: '2024',
        what:
          'Optical Quantum Phenomena: Non-Classical Light, Applications and High-Harmonic Generation',
        where: 'Institute of Quantum Optics, Leibniz University Hannover',
      },
      {
        when: '2023',
        what: 'Unraveling the Quantum Nature of High-Harmonic Generation',
        where:
          'Laboratory of Advanced Quantum Architecture, EPFL, Lausanne',
      },
    ],
  },
  {
    label: 'Conference contributions',
    entries: [
      {
        when: '2025',
        what:
          'Certifying Non-Classicality of High-Harmonic Generation in Semiconductors',
        where: '3rd GDR TeQ Seminar, MINATEC Innovation Campus, Grenoble',
        detail: 'Talk',
      },
      {
        when: '2025',
        what:
          'Probing the Non-Classicality of High-Harmonic Generation in Semiconductors',
        where:
          'Workshop on Strong-Field QED, Max Planck Institute for the Physics of Complex Systems, Dresden',
        detail: 'Talk',
      },
      {
        when: '2024',
        what: 'Quantum Light from Solid-State High-Harmonic Generation',
        where: 'European Quantum Technologies Conference, Lisbon',
        detail: 'Poster',
      },
      {
        when: '2024',
        what:
          'Modal Analysis of a Multimode Displaced Squeezed State from High-Harmonic Generation',
        where: '2nd GDR TeQ Seminar, Sorbonne University, Paris',
        detail: 'Poster',
      },
      {
        when: '2024',
        what: 'Squeezed States of Light Generated by High-Harmonic Generation',
        where: '23rd Ultrafast Phenomena Conference, Barcelona',
        detail: 'Post-deadline talk',
      },
      {
        when: '2024',
        what:
          'Experimental Verification of the Non-Classicality of High-Harmonic Generation',
        where: '23rd Ultrafast Phenomena Conference, Barcelona',
        detail: 'Poster',
      },
      {
        when: '2024',
        what:
          'Experimental Evidences of Quantum Properties in a High-Harmonic-Based Bipartite System',
        where: 'SPIE Photonics Europe, Strasbourg',
        detail: 'Talk',
      },
      {
        when: '2022',
        what: 'Table-Top Nanoscale Imaging with XUV and Soft X-ray Radiation',
        where: 'DPG Spring Meeting, Erlangen',
        detail: 'Talk',
      },
    ],
  },
  {
    label: 'Awards',
    entries: [
      {
        when: '2020',
        what: 'Gold Medal, iGEM Contest',
        where: 'International Genetically Engineered Machine competition',
        detail: 'With the Hannover team, for a cell-based sensor detecting biofilm-associated inflammation on implants.',
      },
      {
        when: '2012–2015',
        what: 'Awards at Jugend forscht',
        where: 'German national science competition for school students',
        detail:
          'First prize at federal level and prize of the Wilhelm and Else Heraeus Foundation at national level (2014); first prize at regional level and third prize with a special prize of the Deutsches Museum München at federal level (2015).',
      },
    ],
  },
  {
    label: 'Teaching',
    entries: [
      {
        when: '2022–2025',
        what: 'Co-supervision of two M2 research projects',
        where: 'École polytechnique',
      },
      {
        when: '2019',
        what: 'Teaching assistant',
        where: 'Faculty of Mathematics and Physics, Leibniz University Hannover',
        detail: 'Undergraduate physics laboratory; introductory mathematics.',
      },
    ],
  },
  {
    label: 'Service and outreach',
    entries: [
      {
        when: '2024, 2025',
        what: 'Co-organizer, Quantum PhDay',
        where: 'ENS Paris-Saclay and Institut d’Optique Graduate School',
        detail:
          'Doctoral meeting of the Quantum-Saclay network; the 2025 edition drew 100 participants, including QuTech (TU Delft), in cooperation with the Embassy of the Netherlands.',
      },
      {
        when: '2024, 2025',
        what: 'Invited participant, Quantum Connections Summer School',
        where: 'Hosted by Frank Wilczek',
      },
      {
        when: '2020',
        what: 'Team lead, iGEM Team Hannover',
        where: 'Leibniz University Hannover',
        detail: 'Led an interdisciplinary team of 16 students.',
      },
      {
        when: '2018–2020',
        what: 'Student representative',
        where: 'Council of the QUEST Leibniz Research School',
      },
    ],
  },
  {
    label: 'Technical skills',
    entries: [
      {
        when: 'Experiment',
        what:
          'Single-photon detection (SPADs, cooled fast PMTs) and time-to-digital conversion for photon-counting correlation measurements; optical setups from the far-infrared to the soft X-ray; ultrafast laser systems (Ti:sapphire, OPCPA, Yb fibre); pulse characterisation; vacuum systems.',
      },
      {
        when: 'Computation',
        what:
          'Python, including experiment automation and data analysis; quantum-state modelling in QuTiP with multi-parameter optimisation against measured observables; Monte-Carlo and finite-difference simulation; TensorFlow; Mathematica; Git; LaTeX.',
      },
      {
        when: 'Languages',
        what: 'German (native), English (fluent), French (conversational).',
      },
    ],
  },
];
