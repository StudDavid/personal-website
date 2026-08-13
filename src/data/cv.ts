// Web CV content. Every entry below is a placeholder except where noted —
// fill in real dates, institutions and supervisors before launch.
// The downloadable PDF lives at public/files/cv.pdf.

export type Entry = {
  /** Left column, e.g. "2024–" or "2021–2024". */
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
        when: 'TODO–',
        what: 'Postdoctoral Researcher',
        where: 'Collège de France, Paris',
        detail: 'TODO: group / laboratory name.',
      },
    ],
  },
  {
    label: 'Education',
    entries: [
      {
        when: 'TODO–TODO',
        what: 'PhD in Physics',
        where: 'Institut Polytechnique de Paris',
        detail: 'TODO: thesis title, supervisor.',
      },
      {
        when: 'TODO–TODO',
        what: 'MSc in Physics',
        where: 'TODO: institution',
      },
      {
        when: 'TODO–TODO',
        what: 'BSc in Physics',
        where: 'TODO: institution',
      },
    ],
  },
  {
    label: 'Research experience',
    entries: [
      {
        when: 'TODO–TODO',
        what: 'TODO: position',
        where: 'TODO: institution',
      },
    ],
  },
  {
    label: 'Invited talks and conferences',
    entries: [
      {
        when: 'TODO',
        what: 'TODO: talk or poster title',
        where: 'TODO: conference, location',
      },
    ],
  },
  {
    label: 'Awards and grants',
    entries: [
      {
        when: 'TODO',
        what: 'TODO: award or grant',
        where: 'TODO: awarding body',
      },
    ],
  },
  {
    label: 'Teaching',
    entries: [
      {
        when: 'TODO–TODO',
        what: 'TODO: course',
        where: 'TODO: institution',
      },
    ],
  },
  {
    label: 'Technical skills',
    entries: [
      {
        when: '',
        what: 'TODO: e.g. ultrafast optics, cold-atom experiments',
      },
      {
        when: '',
        what: 'TODO: e.g. Python, numerical simulation of open quantum systems',
      },
    ],
  },
];
