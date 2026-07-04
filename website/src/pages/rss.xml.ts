import { articles } from '../data/articles';

const feedTitle = 'ConnectAloud';
const feedDescription =
  'Thoughtful conversations about AI, technology, leadership, theology, and lifelong learning.';
const author = 'M';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET = ({ site }: { site: URL }) => {
  const base = import.meta.env.BASE_URL;
  const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
  const withBase = (path: string) => `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
  const absoluteUrl = (path: string) => new URL(withBase(path), site).toString();
  const feedUrl = absoluteUrl('/rss.xml');
  const siteUrl = absoluteUrl('/');
  const latestDate = articles[0]?.date ?? new Date().toISOString();

  const items = articles
    .map((article) => {
      const link = absoluteUrl(article.href);
      const pubDate = new Date(`${article.date}T00:00:00.000Z`).toUTCString();

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(author)}</dc:creator>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(`${latestDate}T00:00:00.000Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
