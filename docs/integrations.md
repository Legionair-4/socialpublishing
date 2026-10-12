# Platform integrations and approval checklist

## TikTok
- Content Posting API; implement approved OAuth scopes and token lifecycle.
- Display current creator information and supported privacy settings.
- Obtain explicit informed user consent for content transfer and publishing.
- Implement creator/platform controls, commercial content disclosures and other required policy acknowledgements.
- Track processing and publication status.
- Direct Post production approval/audit is an external dependency. Public SaaS availability does not ensure approval.
- Do not assume unattended scheduled publication is allowed; confirm current API rules and consent requirements before enabling.

## Instagram
- Support professional accounts through the applicable Instagram API configuration.
- Confirm publishing scopes, permissions, account eligibility, media container processing and status polling.
- Respect supported media types, publishing limits and Meta app review requirements.
- Do not promise publishing to personal Instagram accounts.

## Facebook
- Support Facebook Pages through appropriate Page access tokens and permissions.
- Implement Page selection, video/photo publication, permission checks and token recovery.
- Do not promise posting to personal Facebook profiles.

## Stripe
- Checkout for new subscriptions, Billing Portal for customer self-service.
- Verified signed webhooks, durable webhook inbox and idempotent processing.
- Entitlement state reconciled from Stripe, not trusted from browser redirects.
- Complimentary organisation access through explicit audited entitlement grants.
- Prices and usage limits remain configuration-driven.

## Review evidence to prepare
- Public website with real third-party onboarding and functional product.
- Terms, privacy policy, support and deletion instructions.
- Reviewer demo accounts and walkthrough videos showing OAuth, media selection, consent, publication and error handling.
- Clear explanation of external customer audience and multi-tenant access.
- Test actual approved capabilities before advertising them as production features.

## External references to verify before implementation
- https://developers.tiktok.com/doc/content-posting-api-get-started
- https://developers.facebook.com/docs/instagram-platform/
- https://developers.facebook.com/docs/pages-api/
- https://docs.stripe.com/billing/subscriptions/overview

Provider permissions and policies change; validate them during each integration milestone.
