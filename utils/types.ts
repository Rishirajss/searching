// types.ts
export interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export interface NewsItem {
  _id: string;
  loc: string;
  lastmod: string;
  publication_name: string;
  publication_language: string;
  publication_date: string;
  title: string;
  keywords: string;
  image_url: string;
}

