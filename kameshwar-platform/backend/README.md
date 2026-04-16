# Backend Setup

This backend is structured as a `NestJS + Prisma + PostgreSQL` service for the Kameshwar Meat House website.

The project is now configured to use `Supabase Postgres` as the database backend.

## Planned modules

- `health`
- `business-info`
- `menu`
- `gallery`
- `testimonials`
- `media-mentions`
- `inquiries`

## Environment

Copy `.env.example` to `.env` and update values:

```bash
PORT=4000
DATABASE_URL="postgresql://postgres.<project-ref>:[YOUR-PASSWORD]@aws-0-<region>.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.<project-ref>.supabase.co:5432/postgres"
CORS_ORIGIN="http://localhost:3000"
```

Notes:

- `DATABASE_URL` should use the `Supabase Session pooler` connection string from the `Connect` dialog. Supabase documents this as the recommended connection string for persistent servers when direct IPv6 is not available.
- `DIRECT_URL` should use the `direct connection string` for Prisma migrations and schema operations.
- Replace `[YOUR-PASSWORD]`, `<project-ref>`, and `<region>` with the actual values from your Supabase project.

## Database entities

- `BusinessInfo`
- `SocialLink`
- `Category`
- `MenuItem`
- `GalleryImage`
- `Testimonial`
- `MediaMention`
- `Inquiry`

## Next actions once Node is installed

1. Run `npm install`
2. Run `npx prisma generate`
3. Run `npx prisma migrate dev --name init`
4. Optionally run `npm run prisma:seed`
5. Run `npm run start:dev`

## Supabase values you need

From the Supabase dashboard:

1. Open your project
2. Click `Connect`
3. Copy the `Session pooler` Postgres URI for `DATABASE_URL`
4. Copy the `Direct connection` Postgres URI for `DIRECT_URL`

If you later want to use Supabase Auth or Storage directly in the frontend, you will also need:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

## Local run shortcut

From the `kameshwar-platform/` directory:

```bash
./run-backend.sh
```
