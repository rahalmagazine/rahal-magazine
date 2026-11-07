const SB = "https://fiqwenrnvwiiondcztpm.supabase.co";
const KEY = "sb_publishable_cxciqxe-xfZhDAb8FcGAZA_DzqqCpcx";
const SITE = "https://rahal-magazine.pages.dev";

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function fetchArticle(slug, lang) {
  const headers = { apikey: KEY };
  const get = async (l) => {
    const url =
      `${SB}/rest/v1/articles?select=title,excerpt,image_url,seo_title,seo_description` +
      `&slug=eq.${encodeURIComponent(slug)}&lang=eq.${l}&published=eq.true&limit=1`;
    const r = await fetch(url, { headers });
    if (!r.ok) return null;
    const rows = await r.json();
    return rows[0] || null;
  };
  let a = await get(lang);
  if (!a && lang !== "ar") a = await get("ar");
  return a;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const response = await context.next();

  const slug = url.searchParams.get("s");
  if (!slug) return response;
  const lang = url.searchParams.get("lang") || "ar";

  let a = null;
  try {
    a = await fetchArticle(slug, lang);
  } catch (e) {
    a = null;
  }
  if (!a) return response;

  const title = a.seo_title || a.title || "RAHAL | رحال";
  const desc = a.seo_description || a.excerpt || "";
  const image = a.image_url || `${SITE}/rahal-logo-transparent.png`;
  const pageUrl = `${SITE}/article?s=${encodeURIComponent(slug)}&lang=${encodeURIComponent(lang)}`;

  const tags = `
<meta property="og:type" content="article">
<meta property="og:site_name" content="RAHAL | رحال">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:url" content="${esc(pageUrl)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(image)}">`;

  return new HTMLRewriter()
    .on("title", {
      element(e) {
        e.setInnerContent(title);
      },
    })
    .on('meta[name="description"]', {
      element(e) {
        e.setAttribute("content", desc);
      },
    })
    .on("head", {
      element(e) {
        e.append(tags, { html: true });
      },
    })
    .transform(response);
}
