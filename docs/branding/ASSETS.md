# M Brand Asset Catalog

**Project:** M Brand

**Document:** Visual Asset Catalog

**Status:** Foundation

**Version:** 1.0

**Owner:** M

**Created:** 2026-07-03

**Last Updated:** 2026-07-03

---

# Purpose

This document catalogs canonical and approved visual assets for the M Brand website and related publication work.

The catalog separates source-of-truth reference assets from public website illustrations so Dino remains visually consistent without treating every canonical file as a normal public web image.

---

# Asset Catalog

| Filename | Version | Location | Purpose | Status | Usage Guidance | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Dino_Master_v1.0.png` | 1.0 | `assets/canonical/dino/Dino_Master_v1.0.png` | Canonical character reference for Dino. Defines Dino's approved appearance, proportions, glasses, color direction, expression, and overall visual identity. | Canonical reference | Use as the source-of-truth reference for evaluating future Dino illustrations. Do not use as the normal public homepage image. Do not overwrite, delete, crop, recolor, or redesign from this file without a formal revision. | This is the canonical character reference asset. It should remain preserved as a protected reference, not treated as routine website artwork. |
| `thinking-dino-v1.0.png` | 1.0 | `website/public/images/dino/thinking-dino-v1.0.png` | Approved homepage and public web illustration for Dino. Supports the homepage hero as a calm, thoughtful visual companion. | Approved public web asset | Use for the homepage hero and public website contexts that need the current approved Dino illustration. Reference it from Astro as `/images/dino/thinking-dino-v1.0.png`. | This is the approved homepage/public web illustration. It may be replaced by a future approved public illustration version while preserving `Dino_Master_v1.0.png` as the canonical reference. |
| `interior-dino-companion-v1.0.png` | 1.0 | `website/public/images/dino/interior-dino-companion-v1.0.png` | Transparent-background Dino companion image for interior page headers. Supports About, Articles, Projects, Resources, and Connect pages without introducing a white rectangular image background. | Pending approval | Use for interior pages only through `DinoCompanion.astro`. Reference it as `/images/dino/interior-dino-companion-v1.0.png` after the approved transparent PNG has been added. Do not use this asset for the homepage hero. | TODO: Add and approve a transparent-background Dino companion PNG at this path. No approved transparent interior Dino asset exists in the repository yet. |

---

# Asset Roles

## Canonical Reference Asset

`assets/canonical/dino/Dino_Master_v1.0.png` is the authoritative Dino reference. It exists to preserve character continuity across future illustrations, revisions, documents, presentations, and website updates.

This file should not be treated as the default homepage image or a general-purpose public asset.

## Public Homepage Illustration

`website/public/images/dino/thinking-dino-v1.0.png` is the approved public web illustration for the current homepage. It is the correct asset for the homepage hero and other public website placements where the current Dino companion image is needed.

Future homepage artwork should be added as a new versioned public asset rather than by overwriting the canonical reference.

## Public Interior Companion Illustration

`website/public/images/dino/interior-dino-companion-v1.0.png` is reserved for the approved transparent-background Dino image used by interior page headers only.

TODO: This file still requires an approved transparent PNG. The current repository only contains rectangular RGB Dino scene images, so this asset should not be faked with CSS or produced by removing a background without approval.

---

# Maintenance Rules

- Keep canonical assets under `assets/canonical/`.
- Keep public website assets under `website/public/images/`.
- Use clear, versioned filenames for public assets.
- Do not overwrite canonical files to make website changes.
- Do not redesign Dino without updating the relevant character and visual standards documents.
- When adding a new approved asset, update this catalog in the same change.
