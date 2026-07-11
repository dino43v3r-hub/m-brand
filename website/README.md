# M Brand Website

This folder contains the official Astro website for the M Brand.

The website is intentionally small for this initial phase. It uses the canonical brand documents in `../docs/` and canonical assets in `../assets/canonical/` as the source of truth, while keeping the Astro project contained inside `website/`.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Adding a conversation

Copy `src/content/conversations/example-template.md` to a short filename in that folder. Required fields are `title`, `date`, `excerpt`, and `linkedinUrl`. Optional fields are `image` (`src` and meaningful `alt`), paired related-article URL/title fields, paired research-note URL/title fields, `featured`, and `status`.

Set `status: published` to show the entry; templates and drafts stay hidden. To connect it to Coffee with Dino, add `relatedArticleUrl` and `relatedArticleTitle`, then pass the same conversation's `title`, `linkedinUrl`, and optional `excerpt` as the article layout's `originConversation` prop. The shared layout adds the backlink only when that prop exists.

```yaml
---
title: "A real conversation title"
date: 2026-07-10
excerpt: "A short summary of the conversation."
linkedinUrl: "https://www.linkedin.com/posts/replace-with-real-post"
status: draft
featured: false
# image:
#   src: "/images/conversations/image-name.jpg"
#   alt: "Meaningful image description"
# relatedArticleUrl: "/coffee-with-dino/article-slug/"
# relatedArticleTitle: "Article title"
---
```