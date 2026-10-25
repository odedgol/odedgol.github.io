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

## Deployment
The GitHub Actions workflow publishes the static Next.js export to GitHub Pages after a push to `main`. In repository Settings → Pages choose **GitHub Actions** as the source.

## Notes
- Dark mode is the default; the theme toggle persists in the browser.
- The portrait currently uses the public GitHub avatar. Replace it with a local black-and-white portrait before final publication.
- No draft posts are published.
