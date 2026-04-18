# Kameshwar Website Roadmap

Updated: 2026-04-16

## Recommendation

Do not build this on top of the existing `Spring Boot + Thymeleaf` blogging app in this workspace.

That codebase is a small server-rendered social app with H2 and basic templates. For a modern, creative restaurant brand site with a real backend, richer UI motion, media handling, admin tools, and easier deployment, a new project is the cleaner path.

## Recommended production stack

### Frontend

- `Next.js 15`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`
- `Motion` or `Framer Motion` for cinematic section reveals and gallery transitions

### Backend

- `NestJS`
- `TypeScript`
- `Prisma ORM`
- `PostgreSQL`

### Storage and media

- `Cloudinary` for food images, reels, thumbnails, and optimized delivery

### Auth and admin

- admin login with role-based access
- email/password auth for owner/admin users
- protected dashboard to manage menu, gallery, testimonials, and business info

### Deployment

- `Vercel` for frontend
- `Railway`, `Render`, or `Fly.io` for backend
- `Neon` or `Supabase Postgres` for database

This is a very common modern stack for small-to-mid production products because it is:

- fast to build with
- easy to hire for
- TypeScript end to end
- scalable enough for a restaurant/business platform
- good for SEO and visual storytelling

## Design direction

The UI should feel artistic and rooted in place, not generic.

Creative direction:

- earthy palette: charcoal, clay, ash, smoke, turmeric, deep red
- large editorial typography
- full-bleed food imagery
- Mithila/Madhesh-inspired visual motifs used subtly
- textured sections inspired by clay, coal, and fire
- cinematic transitions rather than template-like cards everywhere
- mobile-first layout because many local visitors will come from phones

## Website structure

### Public pages

- Home
- About / Our Story
- Signature Katiya
- Full Menu
- Gallery
- Reviews / Media Mentions
- Visit Us
- Contact / WhatsApp

### Admin pages

- Dashboard
- Manage menu categories and items
- Manage gallery
- Manage testimonials
- Manage site settings
- Manage featured blog/video links

## Core backend models

- `AdminUser`
- `Category`
- `MenuItem`
- `GalleryImage`
- `Testimonial`
- `MediaMention`
- `BusinessInfo`
- `SiteSettings`
- `Inquiry`

## MVP feature list

- beautiful landing page
- menu management from admin
- gallery management
- contact form
- WhatsApp click-to-chat button
- Google Maps embed
- testimonials section
- featured blog/video section
- SEO metadata
- responsive design

## Phase 2 features

- online order request flow
- table booking request
- multilingual content (`English`, `Nepali`, optionally `Maithili`)
- analytics dashboard
- blog/news section
- coupon or campaign landing pages

## Step-by-step build plan

### Step 1: Collect real business data

We need owner-confirmed data before full implementation:

- final business name
- logo
- real photos and videos
- exact menu with prices
- hours
- WhatsApp number
- Google Maps link
- founder story
- all blog and YouTube feature links

### Step 2: Create brand system

- define colors, typography, layout system
- decide bilingual copy style
- create homepage wireframe
- create art direction for hero, gallery, and story sections

### Step 3: Scaffold the codebase

- create `frontend/` with Next.js
- create `backend/` with NestJS
- configure shared environment strategy
- connect PostgreSQL
- add Prisma schema and migrations

### Step 4: Build the content models and admin

- menu CRUD
- gallery CRUD
- testimonial CRUD
- business settings CRUD
- auth and route protection

### Step 5: Build the public site

- homepage storytelling sections
- menu page
- story page
- media/review page
- contact page

### Step 6: Add SEO and deployment

- metadata
- schema markup for local business/restaurant
- sitemap
- image optimization
- deploy frontend, backend, database

### Step 7: Launch polish

- performance pass
- accessibility pass
- mobile QA
- real content review
- analytics setup

## My recommendation for us

If we continue this project together, the best sequence is:

1. Use these research notes to collect owner-approved content.
2. Start a brand-new `Next.js + NestJS` codebase in a new folder.
3. Build the homepage first, then admin and menu backend.
4. Add real business content only after owner confirmation.

## Important practical note

This environment currently contains an unrelated Java project, and network access is restricted in this session. That means I can plan and write code locally, but scaffolding a fresh dependency-based app may require installation approval in a follow-up step.
