# Implementation roadmap

Planning estimates are developer-days, excluding external platform reviews.

## M1 Foundation (3–5 days)
Next.js, TypeScript, Tailwind, shadcn/ui, MongoDB, Docker, CI, environment validation.
**Done:** App builds, tests and deploys.

## M2 Identity and organisations (4–7 days)
Better Auth, invitations, workspace switching, roles and tenant isolation.
**Done:** Two independent businesses cannot access each other's data, verified by tests.

## M3 Public SaaS and billing (4–6 days)
Marketing/legal pages, pricing, Stripe Checkout, Billing Portal, subscriptions, webhook processing and entitlements.
**Done:** External customer can self-register and subscribe; complimentary access is auditable.

## M4 Media and composer (5–8 days)
Object storage, upload validation, previews, drafts, network-specific settings and consent.
**Done:** User can prepare validated content for each supported provider.

## M5 TikTok, Instagram and Facebook (8–15 days)
OAuth, provider adapters, account discovery, publication and status handling.
**Done:** Test accounts can publish through actually approved capabilities; review blockers documented.

## M6 Scheduling and reliability (5–8 days)
Agenda worker, idempotency, retries, partial failure handling, reconciliation and notifications.
**Done:** Jobs survive restart without duplicate publication; unsupported scheduling modes remain disabled.

## M7 Production readiness (5–8 days)
Security review, E2E tests, deletion, backups, monitoring, support, platform review demonstrations.
**Done:** Independent customers can safely use approved production capabilities.

**Total estimate:** 34–57 developer-days, plus provider approval time and any scope changes.

## Release gates
1. Public SaaS and Stripe onboarding works.
2. OAuth and media workflows are secure.
3. Each platform has documented approved scopes and tested production capability.
4. Publishing is resilient to partial failure and duplicate submissions.
5. Security, privacy, support, observability and recovery procedures pass review.

## First engineering tasks
- Initialise Next.js and tooling.
- Implement identity and organisation authorisation before domain APIs.
- Define provider interface and capability schema.
- Implement billing and webhook inbox.
- Implement upload storage abstraction.
- Build composer and one end-to-end provider flow.
- Expand to remaining providers and schedule worker.
