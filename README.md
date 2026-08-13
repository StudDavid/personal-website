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

Search the repo for `TODO` — every placeholder is marked. In particular:

- `src/data/site.ts` — email, Google Scholar, ORCID
- `src/data/publications.ts` — the list is deliberately empty; no publications
  were invented. Until it is filled in, the publication sections show a
  "being compiled" message.
- `src/data/cv.ts` — dates, institutions, thesis title
- `src/data/research.ts` and `src/pages/about.astro` — research prose, which
  should be checked so it only claims what you want publicly attached to you
- `src/pages/cv.astro` — set `hasPdf = true` after adding `public/files/cv.pdf`

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
