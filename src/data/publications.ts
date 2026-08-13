// IMPORTANT: this list is intentionally NOT pre-filled with invented entries.
// Add your real publications here — newest first. Everything else on the site
// (homepage selection, /publications/, the CV page) reads from this array.
//
// Set `selected: true` on the handful that should appear on the homepage.

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  arxiv?: string;
  selected?: boolean;
};

export const publications: Publication[] = [
  // Example of the expected shape — delete this once real entries are in:
  // {
  //   year: 2025,
  //   authors: 'D. Theidel, A. Author, B. Author',
  //   title: 'Title of the paper',
  //   venue: 'Physical Review Letters 134, 123456',
  //   doi: 'https://doi.org/10.1103/...',
  //   arxiv: 'https://arxiv.org/abs/2501.00000',
  //   selected: true,
  // },
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
