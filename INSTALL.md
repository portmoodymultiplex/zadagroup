# zadagroup.ca SEO week-one package

Five files. Everything drops into the repo root (the same folder as index.html) and deploys with your normal Netlify push.

## 1. What goes where

| File | Where it goes | What it does |
|---|---|---|
| `_redirects` | repo root | 301s every old WordPress URL Google still has indexed to the right live page. Stops the 404 bleed. |
| `robots.txt` | repo root | Tells crawlers everything is open and where the sitemap is. |
| `sitemap.xml` | repo root | Full map of the live site including the new page and all 11 blog posts. |
| `port-moody-real-estate.html` | repo root | New hub page. Netlify serves it at `/port-moody-real-estate`, and the old indexed URL `/port-moody-real-estate/` resolves to it, so you recover that URL instead of redirecting it. |
| `schema-snippet.html` | paste into `<head>` of `index.html` | RealEstateAgent structured data with your service areas. Copy the `<script>` block, don't link the file. |

The hub page is built from your existing template (same nav, hero, community-grid, footer, token CSS). It reuses `hero.mp4` for the hero video. Two nav additions are baked into it: "Port Moody Real Estate" at the top of the Resources dropdown, and a matching footer link. Add those same two `<li>` lines to your other pages' nav and footer when convenient, so the page gets internal links from everywhere (this genuinely matters for ranking).

## 2. After deploy: Google Search Console (15 minutes, free)

1. Go to search.google.com/search-console, add property `zadagroup.ca` (domain property, verify via DNS TXT record, quick since you manage the DNS).
2. Sitemaps → submit `https://zadagroup.ca/sitemap.xml`.
3. URL Inspection → paste `https://zadagroup.ca/port-moody-real-estate` → Request Indexing.
4. Over the next weeks, Coverage will show the old 404s converting to redirects. That's the bleed stopping.

## 3. The map pack (biggest single lever, do this week)

For "port moody realtor" Google shows a 3-slot local map pack above most organic results. That's won through a Google Business Profile, not your website.

1. business.google.com → create/claim a profile for **Zada Group** (or confirm whether Dawar already has one under his name or Stonehaus).
2. Category: Real Estate Agent. Service areas: Port Moody, Coquitlam, Port Coquitlam, Anmore, Belcarra. Website: zadagroup.ca. Phone: 604.808.3797 (matching the site and the schema exactly).
3. Reviews are the ranking currency. Text past clients, two or three per month, with the direct review link. Reviews that mention "Port Moody" by name help you rank for Port Moody searches. This is the single highest-leverage recurring task.

## 4. dawarzada.com (not owned anymore)

The domain lapsed and was picked up by a third party on July 1, 2025, through Gname (a Singapore registrar heavily used by domain resellers). They renewed it to July 2027 and it sits on Gname's expired-domain parking servers, which is the profile of someone holding it for resale, not using it.

You cannot redirect a domain you don't control. The playbook instead:

1. **Try to buy it back quietly.** Inquire through a marketplace or a domain broker (GoDaddy Domain Broker Service, or check Afternic/Sedo/Dan for a listing) without identifying yourself as the business on the old marketing. If the seller learns the previous owner needs it back, the price goes up. Parked names like this often go for a few hundred to low thousands.
2. **UDRP as leverage or fallback.** Dawar has been doing business under his own name for years, which gives common-law trademark rights. A speculator who registered his exact name and parks it for resale fits the bad-faith pattern UDRP was built for. A WIPO filing runs about USD $1,500 plus any legal help. Sometimes the credible threat alone brings the asking price down. (Not legal advice; a domain lawyer can assess it in one call.)
3. **Kill the old address everywhere you control.** realtor.ca, REW, rate-my-agent, Stonehaus profile, social bios, email signatures, Google Business Profile: all should say zadagroup.ca. Print still in circulation (signs, mailers, cards) gets stickered or reprinted on the next run.
4. **Email warning.** The domain has a live mail route on the parking service. Anything a past client sends to an @dawarzada.com address does not reach you and could be received by whoever controls the domain. If old materials list an @dawarzada.com email, treat that as the urgent part, ahead of the website concern.
5. **Monitoring.** Watch what the domain serves. If a fake real estate site or anything impersonating Dawar ever appears there, that strengthens a UDRP case immediately and is worth screenshotting.

The good news for SEO: since the domain serves nothing, Google will keep dropping its old indexed pages on its own, and zadagroup.ca inherits the brand searches by default.

## 5. Homepage title (one-line edit, do it with the schema paste)

Current: `Zada Group | Client Focused. Results Driven. Metro Vancouver Real Estate.`

Suggested: `Zada Group | Port Moody & Tri-Cities REALTORS® | Homes, Townhomes & Multiplexes`

And the meta description: `Boutique real estate team in Port Moody and the Tri-Cities led by Dawar Zada, PREC. Record-breaking sales, 95% repeat clients, and the local experts on SSMUH multiplex development.`

## 6. Next moves (not this week)

- **Coquitlam hub page** at `/coquitlam-real-estate` (the old WP URL). Once live, change the Coquitlam lines in `_redirects` to point there instead of `/sales`. Then Port Coquitlam.
- **Citations**: make sure realtor.ca, REW, rate-my-agent, Zillow, and the Stonehaus profile all link to zadagroup.ca (not dawarzada.com) with the identical phone number.
- **Blog cadence**: one Port Moody-focused post a month via /zada-content:blog, cross-linked with portmoodymultiplex.ca.
- **Google Ads**: if you want the literal top spot next week like the Dave Masson ad, a small campaign on "port moody realtor" exact match runs while the organic work compounds. Roughly $3-8/click for this market.

## Realistic timeline

Redirects and indexing effects: 2-6 weeks. Map pack movement: 4-8 weeks with steady reviews. Organic page one for "port moody realtor": 3-6 months, faster if the GBP reviews build and the Coquitlam/PoCo hubs follow.
