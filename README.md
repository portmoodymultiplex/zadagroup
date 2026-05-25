# Zada Group — Site README

A boutique multi-page real estate site for Zada Group, designed in the editorial style of TREF and built on Zada's brand palette.

## File structure

```
Zada Group Website/
├── index.html                  # Homepage
├── buyers.html                 # For Buyers + buyer's guide
├── sellers.html                # For Sellers + seller's guide
├── ssmuh.html                  # SSMUH overview
├── port-moody.html             # Port Moody Multiplex initiative
├── sales.html                  # Listings + past sales (IDX-ready)
├── testimonials.html           # Reviews
├── about/
│   ├── zada-group.html
│   ├── dawar.html
│   ├── randy.html
│   └── liz.html
├── blog/
│   ├── index.html              # Blog landing
│   └── what-is-ssmuh.html      # First post
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/                 # Logos, headshots, hero images
├── MLS-RECIPROCITY-SETUP.md    # IDX hookup step-by-step
└── README.md                   # This file
```

## How to view it

Open `index.html` directly in a browser, or run a local server from the project root:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Status: ready to push to git

Everything that can be set without external paperwork is done.

- Contact info live: phone `604.808.3797`, email `admin@zadagroup.ca`
- Google review CTA points at the real share link
- Dawar's page mirrors dawarzada.ca (signature quote, designations row, Wealth Roadmap, Track Record, brokerage block)
- MRP held by Randy Quach, SRES held by Liz Murphy. Correctly attributed everywhere.
- Homepage stats updated to real designations: Master Medallion · $261K Best ROI · MRP · SRES

## Outstanding before launch

### 1. MLS / IDX integration
The placeholder boxes on `index.html` (id="idx-featured") and `sales.html` (id="idx-listings") are where live listings will appear once a feed is connected. **See `MLS-RECIPROCITY-SETUP.md` for the full step-by-step.** Short version: call Stonehaus first to see if the brokerage has a feed you can plug into. If not, sign up with REW. Process takes 2-6 weeks because of board paperwork.

### 2. Google Reviews auto-sync (optional)
On `testimonials.html` there's a placeholder for an auto-syncing widget that would pull reviews directly from your Google Business profile. The "Leave a Google Review" button already works. The auto-sync widget is a nice-to-have, not a must-have. If you want it, the easiest path is **Elfsight** (paid, ~$10/month) — sign up, paste the embed code into the `<div id="google-reviews">` block.

### 3. Sample testimonial content
The six testimonials currently on `testimonials.html` are illustrative samples (e.g. "S. & M., First-time Buyers, Burnaby"). Replace with real reviews — or just delete the sample block and rely on the Google Reviews auto-sync once it's wired up.

### 4. Sample past sales tiles
The six "Recently Sold" tiles on `sales.html` are sample data with stock images. Either replace them with real recent Zada Group sales or remove the block once the live MLS feed is connected.

## How to add a new blog post

1. Copy `blog/what-is-ssmuh.html` and rename it (use kebab-case for the filename, e.g. `2026-spring-market-update.html`).
2. Update the `<title>`, `<meta name="description">`, the header `<h1>`, the eyebrow date, and the article body.
3. Open `blog/index.html` and add a new `<div class="blog-card">` **above** the existing one (newest first):

```html
<div class="blog-card">
  <div class="meta">Market Update · June 2026</div>
  <div>
    <a href="2026-spring-market-update.html">
      <h3>Headline of the post.</h3>
      <p>One or two sentence excerpt that shows up on the index.</p>
    </a>
  </div>
</div>
```

## Brand reference

Palette (per the Zada Brand Guide):
- `#041A10` deepest green, primary dark background
- `#052E19` deep green secondary
- `#544541` dark brown
- `#9F8163` warm brown / brand accent
- `#605D50` warm grey
- `#89877A` soft grey
- `#E8E5E2` off-white, primary light background

Typography:
- Headings: Cormorant Garamond (web stand-in for the brand's custom "Abigail")
- Body: Inter (web stand-in for Sweet Sans Pro)

If you eventually license the actual Abigail and Sweet Sans Pro fonts, update the `--serif` and `--sans` variables in `assets/css/style.css` and add the @font-face declarations or hosting links.

## Deployment

Fully static site, no build step required. Deploys cleanly to:
- **Netlify** (drag-and-drop the folder, or connect the git repo)
- **Vercel** (`vercel --prod` from the folder)
- **Cloudflare Pages**
- Any static host

For custom domains, point your DNS for `zadagroup.ca` (and `www.zadagroup.ca`) at the host.

## Pushing to git

```
cd "/Users/sheri/Documents/Claude/Projects/Zada Group Website"
git init
git add .
git commit -m "Initial Zada Group site"
git branch -M main
# then if you have a remote:
git remote add origin <your-repo-url>
git push -u origin main
```

The `.gitignore` is already set up for macOS, common editors, and future Node/env files.

---

Built by Sheri / Zada Group.
