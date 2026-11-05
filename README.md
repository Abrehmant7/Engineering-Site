# Linear Automation

A responsive company website built with Astro and Tailwind CSS, following the folder conventions used in the Trip2Go reference project. Includes a homepage, About Us, Our Expertise, Robotics, Products, Our Clients, Contact and a custom 404 page.

## Getting started

Use Node.js 24.x. This project was verified with Node.js 24.12.0 and pins the same major version for Vercel builds.

```sh
npm install
npm run dev
```

The development server normally runs at `http://localhost:4321`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro and TypeScript files |
| `npm run check:links` | Audit all built pages, internal links, fragments and asset paths |
| `npm run build` | Build the static site into `dist/` and automatically audit links |
| `npm run preview` | Preview the production build |

## Structure

```text
public/           Static files served unchanged
src/
  assets/         Images and assets processed by Astro
  components/     Reusable Astro components
  data/           Shared company and product data
  layouts/        Shared page layouts
  pages/          File-based routes
  scripts/        Client-side scripts
  styles/         Global styles and Tailwind entry point
```

Tailwind uses `@tailwindcss/vite` in `astro.config.mjs`. The shared layout imports `src/styles/global.css`, which loads Tailwind and scans `src/` for utility classes. This setup does not need a separate Tailwind or PostCSS configuration file.

The supplied company images and logo PDF are preserved in the project root as source references. The original logo is rendered from the PDF, and client marks are displayed from the supplied client brochure. Industrial photographs are generated illustrations, optimized by Astro into responsive WebP images. The Manrope font is hosted locally through Fontsource.

## Updating the website

- Edit `src/data/company.ts` to update phone numbers, WhatsApp links, services or the selected clients.
- Edit the individual sections in `src/components/` to change the content.
- Edit `src/styles/global.css` for the visual theme and responsive layouts.
- Service and product links lead to their detailed sections, with enquiry links that preselect the matching topic on the contact form.
- Robotics is included across the service listings. `/robotics/` explains robot retrofitting and manufacturing from scratch, with separate enquiry topics and a homepage feature section.
- The contact form prepares a message locally and shows a preview. The visitor chooses Continue to WhatsApp to review and send it. Phone links open the device's dialler. No message is sent automatically.
- Phone numbers come from the supplied brochure. There is no invented email address, street address or contact form inbox.

## Vercel deployment

Import this project into Vercel using the project root as the Root Directory. `vercel.json` supplies these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js | 24.x |
| Server adapter / backend | Not needed; the site is static |

No environment variables are required for the site or contact workflow. Optionally set `PUBLIC_SITE_URL` to the final public origin (for example, your own `https://` domain) to generate canonical URLs. When available, Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used automatically. Set `PUBLIC_SITE_URL` in Vercel's Environment Variables settings before building with a custom domain. Link and asset validation runs automatically after every build, including Vercel builds.

Before deployment:

```sh
npm ci
npm run check
npm run build
```

Direct page requests work as ordinary static routes. Unknown paths use `404.html`; no catch-all rewrite to the homepage is configured. The project uses trailing slashes consistently.

See [Astro's Vercel guide](https://docs.astro.build/en/guides/deploy/vercel/) and [Vercel's supported Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) for deployment documentation.

Research references, asset provenance and the complete image-generation prompts are recorded in [docs/content-and-assets.md](docs/content-and-assets.md).

The robotics expansion has additional [research and image notes](docs/robotics-content-and-assets.md), including the two new illustrative image prompts.
