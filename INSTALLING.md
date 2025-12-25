## Set up Developer Environment

### Git Pre-commit

To save time for CI and not bother to commit if lint / ts checks fail.

`cp git-pre-commit .git/hooks/`

### Prisma and SQL db

1. Create a SQL (PostgreSQL, MySQL etc) db for the project
1. `mv .env.example .env.local`
1. Add the URL for your db to `.env.local`
1. Run `npm run prisma:init` to add the tables from the prisma schema to your db
1. Run `npm run prisma:seed` to seed the database.

   **Note**: If you want to add a dev user via database seed, make sure these environment variables are populated.

   **DO NOT** populate these environment variables in production, or
   they will auto-populate on the login page! Add a user via the command (below) instead.

   - `NEXT_PUBLIC_DEV_USER`
   - `NEXT_PUBLIC_DEV_PASSWORD`
