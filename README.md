# Kameshwar Meat House

This repository is organized as a deployment-friendly monorepo:

- `apps/api` - NestJS + Prisma backend
- `apps/web` - Next.js frontend
- `docs` - research and planning docs
- `scripts` - local run, migration, and reset helpers

## Local development

Start the API:

```bash
./scripts/run-api.sh
```

Start the frontend:

```bash
./scripts/run-web.sh
```

Run Prisma migration:

```bash
./scripts/migrate-api.sh
```
