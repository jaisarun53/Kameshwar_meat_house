# Frontend Setup

This frontend is a `Next.js + TypeScript + Tailwind` restaurant website for Kameshwar Meat House.

## What is included

- artistic homepage with strong visual identity
- sections for story, menu, gallery, media mentions, testimonials, and visit/contact
- typed API layer that can read from the backend
- local fallback content so the UI still renders before the backend is live

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```

## Next actions once Node is installed

1. Run `npm install`
2. Run `npm run dev`
3. Replace placeholder gallery images with owner-approved restaurant photos
4. Replace starter content with verified menu, hours, and media links

## Local run shortcut

From the `kameshwar-platform/` directory:

```bash
./run-frontend.sh
```
