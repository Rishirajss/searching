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

export interface SearchResult {
  popular_title?: string;
  title?: string;
  popular_dis?: string;
  popular_web?: string;
  protocol?: string;
  domain?: string;
  tld?: string;
  path?: string;
  meta?: {
    "og:title"?: string;
    "twitter:title"?: string;
    description?: string;
    "og:description"?: string;
    "twitter:description"?: string;
    "og:url"?: string;
    "og:site_name"?: string;
    "twitter:image"?: string;
  };
}

export interface ProfileData {
  profiles_logo: string;
  profiles_title: string;
  profiles_subtitle: string;
  profiles_ownweb: string;
  profiles_dis: string;
}

export interface WikiData {
  thumbnail?: {
    source: string;
  };
  title: string;
  content_urls?: {
    desktop?: {
      page: string;
    };
  };
  extract: string;
}

export interface SearchData {
  totalCount: number;
  totalPages: number;
  records: SearchResult[];
  profileData: ProfileData | null;
  wikiData: WikiData | null;
}

export interface ImageSearchResult {
  url: string;
  title: string;
  thumbnail: string;
  source: string;
}

export interface NewsSearchResult {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  imageUrl?: string;
}

export type TabType =
  | "all"
  | "images"
  | "verified"
  | "swadeshi"
  | "videos"
  | "maps"
  | "news"
  | "shopping";
