# MLS Reciprocity / IDX Setup — Step by Step

How to get live MLS listings showing up on the Zada Group site. Written for BC, where the boards involved are REBGV (Real Estate Board of Greater Vancouver) and FVREB (Fraser Valley Real Estate Board).

## The short version

You can't pull MLS listings yourself by writing code. Boards license the data and you (or a provider acting on your behalf) need permission to display it. The fastest path is to pay a provider who already has board approval. Your IDX provider gives you a JavaScript snippet, you paste it into the site, and listings appear.

End-to-end timeline: typically 2 to 6 weeks depending on how fast the board processes paperwork.

## Step 1. Confirm your board memberships

Dawar is licensed with Stonehaus Realty Corp, which is a member brokerage. To display reciprocity listings, you need an active REALTOR membership in good standing with the board(s) whose listings you want to display.

- For Metro Vancouver listings: REBGV
- For Tri-Cities, Coquitlam, Port Moody, etc.: REBGV
- For Fraser Valley (Surrey, Langley, Maple Ridge): FVREB

Most Zada Group clients sit in REBGV territory. If you want both boards' listings on the site, you need a feed agreement with each one. Some IDX providers can combine both into a single display.

## Step 2. Decide which feed type you want

There are two flavours of board feed:

- **MLS Reciprocity** (DDF — Data Distribution Facility): Public-facing listings only. Shows active listings from all REALTORS, not just Zada Group's. This is what you want for a public website.
- **VOW** (Virtual Office Website): Requires user registration. Shows sold history and richer data. Use this if you want lead capture behind a login wall.

For the Zada Group site, **start with MLS Reciprocity**. You can add VOW later for the gated areas.

## Step 3. Choose an IDX provider

You don't talk to REBGV directly to get a feed onto your website. You go through a provider who already has a board-approved technology agreement. The provider handles the data licensing on the back end and gives you a clean way to display listings on the front end.

The provider options that actually work in BC:

- **REW (RealEstateWebmasters)** — Nanaimo-based, REBGV and FVREB approved. The most common choice for BC realtors. Pricing starts around $99-$199/month for the IDX widget, more for a full site. They have a full white-label option too.
- **Showcase IDX** — US-focused but works in Canada. Lighter-weight widget, around $79/month. Limited customization.
- **Realtyna** — International. Works in BC but the support is mixed.
- **Diverse Solutions (dsIDX)** — Older, more affordable, less polished UI.
- **Brokerage white-label** — Ask Stonehaus if they have a brokerage-wide IDX feed Zada Group can plug into. Many brokerages do, and the cost is often included in dues. **Try this first.** It is the fastest, cheapest path if it exists.

**Recommendation:** Call Stonehaus first and ask "does the brokerage have an MLS reciprocity feed I can embed on my own site?" If yes, skip to step 5. If no, sign up with REW.

## Step 4. Sign up with the provider and complete the board paperwork

If you go with a third-party provider (REW or similar), they will:

1. Send you a contract for their service.
2. Send you a board paperwork bundle: a Data Distribution Agreement (DDA) for REBGV and one for FVREB if applicable.
3. Ask for your REALTOR ID number and Stonehaus brokerage info.
4. Submit the paperwork to the board on your behalf.

You sign the agreements, send them back, and wait for board approval. This is the slowest part: 1 to 4 weeks depending on how busy the board is.

While you wait, you can be setting up the rest of the site.

## Step 5. Get the embed code from the provider

Once the board approves, your provider gives you embed snippets. They typically look like one of these:

```html
<!-- Option A: simple iframe -->
<iframe src="https://idx.provider.com/widget?agent=12345" width="100%" height="800"></iframe>

<!-- Option B: JavaScript widget -->
<div id="idx-search"></div>
<script src="https://idx.provider.com/loader.js?key=YOUR_KEY"></script>

<!-- Option C: shortcode (only relevant on WordPress) -->
[idx-listings linkid="123" count="6"]
```

You'll get a few different snippets: one for a search bar, one for a featured-listings grid, one for individual listing detail pages, and so on.

## Step 6. Paste the embed into the Zada Group site

The site already has placeholder zones marked. You just replace the placeholder block with the provider's embed snippet.

**On the homepage** (`index.html`): search for `id="idx-featured"` and replace the entire `<div class="idx-placeholder">` block with the provider's featured-listings snippet.

**On the sales page** (`sales.html`): search for `id="idx-listings"` and replace the placeholder with the provider's full-grid snippet.

Both spots are already styled and sized to match the rest of the site. The provider's widget will inherit the page's overall look.

## Step 7. Hook up past sales (separate from active listings)

Active listings come from the live MLS feed. **Past sales** (your team's transaction history) come from a different source:

- Stonehaus has a record of every Zada Group transaction.
- You can ask Stonehaus for a CSV export of past sales, then either:
  - Display them as a curated grid on the sales page (manually maintained), or
  - Pay extra for VOW data which includes sold history pulled live from MLS.

For a launch, the manual curated grid is fastest and looks just as good. The site already has six sample sold tiles on `sales.html` — replace the image, address, price, and specs in each `<div class="listing-card">` block. Then add or remove as needed.

## Step 8. Test, then go live

Before pointing zadagroup.ca at this site, test the IDX widget on a staging URL. Things to confirm:

- Search bar returns real listings.
- Detail pages load.
- Mobile rendering is OK (some widgets are notoriously bad on mobile).
- Lead capture forms (if your provider includes them) actually send to your inbox.
- The required board attribution shows up. REBGV requires a specific disclaimer in the footer — the provider usually injects this automatically. Double-check it's there.

## Step 9. Update the footer disclaimer

The footer already has a placeholder MLS disclaimer. The real wording your provider gives you must replace it word-for-word. It will read something like:

> "The data relating to real estate on this website comes in part from the MLS® Reciprocity program of either the Real Estate Board of Greater Vancouver (REBGV)..."

Don't paraphrase this. Boards audit it.

## Approximate costs

- Board membership and DDA fee: usually $0 if you're already paying dues, but some boards charge $25-$50/month for the data feed itself.
- IDX provider: $79 to $299/month depending on tier and features.
- Custom integration help (if you don't want to paste the embed yourself): $200 to $500 one-time for a developer.

## What to do this week

1. Call Stonehaus and ask if they have a brokerage-wide IDX feed Zada Group can use.
2. If no, sign up for a REW IDX widget trial.
3. Ask REW (or your chosen provider) for their REBGV paperwork bundle.
4. Submit the paperwork.
5. While you wait, finalize the rest of the site (contact info, photos, etc).
6. When the embed code arrives, paste it into the two `idx-placeholder` divs on `index.html` and `sales.html`.

Send me the embed snippet when you get it and I can integrate it properly into the styling.
