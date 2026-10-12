# Data model proposal

MongoDB collections and principal fields; exact Mongoose schemas and indexes will be implemented with the application.

| Collection | Principal fields |
| --- | --- |
| users | email, name, emailVerified, createdAt |
| sessions | userId, expiresAt, authentication metadata |
| organizations | name, slug, ownerId, timezone, createdAt |
| organizationMembers | organizationId, userId, role, status |
| invitations | organizationId, email, role, tokenHash, expiresAt |
| socialAccounts | organizationId, provider, externalAccountId, displayName, status, capabilities |
| socialCredentials | socialAccountId, encryptedAccessToken, encryptedRefreshToken, scopes, expiresAt, keyVersion |
| mediaAssets | organizationId, storageKey, mimeType, size, dimensions, duration, status |
| posts | organizationId, authorId, caption, mediaAssetIds, scheduledAt, status, version |
| postTargets | organizationId, postId, socialAccountId, providerOptions, consentRecord, status, providerPostId |
| publicationAttempts | organizationId, postTargetId, attempt, startedAt, completedAt, outcome, errorCode |
| plans | code, stripePriceIds, limits, features |
| subscriptions | organizationId, stripeCustomerId, stripeSubscriptionId, status, currentPeriodEnd |
| entitlementGrants | organizationId, reason, grantedBy, limits, expiresAt |
| usageRecords | organizationId, metric, quantity, periodStart, periodEnd |
| auditEvents | organizationId, actorId, action, resourceType, resourceId, timestamp |
| webhookEvents | provider, eventId, receivedAt, status, processedAt |

## Invariants
- Every tenant-owned record carries organizationId; enforce ownership on every operation.
- Unique organization membership: (organizationId, userId).
- Unique provider connection identity must be managed to prevent unintended cross-tenant access.
- Unique webhook event: (provider, eventId).
- Index due post targets and worker jobs by status and scheduledAt.
- Credentials use authenticated encryption with key rotation support; never log tokens.
- Provider options and consent records must be versioned and auditable.
- Publishing is per-target; parent status is derived from target states.
- UTC persistence and explicit organisation IANA timezone.
- Plans and complimentary entitlements use data-driven configuration, not email/company-name checks.

## Deletion and privacy
Document data retention before launch. Support disconnect and credential revocation, account deletion, removal of stored media, and legally required retention of billing/audit data where applicable.
