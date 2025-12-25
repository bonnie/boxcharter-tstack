# INSTALLING

## Set up Developer Environment

### Git Pre-commit

To save time for CI and not bother to commit if lint / ts checks fail.

`cp git-pre-commit .git/hooks/`

### Supabase

This example requires Supabase configuration. The `.env` file contains the necessary environment variables:

```env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
```

### Project ID

https://supabase.com/dashboard/project/pmoonraylkujkuzddpvc/settings/general

### Project URL

https://supabase.com/dashboard/project/pmoonraylkujkuzddpvc/settings/general?showConnect=true

### Anonyomous key

https://supabase.com/dashboard/project/[your project id]/settings/api-keys/legacy

## Install depencencies

`npm install`
