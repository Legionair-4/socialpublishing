# Product requirements

## Audience
Independent businesses, agencies, and franchise operators. SocialPublishing must be genuinely available to third parties, not merely an internal Wall Walkers utility.

## MVP
1. Public marketing pages: product, pricing, support, privacy, terms and deletion information.
2. User signup, verification, secure login, recovery and session management.
3. Organisations, invitations, member roles (owner/admin/editor/viewer), organisation switching and enforced tenant isolation.
4. Stripe checkout, subscription lifecycle, customer portal, usage entitlements, complimentary grants and webhook reconciliation.
5. TikTok, Instagram professional account and Facebook Page OAuth, permissions display, disconnect and reconnect.
6. Media upload with presigned URLs, format/size validation, previews, processing state and deletion.
7. Post composer with network-specific validation, consent, captions, privacy, disclosures and media previews.
8. Immediate publishing and scheduled publishing only where provider permissions and policies allow.
9. Calendar, publication history, per-target status, retries and error messaging.
10. Account deletion, export where feasible, audit trail, support and operational monitoring.

## Explicit non-goals for v1
AI content generation, social inbox, ad management, advanced analytics, approval chains, personal Facebook profile publishing, unlimited platform support.

## Core user journeys
- Visitor registers an account, creates a business workspace, chooses a paid plan, completes Stripe Checkout, and connects a supported social account.
- Editor uploads media, configures each target, explicitly approves publication and publishes or schedules.
- A failed destination is reported without losing successful publication to other destinations.
- Owner changes subscription, invites staff, disconnects an account or requests account deletion.

## Quality and security
- Server-enforced tenant ownership and least-privilege roles for all reads and mutations.
- Encryption of provider credentials at rest, secure secret management, OAuth state/PKCE where applicable, verified webhooks.
- Idempotent publication jobs and webhook handlers; reconcile ambiguous remote submission before retry.
- UTC timestamps, organisation IANA timezones, daylight-saving-safe scheduling.
- Structured logs without credentials, error monitoring, health checks, backups and restore test.
- Accessibility-conscious responsive interface and automated tests for critical flows.

## Open decisions
Brand/domain, hosting topology and database service, exact Stripe prices/limits, media retention periods, email provider, legal policy text, provider review outcomes.
