# SocialPublishing

Independent, multi-tenant social media publishing SaaS for TikTok, Instagram and Facebook, with Stripe subscriptions.

**Status:** Planning / specification. No application code has been implemented.

## Product goals
- Allow independent businesses to register, subscribe, and manage their own social accounts.
- Publish media immediately and schedule posts where permitted by each provider's APIs.
- Provide platform-specific previews, settings, disclosures and explicit publishing consent.
- Track each destination independently, including partial successes, failures and reconciliation.
- Allow complimentary subscriptions through auditable entitlements rather than hardcoded company exceptions.

## Proposed stack
Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Better Auth, MongoDB/Mongoose, S3-compatible object storage, Agenda worker, Stripe, Vitest, Playwright, Docker and Dokku.

## Documentation
- [Product requirements](docs/requirements.md)
- [Architecture](docs/architecture.md)
- [Data model](docs/data-model.md)
- [Integrations and compliance](docs/integrations.md)
- [Roadmap and acceptance criteria](docs/roadmap.md)

## Current limitations
Publishing APIs require provider-specific scopes, audits and app review. A public SaaS does **not** guarantee TikTok or Meta approval. No claim is made that unattended TikTok scheduling is authorised until verified against applicable API terms.

## Development
The project is at specification stage. Environment variables, install commands and deployment instructions will be added alongside working implementation; no fictitious configuration is supplied.
