# Technical architecture

## Decisions
- Next.js App Router and TypeScript for marketing site, dashboard and API route handlers.
- Tailwind CSS and shadcn/ui for UI.
- Better Auth for identity; MongoDB/Mongoose for application persistence.
- Stripe for subscription billing and customer portal.
- S3-compatible object storage for media; browser uploads via short-lived presigned URLs.
- Agenda with a **dedicated long-running Node worker process** for publishing and reconciliation.
- Docker/Dokku deployment with separate web and worker process types.
- One repository and modular services; no microservices initially.

## Modules
- identity: users, sessions, account verification.
- tenancy: organisations, invitations, roles, authorisation.
- billing: plans, subscriptions, grants, entitlements, usage.
- social: provider OAuth, capability discovery, encrypted tokens, reconnection.
- media: upload authorisation, validation, metadata and lifecycle.
- publishing: posts, per-target configuration, consent, delivery and reconciliation.
- operations: audit logs, webhook inbox, worker health, observability.

## Provider boundary
Each adapter owns OAuth, account discovery, capability checks, content validation, upload/publish and remote status reconciliation. The composer must never assume that all networks support identical privacy, media or scheduling features. Provider capabilities are obtained and validated server-side.

## Publication workflow
draft -> validated -> scheduled or queued -> publishing -> published/failed/requires_action/unknown. A multi-target post can be partially_published. Every target records its own attempts and provider IDs. Network timeouts may be ambiguous; reconcile before re-submitting to prevent duplicate posts.

## API design (proposed)
- GET/POST /api/v1/organizations
- GET /api/v1/social-accounts
- POST /api/v1/social-accounts/connect
- GET /api/v1/social-accounts/callback/[provider]
- POST /api/v1/media/uploads
- GET/POST /api/v1/posts
- PATCH /api/v1/posts/[id]
- POST /api/v1/posts/[id]/publish
- POST /api/v1/posts/[id]/schedule
- POST /api/v1/billing/checkout
- POST /api/webhooks/stripe

All endpoints validate schemas, sessions, organisation membership, roles, plan limits and resource ownership. Webhook endpoints verify provider signatures and deduplicate event IDs.

## Operational constraints
Background worker must be independent of web request lifecycle. Use atomic job claiming and concurrency controls; use idempotency keys and provider status reconciliation. Do not expose credentials to the browser. Implement database indexes and retention/cleanup policies. Include backups and restore exercises before launch.
