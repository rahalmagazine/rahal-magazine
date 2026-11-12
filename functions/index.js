const IMG = "https://images.unsplash.com/photo-1771539091406-feccb76ec825?w=1200&amp;h=630&amp;fit=crop&amp;auto=format";
const TITLE = "رحال | مجلة رقمية مغربية";
const DESC = "رحال مجلة رقمية مغربية مستقلة، مساحة للمعرفة والفضول، نروي فيها قصص الإنسان والمكان والعلم والتاريخ.";
const PAGE_URL = "https://rahal-magazine.pages.dev/";

export async function onRequest(context) {
  const response = await context.next();

  const tags = `
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHAL | رحال">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESC}">
<meta property="og:image" content="${IMG}">
<meta property="og:url" content="${PAGE_URL}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${DESC}">
<meta name="twitter:image" content="${IMG}">`;

  return new HTMLRewriter()
    .on("head", {
      element(e) {
        e.append(tags, { html: true });
      },
    })
    .transform(response);
}
