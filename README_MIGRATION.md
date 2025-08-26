# MERN Migration: CRA → Vite + React

This project was converted automatically. Review the notes and TODOs below to finish setup.

## What changed
- New frontend created with **Vite + React** in `frontend/`.
- Copied your old CRA `src/` into `frontend/src/` (original files may have `.migrated` suffix when conflicts occurred).
- Copied your old CRA `public/` into `frontend/public/`.
- Backend kept from: `mini project/natural-disaster-management-system-main/natural-disaster-management-system-main` → `backend/`.

## Environment variables
- CRA uses `REACT_APP_*`. Vite uses `VITE_*`. Rename in your `.env` and code.
- Access in Vite via `import.meta.env.VITE_YOUR_KEY`.

## Entry points & router
- Vite entry is `src/main.jsx`. Ensure your app renders `<App />` and your router (if any) is wired there.
- If your CRA used `index.js`, we've kept a new `src/main.jsx`. You may see your old file as `index.js.migrated`.

## API base URL
- Create `frontend/.env` with:

  ```env
  VITE_API_URL=http://localhost:5000/api
  ```

- Replace axios/fetch base URLs with `import.meta.env.VITE_API_URL`.

## How to run (dev)
```bash
cd backend && npm install && npm start   # starts Express at :5000 (adjust to your script)
cd ../frontend && npm install && npm run dev  # starts Vite at :5173
```

## Common TODOs after automated migration
- [ ] Rename any `process.env.REACT_APP_*` to `import.meta.env.VITE_*` in frontend code.
- [ ] If you used service workers/CRA PWA, migrate them manually to Vite plugins.
- [ ] If you used absolute imports via `NODE_PATH` or CRA config, add aliases in `vite.config.js`.
- [ ] If you used SVG as ReactComponent imports (CRA feature), add a Vite plugin or refactor those imports.
- [ ] Remove any references to `react-scripts` and CRA-only scripts.
- [ ] If CSS modules, ensure file names end with `.module.css`.
- [ ] Check `public/` asset paths. In Vite, reference with `/` prefix or import them.

## Detected paths
- Detected CRA frontend: `/mnt/data/_work_extract/mini project/natural-disaster-management-system-main/natural-disaster-management-system-main`
- Detected backend: `/mnt/data/_work_extract/mini project/natural-disaster-management-system-main/natural-disaster-management-system-main`
