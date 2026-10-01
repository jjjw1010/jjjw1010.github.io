# Junwoo Jung's portfolio

Personal software engineering portfolio at [jungj.com](https://jungj.com), built with React, Vite, and Sass.

## Setup

Use Node.js 24 LTS, or a version supported by the `engines` field in `package.json`.

From this project directory in MSYS2 UCRT64, PowerShell, or another terminal:

```sh
npm ci
npm start
```

Open the local URL printed in the terminal (normally http://localhost:3000). Changes to source files reload automatically.

## Commands

- `npm start`: start the development server.
- `npm run lint`: check JavaScript, JSX, and React Hooks with ESLint.
- `npm run build`: run lint checks and generate the production website in `build/`.
- `npm run preview`: serve the existing production build locally for review.
- `npm run deploy`: build and publish `build/` to the repository's `gh-pages` branch. This updates the live website when GitHub Pages is configured to use that branch.

There is currently no automated test suite.

## Project layout

- `index.html`: HTML entry, browser icons, and page metadata.
- `src/index.jsx`: React entry point.
- `src/*.jsx`: navigation, introduction, projects, and contact sections.
- `src/*.module.scss` and `src/index.css`: component and global styles.
- `src/Images/`: images imported by the app.
- `public/`: files copied unchanged into the build, including browser icons, the manifest, and `CNAME`.
- `vite.config.mjs`: development server and production build settings.
- `eslint.config.mjs`: lint configuration.

## Hosting

The site is served from the root of https://jungj.com. Keep `public/CNAME` set to `jungj.com` so deployments retain the custom domain.

The production output remains `build/`. Generated files in `build/` and dependencies in `node_modules/` are ignored by Git. Commit `package-lock.json` alongside dependency changes so `npm ci` can reproduce the installation.
