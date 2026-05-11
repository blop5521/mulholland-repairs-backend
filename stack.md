# Field — Stack

## Platform Infrastructure (provided by Lyte Works)

| Service | Tier | What it does |
|---------|------|-------------|
| **Vercel** | Pro (Team Lyte) | Hosts the field's website, API routes, frontend |
| **GitHub** | Organization Pro (Lyte-Works) | Source control, CI/CD, worker sync |
| **Supabase** | Pro | Database, auth, storage, RLS-isolated per field |
| **Railway** | Pro | Runs Claude Code container, persistent volume |
| **Cloudflare** | Free | DNS (`{slug}.lyte.works`), SSL, caching |
| **Resend** | Free | Transactional email |

## Claude Code Runtime

- Shared Docker image: `ghcr.io/lyte-works/lyteworks:latest`
- Node 20, git, ripgrep, GitHub CLI, Playwright + Chromium
- Claude Code CLI + Agent SDK installed globally
- Persistent volume at `/data` (field repo, Claude sessions)

## Available Skills (CLI tools on PATH)

| Skill | Command | Capabilities |
|-------|---------|-------------|
| lyte-supabase | `lyte-supabase` | Query, insert, update, delete, list tables |
| lyte-github | `lyte-github` | Repo contents, PRs, issues, actions status |
| lyte-vercel | `lyte-vercel` | Deploy, env vars, domains, logs |
| lyte-railway | `lyte-railway` | Logs, redeploy, env vars, metrics |
| lyte-dns | `lyte-dns` | DNS records, SSL, cache purge |
| lyte-browser | `lyte-browser` | Browse web pages, screenshots |
| lyte-email | `lyte-email` | Send transactional email |

## Field-Specific Stack

<!-- The Guide fills this section during onboarding with the field's
     specific technology choices, frameworks, and integrations -->
