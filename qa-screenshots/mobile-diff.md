# Mobile (390px) Visual Diff

Compared:
- `qa-screenshots/staging-mobile.png` (local Next.js build used as staging fallback)
- `qa-screenshots/live-mobile.png`

## Differences found
- No significant mobile layout differences.
- Header remains single-row with logo/wordmark + language switcher aligned correctly.
- Hero, service cards, credibility cards, and FAQ spacing are visually aligned with live.
- Minor rendering differences only (expected):
  - Font rasterization/weight is slightly different by browser/font pipeline.

## Fixes applied
- No additional mobile CSS/layout fixes required in this pass.
