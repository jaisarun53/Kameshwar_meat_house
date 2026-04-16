# Supabase Setup For Kameshwar Platform

Updated: 2026-04-16

## Current integration choice

This project uses:

- `NestJS` as the backend application
- `Prisma` as the ORM
- `Supabase Postgres` as the database backend

That means the frontend still talks to our NestJS API, while the NestJS API talks to Supabase's Postgres database.

## Values needed from Supabase

You need to create a Supabase project, then collect these two values from the `Connect` dialog:

- `DATABASE_URL`
  Use the `Session pooler` connection string, typically ending with port `5432`
- `DIRECT_URL`
  Use the `Direct connection` string for Prisma migrations

## Example format

```env
DATABASE_URL="postgresql://postgres.abcd1234:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.abcd1234.supabase.co:5432/postgres"
```

## Where to place them

Put both values in:

- [backend/.env](/home/feberoxy/Desktop/blloging%20app/kameshwar-platform/backend/.env)

## Optional frontend values for future use

Only if we later wire frontend directly to Supabase Auth or Storage:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

## What I can do once you provide the real values

1. Update the backend env
2. Run Prisma migration against Supabase
3. Seed the database
4. Start the backend
5. Verify frontend-to-backend data flow

## Official references

- Supabase Prisma guide:
  `https://supabase.com/docs/guides/database/prisma`
- Supabase connection strings:
  `https://supabase.com/docs/reference/postgres/connection-strings`
- Supabase Next.js guide:
  `https://supabase.com/docs/guides/getting-started/quickstarts/nextjs`
