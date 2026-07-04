export interface Article {
  title: string;
  collection: string;
  date: string;
  displayDate: string;
  readingTime: string;
  tags: string[];
  description: string;
  href: string;
  image: string;
}

export const articles: Article[] = [
  {
    title: 'Following One Question',
    collection: 'Saturday Morning Coffee with Dino',
    date: '2026-07-04',
    displayDate: 'July 4, 2026',
    readingTime: '7 min read',
    tags: ['AI', 'Philosophy', 'Human Identity', 'Pattern Recognition'],
    description:
      'A conversation that began with AI ethics and unexpectedly became an exploration of memory, identity, patterns, and what it means to be human.',
    href: '/coffee-with-dino/following-one-question/',
    image: '/images/dino/dino-coffee-v1.0.jpg',
  },
];

export const latestArticle = articles[0];
