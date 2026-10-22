# Upgrade & Performance Changes

## Framework and dependencies

| Package | Before | After |
| --- | --- | --- |
| `next` | 14.2.15 | **16.4.2** (current stable) |
| `react` / `react-dom` | 18.2 | **19.3.1** |
| `next-auth` | 5.0.0-beta.22 | **5.0.0-beta.32** |
| `eslint` | 8.x | **10.13.0** |
| `eslint-config-next` | 14.2.15 | **16.4.2** |
| `mongoose` | 8.7.1 | **8.24.6** (same major) |
| `firebase` | 11.0.1 | **11.10.0** (same major) |
| `tailwindcss` | 3.4.1 | **3.4.19** (v4 intentionally not used; it would require a config rewrite) |
| `lucide-react` | 0.451.0 | **0.577.0** |
| `react-hot-toast` | 2.5.2 | **2.6.1** |
| `postcss` | 8.x | **8.5.31** |

Removed unused packages: `framer-motion` (React 18-only peer) and `lucide` (the non-React icon package).

## Next.js 16 migration fixes

- Made `params` and `searchParams` async in `blog/[postId]` and `updatePost`.
- Renamed `src/middleware.js` to `src/proxy.js` (Next 16 convention).
- Replaced `next lint` with the ESLint CLI, added `eslint.config.mjs` (flat config), and removed `.eslintrc.json`.
- Updated `revalidateTag` to the Next 16 two-argument form.
- Replaced deprecated `next/image` `priority` with `preload`.
- Renamed `tailwind.config.js` to `tailwind.config.cjs` because the project uses `"type": "module"`.
- Added `trustHost: true` to the Auth.js config, required by the newer NextAuth beta outside Vercel.
- Added `export const dynamic = "force-dynamic"` to database-backed routes so `next build` does not need a live MongoDB connection.

## Performance changes

### Database

- `connectToDb` now caches one connection **promise** across hot reloads/serverless invocations, is awaited everywhere, and uses:
  - `bufferCommands: false` — fail fast instead of hanging for seconds while disconnected.
  - `serverSelectionTimeoutMS: 5000` — no 30-second waits.
  - `maxPoolSize: 10`.
- Removed `revalidatePath("/blog")` from read functions. Revalidating during a page render invalidated the cache on every visit and prevented reuse.
- Added `unstable_cache` for post list/details (60 s, tag `posts`). Writes call `revalidateTag("posts", { expire: 0 })` plus `revalidatePath("/blog")` for immediate read-your-own-writes.
- Queries now use `.select(...)`, `.sort({ createdAt: -1 })`, and `.lean()` — smaller payloads, no Mongoose document serialization overhead.
- Added a MongoDB index on `Post.createdAt`.
- Post page fetches the post and session in parallel; update page does the same.

### Front end

- Wrapped the navbar session lookup in `Suspense`, so the page shell streams before auth resolves.
- Added route-level loading skeletons for `/blog` and `/blog/[postId]`.
- Home and post hero images now use `preload` + explicit `sizes` for a faster LCP.
- Replaced the two fixed, 100 px-blurred background elements with one cheap radial gradient; removed `backdrop-blur` from post cards.
- Mobile nav tray is not mounted until first opened; scroll-to-top uses a passive, `requestAnimationFrame`-throttled listener.
- Firebase Storage is imported dynamically only when an image is uploaded, keeping login/register actions and cold starts smaller.
- Removed unused icon imports and added `poweredByHeader: false`.

## Verification

- `npm run build` — passes with Next.js 16.4.2 (Turbopack).
- `npm run lint` — passes with ESLint 10 flat config.
- Home, login, register, admin, and auth-session endpoints render successfully. The blog routes require `MONGO_URI` at runtime, as before.

## Notes

- Node.js **20.9+** is required by Next 16; ESLint 10 requires **20.19+ / 22.13+**.
- No data model/field or page-layout changes. The only database change is the added `createdAt` index.
- Visual changes are limited to equivalent radial-gradient backgrounds and removing card backdrop blur.
- `npm install` is required after pulling these changes.
