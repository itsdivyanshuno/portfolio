# Portfolio — Divyansh

## Stack
- **Framework:** Next.js 16.2.6 (App Router), React 19.2.4, TypeScript 5
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation:** Framer Motion 12.40
- **Database:** Firebase Firestore (contact form submissions)
- **Deployment:** Vercel (auto-deploys on push to main)
- **Linting:** ESLint 9 with `eslint-config-next`

## Project Structure
```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout (Geist font, OG/Twitter metadata)
│   ├── page.tsx      # Home page — assembles all 7 sections with AnimatedSection wrappers
│   ├── not-found.tsx # 404 page
│   └── globals.css   # Tailwind v4 import, smooth scroll
├── components/       # 7 section components + 2 utility components
│   ├── Navbar.tsx    # "use client" — fixed glassmorphism nav, mobile hamburger (SVG),
│   │                 #   Escape/click-outside close, scroll-spy active highlighting
│   ├── Hero.tsx      # "use client" — full-screen hero with Framer Motion animation,
│   │                 #   social links (GitHub, LinkedIn, Email)
│   ├── About.tsx     # Server component — profile image (via SafeImage) + intro + tech badges
│   ├── Skills.tsx    # Server component — grid of 8 technology badges with inline SVG icons
│   ├── Projects.tsx  # Server component — dynamic cards from data/projects.ts (via SafeImage),
│   │                 #   conditional Live Demo button
│   ├── Contact.tsx   # "use client" — Firebase-powered contact form, email validation,
│   │                 #   auto-dismiss success/error messages
│   ├── Footer.tsx    # Server component — copyright + social links
│   ├── SafeImage.tsx # "use client" — Next/Image wrapper with error fallback
│   └── AnimatedSection.tsx # "use client" — Framer Motion whileInView scroll animation wrapper
├── data/
│   └── projects.ts   # 3 project entries typed with Project interface
├── lib/
│   └── firebase.ts   # Firebase/Firestore init (public API key hardcoded)
└── types/
    └── project.ts    # Project interface (title, description, tech, image, github, demo)
```

## Components Detail

### Navbar (`"use client"`)
- Fixed top, z-50, full-width
- Glassmorphism container (`rounded-full border border-white/10 bg-white/5 backdrop-blur-md`)
- Max-width 6xl, centered
- Desktop: 4 links (About, Skills, Projects, Contact) with hover effect
- Mobile: hamburger toggle (`☰`/`✕`), dropdown menu with same links
- Logo: "DIVYANSH" text

### Hero (`"use client"`)
- Full viewport height, centered content
- Background: blue glow (`bg-blue-500/20 blur-3xl`)
- Framer Motion: fade-in + slide-up on load (`initial: opacity 0, y:80` over 1s)
- Tagline: "Student Developer"
- Title: "Building ideas into products" (2 lines)
- 2 CTA buttons: Projects (#projects), Contact (#contact)

### About (Server)
- Two-column grid on desktop (image | text)
- Image in glassmorphism card, Next.js Image with `/profile.jpeg`
- Text: "ABOUT ME" label, "Hi, I'm Divyansh" heading, bio paragraph
- Tech badge row: Next.js, React, Tailwind, Firebase, Framer Motion

### Skills (Server)
- Section label "SKILLS", heading "Technologies I Use"
- Responsive grid: 1 col mobile → 2 col tablet → 4 col desktop
- 8 skills: Next.js, React, Tailwind, Firebase, Git, Framer Motion, TypeScript, JavaScript
- Glassmorphism cards with hover scale effect

### Projects (Server)
- 3-column responsive grid
- Reads from `data/projects.ts` (typed as `Project[]`)
- Each card: image (object-contain), title, description, tech badges, GitHub + Live Demo buttons
- Hover: slight scale up (`hover:scale-[1.02]`)

### Contact (`"use client"`)
- 3 fields: name, email, message
- Writes to Firestore `messages` collection: `{ name, email, message, createdAt }`
- State machine: idle → loading → success | error
- Glassmorphism input styling, green success banner, red error banner
- Button disabled while loading

### Footer (Server)
- Top border, copyright "© 2026 Divyansh"

## Key Conventions
- **`"use client"`** on components using hooks/state (Navbar, Hero, Contact)
- **Path alias:** `@/*` maps to `./src/*`
- **All sections:** full-width, `py-32`, dark theme (`bg-black text-white`)
- **Design pattern:** glassmorphism (`border border-white/10 bg-white/5 backdrop-blur-md`), rounded corners (`rounded-3xl`, `rounded-2xl`, `rounded-full`), hover scale effects
- **Firebase:** `db` exported from `@/lib/firebase`; contact form writes to `messages` collection
- **Section IDs:** `#about`, `#skills`, `#projects`, `#contact`

## Commands
```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Firebase Config (public — safe to commit)
- Project: `portfolio-itsdivyanshuno`
- Firestore rules: `messages` collection — `create: if true`, `read/update/delete: if false`
- .env not required (API key is hardcoded in firebase.ts)

## Dependencies
- **Production:** firebase ^12.13, framer-motion ^12.40, next 16.2.6, react 19.2.4, react-dom 19.2.4
- **Dev:** @tailwindcss/postcss v4, tailwindcss v4, typescript ^5, eslint ^9, eslint-config-next 16.2.6

## Live URL
https://portfolio-alpha-ochre-48.vercel.app/

## Uncommitted Changes (as of 2026-05-26)
- Modified: layout.tsx, Contact.tsx, Hero.tsx, projects.ts, project.ts
- New: CLAUDE.md, not-found.tsx