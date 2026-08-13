// Sourced from ORCID (0000-0001-8486-8509), Google Scholar and Crossref.
// Newest first. `selected: true` promotes an entry to the homepage.

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  arxiv?: string;
  /** Set for work that is not yet in a journal. */
  preprint?: boolean;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    year: 2026,
    authors: 'Á. Gombkötő, P. Ádám, D. Theidel, T. Kiss',
    title:
      'Intermodal entanglement in a quantum optical model of high-harmonic generation due to the backaction on the driving field',
    venue: 'Physical Review Research 8, 033154',
    doi: 'https://doi.org/10.1103/wf93-dyn6',
    arxiv: 'https://arxiv.org/abs/2603.01315',
  },
  {
    year: 2026,
    authors:
      'J. L. Mapa, L. Petersen, D. Theidel, P. Mosel, C. Fischer, B. Mathew, S. Fröhlich, K.-A. Weber, P. Oberta, J.-W. Vahlbruch, H. Merdji, U. Morgner, M. Kovacev',
    title: 'X-ray and electron emission from peeling adhesive tape',
    venue: 'Applied Physics Letters 128, 191101',
    doi: 'https://doi.org/10.1063/5.0317330',
  },
  {
    year: 2026,
    authors:
      'D. Theidel, M. Nahra, I. Karuseichyk, H. Griguer, M. Weis, V. Cotte, H. Merdji',
    title:
      'Sub-Poissonian statistics and quantum non-Gaussianity from high-harmonic generation',
    venue: 'Preprint',
    arxiv: 'https://arxiv.org/abs/2602.10882',
    preprint: true,
    selected: true,
  },
  {
    year: 2025,
    authors:
      'D. Theidel, V. Cotte, P. Heinzel, H. Griguer, M. Weis, R. Sondenheimer, H. Merdji',
    title:
      'Observation of a displaced squeezed state in high-harmonic generation',
    venue: 'Physical Review Research 7, 033223',
    doi: 'https://doi.org/10.1103/6r6n-pxfp',
    arxiv: 'https://arxiv.org/abs/2411.02311',
    selected: true,
  },
  {
    year: 2025,
    authors:
      'P. San Miguel Claveria, S. Antunes, P. Biesterfeld, M. Fernandes, M. Garcia, M. Nunes, L. Ansia Fernandez, G. O. Williams, S. Fröhlich, D. Theidel, P. Mosel, I. Fsaifes, A. Trabattoni, M. Piccardo, J.-C. Chanteloup, M. Kovacev, H. Merdji, M. Fajardo',
    title: 'Incoherent diffraction imaging with a pseudo-thermal light source',
    venue: 'Preprint',
    arxiv: 'https://arxiv.org/abs/2501.05417',
    preprint: true,
  },
  {
    year: 2024,
    authors:
      'D. Theidel, V. Cotte, R. Sondenheimer, V. Shiriaeva, M. Froidevaux, V. Severin, A. Merdji-Larue, P. Mosel, S. Fröhlich, K.-A. Weber, U. Morgner, M. Kovacev, J. Biegert, H. Merdji',
    title: 'Evidence of the quantum optical nature of high-harmonic generation',
    venue: 'PRX Quantum 5, 040319',
    doi: 'https://doi.org/10.1103/PRXQuantum.5.040319',
    arxiv: 'https://arxiv.org/abs/2405.15022',
    selected: true,
  },
  {
    year: 2024,
    authors:
      'D. Theidel, V. Cotte, R. Sondenheimer, V. Shiriaeva, M. Froidevaux, V. Severin, A. Merdji-Larue, P. Mosel, S. Fröhlich, K.-A. Weber, U. Morgner, M. Kovacev, J. Biegert, H. Merdji',
    title:
      'Experimental evidences of quantum properties in a high-harmonic-based bipartite system',
    venue: 'Proc. SPIE 12992, Advances in Ultrafast Condensed Phase Physics IV',
    doi: 'https://doi.org/10.1117/12.3016716',
  },
  {
    year: 2021,
    authors: 'C. Steinmeyer, S. Dehmel, D. Theidel, A. Braun, L. Wiese',
    title: 'Automating bronchoconstriction analysis based on U-Net',
    venue: 'EDBT/ICDT Workshops',
  },
  {
    year: 2020,
    authors:
      'J. Bahlmann, N. Madrahimov, F. Daniel, D. Theidel, D. E. DeTemple, M. Buettner, A. Bleich, A. Haverich, A. Heisterkamp, S. Kalies',
    title:
      'Establishment of a guided, in vivo, multi-channel, abdominal, tissue imaging approach',
    venue: 'Scientific Reports 10, 9224',
    doi: 'https://doi.org/10.1038/s41598-020-65950-w',
  },
];

export const selected = publications.filter((p) => p.selected);

/** Publications grouped by year, newest year first. */
export function byYear(list: Publication[]) {
  const years = [...new Set(list.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: list.filter((p) => p.year === year),
  }));
}
