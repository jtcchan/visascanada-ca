# visascanada.ca Migration QA Progress

**Source:** https://visascanada.ca (Webflow)  
**Target:** https://visascanada-ca.netlify.app (Next.js/Netlify)  
**Date:** 2026-02-27 (latest pass)

---

## QA Summary

### Pass 1
- Found missing "95% Success Rate" stat (only 4 of 5 badges)
- Fixed in commit c9c8d6b

### Pass 2
- Verified fix deployed
- All sections match original

### Pass 3 - Final ✅
- No discrepancies found
- Desktop QA complete

### Pass 4 (2026-02-27) — Container Width Fixes
- Found `.services-container` in hero section had no `max-width` — stretched full width on large screens
- Fixed: `max-width: 940px; margin-left: auto; margin-right: auto` added to `.services-container`
- Fixed: `max-width: 940px` added to `.explainer` as safety net
- All other `.container-*` divs already had `max-width: 940px` ✅
- `.addendum` already had `max-width: 720px` ✅
- Landing pages (PermitLandingPage.tsx) use Tailwind classes — already properly constrained ✅
- Deployed commit `cba886a` to Netlify production

---

## Sections Verified

| Section | Status |
|---------|--------|
| Header (logo + lang switcher) | ✅ |
| Hero (title + service buttons) | ✅ |
| Hero "Not sure what you need?" | ✅ Fixed (max-width now 940px) |
| Stats (5 badges, success-rate hidden) | ✅ |
| Why work with us (comparison) | ✅ |
| How it works (4 steps) | ✅ |
| What we can help with | ✅ |
| What we can help with "Not sure what you need?" | ✅ (inside 940px container) |
| FAQ (8 Q&As) | ✅ |
| FAQ addendum | ✅ (max-width 720px) |
| Get started today (CTA) | ✅ |
| Footer | ✅ |

---

## Landing Pages (No Webflow Reference — Quality Audit)

| Page | Desktop 1440 | Mobile 375 | Issues |
|------|-------------|------------|--------|
| /work-permit/apply | ✅ | ✅ | None |
| /study-permit/apply | ✅ | ✅ | None |
| /visitor-visas/apply | ✅ | ✅ | None |
| /temporary-resident-visa/apply | ✅ | ✅ | None |

**Landing page credibility bar:** 2×2 grid on mobile ✅  
**Landing page "Not sure what you need?":** Constrained via Tailwind (672px hero, 940px services) ✅  
**Landing page comparison cards:** Stack to single column on mobile ✅  
**Mobile nav:** Hamburger menu working ✅

---

## Known Minor Differences (Accepted)

| Issue | Severity | Decision |
|-------|----------|----------|
| Page height 5501px → 5783px | ⚪ Minor | Accept (line-height/padding diff) |
| Font rendering (Next.js vs Webflow) | ⚪ Minor | Accept (different font-loading) |
| Small spacing deltas in FAQ/steps | ⚪ Minor | Accept (structural difference — Webflow uses accordion, ours is plain list) |

---

## Sign-off

**Desktop (1440px):** ✅ Complete — homepage + key landing pages  
**Tablet (768px):** ✅ Verified — no layout breaks  
**Mobile (375px):** ✅ Complete — homepage + key landing pages  
**Forms:** ⬜ Application form not yet tested
