# theidel.com

Personal academic website of David Theidel. Astro, static output, deployed to
GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Where the content lives

All text and data are in `src/data/` — the pages themselves are layout only,
so you rarely need to touch `.astro` files to update the site.

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, role, affiliation, contact links, navigation |
| `src/data/research.ts` | Research areas, split into `current` and `previous` |
| `src/data/publications.ts` | Publication list; `selected: true` puts one on the homepage |
| `src/data/cv.ts` | CV sections and entries |

Design tokens (colour, type, measure, spacing) are at the top of
`src/styles/global.css`.

## Before launch

Content is real — sourced from ORCID (0000-0001-8486-8509), Google Scholar,
Crossref, the previous WordPress site and your LaTeX CV. Remaining items:

- **Contact email** renders as `david.theidel at college-de-france.fr` and is
  deliberately not a `mailto:` link, to make it less scrapeable.
- **CV PDF** — drop it at `public/files/cv.pdf` and set `hasPdf = true` in
  `src/pages/cv.astro`.
- **Check the research prose** in `src/data/research.ts` and `about.astro`. The
  strong-field section is written from your papers; the Rydberg section
  describes work in progress and should be revisited as the experiment
  develops.

Three entries in the LaTeX CV are out of date and were corrected against the
published record:

- `Gombkoto2025Intermodel` is no longer "submitted" — Phys. Rev. Research 8,
  033154 (10 August 2026).
- `mapa2026` is no longer "in review" — Appl. Phys. Lett. 128, 191101, and the
  published title differs from the one in the .bib.
- `theidel2026photonantibunchingquantumnongaussianity` — arXiv v4 is titled
  "Sub-Poissonian Statistics and Quantum Non-Gaussianity…" and lists Viviane
  Cotte as an author; the .bib has the older title and omits her.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

**While testing** at `https://studdavid.github.io/personal-website/`, set a
repository variable `BASE_PATH` to `/personal-website` (Settings → Secrets and
variables → Actions → Variables). Without it, CSS and links resolve to the
domain root and the test site renders unstyled.

**When switching to the custom domain:**

1. Delete the `BASE_PATH` repository variable.
2. Add a `CNAME` file containing `theidel.com` to `public/`.
3. In the repository's Pages settings, set the custom domain to `theidel.com`
   and enable "Enforce HTTPS".
4. At WordPress.com, point DNS at GitHub Pages:
   - `A` records for the apex `theidel.com` → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `studdavid.github.io`
5. The domain registration stays at WordPress.com — do not transfer it.

The existing WordPress site remains untouched until step 4.
