# INSTALLING

## Set up Developer Environment

### Git Pre-commit

To save time for CI and not bother to commit if lint / ts checks fail.

`cp git-pre-commit .git/hooks/`

### Supabase

This example requires Supabase configuration. The `.env` file contains the necessary environment variables:

```env
DATABASE_URL=
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_ANON_KEY=
```

### Project ID

settings -> general

### Database URL

`https://supabase.com/dashboard/project/`[your project id]`/settings/general?showConnect=true`

### Supabase URL

`https://`[your project id]`.supabase.co`

### Supabase publishable key

`https://supabase.com/dashboard/project/`[your project id]`/settings/api-keys`

## Generate and seed db

```sh
npm run db:push
npm run db:seed
```

## Install depencencies

`npm install`
