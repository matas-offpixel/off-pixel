# OFF / PIXEL — SvelteKit

Same design as the single-page `index.html`, built with SvelteKit.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Assets

Images are in `static/images/`:

- `static/images/matas.svg`, `static/images/sarah.svg` — founder photos
- `static/images/clients/*.svg` — client logos

They were copied from the parent `images/` folder. To refresh, copy again from `../images/` into `static/images/`.

## Deploy to Vercel

1. **From the repo (recommended)**  
   Push the project to GitHub/GitLab/Bitbucket, then:
   - Go to [vercel.com](https://vercel.com) and sign in.
   - **Add New Project** → import the repo.
   - Set **Root Directory** to `web` (if the repo root is `off-pixel`).
   - Leave **Build Command** as `npm run build` and **Output Directory** as default.
   - Deploy.

2. **From the `web` folder (CLI)**  
   Install the Vercel CLI and deploy from the app directory:
   ```bash
   cd web
   npm i -g vercel
   vercel
   ```
   Follow the prompts (link to an existing project or create a new one). Use `vercel --prod` for production.

The app uses `@sveltejs/adapter-vercel` so no extra config is required.
