export async function GET() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const tools = [
    "json-formatter",
    "base64-encoder",
    "qr-code-generator",
    "url-encoder",
    "uuid-generator",
    "hash-generator",
    "password-generator",
  ];

  const languages = ["en", "ko", "es", "zh"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${languages
      .flatMap((lang) => [
        `<url>
          <loc>${baseUrl}/${lang}</loc>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>`,
        ...tools.map((tool) => `
          <url>
            <loc>${baseUrl}/${lang}/tools/${tool}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `),
      ])
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
