# PRD: visascanada.ca Full QA + Fixes

**Goal:** Get visascanada.ca staging to visually match the live Webflow site at all breakpoints. No significant differences should remain.  
**Live reference:** https://visascanada.ca  
**Staging:** https://visascanada-staging.netlify.app  
> QA note (2026-02-27): staging URL returned Netlify "Site not found" during this pass, so screenshot parity checks were run against local production build (`http://localhost:4888`) vs live.
**Repo:** /root/clawd/visascanada-ca  
**Priority:** HIGH — John identified glaring issues on both mobile and desktop

---

## Critical Lessons from 2x.ventures (Apply These)

From the pilot migration, these were missed and caught by John:
1. Code audit ≠ visual verification. MUST take screenshots and compare
2. Font className bug — check the actual body className, not just the import
3. Missing favicon — check `/public/` has the correct file
4. Container max-width — extract from live CSS, don't assume Tailwind defaults
5. Typography (italic, weight, size) — compare headings specifically

---

## Known Issues (Pre-Identified)

### Issue 1: Credibility bar `justify-content` mismatch
- **Live site CSS:** `.credibility-container { justify-content: space-between; }`
- **Migration CSS:** `.credibility-container { justify-content: center; flex-wrap: wrap; }`
- The live site spreads 4 cards evenly across the bar. Migration centers them.
- Fix: Match live site layout — `justify-content: space-between` (or center if live site is center — verify via screenshot)

### Issue 2: Success Rate card visibility
- **Live site CSS:** `.credibility-card.success-rate { display: none; }` — 95% success rate is HIDDEN on live Webflow site
- **Migration:** Shows 5 stats including 95% Success Rate
- Investigate: check if `display: none` still applies or if it's since been removed
- Fetch live page and count actual visible credibility cards
- Fix accordingly

### Issue 3: Visual parity unknown (no screenshots taken)
- Desktop, tablet, and mobile have never been screenshot-compared against live site
- Must be done as part of this QA pass

---

## Tasks

- [x] **Favicon check**: Does `/public/favicon.png` or `/public/favicon.ico` exist? Verify it matches `https://cdn.prod.website-files.com/65eaa70a81b7e6fb26f55598/65f0067bd9a19064eb53d72a_favicon-32x32.png`. Download if needed.

- [x] **Font audit**: Verify `app/layout.tsx` body className applies correct font variables (`lato.variable`, `bitter.variable`). Run: `grep -n "className" src/app/layout.tsx`. Verify body gets font-family applied in `globals.css` body rule.

- [x] **Live CSS extraction**: Download and parse the live Webflow CSS. Key values to extract and verify:
  - Body text color (should be #4a4a4a)
  - H1/H2 font-size and font-family  
  - Credibility container: `justify-content` value
  - Nav container max-width
  - Section padding values
  - Comparison card backgrounds
  Run: `curl -s "https://cdn.prod.website-files.com/65eaa70a81b7e6fb26f55598/css/visascanada.webflow.f057e59f4.css" > /tmp/live.css && grep -A 5 "credibility-container\|comparison-card\|nav-wrapper\|hero\|.heading" /tmp/live.css`

- [x] **Credibility bar fix**: 
  - Fetch live HTML: count visible credibility cards
  - Fix `justify-content` to match live
  - Add/remove success-rate display based on live state
  - Verify icon styling matches (navy circle, scale 1.4)

- [x] **Comparison cards audit**: Compare `.comparison-card.recommended` and `.comparison-card.not-recommended` colors/borders exactly with live CSS. The live site comparison cards are plain white/off-white, not heavily styled.

- [x] **Navigation/header audit**: Compare nav with live site — logo size, wordmark text size, language switcher position

- [x] **Hero section audit**: Compare hero heading size, hr divider, explainer text size

- [x] **Build check**: Run `npm run build` (or `npx next build`) and `npx tsc --noEmit`. Fix any errors before visual QA.

- [x] **Screenshot: desktop (1440px)**: Install playwright if needed. Take screenshot of staging at 1440px wide. Save to `qa-screenshots/staging-desktop.png`.
  ```bash
  npx playwright screenshot --browser chromium --viewport-size=1440,900 https://visascanada-staging.netlify.app qa-screenshots/staging-desktop.png
  # OR if playwright not available:
  # curl + compare manually
  ```

- [x] **Screenshot: live desktop (1440px)**: Take screenshot of live site at 1440px. Save to `qa-screenshots/live-desktop.png`.

- [x] **Screenshot: mobile (390px)**: Staging at 390px. Save to `qa-screenshots/staging-mobile.png`.

- [x] **Screenshot: live mobile (390px)**: Live site at 390px. Save to `qa-screenshots/live-mobile.png`.

- [x] **Screenshot: tablet (768px)**: Staging and live at 768px. Save both.

- [x] **Visual diff — desktop**: Compare staging vs live at 1440px. Log every visible difference to `qa-screenshots/desktop-diff.md`. Fix each one.

- [x] **Visual diff — mobile**: Compare staging vs live at 390px. Log every visible difference to `qa-screenshots/mobile-diff.md`. Fix each one.

- [x] **Visual diff — tablet**: Compare staging vs live at 768px. Log differences. Fix.

- [x] **Re-screenshot after fixes**: After all fixes, re-take all 6 screenshots and verify no remaining differences.

- [x] **Git commit**: Commit all fixes with message `fix(qa): visascanada visual parity pass — match live Webflow site`

- [x] **Final build check**: Run `npx next build` and `npx tsc --noEmit` one final time. Both must pass.

---

## How to Install and Run Playwright

```bash
cd /root/clawd/visascanada-ca
npm install --save-dev playwright
npx playwright install chromium
```

Then take a screenshot:
```bash
npx playwright screenshot \
  --browser chromium \
  --viewport-size=1440,900 \
  https://visascanada-staging.netlify.app \
  qa-screenshots/staging-desktop.png
```

For mobile (390px):
```bash
npx playwright screenshot \
  --browser chromium \
  --viewport-size=390,844 \
  https://visascanada-staging.netlify.app \
  qa-screenshots/staging-mobile.png
```

---

## Done Criteria

- All tasks checked off above
- Side-by-side screenshots show no significant visual differences at any breakpoint
- `npm run build` and `tsc --noEmit` both pass cleanly
- All changes committed to git

---

## Live Site Reference

- **Live URL:** https://visascanada.ca
- **Live CSS:** https://cdn.prod.website-files.com/65eaa70a81b7e6fb26f55598/css/visascanada.webflow.f057e59f4.css
- **Live favicon:** https://cdn.prod.website-files.com/65eaa70a81b7e6fb26f55598/65f0067bd9a19064eb53d72a_favicon-32x32.png
- **Staging:** https://visascanada-staging.netlify.app
