# Oded Goldberg — Personal Portfolio

A minimal personal portfolio inspired by the clarity of leerob.com, built with Next.js, TypeScript, Tailwind CSS, Motion, and Markdown.

## Local development
```bash
npm install
npm run dev
```

## Edit content
- Biography: `content/home.md`
- Projects: `content/projects/*.md`
- Posts: `content/posts/*.md` (create the folder when publishing the first post)

Each Markdown file uses YAML front matter. Add a new project with a unique `slug`; static pages are generated during build.

## Deployment and PR previews

Both main and PR previews use GitHub Actions and the same `gh-pages` publishing branch. In repository **Settings → Pages**, select **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**. The preview workflow publishes a PR at `https://odedgol.github.io/previews/pr-N/` without replacing the main homepage. Only same-repository PRs can publish previews; untrusted forks are not granted write access.

The initial `gh-pages` branch is a copy of the old HTML site until the first main deployment. Preview folders are kept for review; cleanup can be added later.

## Notes
- Dark mode is the default; the theme toggle persists in the browser.
- The portrait currently uses the public GitHub avatar. Replace it with a local black-and-white portrait before final publication.
- No draft posts are published.
