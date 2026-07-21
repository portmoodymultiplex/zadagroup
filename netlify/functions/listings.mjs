// Zada Group — myRealPage feed → JSON
// Fetches the public myRealPage IDX results pages and returns structured listings.
// Cached at the edge for 10 minutes to keep it fast and polite.

const FEED = "https://idx.myrealpage.com/wps/-/tmpl~v2,noframe~true/mylistings/67292/mylistings.def/SearchResults.form";

function parse(html) {
  const out = [];
  const blocks = html.split('<li class="mrp-listing-result').slice(1);
  for (const b of blocks) {
    const grab = (re) => {
      const m = b.match(re);
      return m ? m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
    };
    const status = (b.match(/status-([A-Z]+)/) || [])[1] || "";
    const id = grab(/data-listing-id="(\d+)"/);
    const url = grab(/data-share-url="([^"]+)"/);
    const addr = grab(/alt-addr">([^<]+)</);
    const subarea = grab(/alt-subarea">([^<]*)</);
    const city = grab(/alt-city">([^<]+)</);
    const price = grab(/mrp-listing-price-container[^>]*>([\s\S]*?)<\/div>/);
    const mls = grab(/mls-num-line"><span>([^<]+)/);
    const beds = grab(/bedrooms-line"><span>([^<]+)/);
    const baths = grab(/bathrooms-line"><span>([^<]+)/);
    const sqft = grab(/mrp-i-unit[^>]*>([^<]+)/);
    const photo = grab(/(?:data-src|src)="(https:\/\/iss-cdn\.myrealpage\.com[^"]+)"/);
    const description = grab(/mrp-listing-description[^>]*>([\s\S]*?)<\/div>/)
      .replace(/\s*(Read more|More details|Listed by.*)$/i, "")
      .slice(0, 1400);
    if (addr) out.push({ id, status, addr, subarea, city, price, mls, beds, baths, sqft, url, photo, description });
  }
  return out;
}

export default async (req) => {
  // Image proxy mode: /.netlify/functions/listings?img=<encoded photo url>
  // Lets the portal draw feed photos onto a canvas and export PNGs (CORS-safe).
  const url = new URL(req.url);
  const img = url.searchParams.get("img");
  if (img) {
    try {
      const target = new URL(img);
      if (target.hostname !== "iss-cdn.myrealpage.com") {
        return new Response("forbidden", { status: 403 });
      }
      const res = await fetch(target);
      return new Response(res.body, {
        headers: {
          "Content-Type": res.headers.get("content-type") || "image/jpeg",
          "Cache-Control": "public, max-age=86400",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch {
      return new Response("bad image url", { status: 400 });
    }
  }
  try {
    const listings = [];
    for (let pg = 1; pg <= 5; pg++) {
      const res = await fetch(`${FEED}?_pg=${pg}`, { headers: { "User-Agent": "ZadaGroupHub/1.0" } });
      if (!res.ok) break;
      const html = await res.text();
      const batch = parse(html);
      if (!batch.length) break;
      listings.push(...batch);
      // stop when the pager says we've got everything (e.g. "13-24/24")
      const m = html.match(/(\d+)-(\d+)\/(\d+)/);
      if (m && Number(m[2]) >= Number(m[3])) break;
    }
    // de-dupe by id
    const seen = new Set();
    const unique = listings.filter((l) => !seen.has(l.id) && seen.add(l.id));
    return new Response(JSON.stringify({ count: unique.length, listings: unique }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e), listings: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
